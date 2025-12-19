# Create New Blog Post

Create a new multilingual blog post for the Look Scanned blog.

## Instructions

1. **Ask for post details** (if not provided):
   - Post slug (e.g., `my-new-post-title`)
   - Post topic/content description in English

2. **Create English version using Hugo**:
   ```bash
   hugo new content content/posts/{slug}/index.en.md
   ```

3. **Write English content first**:
   - Update the generated `index.en.md` with full content
   - Add `summary`, `description`, and `tags` fields to front matter:
   ```yaml
   ---
   date: "{auto_generated}"
   draft: false
   title: "{english_title}"
   tags: ["{tag1}", "{tag2}", ...]
   summary: "{english_summary}"
   description: "{english_description}"
   ---
   ```
   Note: `summary` and `description` usually have the same content.

4. **Create translations for other 31 languages**:
   Based on the English content, create `index.[lang].md` files directly:
   - af, ar, bn, cs, de, el, es, fil, fr, he, hi, hu, id, it, ja, ko, ms, nl, pl, pt, ro, ru, sv, sw, th, tr, uk, ur, vi, zh, zh-tw

   Translation requirements:
   - Translate title, summary, description, tags, and full content
   - Use native language names for tags (e.g., "扫描" for "scan" in Chinese)
   - Keep the same `date` as English version
   - RTL languages (ar, he, ur): Keep standard markdown, Hugo handles RTL
   - Maintain consistent structure and formatting across all languages
   - Keep emojis in headings
   - Keep the call-to-action link to [lookscanned.io](https://lookscanned.io)

5. **After creating all files**, suggest a commit:
   ```bash
   git add -A && git commit -m "post: {English Post Title}"
   ```

## Language Reference

| Code | Language | RTL |
|------|----------|-----|
| en | English | No |
| zh | 简体中文 | No |
| zh-tw | 繁體中文 | No |
| es | Español | No |
| hi | हिन्दी | No |
| ar | العربية | Yes |
| fr | Français | No |
| pt | Português | No |
| ja | 日本語 | No |
| de | Deutsch | No |
| ko | 한국어 | No |
| ru | Русский | No |
| id | Bahasa Indonesia | No |
| tr | Türkçe | No |
| it | Italiano | No |
| nl | Nederlands | No |
| pl | Polski | No |
| vi | Tiếng Việt | No |
| th | ไทย | No |
| sv | Svenska | No |
| ms | Bahasa Melayu | No |
| he | עברית | Yes |
| cs | Čeština | No |
| hu | Magyar | No |
| ro | Română | No |
| el | Ελληνικά | No |
| uk | Українська | No |
| fil | Filipino | No |
| bn | বাংলা | No |
| ur | اردو | Yes |
| sw | Kiswahili | No |
| af | Afrikaans | No |

## Notes

- This blog is about **Look Scanned**, a privacy-first browser-based PDF scanning tool
- Content should focus on: web development, PDF processing, privacy-first tools, or Look Scanned features
- Refer to existing posts in `content/posts/` for style and structure examples
