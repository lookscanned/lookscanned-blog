import type { APIRoute } from "astro";
import { localeStaticPaths } from "../../i18n";
import { buildRssResponse } from "../../lib/rss";

export const getStaticPaths = localeStaticPaths;

export const GET: APIRoute = ({ props, site }) => {
  if (!site) throw new Error("astro.config `site` is required for RSS");
  return buildRssResponse(props.locale as string, site);
};
