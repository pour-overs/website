import { getBySlug } from "@services/wikis.js"

export async function get(req, res) {

  const { slug } = req.params;

  let wiki = await getBySlug(slug);

  if (wiki === null) {
    res.statusCode = 404;
    return res.end();
  }

  return res.json(wiki);
}