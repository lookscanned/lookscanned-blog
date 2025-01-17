---
title: "Hugo द्वारा Look Scanned ब्लॉग का निर्माण"
date: "2025-01-17T14:22:31+08:00"
description: "स्टैटिक साइट जनरेटर Hugo से आधुनिक ब्लॉग बनाने की विस्तृत मार्गदर्शिका। स्थापना से लेकर प्रकाशन तक, विन्यास और अनुकूलन सहित - हर स्तर के डेवलपर्स के लिए उपयोगी।"
tags: ["hugo", "ब्लॉग", "वेब", "स्टैटिक-साइट", "ट्यूटोरियल"]
---

## Look Scanned का परिचय

[Look Scanned](https://lookscanned.io) एक लघु वेब अनुप्रयोग है जो PDF दस्तावेज़ों को स्कैन किए हुए जैसा दिखाता है। गोपनीयता को प्राथमिकता देते हुए विकसित, यह डेवलपर्स, डिज़ाइनर्स और आम उपयोगकर्ताओं को बिना वास्तविक प्रिंटर या स्कैनर के स्कैन जैसे PDF बनाने की सुविधा प्रदान करता है।

## Hugo का चयन क्यों?

Look Scanned ब्लॉग के लिए विभिन्न स्टैटिक साइट जनरेटर्स की समीक्षा के बाद, हमने Hugo को इन कारणों से चुना:

1. **उत्कृष्ट निष्पादन** - Go भाषा में निर्मित, अत्यधिक तीव्र बिल्ड गति
2. **सरल प्रयोग** - सहज सेटअप और क्रमिक सीखने की प्रक्रिया
3. **विविध थीम** - आकर्षक और अनुकूलन योग्य थीम्स का समृद्ध संग्रह
4. **जीवंत समुदाय** - तत्काल सहायता और विस्तृत प्रलेखन
5. **बहुभाषा समर्थन** - अंतर्निहित अंतर्राष्ट्रीयकरण क्षमताएं

## प्रारंभ करें

### Hugo की स्थापना

macOS पर (Homebrew से):

```bash
brew install hugo
```

Windows पर (Chocolatey से):

```bash
choco install hugo-extended
```

Linux उपयोगकर्ता [स्थापना निर्देश](https://gohugo.io/installation/linux/) देखें।

### साइट निर्माण

निम्न आदेश चलाएं:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### थीम स्थापना

PaperMod थीम को Git उपमॉड्यूल के रूप में जोड़ें:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

`config.toml` में जोड़ें:

```toml
theme = "PaperMod"
```

### बहुभाषा समर्थन

`config.toml` में भाषा विन्यास करें:

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
  # अन्य भाषाएँ...
```

### सामग्री रचना

पहला लेख बनाएं:

```bash
hugo new posts/build-blog-using-hugo/index.hi.md
```

### विकास परिवेश

स्थानीय सर्वर प्रारंभ करें:

```bash
hugo server -D
```

[http://localhost:1313](http://localhost:1313) पर साइट का पूर्वावलोकन करें।

## प्रकाशन

GitHub Actions से स्वचालित प्रकाशन:

1. **GitHub Pages पर प्रकाशन**

   - GitHub पर नया भंडार बनाएं
   - स्रोत कोड पुश करें
   - GitHub Pages सक्षम करें
   - स्वचालित प्रकाशन व्यवस्था करें

2. **Cloudflare Pages पर प्रकाशन**
   - GitHub भंडार जोड़ें
   - बिल्ड आदेश `hugo` निर्धारित करें
   - `public` फ़ोल्डर को प्रकाशन निर्देशिका के रूप में सेट करें

## अनुकूलन

बेहतर उपयोगकर्ता अनुभव के लिए, हमने शीर्ष पट्टी से भाषा चयन हटा दिया है। थीम में किए गए परिवर्तन [यहाँ](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html) देख सकते हैं।

## समापन

Hugo व्यक्तिगत ब्लॉग के निर्माण के लिए एक श्रेष्ठ साधन है। इसकी उच्च कार्यक्षमता, लचीला विन्यास और विस्तृत प्रलेखन इसे सभी स्तर के डेवलपर्स के लिए उपयुक्त बनाते हैं। उपयोग के साथ-साथ आप अपना विशिष्ट ब्लॉग बनाने की नई संभावनाएं खोजेंगे।

## सहायक कड़ियाँ

- [Hugo प्रलेखन](https://gohugo.io/documentation/)
- [PaperMod थीम](https://github.com/adityatelange/hugo-PaperMod)
