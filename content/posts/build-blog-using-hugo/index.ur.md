---
title: "Hugo کے ساتھ Look Scanned بلاگ بنانا"
date: "2025-01-17T14:22:31+08:00"
description: "Hugo static site generator استعمال کرتے ہوئے جدید بلاگ بنانے کا جامع گائیڈ، جو installation، configuration، deployment، اور نئے اور تجربہ کار developers دونوں کے لیے customization کی تجاویز کا احاطہ کرتا ہے۔"
summary: "Hugo static site generator استعمال کرتے ہوئے جدید بلاگ بنانے کا جامع گائیڈ، جو installation، configuration، deployment، اور نئے اور تجربہ کار developers دونوں کے لیے customization کی تجاویز کا احاطہ کرتا ہے۔"
tags: ["hugo", "blog", "web", "static-site", "tutorial"]
---

## Look Scanned کیا ہے؟

[Look Scanned](https://lookscanned.io) ایک ہلکا، browser-based application ہے جو scan شدہ PDF effects کی نقل کرتا ہے۔ یہ privacy کو ذہن میں رکھتے ہوئے design کیا گیا ہے، جو developers، designers اور ہر کسی کو بغیر physical hardware کے PDF میں authentic scanning effects شامل کرنے کی اجازت دیتا ہے۔

## Hugo کیوں؟

Look Scanned Blog کے لیے کئی static site generators کا جائزہ لینے کے بعد، ہم نے ان مجبور کن وجوہات سے Hugo کا انتخاب کیا:

1. **بجلی کی طرح تیز** - Go کے ساتھ بنایا گیا، Hugo ناقابل یقین build speeds فراہم کرتا ہے
2. **Developer Friendly** - intuitive learning curve کے ساتھ آسان configuration
3. **بھرپور Theme Ecosystem** - خوبصورت، customizable themes کا وسیع مجموعہ
4. **زندہ دل Community** - فعال community support اور جامع documentation
5. **اعلیٰ درجے کا I18n** - built-in internationalization support

## قدم بہ قدم Setup Guide

### Hugo کی تنصیب

macOS users کے لیے (Homebrew کے ذریعے):

```bash
brew install hugo
```

Windows users کے لیے (Chocolatey کے ذریعے):

```bash
choco install hugo-extended
```

Linux users کے لیے، installation guide یہاں [دیکھیں](https://gohugo.io/installation/linux/).

### نئی Site بنانا

ان commands کے ساتھ اپنی Hugo site setup کریں:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Theme شامل کرنا

PaperMod theme کو git submodule کے طور پر install کریں:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

اپنی `config.toml` update کریں:

```toml
theme = "PaperMod"
```

### Internationalization کی Configuration

اپنی `config.toml` میں multilingual support شامل کریں:

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
  # اضافی زبانیں...
```

### Content بنانا

اپنی پہلی blog post بنائیں:

```bash
hugo new posts/build-blog-using-hugo/index.ur.md
```

### Development Server چلانا

مقامی development server شروع کریں:

```bash
hugo server -D
```

اپنی site کا preview دیکھنے کے لیے [http://localhost:1313](http://localhost:1313) visit کریں۔

## Deployment کے Options

GitHub Actions استعمال کرتے ہوئے آسانی سے اپنی Hugo site deploy کریں:

1. **GitHub Pages**

   - GitHub repository بنائیں
   - اپنی Hugo site push کریں
   - Repository settings میں GitHub Pages enable کریں
   - Automated deployment کے لیے GitHub Actions configure کریں

2. **Cloudflare Pages**
   - اپنی GitHub repository connect کریں
   - Build command کو `hugo` پر set کریں
   - Publish directory کو `public` configure کریں

## Theme Customization

ہم نے site header سے language switcher ہٹا کر user interface کو streamline کیا ہے۔ آپ ہماری modified theme files یہاں [دیکھ سکتے ہیں](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html)۔

## خلاصہ

Hugo ذاتی blog بنانے کے لیے شاندار بنیاد فراہم کرتا ہے۔ اس کا speed، flexibility، اور comprehensive documentation کا امتزاج اسے کسی بھی skill level کے developers کے لیے بہترین انتخاب بناتا ہے۔ جیسے جیسے آپ Hugo سے زیادہ واقف ہوتے جائیں گے، آپ ایک واقعی منفرد blogging experience بنانے کے لیے طاقتور features دریافت کریں گے۔

## وسائل

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo PaperMod Theme](https://github.com/adityatelange/hugo-PaperMod)