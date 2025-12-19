# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multilingual Hugo-based blog for Look Scanned (https://lookscanned.io), a privacy-first browser-based PDF scanning tool. The blog publishes technical content about web development, PDF processing, and privacy-focused tools in 32 languages.

## Development Commands

### Local Development
```bash
# Start development server with drafts
hugo server -D

# Start development server (published posts only)
hugo server

# The site will be available at http://localhost:1313
```

### Build
```bash
# Build site with minification
hugo --minify

# Build output goes to ./public directory
```

### Theme Management
```bash
# Update PaperMod theme submodule
git submodule update --init --recursive
```

## Architecture

### Multilingual Structure

The blog supports 32 languages with a highly structured i18n approach:

- **Primary language**: English (`en`) - all content starts here
- **Language files**: `config/_default/languages.yml` contains configuration for all 32 languages
- **Content structure**: Each blog post exists as a directory under `content/posts/{slug}/` with separate markdown files per language (e.g., `index.en.md`, `index.zh.md`, `index.es.md`)
- **RTL languages**: Arabic (`ar`), Hebrew (`he`), and Urdu (`ur`) are configured with `languageDirection: rtl` in the language config

### Content Organization

```
content/
├── posts/           # Blog posts - each post is a directory with index.{lang}.md files
├── archives/        # Archive pages (translated for all languages)
└── search/          # Search pages (translated for all languages)
```

Each post directory contains 32 files: `index.en.md`, `index.zh.md`, `index.zh-tw.md`, `index.es.md`, etc.

### Hugo Configuration

Configuration is split across multiple files in `config/_default/`:
- `hugo.yml` - Base Hugo configuration
- `languages.yml` - Language-specific settings, menus, and metadata
- `params.yml` - Theme parameters and site-wide settings
- `outputs.yml` - Output formats configuration

### Theme Customization

The blog uses the PaperMod theme as a git submodule. Customizations are made through:
- `layouts/partials/header.html` - Custom header with language dropdown selector
- `layouts/partials/comments.html` - Comments integration
- `layouts/partials/extend_head.html` - Additional head content
- `config/_default/params.yml` - Theme parameters

## Creating New Blog Posts

There's a Cursor command at `.cursor/commands/new-post.md` that documents the workflow for creating multilingual posts. Key points:

1. Create English version first using `hugo new content content/posts/{slug}/index.en.md`
2. Write full English content with proper front matter (title, summary, description, tags, date)
3. Create translations for all 31 other languages: `af`, `ar`, `bn`, `cs`, `de`, `el`, `es`, `fil`, `fr`, `he`, `hi`, `hu`, `id`, `it`, `ja`, `ko`, `ms`, `nl`, `pl`, `pt`, `ro`, `ru`, `sv`, `sw`, `th`, `tr`, `uk`, `ur`, `vi`, `zh`, `zh-tw`
4. Translate all content including title, summary, description, tags, and body
5. Keep emojis in headings and maintain the call-to-action link to lookscanned.io

### Post Front Matter Format

Front matter uses YAML syntax with `---` delimiters. Always use double quotes for strings to avoid issues with apostrophes in multilingual content (e.g., French "C'est"):

```yaml
---
date: "2025-01-20T15:30:00+08:00"
draft: false
title: "Post Title"
summary: "Brief summary of the post"
description: "Brief summary of the post"
tags: ["tag1", "tag2", "tag3"]
---
```

Note: `summary` and `description` typically contain the same content.

## Deployment

The site has automated CI/CD via GitHub Actions (`.github/workflows/ci.yml`):

### On Pull Requests:
- Builds the site
- Deploys preview to Cloudflare Pages staging

### On Push to Main:
- Builds the site
- Deploys to Cloudflare Pages (primary: https://blog.lookscanned.io)
- Deploys to GitHub Pages (secondary)

## Git Commit Conventions

This repository follows [Conventional Commits](https://www.conventionalcommits.org/) for all commit messages and pull request titles.

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Standard Types

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `perf`: Performance improvements
- `refactor`: Code refactoring
- `chore`: Maintenance tasks (dependencies, etc.)
- `ci`: CI/CD changes

### Custom Type: `post`

Use `post:` for new blog post additions:

```bash
git commit -m "post: Boost Performance by 60% with ImageBitmap in Look Scanned"
git commit -m "post: How to Convert Digital Files into Realistic Scanned Copies"
```

### Examples

```bash
# New feature
git commit -m "feat(cursor): add new-post command for creating multilingual blog posts"

# Bug fix
git commit -m "fix: complete missing i18n translations for boost-performance post"

# Documentation
git commit -m "docs: add CLAUDE.md guide and update archetype to YAML format"

# New blog post
git commit -m "post: Building a Multilingual Blog with Hugo and PaperMod"
```

### Pull Request Titles

Pull request titles must also follow Conventional Commits format:

```
feat: add user authentication system
fix: resolve rendering issue on mobile devices
docs: update API documentation
post: introduce new blog post about PDF processing
```

## Important Conventions

1. **Content Focus**: All posts should relate to Look Scanned, web development, PDF processing, or privacy-first tools
2. **Language Consistency**: When creating/updating posts, ensure all 32 language versions are synchronized
3. **Front Matter Format**: Use YAML with `---` delimiters. Always use double quotes for strings to handle languages with apostrophes (e.g., French: "C'est")
4. **Theme Files**: The theme is a git submodule - don't modify files in `themes/PaperMod/` directly. Use layouts overrides in `layouts/` instead
5. **Git Submodules**: Always init/update submodules after cloning: `git submodule update --init --recursive`

## Recent Git Activity

The repository is on branch `feat/new-post-command` with recent work on:
- Adding the new-post command for multilingual blog creation
- Completing missing i18n translations for multiple posts
- Improving automation for multilingual content management
