import { listGuides } from "@services/guides.js"
import { listAllWikiPages } from "@services/wikis.js"

export async function get(req, res) {

  const showAll = "showAll" in req.query;

  let guides = await listGuides();
  let wikis = await listAllWikiPages(showAll);

  if (!showAll) {
    guides = guides.filter( guide => guide.isPublished);
  }

  return res.json({ guides, wikis, });
}