/**
 * URL-safe slug for tag names, matching Hugo's default URLize behavior:
 * lowercase, keep Unicode letters/digits/marks (so `créatif`, `أمان`,
 * `pdf-ممسوح-ضوئياً` all round-trip), turn everything else into dashes,
 * collapse runs, trim ends.
 *
 * NFC-normalize first so the slug matches whatever Astro emits on disk —
 * otherwise composition-exclusion codepoints like Bengali U+09DF (য়)
 * stay as a single codepoint in `<a href>` while Astro writes the route
 * path as the decomposed pair U+09AF U+09BC, breaking the link.
 */
export function tagSlug(tag: string): string {
  return tag
    .normalize("NFC")
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}\p{Mark}_-]+/gu, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
