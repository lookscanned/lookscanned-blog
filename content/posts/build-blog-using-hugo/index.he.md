---
title: "יצירת בלוג Look Scanned באמצעות Hugo"
date: "2025-01-17T14:22:31+08:00"
description: "מדריך מלא להקמת בלוג מודרני עם Hugo - כלי ליצירת אתרים סטטיים. כולל הכל: מהתקנה ועד העלאה לאוויר, הגדרות והתאמות אישיות - מתאים למתכנתים מתחילים ומנוסים כאחד."
tags: ["hugo", "בלוג", "אינטרנט", "אתר-סטטי", "מדריך"]
---

## מה זה Look Scanned?

[Look Scanned](https://lookscanned.io) הוא אפליקציית ווב קלילה שהופכת מסמכי PDF לכאלה שנראים סרוקים. האפליקציה פותחה עם דגש על פרטיות ומאפשרת למפתחים, מעצבים ומשתמשים רגילים ליצור קבצי PDF שנראים סרוקים - בלי צורך במדפסת או סורק אמיתיים.

## למה דווקא Hugo?

אחרי שבדקנו כמה כלים ליצירת אתרים סטטיים עבור בלוג Look Scanned, בחרנו ב-Hugo מהסיבות הבאות:

1. **מהירות מטורפת** - כתוב ב-Go, בנייה בזק
2. **פשוט לשימוש** - התקנה מהירה ולמידה חלקה
3. **שפע של תבניות** - המון תבניות מעוצבות שאפשר להתאים אישית
4. **קהילה תוססת** - עזרה מיידית ותיעוד מעולה
5. **תמיכה בשפות** - מערכת i18n מובנית

## בואו נתחיל

### התקנת Hugo

ב-macOS (עם Homebrew):

```bash
brew install hugo
```

ב-Windows (עם Chocolatey):

```bash
choco install hugo-extended
```

למשתמשי Linux - [הוראות התקנה כאן](https://gohugo.io/installation/linux/).

### הקמת הפרויקט

הריצו את הפקודות האלה:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### התקנת תבנית

הוסיפו את PaperMod כ-Git submodule:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

הוסיפו ל-`config.toml`:

```toml
theme = "PaperMod"
```

### הגדרות שפה

ערכו את `config.toml`:

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
  # שפות נוספות...
```

### יצירת תוכן

צרו את הפוסט הראשון:

```bash
hugo new posts/build-blog-using-hugo/index.he.md
```

### סביבת פיתוח

הפעילו שרת מקומי:

```bash
hugo server -D
```

גלשו ל-[http://localhost:1313](http://localhost:1313).

## העלאה לאוויר

העלאה אוטומטית עם GitHub Actions:

1. **העלאה ל-GitHub Pages**

   - פתחו repo חדש ב-GitHub
   - העלו את הקוד
   - הפעילו GitHub Pages
   - הגדירו העלאה אוטומטית

2. **העלאה ל-Cloudflare Pages**
   - חברו את ה-repo מ-GitHub
   - קבעו את `hugo` כפקודת בנייה
   - בחרו בתיקייה `public` בתור פלט

## התאמות אישיות

כדי לשפר את חוויית המשתמש, הסרנו את בורר השפות מהכותרת. אפשר לראות את השינויים בתבנית [כאן](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## לסיכום

Hugo הוא כלי מדהים לבניית בלוג אישי. בזכות המהירות, הגמישות והתיעוד המצוין, הוא מתאים למפתחים בכל הרמות. ככל שעובדים איתו יותר, מגלים עוד ועוד טריקים מגניבים ליצירת בלוג ייחודי.

## קישורים מועילים

- [תיעוד Hugo](https://gohugo.io/documentation/)
- [תבנית PaperMod](https://github.com/adityatelange/hugo-PaperMod)

</rewritten_file>
