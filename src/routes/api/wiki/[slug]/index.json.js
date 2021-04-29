import { getBySlug } from "@services/wikis.js";
import marked from "marked";

export async function get(req, res) {

  const { slug } = req.params;

  let wiki = await getBySlug(slug);

  if (wiki === null) {
    res.statusCode = 404;
    return res.end();
  }

  wiki.html = marked(wiki.content || "");


  return res.json(wiki);
}