---
title: "Hugo で作る Look Scanned ブログ"
date: 2025-01-17
description: "静的サイトジェネレーター Hugo によるモダンなブログ構築の完全ガイド。インストールから設定、デプロイ、カスタマイズまで、開発者向けにわかりやすく解説します。"
tags: ["hugo", "ブログ", "ウェブ", "静的サイト", "チュートリアル"]
---

## Look Scanned について

[Look Scanned](https://lookscanned.io) は、PDF にスキャン効果を適用できる軽量な Web アプリケーションです。プライバシーに配慮して開発されており、プリンターやスキャナーがなくても、開発者やデザイナーをはじめ、誰でも手軽にスキャンしたような PDF を作成できます。

## Hugo 採用の理由

Look Scanned ブログのプラットフォームを検討する中で、様々な静的サイトジェネレーターを比較検討しました。最終的に Hugo を選んだ理由は次の通りです：

1. **抜群の速度** - Go 言語ベースの実装により、圧倒的なビルドパフォーマンスを実現
2. **導入の手軽さ** - 設定がシンプルで、無理なく習得可能
3. **豊富なテーマ群** - 美しく、カスタマイズ性の高いテーマが充実
4. **活気あるコミュニティ** - 手厚いサポートと充実したドキュメントを提供
5. **多言語対応の充実** - 国際化機能が標準搭載

## 導入手順

### Hugo のセットアップ

macOS の場合（Homebrew を使用）：

```bash
brew install hugo
```

Windows の場合（Chocolatey を使用）：

```bash
choco install hugo-extended
```

Linux の場合は、[インストールガイド](https://gohugo.io/installation/linux/)をご参照ください。

### サイトの作成

次のコマンドでサイトを作成します：

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### テーマの設定

PaperMod テーマを Git サブモジュールとして追加します：

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

`config.toml` に以下を追加：

```toml
theme = "PaperMod"
```

### 多言語対応の設定

`config.toml` に多言語サポートを設定：

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
  # その他の言語設定...
```

### 記事の作成

最初の記事を作成します：

```bash
hugo new posts/build-blog-using-hugo/index.ja.md
```

### 開発環境の起動

ローカルサーバーを起動：

```bash
hugo server -D
```

[http://localhost:1313](http://localhost:1313) でプレビューを確認できます。

## デプロイ手順

GitHub Actions を活用した簡単デプロイ：

1. **GitHub Pages の場合**

   - GitHub にリポジトリを作成
   - サイトのソースコードをプッシュ
   - GitHub Pages の設定を有効化
   - GitHub Actions でデプロイを自動化

2. **Cloudflare Pages の場合**
   - GitHub リポジトリと連携
   - ビルドコマンドを `hugo` に設定
   - 公開ディレクトリを `public` に指定

## カスタマイズについて

より使いやすいインターフェースを目指し、ヘッダーから言語切替機能を省きました。具体的な変更内容は[こちらのコード](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html)をご確認ください。

## おわりに

Hugo は個人ブログの構築に理想的なフレームワークです。高速な処理、柔軟なカスタマイズ性、充実したドキュメントにより、経験を問わず快適な開発が可能です。使い込むほどに新しい可能性が広がり、自分だけの特別なブログ体験を作り出すことができます。

## 参考資料

- [Hugo 公式ドキュメント](https://gohugo.io/documentation/)
- [Hugo PaperMod テーマ](https://github.com/adityatelange/hugo-PaperMod)
