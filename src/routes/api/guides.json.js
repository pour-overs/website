import { listGuides } from "@services/guides.js"

export async function get(req, res) {

  let showAll = "showAll" in req.query;
  
  let guides = await listGuides();

  if (!showAll) {
    guides = guides.filter( guide => guide.isPublished);
  }

  return res.json(guides);
}