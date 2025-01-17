---
title: "สร้างบล็อกด้วย Hugo สำหรับ Look Scanned"
date: "2025-01-17T14:22:31+08:00"
description: "คู่มือแนะนำการสร้างบล็อกด้วย Hugo เครื่องมือสร้างเว็บแบบ Static ครบทุกขั้นตอน ตั้งแต่การติดตั้ง ปรับแต่ง จนถึงการอัพโหลด - เข้าใจง่าย เหมาะกับนักพัฒนาทุกระดับ"
tags: ["hugo", "บล็อก", "เว็บ", "เว็บไซต์-สถิต", "บทสอน"]
---

## รู้จัก Look Scanned

[Look Scanned](https://lookscanned.io) เป็นเว็บแอปที่ช่วยทำให้ไฟล์ PDF ดูเหมือนผ่านการสแกน พัฒนาขึ้นโดยให้ความสำคัญกับความเป็นส่วนตัว ช่วยให้นักพัฒนา นักออกแบบ และผู้ใช้ทั่วไปสร้าง PDF ที่ดูเหมือนสแกนได้ โดยไม่ต้องมีเครื่องพิมพ์หรือสแกนเนอร์

## เหตุผลที่เลือก Hugo

หลังจากทดลองใช้เครื่องมือสร้างเว็บแบบ Static หลายตัว เราเลือก Hugo เพราะ:

1. **เร็วสุดๆ** - เขียนด้วย Go ทำให้บิลด์ไวมาก
2. **ง่ายต่อการใช้** - เซ็ตอัพง่าย เรียนรู้ไว
3. **ธีมเยอะ** - มีธีมสวยๆ ให้เลือกเพียบ ปรับแต่งได้ตามใจ
4. **ชุมชนเข้มแข็ง** - ช่วยเหลือไว มีเอกสารละเอียด
5. **รองรับหลายภาษา** - มี i18n พร้อมใช้

## เริ่มต้น

### ติดตั้ง Hugo

สำหรับ macOS (ใช้ Homebrew):

```bash
brew install hugo
```

สำหรับ Windows (ใช้ Chocolatey):

```bash
choco install hugo-extended
```

ผู้ใช้ Linux [ดูวิธีติดตั้งที่นี่](https://gohugo.io/installation/linux/)

### ตั้งค่าโปรเจค

รันคำสั่งเหล่านี้:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### ติดตั้งธีม

เพิ่มธีม PaperMod เป็น Git submodule:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

เพิ่มในไฟล์ `config.toml`:

```toml
theme = "PaperMod"
```

### ตั้งค่าภาษา

แก้ไขไฟล์ `config.toml`:

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
  # ภาษาอื่นๆ...
```

### เขียนบทความ

สร้างโพสต์แรก:

```bash
hugo new posts/build-blog-using-hugo/index.th.md
```

### เซิร์ฟเวอร์ทดสอบ

รันเซิร์ฟเวอร์:

```bash
hugo server -D
```

ดูเว็บได้ที่ [http://localhost:1313](http://localhost:1313)

## อัพโหลดเว็บ

ตั้งค่าการอัพโหลดอัตโนมัติด้วย GitHub Actions:

1. **อัพขึ้น GitHub Pages**

   - สร้าง repo ใหม่ใน GitHub
   - อัพโค้ดขึ้นไป
   - เปิด GitHub Pages
   - ตั้งค่าการอัพโหลดอัตโนมัติ

2. **อัพขึ้น Cloudflare Pages**
   - เชื่อม repo GitHub
   - ตั้ง `hugo` เป็นคำสั่งบิลด์
   - เลือกโฟลเดอร์ `public` เป็นที่เก็บไฟล์

## ปรับแต่ง

เพื่อให้ใช้งานง่ายขึ้น เราได้เอาปุ่มเปลี่ยนภาษาออกจากส่วนบน ดูการแก้ไขธีมได้[ที่นี่](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html)

## สรุป

Hugo เป็นเครื่องมือเจ๋งๆ สำหรับทำบล็อกส่วนตัว ด้วยความเร็ว ความยืดหยุ่น และเอกสารที่ดี ทำให้เหมาะกับนักพัฒนาทุกระดับ ยิ่งใช้บ่อย ยิ่งเจอเทคนิคเด็ดๆ ในการทำบล็อกสไตล์ตัวเอง

## ลิงก์น่าสนใจ

- [เอกสาร Hugo](https://gohugo.io/documentation/)
- [ธีม PaperMod](https://github.com/adityatelange/hugo-PaperMod)
