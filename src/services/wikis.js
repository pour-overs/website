import { firestore, firestoreFields } from "@services/firebase.js";

const FieldValue = firestoreFields.FieldValue;
const timestamp = () => FieldValue.serverTimestamp();


const wikiRef = firestore.collection("wiki");
const wikiSettingsRef = firestore.collection("wikiSettings");

/**
 *
 * @param {string} id The identifier of the wiki page
 */
export async function getByID(id) {
  const document = await wikiRef
    .doc(id)
    .get();

  return document.data();
}

export async function getBySlug(slug) {
    const query = await wikiRef
      .where("slug", "==", slug)
      .get();

    if (query.empty) {
      return null;
    }

    const document = query.docs[0];

    return document.data()
  }

export async function listAllWikiPages(showAll) {
  const snapshot = await wikiRef.get();
  let wikis = snapshot.docs.map(doc => doc.data());

  if (!showAll) {
    wikis = wikis.filter(wiki => wiki.isPublished);
  }

  return wikis;
}

export async function listWikisByTopic(showAll) {
  const wikis = await listAllWikiPages(showAll);
  const wikiSettings = await wikiSettingsRef.doc("topics").get();

  const topics = wikiSettings.exists ? wikiSettings.data().topics : null;
  const getTopic = (topic) => {

    if (topic === "" || typeof topic === "undefined" || topic === null) {
      return "";
    }

    if (wikiSettings.exists && topics[topic]) {
      return topics[topic];
    }

    return topic;
  }

  // group by topic
  const wikisByTopic = wikis.reduce((map, wiki) => {
    const topic = getTopic(wiki.topic);

    const siblings = map.get(topic) || [];
    map.set(topic, [...siblings, wiki]);

    return map;
  }, new Map());

  return Object.fromEntries(wikisByTopic.entries());
}
