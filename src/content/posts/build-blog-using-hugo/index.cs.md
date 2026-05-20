---
title: "Vytváření blogu Look Scanned s Hugo"
date: "2025-01-17T14:22:31+08:00"
description: "Komplexní průvodce vytvářením moderního blogu pomocí generátoru statických stránek Hugo, pokrývající instalaci, konfiguraci, nasazení a tipy pro přizpůsobení pro začátečníky i zkušené vývojáře."
summary: "Komplexní průvodce vytvářením moderního blogu pomocí generátoru statických stránek Hugo, pokrývající instalaci, konfiguraci, nasazení a tipy pro přizpůsobení pro začátečníky i zkušené vývojáře."
tags: ["hugo", "blog", "web", "statické-stránky", "návod"]
---

## Co je Look Scanned?

[Look Scanned](https://lookscanned.io) je lehká aplikace v prohlížeči, která simuluje efekty skenovaných PDF. Je navržena s důrazem na soukromí a umožňuje vývojářům, designérům i komukoli dalšímu přidávat autentické skenovací efekty do PDF bez potřeby fyzického hardwaru.

## Proč Hugo?

Po vyhodnocení několika generátorů statických stránek pro blog Look Scanned jsme si vybrali Hugo z těchto přesvědčivých důvodů:

1. **Bleskurychle** - Postaveno na Go, Hugo nabízí neuvěřitelnou rychlost sestavování
2. **Developer-friendly** - Jednoduchá konfigurace s intuitivní křivkou učení
3. **Bohatý ekosystém témat** - Rozsáhlá kolekce krásných, přizpůsobitelných témat
4. **Živá komunita** - Aktivní podpora komunity a komplexní dokumentace
5. **Prvotřídní I18n** - Vestavěná podpora internacionalizace

## Průvodce nastavením krok za krokem

### Instalace Hugo

Pro uživatele macOS (přes Homebrew):

```bash
brew install hugo
```

Pro uživatele Windows (přes Chocolatey):

```bash
choco install hugo-extended
```

Pro uživatele Linuxu se podívejte na návod k instalaci [zde](https://gohugo.io/installation/linux/).

### Vytváření nové stránky

Nastavte svou stránku Hugo těmito příkazy:

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Přidávání tématu

Nainstalujte téma PaperMod jako git submodul:

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Aktualizujte svůj `config.toml`:

```toml
theme = "PaperMod"
```

### Konfigurace internacionalizace

Přidejte vícejazyčnou podporu do svého `config.toml`:

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
  # Další jazyky...
```

### Vytváření obsahu

Vytvořte svůj první příspěvek na blog:

```bash
hugo new posts/build-blog-using-hugo/index.cs.md
```

### Spuštění vývojového serveru

Spusťte místní vývojový server:

```bash
hugo server -D
```

Navštivte [http://localhost:1313](http://localhost:1313) pro náhled vaší stránky.

## Možnosti nasazení

Nasaďte svou stránku Hugo bez námahy pomocí GitHub Actions:

1. **GitHub Pages**

   - Vytvořte GitHub repozitář
   - Pushněte svou stránku Hugo
   - Povolte GitHub Pages v nastavení repozitáře
   - Nakonfigurujte GitHub Actions pro automatické nasazení

2. **Cloudflare Pages**
   - Připojte svůj GitHub repozitář
   - Nastavte build příkaz na `hugo`
   - Nakonfigurujte publish adresář jako `public`

## Přizpůsobení tématu

Zjednodušili jsme uživatelské rozhraní odstraněním přepínače jazyků ze záhlaví stránky. Naše upravené soubory tématu najdete [zde](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Závěr

Hugo poskytuje výjimečný základ pro vytváření osobního blogu. Jeho kombinace rychlosti, flexibility a komplexní dokumentace z něj dělá vynikající volbu pro vývojáře na jakékoli úrovni dovedností. Jak se s Hugo lépe seznámíte, objevíte mocné funkce pro vytvoření skutečně jedinečného blogového zážitku.

## Zdroje

- [Dokumentace Hugo](https://gohugo.io/documentation/)
- [Téma Hugo PaperMod](https://github.com/adityatelange/hugo-PaperMod)