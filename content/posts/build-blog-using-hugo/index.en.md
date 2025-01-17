---
title: "Building Look Scanned Blog with Hugo"
date: "2025-01-17T14:22:31+08:00"
description: "A comprehensive guide to building a modern blog using Hugo static site generator, covering installation, configuration, deployment, and customization tips for both beginners and experienced developers."
tags: ["hugo", "blog", "web", "static-site", "tutorial"]
---

## What is Look Scanned?

[Look Scanned](https://lookscanned.io) is a lightweight, browser-based application that simulates scanned PDF effects. It's designed with privacy in mind, allowing developers, designers, and anyone else to add authentic scanning effects to PDFs without the need for physical hardware.

## Why Hugo?

After evaluating several static site generators for the Look Scanned Blog, we chose Hugo for these compelling reasons:

1. **Blazing Fast** - Built with Go, Hugo delivers incredible build speeds
2. **Developer Friendly** - Simple configuration with an intuitive learning curve
3. **Rich Theme Ecosystem** - Extensive collection of beautiful, customizable themes
4. **Vibrant Community** - Active community support and comprehensive documentation
5. **First-class I18n** - Built-in internationalization support

## Step-by-Step Setup Guide

### Installing Hugo

For macOS users (via Homebrew):

```bash
brew install hugo
```

For Windows users (via Chocolatey):

```bash
choco install hugo-extended
```

For Linux users, check the installation guide [here](https://gohugo.io/installation/linux/).

### Creating a New Site

Set up your Hugo site with these commands:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Adding a Theme

Install the PaperMod theme as a git submodule:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Update your `config.toml`:

```toml
theme = "PaperMod"
```

### Configuring Internationalization

Add multilingual support to your `config.toml`:

```toml
defaultContentLanguage = 'en'
defaultContentLanguageInSubdir = false

[params]
  displayFullLangName = true

[languages]
  [languages.en]
    languageCode = 'en'
    languageName = 'English'
    title = 'Look Scanned Blog'
  [languages.zh]
    languageName = '简体中文'
    title = 'Look Scanned 博客'
  [languages.zh-tw]
    languageCode = 'zh-TW'
    languageName = '繁體中文'
    title = 'Look Scanned 部落格'
  # Additional languages...
```

### Creating Content

Create your first blog post:

```bash
hugo new posts/build-blog-using-hugo/index.en.md
```

### Running the Development Server

Start the local development server:

```bash
hugo server -D
```

Visit [http://localhost:1313](http://localhost:1313) to preview your site.

## Deployment Options

Deploy your Hugo site effortlessly using GitHub Actions:

1. **GitHub Pages**

   - Create a GitHub repository
   - Push your Hugo site
   - Enable GitHub Pages in repository settings
   - Configure GitHub Actions for automated deployment

2. **Cloudflare Pages**
   - Connect your GitHub repository
   - Set build command to `hugo`
   - Configure publish directory as `public`

## Theme Customization

We've streamlined the user interface by removing the language switcher from the site header. You can find our modified theme files [here](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Conclusion

Hugo provides an exceptional foundation for building a personal blog. Its combination of speed, flexibility, and comprehensive documentation makes it an excellent choice for developers at any skill level. As you become more familiar with Hugo, you'll discover powerful features to create a truly unique blogging experience.

## Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo PaperMod Theme](https://github.com/adityatelange/hugo-PaperMod)
