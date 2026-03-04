# Repository Guidelines

## Project Structure & Module Organization
- `content/posts/<slug>/`: Each post lives in one folder with language files like `index.en.md`, `index.zh.md`, and `index.fr.md`.
- `config/_default/`: Split Hugo config (`hugo.yml`, `languages.yml`, `params.yml`, `outputs.yml`).
- `layouts/partials/`: Theme override entry points (`header.html`, `comments.html`, `extend_head.html`).
- `assets/css/extended/`: Custom CSS additions for UI tweaks.
- `static/`: Public static files (`favicon*`, `robots.txt`, `_headers`).
- `archetypes/default.md`: Default front matter template for new content.
- `themes/PaperMod/`: Git submodule theme source. Treat as upstream; do not edit directly.

## Build, Test, and Development Commands
Use these commands from the repository root:

```bash
hugo version                                   # Expect v0.150.0+
git submodule update --init --recursive       # Required after clone; fetches PaperMod
hugo server -D                                 # Local dev with drafts (http://localhost:1313)
hugo server                                    # Preview published content only
hugo --minify                                  # Production build to ./public
rm -rf public resources && hugo --minify       # Clean build when diagnosing issues
hugo --minify && ls public/index.html          # Quick build validation
```

## Coding Style & Naming Conventions
- Use YAML front matter with `---` delimiters and double-quoted strings.
- Required post keys: `date`, `draft`, `title`, `summary`, `description`, `tags`.
- Keep `summary` and `description` aligned unless there is a strong reason to diverge.
- Use kebab-case slugs (`content/posts/make-pdf-look-scanned/`).
- Language files must use `index.<lang>.md` naming.
- Keep content on-topic: Look Scanned, PDF workflows, web engineering, privacy-first tooling.
- Follow existing formatting style in touched files and avoid unrelated reformat churn.

## Content & i18n Workflow
- Create English first:
```bash
hugo new content/posts/<slug>/index.en.md
```
- Keep date, section structure, and key links consistent across all translations.
- This blog ships 32 languages. Before merge, avoid i18n drift by syncing updated posts across language files.
- RTL languages (`ar`, `he`, `ur`) should remain normal Markdown; direction is handled in language config.

## Validation Checklist
- There is no separate automated test suite; build success is the primary validation gate.
- Always run `hugo --minify` before opening a PR.
- For content/UI changes, run `hugo server -D` and manually verify one English page, one non-Latin translation, and one RTL translation when language or layout logic is touched.
- If `config/_default/languages.yml` changes, verify language navigation and page routing locally.

## Commit & Pull Request Guidelines
- Follow Conventional Commit patterns seen in history: `feat:`, `fix:`, `docs:`, `chore:`, `perf:`.
- Use `post:` for new article commits (example: `post: How to Make PDF Look Scanned`).
- PR titles should also follow Conventional Commits.
- Keep each commit focused on one logical change.
- PRs should include a concise summary, linked issue(s) when applicable, screenshots for visual/layout updates, and confirmation that `hugo --minify` passed locally.
- For post updates, list which languages were updated and whether full 32-language sync is complete.

## Deployment, Security, and Configuration Notes
- CI behavior: all pushes/PRs run build; PR/non-main branches deploy to Cloudflare staging; `main` deploys to Cloudflare production and GitHub Pages.
- Never commit secrets or API tokens. Deployment credentials must stay in GitHub/Cloudflare secret stores.
- Coordinate before changing analytics, SEO, or header behavior in `config/_default/*.yml` or `static/_headers`, since these affect all languages and environments.
