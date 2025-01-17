---
title: "بناء مدونة Look Scanned باستخدام Hugo"
date: "2025-01-17T14:22:31+08:00"
description: "دليل شامل لبناء مدونة حديثة باستخدام مولّد المواقع الثابتة Hugo. يغطي كل الخطوات من التثبيت حتى النشر، مع شرح مفصل للإعدادات والتخصيص - مناسب لجميع مستويات المطورين."
summary: "دليل شامل لبناء مدونة حديثة باستخدام مولّد المواقع الثابتة Hugo. يغطي كل الخطوات من التثبيت حتى النشر، مع شرح مفصل للإعدادات والتخصيص - مناسب لجميع مستويات المطورين."
tags: ["hugo", "مدونة", "ويب", "موقع-ثابت", "دليل"]
---

## نبذة عن Look Scanned

[Look Scanned](https://lookscanned.io) هو تطبيق ويب خفيف يُحاكي مظهر المستندات الممسوحة ضوئياً. صُمم مع التركيز على خصوصية المستخدم، ويُمكّن المطورين والمصممين والمستخدمين العاديين من إنشاء ملفات PDF تبدو كأنها ممسوحة ضوئياً دون الحاجة لأجهزة حقيقية.

## لماذا اخترنا Hugo؟

بعد دراسة متأنية لمختلف مولّدات المواقع الثابتة، وقع اختيارنا على Hugo للأسباب التالية:

1. **أداء فائق** - مبني بلغة Go، مما يضمن سرعة بناء استثنائية
2. **سهولة الاستخدام** - واجهة بسيطة ومسار تعلم سلس
3. **ثراء القوالب** - مجموعة متنوعة من القوالب الجذابة والقابلة للتخصيص
4. **مجتمع داعم** - مساعدة فورية وتوثيق متكامل
5. **دعم التعريب** - نظام تعدد لغات متكامل

## خطوات البدء

### تثبيت Hugo

لنظام macOS (باستخدام Homebrew):

```bash
brew install hugo
```

لنظام Windows (باستخدام Chocolatey):

```bash
choco install hugo-extended
```

لمستخدمي Linux، راجع [دليل التثبيت](https://gohugo.io/installation/linux/).

### إنشاء المشروع

نفّذ الأوامر التالية:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### إعداد القالب

أضف قالب PaperMod كوحدة Git فرعية:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

أضف في ملف `config.toml`:

```toml
theme = "PaperMod"
```

### إعداد اللغات

قم بتهيئة دعم اللغات في `config.toml`:

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
  # إضافة لغات أخرى...
```

### كتابة المحتوى

أنشئ أول مقالة:

```bash
hugo new posts/build-blog-using-hugo/index.ar.md
```

### بيئة التطوير

شغّل الخادم المحلي:

```bash
hugo server -D
```

تفقد الموقع على [http://localhost:1313](http://localhost:1313).

## نشر الموقع

أتمتة عملية النشر باستخدام GitHub Actions:

1. **النشر على GitHub Pages**

   - أنشئ مستودعاً جديداً على GitHub
   - ارفع الشيفرة المصدرية
   - فعّل خدمة GitHub Pages
   - اضبط النشر التلقائي

2. **النشر على Cloudflare Pages**
   - اربط مستودع GitHub
   - حدد `hugo` كأمر للبناء
   - عيّن المجلد `public` للنشر

## تخصيص الموقع

لتحسين تجربة المستخدم، أزلنا قائمة اختيار اللغة من رأس الصفحة. يمكنك مراجعة التعديلات [هنا](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## خاتمة

يُعد Hugo خياراً مثالياً لإنشاء المدونات الشخصية. يتميز بأدائه العالي، ومرونته في الإعداد، وتوثيقه الشامل، مما يجعله مناسباً لجميع مستويات المطورين. مع الاستخدام المستمر، ستكتشف إمكانيات جديدة لإنشاء مدونة متميزة.

## مصادر مفيدة

- [وثائق Hugo](https://gohugo.io/documentation/)
- [قالب PaperMod](https://github.com/adityatelange/hugo-PaperMod)
