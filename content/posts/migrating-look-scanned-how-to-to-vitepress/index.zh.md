---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Look Scanned How-To 文档迁移至 VitePress，同步提升发布安全性"
summary: "了解 Look Scanned 如何通过从 Vue + Vite 迁移到 VitePress 来升级文档基础设施，同时实施基于 OIDC 的 npm Trusted Publishers，实现无需 token 的安全包发布。"
description: "了解 Look Scanned 如何通过从 Vue + Vite 迁移到 VitePress 来升级文档基础设施，同时实施基于 OIDC 的 npm Trusted Publishers，实现无需 token 的安全包发布。"
tags: ["vitepress", "文档", "安全", "cicd", "npm"]
---

在 [Look Scanned](https://lookscanned.io)，我们不断改进基础设施，以提供更好的文档和更安全的开发实践。今天，我们很高兴分享 How-To 文档站点的重大升级详情：从自定义的 Vue + Vite 应用程序迁移到 VitePress，同时通过 npm Trusted Publishers 增强 CI/CD 安全性。

## 📚 为什么迁移到 VitePress

我们的 How-To 文档站点（[github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)）是 Look Scanned 的综合使用指南。虽然之前的 Vue + Vite 设置运行良好，但我们认识到 VitePress 更适合内容驱动的文档站点。

### 什么是 VitePress？

VitePress 是专门为文档设计的静态站点生成器。它基于 Vite 和 Vue 3 构建，结合了两者的优势：闪电般快速的开发体验和开箱即用的强大文档功能。

### 迁移的主要优势

**🎯 更适合文档的架构**
- **基于文件的路由**：每个 markdown 文件自动成为一个页面，使内容组织直观
- **内置文档功能**：目录、搜索、国际化等功能预配置完成
- **静态站点生成**：预渲染的 HTML 提供出色的 SEO 和即时页面加载

**⚡ 改进的开发体验**
- **即时热重载**：开发过程中更改立即显示
- **Markdown 优先**：专注于内容，而非组件搭建
- **Vue 组件支持**：需要时，仍可在 markdown 中使用自定义 Vue 组件

**🔧 更易维护**
- **更清晰的结构**：文档遵循约定，减少贡献者的认知负担
- **更稳定的构建**：VitePress 的约定式结构带来更可复现的构建
- **更好的协作**：团队成员无需深入了解 Vue 即可贡献文档

## 🔒 通过 npm Trusted Publishers 提升安全性

在 VitePress 迁移的同时，我们实施了一项关键的安全改进：**使用 OIDC 身份验证的 npm Trusted Publishers**。

### 传统 npm Token 的问题

以前，向 npm 发布包需要在仓库 secrets 中存储长期有效的 `NPM_TOKEN`。这种方法有几个缺点：

- **安全风险**：token 可能被意外暴露或泄露
- **管理开销**：token 需要手动轮换和更新
- **审计困难**：难以追踪谁在何时发布了什么

### 解决方案：基于 OIDC 的可信发布

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) 利用 OpenID Connect (OIDC) 直接从 GitHub Actions 实现安全的无 token 发布。其工作原理如下：

1. **无需存储密钥**：GitHub Actions 向 npm 请求短期凭证，而非保存 token
2. **身份验证**：npm 验证发布请求来自授权的 GitHub 仓库
3. **自动凭证管理**：凭证自动签发并快速过期

### 实际效益

这一变更为我们的开发工作流带来了立竿见影的改进：

- ✅ **无需管理 token**：不再需要创建、存储或轮换 npm token
- ✅ **减少攻击面**：短期凭证最大限度地降低暴露风险
- ✅ **更好的可审计性**：每次发布操作都与特定的 GitHub Actions 运行相关联
- ✅ **现代最佳实践**：符合零信任安全原则

**技术说明**：为支持 npm Trusted Publishers，我们将 CI 配置更新为使用 Node.js `lts/*`，确保具有 OIDC 身份验证所需的最新 npm 版本。

## 📦 发布时间线

迁移通过 2025 年 12 月 19 日的三个版本完成：

- **v2.0.0**：从 Vue + Vite 迁移到 VitePress 的核心更改（破坏性变更）
- **v2.0.1**：CI 修复，以使用正确的 Node.js 版本支持 npm Trusted Publishers
- **v2.0.2**：通过将 `@fontsource/noto-mono` 移至 devDependencies 来提升性能

## 🌍 持续的多语言支持

重要说明：我们的 How-To 文档生成的多语言 PDF 一直被用作 Look Scanned 主应用程序中的示例文件（可在 [lookscanned.io/en/scan](https://lookscanned.io/en/scan) 获取）。此次 VitePress 迁移不改变该功能——它只是为维护和改进文档基础设施提供了更好的基础。

## 💡 这对用户意味着什么

如果您使用 Look Scanned 的文档：

- **相同的访问方式，更好的体验**：文档仍在相同的 URL，但加载和导航得到改进
- **更可靠**：静态站点生成意味着更快的加载和更好的稳定性
- **更好的搜索和发现**：VitePress 的内置搜索帮助您更快找到答案
- **持续的 PDF 支持**：多语言 PDF 生成一如既往地继续

## 🚀 下一步计划

随着基础设施升级完成，我们将重点放在内容改进上：

- **扩展用例**：更多实用示例和分步指南
- **一致性改进**：优化多语言术语以提高清晰度
- **增强 PDF 导出**：改进跨浏览器 PDF 生成体验

## 立即试用 Look Scanned

Look Scanned 提供基于浏览器的隐私优先 PDF 扫描效果，无需将文件上传到任何地方。改进的文档使入门变得比以往任何时候都容易。

👉 **访问 [lookscanned.io](https://lookscanned.io)，在浏览器中体验快速、安全的文档扫描。**
