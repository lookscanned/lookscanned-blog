+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Amélioration de 60% des performances de Look Scanned avec ImageBitmap'
summary = "Découvrez comment Look Scanned optimise ses performances grâce au décodage asynchrone et au rendu efficace d''ImageBitmap, tout en maintenant la compatibilité avec les anciens navigateurs."
description = "Découvrez comment Look Scanned optimise ses performances grâce au décodage asynchrone et au rendu efficace d''ImageBitmap, tout en maintenant la compatibilité avec les anciens navigateurs."
tags = ['optimisation', 'imagebitmap', "traitement d''images", 'développement web']
+++

Dans le développement d'applications web modernes comme [Look Scanned](https://lookscanned.io), l'optimisation des performances joue un rôle crucial, particulièrement dans le traitement des images. L'interface `ImageBitmap` est un outil puissant, bien que sous-utilisé, qui permet d'obtenir des améliorations substantielles des performances. Dans cet article, nous examinerons les caractéristiques principales d'`ImageBitmap`, ses avantages et notre approche d'implémentation dans Look Scanned.

## Qu'est-ce qu'ImageBitmap ?

`ImageBitmap` est une interface HTML5 conçue pour le traitement efficace des images. Sa caractéristique principale est sa capacité à effectuer le décodage et le traitement des images en dehors du thread principal, ce qui réduit non seulement la charge de rendu, mais améliore également la réactivité globale de l'application. Une fois créé, un objet `ImageBitmap` peut être utilisé directement dans des contextes de rendu comme Canvas 2D ou WebGL, ce qui en fait la solution idéale pour les applications manipulant de nombreuses images.

## Pourquoi avoir choisi ImageBitmap ?

Auparavant, Look Scanned utilisait `Blob` pour transférer les données d'image entre les fonctions de traitement. Cependant, `Blob` n'est pas optimal pour l'optimisation des performances, car il nécessite des étapes d'encodage et de décodage à chaque utilisation. En revanche, `ImageBitmap` offre un accès direct aux données de l'image, évitant ces opérations redondantes et améliorant considérablement les performances de rendu.

## Notre implémentation

En raison de la nécessité de maintenir la compatibilité avec les anciens navigateurs, nous ne pouvons pas migrer entièrement vers `ImageBitmap`. Cette approche hybride nous permet d'assurer une large compatibilité. Vous pouvez consulter les détails de compatibilité sur [caniuse.com](https://caniuse.com/createimagebitmap). De plus, en raison des limitations de Safari avec canvas, nous utilisons WebAssembly (WASM) pour le traitement des images, qui nécessite `Blob` comme format d'entrée.

Nous avons donc développé une solution hybride progressive qui prend en charge à la fois `Blob` et `ImageBitmap`. Voici les principaux détails de l'implémentation :

### Chargement et décodage d'images

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Repli sur Blob
  return blob;
}
```

### Intégration WebAssembly

Pour le traitement avancé, nous transférons `Blob` au module WASM pour assurer la fonctionnalité dans les navigateurs ne prenant pas en charge `ImageBitmap`. Le processus consiste à d'abord dessiner l'image sur un canvas, puis à utiliser `canvas.toBlob` pour obtenir l'objet `Blob` nécessaire.

### Système de rendu alternatif

```typescript
async function renderImage(canvas, imageUrl) {
  const ctx = canvas.getContext("2d");
  const image = await loadImage(imageUrl);
  if (image instanceof ImageBitmap) {
    ctx.drawImage(image, 0, 0);
  } else {
    const img = new Image();
    img.src = URL.createObjectURL(image);
    img.onload = () => ctx.drawImage(img, 0, 0);
  }
}
```

## Améliorations des performances

L'intégration d'`ImageBitmap` a permis à Look Scanned de réduire considérablement le temps de traitement des images, passant de 50ms à 20ms par image. Cette amélioration se traduit par une expérience utilisateur nettement plus fluide et réactive, particulièrement lors du traitement de documents numérisés.

## Découvertes intéressantes

Lors de l'implémentation, nous avons fait une découverte surprenante : créer une nouvelle copie d'`ImageBitmap` avant de la transférer à un Web Worker offre de meilleures performances que de transférer directement l'objet original. Cela est probablement dû à des optimisations spécifiques du navigateur pour les objets transférables.

## Compatibilité avec les navigateurs

Actuellement, `ImageBitmap` est largement pris en charge par les navigateurs modernes, y compris les dernières versions de Chrome, Firefox, Edge et Safari. Vous pouvez trouver des informations détaillées sur la compatibilité dans la [documentation d'`createImageBitmap` sur caniuse.com](https://caniuse.com/createimagebitmap).

## Conclusion et perspectives

L'intégration d'`ImageBitmap` dans Look Scanned n'a pas seulement apporté des améliorations significatives des performances, mais a également permis d'implémenter le décodage asynchrone, le rendu efficace et une meilleure compatibilité avec les Web Workers. Bien que nous devions maintenir le support de `Blob` pour les anciens navigateurs, la migration progressive vers `ImageBitmap` continuera d'apporter des avantages considérables à long terme.

Visitez [Look Scanned](https://lookscanned.io) et constatez par vous-même les améliorations de performances !
