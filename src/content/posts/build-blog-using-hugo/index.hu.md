---
title: "Look Scanned Blog építése Hugo-val"
date: "2025-01-17T14:22:31+08:00"
description: "Átfogó útmutató modern blog készítéséhez Hugo statikus oldal generátor használatával, lefedve a telepítést, konfigurációt, üzembe helyezést és testreszabási tippeket kezdő és tapasztalt fejlesztők számára egyaránt."
summary: "Átfogó útmutató modern blog készítéséhez Hugo statikus oldal generátor használatával, lefedve a telepítést, konfigurációt, üzembe helyezést és testreszabási tippeket kezdő és tapasztalt fejlesztők számára egyaránt."
tags: ["hugo", "blog", "web", "statikus-oldal", "útmutató"]
---

## Mi az a Look Scanned?

A [Look Scanned](https://lookscanned.io) egy könnyű, böngészőalapú alkalmazás, amely szkennelt PDF-hatásokat szimulál. Adatvédelemre tervezve lehetővé teszi fejlesztők, tervezők és mások számára, hogy valósághű szkennelési effekteket adjanak PDF-ekhez fizikai hardver nélkül.

## Miért a Hugo?

Miután több statikus oldal generátort értékeltünk a Look Scanned Blog számára, ezek a meggyőző okok miatt választottuk a Hugo-t:

1. **Villámgyors** - Go-val építve, a Hugo hihetetlen build sebességet nyújt
2. **Fejlesztőbarát** - Egyszerű konfiguráció intuitív tanulási görbével
3. **Gazdag Téma Ökoszisztéma** - Gyönyörű, testreszabható témák kiterjedt gyűjteménye
4. **Élénk Közösség** - Aktív közösségi támogatás és átfogó dokumentáció
5. **Elsőosztályú I18n** - Beépített nemzetköziesítési támogatás

## Lépésről Lépésre Beállítási Útmutató

### Hugo Telepítése

macOS felhasználók számára (Homebrew-n keresztül):

```bash
brew install hugo
```

Windows felhasználók számára (Chocolatey-n keresztül):

```bash
choco install hugo-extended
```

Linux felhasználók számára, nézze meg a telepítési útmutatót [itt](https://gohugo.io/installation/linux/).

### Új Oldal Létrehozása

Állítsa be Hugo oldalát ezekkel a parancsokkal:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Téma Hozzáadása

Telepítse a PaperMod témát git almodulként:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Frissítse a `config.toml` fájlt:

```toml
theme = "PaperMod"
```

### Nemzetköziesítés Konfigurálása

Adjon többnyelvű támogatást a `config.toml` fájlhoz:

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
  # További nyelvek...
```

### Tartalom Létrehozása

Hozza létre első blog bejegyzését:

```bash
hugo new posts/build-blog-using-hugo/index.hu.md
```

### Fejlesztői Szerver Futtatása

Indítsa el a helyi fejlesztői szervert:

```bash
hugo server -D
```

Látogassa meg a [http://localhost:1313](http://localhost:1313) címet az oldal előnézetéhez.

## Üzembe Helyezési Lehetőségek

Helyezze üzembe Hugo oldalát könnyedén GitHub Actions használatával:

1. **GitHub Pages**

   - Hozzon létre GitHub repository-t
   - Töltse fel Hugo oldalát
   - Engedélyezze a GitHub Pages-t a repository beállításokban
   - Konfigurálja a GitHub Actions-t automatikus üzembe helyezéshez

2. **Cloudflare Pages**
   - Kapcsolja össze GitHub repository-ját
   - Állítsa be a build parancsot `hugo`-ra
   - Konfigurálja a publish könyvtárat `public`-ként

## Téma Testreszabás

Egyszerűsítettük a felhasználói felületet a nyelvváltó eltávolításával az oldal fejlécéből. Módosított téma fájljainkat [itt](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html) találja.

## Következtetés

A Hugo kivételes alapot nyújt személyes blog építéséhez. A sebesség, rugalmasság és átfogó dokumentáció kombinációja kiváló választássá teszi bármilyen szintű fejlesztő számára. Ahogy jobban megismeri a Hugo-t, felfedez majd hatékony funkciókat egy igazán egyedi blogging élmény létrehozásához.

## Források

- [Hugo Dokumentáció](https://gohugo.io/documentation/)
- [Hugo PaperMod Téma](https://github.com/adityatelange/hugo-PaperMod)