import { listWikisByTopic } from "@services/wikis.js"

export async function get(req, res) {

  const showAll = "showAll" in req.query;

  const wikis = await listWikisByTopic(showAll);

  return res.json(wikis);
}