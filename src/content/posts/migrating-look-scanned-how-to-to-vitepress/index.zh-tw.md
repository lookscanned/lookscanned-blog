---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "將 Look Scanned 使用說明文件遷移至 VitePress 並增強安全性"
summary: "了解 Look Scanned 如何從 Vue + Vite 遷移至 VitePress 升級其文件基礎架構，同時使用 OIDC 實現 npm 信任發布者，實現安全的無令牌套件發布。"
description: "了解 Look Scanned 如何從 Vue + Vite 遷移至 VitePress 升級其文件基礎架構，同時使用 OIDC 實現 npm 信任發布者，實現安全的無令牌套件發布。"
tags: ["vitepress", "文件", "安全性", "cicd", "npm"]
---

在 [Look Scanned](https://lookscanned.io)，我們不斷改進基礎架構，以提供更好的文件和更安全的開發實踐。今天，我們很高興分享使用說明文件網站的重大升級詳情：從自訂 Vue + Vite 應用程式遷移至 VitePress，同時使用 npm 信任發布者增強 CI/CD 安全性。

## 📚 為什麼我們遷移至 VitePress

我們的使用說明文件網站 ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) 作為 Look Scanned 的綜合使用指南。雖然我們之前的 Vue + Vite 設定運作良好，但我們認識到 VitePress 對於內容驅動的文件網站來說會是更好的選擇。

### 什麼是 VitePress？

VitePress 是專為文件設計的靜態網站生成器。它建立在 Vite 和 Vue 3 之上，結合了兩者的優點：閃電般快速的開發體驗以及開箱即用的強大文件功能。

### 遷移的主要優勢

**🎯 更適合文件的架構**
- **基於檔案的路由**：每個 markdown 檔案自動成為一個頁面，使內容組織直觀
- **內建文件功能**：目錄、搜尋、國際化等都已預先配置
- **靜態網站生成**：預渲染的 HTML 提供出色的 SEO 和即時頁面載入

**⚡ 改善的開發者體驗**
- **即時熱重載**：開發期間變更立即顯示
- **Markdown 優先**：專注於內容，而非元件架構
- **Vue 元件支援**：需要時，我們仍可在 markdown 中使用自訂 Vue 元件

**🔧 更容易維護**
- **更清晰的結構**：文件遵循慣例，減少貢獻者的認知負荷
- **更穩定的建置**：VitePress 的有主見結構帶來更可重現的建置
- **更好的協作**：團隊成員無需深入的 Vue 知識即可貢獻文件

## 🔒 使用 npm 信任發布者增強安全性

除了 VitePress 遷移，我們還實現了一項關鍵的安全性改進：**使用 OIDC 驗證的 npm 信任發布者**。

### 傳統 npm 令牌的問題

以前，將套件發布到 npm 需要在儲存庫密鑰中儲存長期的 `NPM_TOKEN`。這種方法有幾個缺點：

- **安全風險**：令牌可能被意外洩露或遭到破壞
- **管理開銷**：令牌需要手動輪換和更新
- **稽核挑戰**：難以追蹤誰在何時發布了什麼

### 解決方案：基於 OIDC 的信任發布

[npm 信任發布者](https://docs.npmjs.com/trusted-publishers/)利用 OpenID Connect (OIDC) 實現從 GitHub Actions 直接進行安全的無令牌發布。運作方式如下：

1. **無儲存的密鑰**：GitHub Actions 不是儲存令牌，而是從 npm 請求短期憑證
2. **身份驗證**：npm 驗證發布請求來自授權的 GitHub 儲存庫
3. **自動憑證管理**：憑證自動發放並快速過期

### 實際優勢

這項變更為我們的開發工作流程帶來立即的改進：

- ✅ **不再需要令牌管理**：無需建立、儲存或輪換 npm 令牌
- ✅ **減少攻擊面**：短期憑證最小化暴露風險
- ✅ **更好的可稽核性**：每次發布操作都與特定的 GitHub Actions 執行綁定
- ✅ **現代最佳實踐**：符合零信任安全原則

**技術說明**：為了支援 npm 信任發布者，我們將 CI 配置更新為使用 Node.js `lts/*`，確保我們擁有 OIDC 驗證所需的最新 npm 版本。

## 📦 發布時間軸

遷移於 2025 年 12 月 19 日透過三個版本完成：

- **v2.0.0**：從 Vue + Vite 遷移至 VitePress 的核心（重大變更）
- **v2.0.1**：CI 修復以支援具有適當 Node.js 版本的 npm 信任發布者
- **v2.0.2**：透過將 `@fontsource/noto-mono` 移至 devDependencies 來改善效能

## 🌍 持續的多語言支援

重要說明：我們的使用說明文件會生成多語言 PDF，這些 PDF 一直被用作主要 Look Scanned 應用程式中的範例檔案（可在 [lookscanned.io/en/scan](https://lookscanned.io/en/scan) 取得）。此 VitePress 遷移不會改變該功能——它只是為維護和改進我們的文件基礎架構提供更好的基礎。

## 💡 這對使用者意味著什麼

如果您使用 Look Scanned 的文件：

- **相同的存取，更好的體驗**：文件保持在相同的 URL，並改善載入和導航
- **更可靠**：靜態網站生成意味著更快的載入和更好的穩定性
- **更好的搜尋和發現**：VitePress 的內建搜尋幫助您更快找到答案
- **持續的 PDF 支援**：多語言 PDF 生成像以前一樣繼續

## 🚀 接下來是什麼

基礎架構升級完成後，我們專注於內容改進：

- **擴展使用案例**：更多實際範例和逐步指南
- **一致性改進**：完善多語言術語以提高清晰度
- **增強的 PDF 匯出**：改善跨瀏覽器 PDF 生成體驗

## 立即試用 Look Scanned

Look Scanned 提供基於瀏覽器、隱私優先的 PDF 掃描效果，無需將您的檔案上傳到任何地方。改進的文件使入門變得比以往更容易。

👉 **造訪 [lookscanned.io](https://lookscanned.io) 在您的瀏覽器中體驗快速、安全的文件掃描。**
