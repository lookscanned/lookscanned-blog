---
title: "使用 Hugo 搭建 Look Scanned 博客"
date: 2025-01-17
description: "一份使用 Hugo 静态网站生成器搭建现代博客的完整指南，涵盖了安装、配置、部署和自定义技巧，适合初学者和有经验的开发者。"
tags: ["hugo", "博客", "网站", "静态站点", "教程"]
---

## Look Scanned 是什么？

[Look Scanned](https://lookscanned.io) 是一款纯前端应用，专门用于给 PDF 添加扫描效果。它不仅轻量快速，还充分保护用户隐私。无论你是开发者、设计师，还是普通用户，都可以用它来制作扫描效果的 PDF，完全不需要打印机和扫描仪。

## 为什么选择 Hugo？

在搭建 Look Scanned 博客之前，我们对比了多个静态网站生成器，最终选定了 Hugo。主要考虑因素如下：

1. **构建神速** - 基于 Go 语言开发，构建速度令人惊叹
2. **上手容易** - 配置简单直观，学习门槛低
3. **主题丰富** - 海量精美主题任你挑选
4. **社区活跃** - 遇到问题随时能找到解决方案
5. **多语言支持** - 完善的国际化功能

## Hugo 搭建步骤指南

### 安装 Hugo

在 macOS 上，可以使用 Homebrew 安装：

```bash
brew install hugo
```

Windows 用户可以使用 Chocolatey：

```bash
choco install hugo-extended
```

Linux 用户可以在[这里](https://gohugo.io/installation/linux/)找到安装说明。

### 创建新站点

使用以下命令创建新的 Hugo 站点：

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### 添加主题

将主题添加为 git 子模块（以 PaperMod 主题为例）：

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

然后在 `config.toml` 中更新：

```toml
theme = "PaperMod"
```

### 配置国际化

在 `config.toml` 中添加多语言支持：

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
  # 更多语言...
```

### 创建内容

创建你的第一篇文章，执行：

```bash
hugo new posts/build-blog-using-hugo/index.zh.md
```

### 运行开发服务器

启动 Hugo 开发服务器：

```bash
hugo server -D
```

访问 [http://localhost:1313](http://localhost:1313) 查看你的网站。

## 部署

你可以通过 GitHub Actions 轻松将博客部署到以下平台：

1. **GitHub Pages**

   - 新建 GitHub 仓库
   - 上传 Hugo 网站代码
   - 开启 GitHub Pages 功能
   - 配置 GitHub Actions 自动部署

2. **Cloudflare Pages**
   - 关联你的 GitHub 仓库
   - 将构建命令设为 `hugo`
   - 将发布目录设为 `public`

## 自定义设置

为了让界面更简洁，我们修改了主题，移除了顶部的语言切换器。你可以在[这里](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html)查看修改后的代码。

## 总结

Hugo 是搭建个人博客的理想选择。它不仅速度快、灵活性强，还有详尽的文档支持。无论你是初学者还是经验丰富的开发者，都能轻松上手。随着对 Hugo 的深入了解，你还可以探索更多高级功能，打造出独具特色的个人博客。

## 资源

- [Hugo 文档](https://gohugo.io/documentation/)
- [Hugo PaperMod 主题](https://github.com/adityatelange/hugo-PaperMod)
