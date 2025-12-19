---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Migrating Look Scanned How-To Documentation to VitePress with Enhanced Security"
summary: "Discover how Look Scanned upgraded its documentation infrastructure by migrating from Vue + Vite to VitePress, while implementing npm Trusted Publishers with OIDC for secure, token-free package releases."
description: "Discover how Look Scanned upgraded its documentation infrastructure by migrating from Vue + Vite to VitePress, while implementing npm Trusted Publishers with OIDC for secure, token-free package releases."
tags: ["vitepress", "documentation", "security", "cicd", "npm"]
---

At [Look Scanned](https://lookscanned.io), we're constantly improving our infrastructure to provide better documentation and more secure development practices. Today, we're excited to share details about a significant upgrade to our How-To documentation site: migrating from a custom Vue + Vite application to VitePress, while simultaneously enhancing our CI/CD security with npm Trusted Publishers.

## 📚 Why We Migrated to VitePress

Our How-To documentation site ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) serves as the comprehensive usage guide for Look Scanned. While our previous Vue + Vite setup worked well, we recognized that VitePress would be a better fit for a content-driven documentation site.

### What is VitePress?

VitePress is a static site generator specifically designed for documentation. Built on top of Vite and Vue 3, it combines the best of both worlds: lightning-fast development experience with powerful documentation features out of the box.

### Key Benefits of the Migration

**🎯 Better Architecture for Documentation**
- **File-based routing**: Each markdown file automatically becomes a page, making content organization intuitive
- **Built-in documentation features**: Table of contents, search, internationalization, and more come pre-configured
- **Static site generation**: Pre-rendered HTML provides excellent SEO and instant page loads

**⚡ Improved Developer Experience**
- **Instant hot reload**: Changes appear immediately during development
- **Markdown-first**: Focus on content, not component scaffolding
- **Vue component support**: When needed, we can still use custom Vue components within markdown

**🔧 Easier Maintenance**
- **Clearer structure**: Documentation follows conventions, reducing cognitive load for contributors
- **More stable builds**: VitePress's opinionated structure leads to more reproducible builds
- **Better collaboration**: Team members can contribute documentation without deep Vue knowledge

## 🔒 Enhanced Security with npm Trusted Publishers

Alongside the VitePress migration, we implemented a critical security improvement: **npm Trusted Publishers using OIDC authentication**.

### The Problem with Traditional npm Tokens

Previously, publishing packages to npm required storing a long-lived `NPM_TOKEN` in repository secrets. This approach has several drawbacks:

- **Security risk**: Tokens can be accidentally exposed or compromised
- **Management overhead**: Tokens need manual rotation and updates
- **Audit challenges**: Difficult to track who published what and when

### The Solution: OIDC-based Trusted Publishing

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) leverages OpenID Connect (OIDC) to enable secure, token-free publishing directly from GitHub Actions. Here's how it works:

1. **No stored secrets**: Instead of saving tokens, GitHub Actions requests short-lived credentials from npm
2. **Identity verification**: npm verifies the publishing request came from the authorized GitHub repository
3. **Automatic credential management**: Credentials are automatically issued and expire quickly

### Real-World Benefits

This change brings immediate improvements to our development workflow:

- ✅ **No more token management**: No need to create, store, or rotate npm tokens
- ✅ **Reduced attack surface**: Short-lived credentials minimize exposure risk
- ✅ **Better auditability**: Every publish action is tied to a specific GitHub Actions run
- ✅ **Modern best practices**: Aligns with zero-trust security principles

**Technical note**: To support npm Trusted Publishers, we updated our CI configuration to use Node.js `lts/*`, ensuring we have the latest npm version required for OIDC authentication.

## 📦 Release Timeline

The migration was completed through three releases on December 19, 2025:

- **v2.0.0**: Core migration from Vue + Vite to VitePress (breaking change)
- **v2.0.1**: CI fix to support npm Trusted Publishers with proper Node.js version
- **v2.0.2**: Performance improvement by moving `@fontsource/noto-mono` to devDependencies

## 🌍 Continued Multilingual Support

An important note: our How-To documentation generates multilingual PDFs that have always been used as example files in the main Look Scanned application (available at [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). This VitePress migration doesn't change that functionality—it simply provides a better foundation for maintaining and improving our documentation infrastructure.

## 💡 What This Means for Users

If you use Look Scanned's documentation:

- **Same access, better experience**: Documentation remains at the same URL with improved loading and navigation
- **More reliable**: Static site generation means faster loads and better stability
- **Better search and discovery**: VitePress's built-in search helps you find answers faster
- **Continued PDF support**: Multilingual PDF generation continues as before

## 🚀 What's Next

With the infrastructure upgrade complete, we're focusing on content improvements:

- **Expanded use cases**: More practical examples and step-by-step guides
- **Consistency improvements**: Refining multilingual terminology for clarity
- **Enhanced PDF export**: Improving cross-browser PDF generation experience

## Try Look Scanned Today

Look Scanned provides browser-based, privacy-first PDF scanning effects without uploading your files anywhere. The improved documentation makes it easier than ever to get started.

👉 **Visit [lookscanned.io](https://lookscanned.io) to experience fast, secure document scanning in your browser.**
