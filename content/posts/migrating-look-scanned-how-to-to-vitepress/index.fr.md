---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Migration de la documentation Look Scanned How-To vers VitePress avec sécurité renforcée"
summary: "Découvrez comment Look Scanned a mis à niveau son infrastructure de documentation en migrant de Vue + Vite vers VitePress, tout en implémentant npm Trusted Publishers avec OIDC pour des publications de paquets sécurisées sans jeton."
description: "Découvrez comment Look Scanned a mis à niveau son infrastructure de documentation en migrant de Vue + Vite vers VitePress, tout en implémentant npm Trusted Publishers avec OIDC pour des publications de paquets sécurisées sans jeton."
tags: ["vitepress", "documentation", "sécurité", "cicd", "npm"]
---

Chez [Look Scanned](https://lookscanned.io), nous améliorons constamment notre infrastructure pour fournir une meilleure documentation et des pratiques de développement plus sécurisées. Aujourd'hui, nous sommes ravis de partager les détails d'une mise à niveau importante de notre site de documentation : la migration d'une application personnalisée Vue + Vite vers VitePress, tout en améliorant simultanément notre sécurité CI/CD avec npm Trusted Publishers.

## 📚 Pourquoi nous avons migré vers VitePress

Notre site de documentation ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) sert de guide d'utilisation complet pour Look Scanned. Bien que notre configuration précédente Vue + Vite fonctionnait bien, nous avons reconnu que VitePress serait un meilleur choix pour un site de documentation axé sur le contenu.

### Qu'est-ce que VitePress ?

VitePress est un générateur de site statique spécialement conçu pour la documentation. Construit sur Vite et Vue 3, il combine le meilleur des deux mondes : une expérience de développement ultra-rapide avec des fonctionnalités de documentation puissantes prêtes à l'emploi.

### Avantages clés de la migration

**🎯 Meilleure architecture pour la documentation**
- **Routage basé sur les fichiers** : Chaque fichier markdown devient automatiquement une page, rendant l'organisation du contenu intuitive
- **Fonctionnalités de documentation intégrées** : Table des matières, recherche, internationalisation et plus encore sont préconfigurés
- **Génération de site statique** : Le HTML pré-rendu offre un excellent SEO et des chargements de page instantanés

**⚡ Expérience de développeur améliorée**
- **Rechargement à chaud instantané** : Les modifications apparaissent immédiatement pendant le développement
- **Markdown d'abord** : Concentrez-vous sur le contenu, pas sur la structure des composants
- **Support des composants Vue** : Lorsque nécessaire, nous pouvons toujours utiliser des composants Vue personnalisés dans le markdown

**🔧 Maintenance plus facile**
- **Structure plus claire** : La documentation suit les conventions, réduisant la charge cognitive pour les contributeurs
- **Builds plus stables** : La structure opiniâtre de VitePress conduit à des builds plus reproductibles
- **Meilleure collaboration** : Les membres de l'équipe peuvent contribuer à la documentation sans connaissance approfondie de Vue

## 🔒 Sécurité renforcée avec npm Trusted Publishers

Parallèlement à la migration VitePress, nous avons implémenté une amélioration de sécurité critique : **npm Trusted Publishers utilisant l'authentification OIDC**.

### Le problème avec les jetons npm traditionnels

Auparavant, la publication de paquets sur npm nécessitait le stockage d'un `NPM_TOKEN` de longue durée dans les secrets du dépôt. Cette approche présente plusieurs inconvénients :

- **Risque de sécurité** : Les jetons peuvent être accidentellement exposés ou compromis
- **Surcharge de gestion** : Les jetons nécessitent une rotation et des mises à jour manuelles
- **Défis d'audit** : Difficile de suivre qui a publié quoi et quand

### La solution : Publication de confiance basée sur OIDC

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) exploite OpenID Connect (OIDC) pour permettre une publication sécurisée sans jeton directement depuis GitHub Actions. Voici comment cela fonctionne :

1. **Pas de secrets stockés** : Au lieu de sauvegarder des jetons, GitHub Actions demande des identifiants de courte durée à npm
2. **Vérification d'identité** : npm vérifie que la demande de publication provient du dépôt GitHub autorisé
3. **Gestion automatique des identifiants** : Les identifiants sont automatiquement émis et expirent rapidement

### Avantages concrets

Ce changement apporte des améliorations immédiates à notre flux de travail de développement :

- ✅ **Plus de gestion de jetons** : Plus besoin de créer, stocker ou faire tourner les jetons npm
- ✅ **Surface d'attaque réduite** : Les identifiants de courte durée minimisent le risque d'exposition
- ✅ **Meilleure auditabilité** : Chaque action de publication est liée à une exécution GitHub Actions spécifique
- ✅ **Meilleures pratiques modernes** : S'aligne sur les principes de sécurité zero-trust

**Note technique** : Pour prendre en charge npm Trusted Publishers, nous avons mis à jour notre configuration CI pour utiliser Node.js `lts/*`, garantissant que nous avons la dernière version npm requise pour l'authentification OIDC.

## 📦 Chronologie des versions

La migration a été complétée à travers trois versions le 19 décembre 2025 :

- **v2.0.0** : Migration principale de Vue + Vite vers VitePress (changement majeur)
- **v2.0.1** : Correction CI pour prendre en charge npm Trusted Publishers avec la version appropriée de Node.js
- **v2.0.2** : Amélioration des performances en déplaçant `@fontsource/noto-mono` vers devDependencies

## 🌍 Support multilingue continu

Une note importante : notre documentation génère des PDF multilingues qui ont toujours été utilisés comme fichiers d'exemple dans l'application principale Look Scanned (disponible sur [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Cette migration VitePress ne change pas cette fonctionnalité - elle fournit simplement une meilleure base pour maintenir et améliorer notre infrastructure de documentation.

## 💡 Ce que cela signifie pour les utilisateurs

Si vous utilisez la documentation de Look Scanned :

- **Même accès, meilleure expérience** : La documentation reste à la même URL avec un chargement et une navigation améliorés
- **Plus fiable** : La génération de site statique signifie des chargements plus rapides et une meilleure stabilité
- **Meilleure recherche et découverte** : La recherche intégrée de VitePress vous aide à trouver des réponses plus rapidement
- **Support PDF continu** : La génération de PDF multilingues se poursuit comme avant

## 🚀 Quelle est la suite

Avec la mise à niveau de l'infrastructure terminée, nous nous concentrons sur les améliorations de contenu :

- **Cas d'utilisation élargis** : Plus d'exemples pratiques et de guides étape par étape
- **Améliorations de cohérence** : Affiner la terminologie multilingue pour plus de clarté
- **Exportation PDF améliorée** : Améliorer l'expérience de génération de PDF multi-navigateurs

## Essayez Look Scanned aujourd'hui

Look Scanned fournit des effets de numérisation PDF basés sur le navigateur, axés sur la confidentialité, sans télécharger vos fichiers nulle part. La documentation améliorée facilite plus que jamais la prise en main.

👉 **Visitez [lookscanned.io](https://lookscanned.io) pour expérimenter la numérisation de documents rapide et sécurisée dans votre navigateur.**
