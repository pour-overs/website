import { listAllWikiPages } from "@services/wikis.js"

export async function get(req, res) {

  const showAll = "showAll" in req.query;

  let wikis = await listAllWikiPages();
  
  if (!showAll) {
    wikis = wikis.filter( wiki => wiki.isPublished)
  }

  return res.json(wikis);
}