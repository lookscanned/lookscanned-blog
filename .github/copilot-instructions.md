# Copilot Instructions for Look Scanned Blog

## 📄 Look Scanned

**Look Scanned** is a pure frontend web app that makes your PDFs and documents look scanned — instantly, without printers or scanners. Just upload, customize, and download in a few clicks.

---

### 🔒 Privacy First

Your data stays on your device. Nothing is ever uploaded or stored on our servers. All processing happens securely in your browser.

---

### ⚡ Speed You Can Feel

Powered by WebAssembly, Look Scanned works at lightning speed. Convert PDFs and documents into scanned-looking copies in seconds, without waiting.

---

### 🎨 Customization Made Simple

Tweak rotation, blur, noise, brightness, contrast, borders, resolution, and more. Preview your document in real time — what you see is exactly what you get.

---

### 📂 Multi-Format Support

Convert and scan more than just PDFs:

* Images (JPG, PNG, etc.)
* Word (DOCX)
* PowerPoint (PPTX)
* Excel (XLSX)
* Markdown, HTML, TXT

Preserve original formatting while giving your files the authentic scanned look.

---

### 📱 Mobile Friendly & Offline Ready

Look Scanned works on all modern browsers and devices. After the first load, it even works **offline** — perfect for planes, tunnels, or no-internet zones.

---

### 🚀 Pro Features

Unlock the full power of Look Scanned with **Pro**:

* ✅ Unlimited Scanning — no limits on how many documents you process
* ✅ Effortless Bulk Scanning — save time by processing multiple files at once
* ✅ 100% Ad-Free Experience — distraction-free interface
* ✅ Advanced PDF Tools — edit metadata, add watermarks, insert signatures & stamps
* ✅ Seamless API Integration — automate scanning with a robust developer API
* ✅ Priority Support & Early Access — your feedback drives our roadmap

#### 💳 Pricing

* **USD 1.99 / month** — flexible monthly billing
* **USD 19.99 / year** — best value, save more

---

### 🔧 API Scan for Developers

Automate your workflows with Look Scanned's developer-friendly **API**:

* Customize rotation, blur, noise, brightness, borders, resolution, and more
* Upload via presigned URLs, download via secure links
* Webhook support for job status notifications
* Compatible with TypeScript, Python, cURL, and more

**Example config:**

```json
{
  "config": {
    "rotate": 1,
    "rotate_var": 0.5,
    "colorspace": "gray",
    "blur": 0,
    "noise": 0,
    "border": false,
    "brightness": 1.3,
    "contrast": 1.3,
    "resolution": 150,
    "output_format": "image/jpeg"
  }
}
```

---

👉 **Look Scanned = your privacy-first, instant, customizable PDF scanner in the browser.**

## Repository Overview

This repository contains the **Look Scanned Blog**, a multilingual Hugo static site that serves as the official blog for Look Scanned - a privacy-focused browser application for creating realistic scanned PDF effects. The blog is deployed automatically to both Cloudflare Pages (primary) and GitHub Pages (secondary).

**Key characteristics:**
- **Technology:** Hugo static site generator v0.150.0+ 
- **Theme:** PaperMod (as git submodule)
- **Languages:** 22+ languages including RTL (Arabic, Hebrew)
- **Content focus:** Web development, PDF processing, privacy-first tools
- **Repository size:** ~1,500 files, primarily multilingual content
- **Deployment:** Automated via GitHub Actions to dual hosting platforms

## Critical Setup Requirements

**⚠️ ALWAYS run this command first before any build operations:**
```bash
git submodule update --init --recursive
```
This initializes the PaperMod theme submodule. **Builds will fail without this step.**

**Hugo installation required:**
- Uses hugo v0.150.0+ (installed via peaceiris/actions-hugo@v3 in CI)
- No additional runtime dependencies (no npm, go modules, etc.)

## Build & Development Commands

### Development Server
```bash
# Start development server (includes drafts)
hugo server -D

# For remote access or containers:
hugo server -D --bind 0.0.0.0 --port 8080
```
- Available at `http://localhost:1313` by default
- **Build time:** ~3-4 seconds
- Includes live reload and file watching

### Production Build
```bash
# Clean build (recommended)
rm -rf public resources
hugo --minify
```
- **Build time:** ~3-4 seconds
- Generates optimized static files in `public/`
- **Output:** ~2,500 pages across all languages

### Build Validation
```bash
# Verify build succeeded
hugo --minify && ls public/index.html
```

## Project Architecture

### Configuration Structure
```
config/_default/
├── hugo.yml          # Main Hugo configuration
├── languages.yml     # 22+ language definitions and menus
├── params.yml        # Theme parameters and social links
└── outputs.yml       # Output formats (HTML, RSS, JSON)
```

### Content Organization
```
content/
├── posts/                    # Blog posts
│   └── [post-name]/         # Each post directory contains:
│       ├── index.en.md      # English version
│       ├── index.zh.md      # Chinese simplified
│       ├── index.ar.md      # Arabic (RTL)
│       └── [20+ other languages]
├── archives/                # Archive pages
└── search/                  # Search functionality
```

### Theme & Assets
```
themes/PaperMod/             # Git submodule - Hugo theme
layouts/partials/            # Custom layout overrides
├── comments.html
├── extend_head.html
└── header.html
assets/css/extended/         # Custom CSS extensions
static/                      # Static files
├── _headers                 # Cloudflare cache headers
├── favicon.ico
└── [other icons]
```

## CI/CD Pipeline

### GitHub Actions Workflow (`.github/workflows/ci.yml`)
**Triggers:** Push to any branch, all PRs

**Jobs:**
1. **Build:** Hugo build with minify
2. **Deploy Staging:** Cloudflare Pages (non-main branches) 
3. **Deploy Production:** Cloudflare Pages + GitHub Pages (main branch only)

**Required secrets:**
- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

### Deployment Process
```bash
# Same as CI pipeline:
git submodule update --init --recursive
hugo --minify
# Artifacts in public/ directory
```

### Dependabot Configuration
- **GitHub Actions:** Weekly updates
- **Git Submodules:** Weekly theme updates

## Content Development

### Creating New Posts
```bash
# Generate new post (creates multilingual structure)
hugo new content/posts/my-new-post/index.en.md
```

**Post requirements:**
- Use archetype format: `index.[language].md`
- Include all 22 language variants for consistency
- Follow front matter structure from existing posts

### Language Support
**Supported languages:** en, zh, zh-tw, es, hi, ar, fr, pt, ja, de, ko, ru, id, tr, it, nl, pl, vi, th, sv, ms, he

**RTL languages:** Arabic (`ar`), Hebrew (`he`) - have `languageDirection: rtl`

## Validation & Testing

### Build Validation
```bash
# Full validation sequence
rm -rf public resources
git submodule update --init --recursive
hugo --minify
echo "Build completed successfully"
```

### Content Validation
- **No automated testing** - this is a content-focused blog
- Validate by running development server and checking output
- Ensure multilingual content consistency

### Performance Monitoring
- **Build time:** Should complete in ~3-4 seconds
- **Page count:** ~2,500 across all languages
- **Static files:** Minimal (6 files in static/)

## Common Issues & Solutions

### Submodule Issues
**Problem:** "theme not found" or empty themes directory
**Solution:**
```bash
git submodule update --init --recursive
# If still failing:
git submodule foreach --recursive git fetch
git submodule foreach git reset --hard origin/master
```

### Build Failures
**Problem:** Hugo build fails
**Diagnostic steps:**
```bash
hugo version  # Confirm Hugo installation
ls themes/PaperMod/  # Verify theme exists
hugo --verbose  # Detailed error output
```

### Content Issues
**Problem:** Missing translations or broken links
**Solution:** 
- Check language file consistency across all variants
- Verify internal link paths match Hugo's URL structure
- Use `hugo server -D --verbose` for detailed diagnostics

## Development Best Practices

### Commit Message Conventions
This repository follows **conventional commits** with a specific pattern for blog posts:

**Standard conventional commits:**
- `fix:` - Bug fixes
- `feat:` - New features  
- `style:` - Code style changes
- `chore:` - Maintenance tasks (dependency updates, etc.)
- `perf:` - Performance improvements
- `ci:` - CI/CD changes
- `refactor:` - Code refactoring

**Blog post commits:**
- `post:` - New blog post additions (e.g., `post: How to Convert Digital Files into Realistic Scanned Copies`)

**Examples from commit history:**
```
post: Batch Convert PDFs and Documents into Scanned‑Looking PDFs with Look Scanned
fix: add missing fr post Introduce Professional Signatures and Stamps Feature
feat(comment): add giscus comment system
style: enhance language select dropdown with transition effects  
chore(deps): bump themes/PaperMod from ee1e0f3 to 5a46517
perf: add cache header to image
ci: add GitHub Actions workflow for Copilot setup steps
```

### Making Changes
1. **Always** initialize submodules first
2. Test locally with `hugo server -D` before committing
3. For content changes, consider impact across all 22 languages
4. Clean builds recommended: `rm -rf public resources` before building
5. Use appropriate commit message format based on change type

### Theme Customization
- Override templates in `layouts/` directory
- Extend CSS in `assets/css/extended/`
- Test theme changes across multiple languages

### Performance Optimization
- Hugo builds are fast (~3-4s) - no need for complex caching
- Static files use Cloudflare cache headers (defined in `static/_headers`)
- Minification is enabled by default in production builds

## Trust These Instructions

These instructions are comprehensive and tested. Only perform additional exploration if:
- Instructions are incomplete for your specific task
- You encounter errors not covered in troubleshooting section
- You need details about specific content or configuration not documented here

The build process is straightforward and reliable when following these guidelines.