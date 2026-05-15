import type { APIRoute } from "astro";
import { buildRssResponse } from "../lib/rss";

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("astro.config `site` is required for RSS");
  return buildRssResponse("en", site);
};
