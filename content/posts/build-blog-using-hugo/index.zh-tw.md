---
title: "使用 Hugo 打造 Look Scanned 部落格"
date: 2025-01-17
description: "這是一份完整的 Hugo 靜態網站產生器使用指南，從安裝、設定到部署，以及客製化技巧，適合各階段的開發者參考。"
tags: ["hugo", "部落格", "網站", "靜態網站", "教學"]
---

## Look Scanned 是什麼？

[Look Scanned](https://lookscanned.io) 是一款純前端網頁應用程式，專門用來產生掃描 PDF 效果。它不只輕量快速，還特別注重使用者隱私。不論你是開發者、設計師，或是一般使用者，都能輕鬆製作出掃描效果的 PDF，不需要實體印表機或掃描器。

## 為什麼選擇 Hugo？

在開始打造 Look Scanned 部落格之前，我們評估了幾個靜態網站產生器，最後選擇了 Hugo。主要原因如下：

1. **極速建置** - 採用 Go 語言開發，建置速度快得驚人
2. **容易上手** - 設定簡單明瞭，學習曲線平緩
3. **主題豐富** - 提供大量精美主題供選擇
4. **社群活躍** - 遇到問題很容易找到解答
5. **多語系支援** - 內建完整的國際化功能

## Hugo 安裝與設定教學

### 安裝 Hugo

macOS 使用者可以透過 Homebrew 安裝：

```bash
brew install hugo
```

Windows 使用者可以透過 Chocolatey 安裝：

```bash
choco install hugo-extended
```

Linux 使用者可以參考[這裡](https://gohugo.io/installation/linux/)的安裝說明。

### 建立新網站

輸入以下指令建立新的 Hugo 網站：

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### 安裝主題

將 PaperMod 主題安裝為 git 子模組：

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

接著在 `config.toml` 中設定：

```toml
theme = "PaperMod"
```

### 多語系設定

在 `config.toml` 中加入多語系支援：

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
  # 其他語系...
```

### 建立文章

建立你的第一篇文章：

```bash
hugo new posts/build-blog-using-hugo/index.zh-tw.md
```

### 啟動開發伺服器

執行本地開發伺服器：

```bash
hugo server -D
```

開啟瀏覽器前往 [http://localhost:1313](http://localhost:1313) 即可預覽網站。

## 部署方式

你可以透過 GitHub Actions 輕鬆將部落格部署到這些平台：

1. **GitHub Pages**

   - 建立 GitHub 儲存庫
   - 上傳 Hugo 網站原始碼
   - 啟用 GitHub Pages 功能
   - 設定 GitHub Actions 自動部署

2. **Cloudflare Pages**
   - 連結你的 GitHub 儲存庫
   - 設定建置指令為 `hugo`
   - 設定發布目錄為 `public`

## 主題客製化

為了讓介面更加簡潔，我們修改了主題，移除了頁首的語言切換器。你可以在[這裡](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html)查看修改過的程式碼。

## 結語

Hugo 是打造個人部落格的絕佳選擇。它不只速度快、彈性高，還有完整的技術文件支援。無論你是剛入門的新手，還是經驗豐富的開發者，都能輕鬆上手。隨著對 Hugo 的深入了解，你還能探索更多進階功能，打造出獨一無二的個人部落格。

## 參考資源

- [Hugo 官方文件](https://gohugo.io/documentation/)
- [Hugo PaperMod 主題](https://github.com/adityatelange/hugo-PaperMod)
