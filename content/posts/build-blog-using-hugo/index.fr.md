---
title: "Créer son Blog avec Hugo pour Look Scanned"
date: "2025-01-17T14:22:31+08:00"
description: "Guide complet pour créer un blog moderne avec Hugo, le générateur de sites statiques. De l'installation au déploiement, en passant par la configuration et la personnalisation - un guide adapté à tous les niveaux."
tags: ["hugo", "blog", "web", "site-statique", "tutoriel"]
---

## Qu'est-ce que Look Scanned ?

[Look Scanned](https://lookscanned.io) est une application web minimaliste qui reproduit l'apparence de documents PDF numérisés. Développée avec un accent particulier sur la confidentialité, elle permet aux développeurs, designers et autres utilisateurs de créer des PDF d'aspect numérisé sans matériel physique.

## Pourquoi Hugo ?

Après avoir testé plusieurs générateurs de sites statiques pour notre blog, notre choix s'est porté sur Hugo pour plusieurs raisons :

1. **Rapidité Exceptionnelle** - Développé en Go, Hugo se démarque par sa vitesse de génération
2. **Simplicité d'Utilisation** - Une prise en main intuitive et progressive
3. **Richesse des Thèmes** - Une vaste bibliothèque de thèmes élégants et adaptables
4. **Communauté Active** - Un écosystème dynamique et une documentation riche
5. **I18n de Qualité** - Une gestion native et efficace du multilingue

## Guide d'Installation

### Installer Hugo

Sous macOS (via Homebrew) :

```bash
brew install hugo
```

Sous Windows (via Chocolatey) :

```bash
choco install hugo-extended
```

Sous Linux, suivez le guide d'installation disponible [ici](https://gohugo.io/installation/linux/).

### Créer un Nouveau Site

Lancez ces commandes pour initialiser votre site :

```bash
hugo new site lookscanned-blog
cd lookscanned-blog
```

### Ajouter un Thème

Installez le thème PaperMod en tant que sous-module Git :

```bash
git init
git submodule add https://github.com/adityatelange/hugo-PaperMod themes/PaperMod
```

Éditez votre `config.toml` :

```toml
theme = "PaperMod"
```

### Gestion du Multilingue

Configurez le support multilingue dans votre `config.toml` :

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
  # Autres langues...
```

### Rédiger du Contenu

Créez votre premier article de blog :

```bash
hugo new posts/build-blog-using-hugo/index.fr.md
```

### Lancer l'Environnement Local

Démarrez le serveur de développement :

```bash
hugo server -D
```

Rendez-vous sur [http://localhost:1313](http://localhost:1313) pour prévisualiser votre site.

## Mise en Production

Déployez votre blog simplement avec GitHub Actions :

1. **GitHub Pages**

   - Créez un dépôt sur GitHub
   - Envoyez votre code
   - Activez GitHub Pages dans les réglages
   - Mettez en place le déploiement automatique via GitHub Actions

2. **Cloudflare Pages**
   - Connectez votre dépôt GitHub
   - Indiquez `hugo` comme commande de build
   - Spécifiez `public` comme dossier de publication

## Personnalisation

Pour épurer l'interface, nous avons retiré le sélecteur de langue de l'en-tête. Retrouvez nos modifications du thème [ici](https://github.com/lookscanned/lookscanned-blog/blob/main/layouts/partials/header.html).

## Conclusion

Hugo offre une base solide pour créer son blog personnel. Alliant vitesse, souplesse et documentation détaillée, il convient parfaitement aux développeurs de tout niveau. Au fil de votre utilisation, vous découvrirez ses fonctionnalités avancées pour créer une expérience de blog sur mesure.

## Ressources

- [Documentation Hugo](https://gohugo.io/documentation/)
- [Thème PaperMod](https://github.com/adityatelange/hugo-PaperMod)
