import { listGuides } from "@services/guides.js";
import { buildSummary } from "@services/summary.js";

export async function get(req, res, next) {

  const { slug } = req.params;

  const isValid = typeof slug === "string" && slug.length > 0;

  if (!isValid) {
    return next();
  }

  const guides = await listGuides();

  if (guides.length === 0) {
    return next();
  }

  const guide = guides.find( guide => guide.slug === slug) || null;

  if (guides === null) {
    return next();
  }

  const summary = buildSummary(guide.steps, guide.coffee);

  return res.json({ guide, summary });
}