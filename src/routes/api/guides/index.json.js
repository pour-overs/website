import { listGuides } from "@services/guides.js"

export async function get(req, res) {

  const guides = await listGuides();

  return res.json(guides);
}