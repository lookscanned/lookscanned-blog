/**
 * Tiny markdown → HTML helper for the short, trusted strings that ship in
 * `languages.yml` (home blurbs). We don't want to spin up the full markdown
 * pipeline for inline strings, but we do want bold and link rendering.
 *
 * Supports: bold `**...**`, inline links `[text](url)`, paragraphs (blank
 * line separation), and `- ` list items. No HTML pass-through — input is
 * escaped first.
 */

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function inlineMarkdown(s: string): string {
  let out = escapeHtml(s);
  // bold
  out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  // links: [text](url) — url is escaped already; guard against quotes anyway
  out = out.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, text, url) => {
    const safe = url.replace(/"/g, "%22");
    const external = /^https?:\/\//.test(safe);
    const attrs = external ? ' target="_blank" rel="noopener"' : "";
    return `<a href="${safe}"${attrs}>${text}</a>`;
  });
  return out;
}

export function renderInlineMarkdown(input: string): string {
  if (!input) return "";
  const blocks = input.split(/\n\s*\n/);
  const html: string[] = [];
  for (const block of blocks) {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.every((l) => l.startsWith("- "))) {
      html.push(
        "<ul>" +
          lines.map((l) => `<li>${inlineMarkdown(l.slice(2))}</li>`).join("") +
          "</ul>",
      );
    } else {
      html.push(`<p>${inlineMarkdown(lines.join(" "))}</p>`);
    }
  }
  return html.join("\n");
}
