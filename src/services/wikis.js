import { firestore, firestoreFields } from "@services/firebase.js";

const FieldValue = firestoreFields.FieldValue;
const timestamp = () => FieldValue.serverTimestamp();


const wikiRef = firestore.collection("wiki");

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

export async function listAllWikiPages() {
  const snapshot = await wikiRef.get();
  return snapshot.docs.map(doc => doc.data());
}
