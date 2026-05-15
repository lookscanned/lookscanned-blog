/**
 * URL-safe slug for tag names, matching Hugo's default URLize behavior:
 * lowercase, keep Unicode letters/digits/marks (so `créatif`, `أمان`,
 * `pdf-ممسوح-ضوئياً` all round-trip), turn everything else into dashes,
 * collapse runs, trim ends.
 */
export function tagSlug(tag: string): string {
  return tag
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}\p{Mark}_-]+/gu, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
