---
title: "Hugo দিয়ে Look Scanned ব্লগ তৈরি করা"
date: "2025-01-17T14:22:31+08:00"
description: "Hugo স্ট্যাটিক সাইট জেনারেটর ব্যবহার করে আধুনিক ব্লগ তৈরির বিস্তৃত গাইড, যা ইনস্টলেশন, কনফিগারেশন, ডিপ্লয়মেন্ট এবং নতুন ও অভিজ্ঞ ডেভেলপার উভয়ের জন্য কাস্টমাইজেশন টিপস কভার করে।"
summary: "Hugo স্ট্যাটিক সাইট জেনারেটর ব্যবহার করে আধুনিক ব্লগ তৈরির বিস্তৃত গাইড, যা ইনস্টলেশন, কনফিগারেশন, ডিপ্লয়মেন্ট এবং নতুন ও অভিজ্ঞ ডেভেলপার উভয়ের জন্য কাস্টমাইজেশন টিপস কভার করে।"
tags: ["hugo", "blog", "web", "static-site", "tutorial"]
---

## Look Scanned কী?

[Look Scanned](https://lookscanned.io) একটি হালকা, ব্রাউজার-ভিত্তিক অ্যাপ্লিকেশন যা স্ক্যান করা PDF এফেক্ট সিমুলেট করে। এটি গোপনীয়তাকে মাথায় রেখে ডিজাইন করা হয়েছে, যা ডেভেলপার, ডিজাইনার এবং অন্য যে কাউকে ফিজিক্যাল হার্ডওয়্যারের প্রয়োজন ছাড়াই PDF-তে প্রামাণিক স্ক্যানিং এফেক্ট যোগ করতে দেয়।

## কেন Hugo?

Look Scanned ব্লগের জন্য বেশ কয়েকটি স্ট্যাটিক সাইট জেনারেটর মূল্যায়ন করার পর, আমরা এই বাধ্যতামূলক কারণগুলির জন্য Hugo বেছে নিয়েছি:

1. **বিদ্যুৎগতি** - Go দিয়ে তৈরি, Hugo অবিশ্বাস্য বিল্ড স্পিড প্রদান করে
2. **ডেভেলপার ফ্রেন্ডলি** - একটি স্বজ্ঞাত শেখার কার্ভের সাথে সহজ কনফিগারেশন
3. **সমৃদ্ধ থিম ইকোসিস্টেম** - সুন্দর, কাস্টমাইজযোগ্য থিমের বিস্তৃত সংগ্রহ
4. **প্রাণবন্ত সম্প্রদায়** - সক্রিয় কমিউনিটি সাপোর্ট এবং বিস্তৃত ডকুমেন্টেশন
5. **প্রথম-শ্রেণীর I18n** - বিল্ট-ইন আন্তর্জাতিকীকরণ সাপোর্ট

## ধাপে ধাপে সেটআপ গাইড

### Hugo ইনস্টল করা

macOS ব্যবহারকারীদের জন্য (Homebrew এর মাধ্যমে):

```bash
brew install hugo
```

Windows ব্যবহারকারীদের জন্য (Chocolatey এর মাধ্যমে):

```bash
choco install hugo-extended
```

Linux ব্যবহারকারীদের জন্য, ইনস্টলেশন গাইড [এখানে](https://gohugo.io/installation/linux/) দেখুন।

### নতুন সাইট তৈরি করা

এই কমান্ডগুলি দিয়ে আপনার Hugo সাইট সেট আপ করুন:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### থিম যোগ করা

PaperMod থিমটি একটি git সাবমডিউল হিসেবে ইনস্টল করুন:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

আপনার `config.toml` আপডেট করুন:

```toml
theme = "PaperMod"
```

### আন্তর্জাতিকীকরণ কনফিগার করা

আপনার `config.toml`-এ বহুভাষিক সাপোর্ট যোগ করুন:

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
  # অতিরিক্ত ভাষাসমূহ...
```

### কন্টেন্ট তৈরি করা

আপনার প্রথম ব্লগ পোস্ট তৈরি করুন:

```bash
hugo new posts/build-blog-using-hugo/index.bn.md
```

### ডেভেলপমেন্ট সার্ভার চালানো

স্থানীয় ডেভেলপমেন্ট সার্ভার শুরু করুন:

```bash
hugo server -D
```

আপনার সাইট প্রিভিউ করতে [http://localhost:1313](http://localhost:1313) ভিজিট করুন।

## ডিপ্লয়মেন্ট অপশনস

GitHub Actions ব্যবহার করে সহজেই আপনার Hugo সাইট ডিপ্লয় করুন:

1. **GitHub Pages**

   - একটি GitHub রিপোজিটরি তৈরি করুন
   - আপনার Hugo সাইট পুশ করুন
   - রিপোজিটরি সেটিংসে GitHub Pages সক্ষম করুন
   - স্বয়ংক্রিয় ডিপ্লয়মেন্টের জন্য GitHub Actions কনফিগার করুন

2. **Cloudflare Pages**
   - আপনার GitHub রিপোজিটরি সংযুক্ত করুন
   - বিল্ড কমান্ড `hugo` সেট করুন
   - পাবলিশ ডিরেক্টরি `public` হিসাবে কনফিগার করুন

## থিম কাস্টমাইজেশন

সাইট হেডার থেকে ভাষা পরিবর্তনকারী সরিয়ে আমরা ইউজার ইন্টারফেস স্ট্রিমলাইন করেছি। আপনি আমাদের সংশোধিত থিম ফাইলগুলি [এখানে](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html) পেতে পারেন।

## উপসংহার

Hugo ব্যক্তিগত ব্লগ তৈরির জন্য একটি ব্যতিক্রমী ভিত্তি প্রদান করে। এর গতি, নমনীয়তা এবং বিস্তৃত ডকুমেন্টেশনের সমন্বয় এটিকে যেকোনো দক্ষতার স্তরের ডেভেলপারদের জন্য একটি চমৎকার পছন্দ করে তোলে। আপনি Hugo-র সাথে আরো পরিচিত হওয়ার সাথে সাথে, আপনি একটি সত্যিকারের অনন্য ব্লগিং অভিজ্ঞতা তৈরি করতে শক্তিশালী ফিচারগুলি আবিষ্কার করবেন।

## রিসোর্স

- [Hugo ডকুমেন্টেশন](https://gohugo.io/documentation/)
- [Hugo PaperMod থিম](https://github.com/adityatelange/hugo-PaperMod)