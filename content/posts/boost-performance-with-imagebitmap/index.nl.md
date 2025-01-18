+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned verhoogt prestaties met 60% dankzij ImageBitmap'
summary = 'Ontdek hoe Look Scanned zijn prestaties verbetert door middel van asynchrone decodering en efficiënte weergave met ImageBitmap, zonder concessies te doen aan browsercompatibiliteit.'
description = 'Ontdek hoe Look Scanned zijn prestaties verbetert door middel van asynchrone decodering en efficiënte weergave met ImageBitmap, zonder concessies te doen aan browsercompatibiliteit.'
tags = ['prestatie-optimalisatie', 'imagebitmap', 'beeldverwerking', 'webontwikkeling']
+++

Bij de ontwikkeling van moderne webapplicaties zoals [Look Scanned](https://lookscanned.io) staat prestatie-optimalisatie voorop. Dit geldt in het bijzonder voor beeldverwerking. De `ImageBitmap`-interface is, hoewel nog niet breed toegepast, een krachtig instrument dat aanzienlijke prestatieverbeteringen mogelijk maakt. In dit artikel bespreken we de kernfuncties van `ImageBitmap`, de voordelen ervan en onze ervaringen met de implementatie in Look Scanned.

## Wat is ImageBitmap?

`ImageBitmap` is een HTML5-interface die specifiek is ontwikkeld voor efficiënte beeldverwerking. Het onderscheidende kenmerk is de mogelijkheid om beelddecodering en -verwerking buiten de hoofdthread uit te voeren, waardoor de renderbelasting aanzienlijk wordt verminderd en de algehele responsiviteit van de applicatie verbetert. Een `ImageBitmap`-object kan, zodra het is aangemaakt, direct worden gebruikt in rendercontexten zoals Canvas 2D of WebGL, wat het bijzonder geschikt maakt voor applicaties die veel beeldmateriaal verwerken.

## Waarom kozen we voor ImageBitmap?

Voorheen gebruikte Look Scanned `Blob` voor de overdracht van beeldgegevens tussen verwerkingsfuncties. `Blob` vereist echter bij elk gebruik opnieuw codering en decodering, wat de prestaties beperkt. `ImageBitmap` daarentegen biedt rechtstreekse toegang tot beeldgegevens, waardoor deze extra bewerkingen overbodig worden en de renderprestaties aanzienlijk verbeteren.

## Implementatiedetails

Omdat we de compatibiliteit met oudere browsers wilden behouden, was een volledige overstap naar `ImageBitmap` niet mogelijk. We kozen daarom voor een hybride aanpak die brede compatibiliteit waarborgt. Ondersteuningsdetails zijn te vinden op [caniuse.com](https://caniuse.com/createimagebitmap). Daarnaast gebruiken we, vanwege Safari's Canvas-beperkingen, WebAssembly (WASM) voor beeldverwerking, waarvoor `Blob` als invoerformaat nodig is.

Met deze overwegingen hebben we een geleidelijke hybride oplossing ontwikkeld die zowel `Blob` als `ImageBitmap` ondersteunt. Hieronder volgen de belangrijkste implementatiedetails:

### Beelden laden en decoderen

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Terugvallen op Blob als fallback
  return blob;
}
```

### WebAssembly-integratie

Voor geavanceerde verwerking sturen we de `Blob` naar de WASM-module, waardoor functionaliteit gewaarborgd blijft in browsers zonder `ImageBitmap`-ondersteuning. Hierbij renderen we eerst het beeld naar een Canvas en gebruiken vervolgens `canvas.toBlob` om het vereiste `Blob`-object te genereren.

### Alternatief rendersysteem

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

## Behaalde resultaten

Door de implementatie van `ImageBitmap` is de verwerkingstijd in Look Scanned teruggebracht van 50ms naar 20ms per beeld. Deze verbetering is vooral merkbaar bij het verwerken van gescande documenten, wat resulteert in een aanzienlijk soepelere en snellere gebruikerservaring.

## Interessante bevindingen

Tijdens de implementatie stuitten we op een opmerkelijk fenomeen: het maken van een nieuwe kopie van `ImageBitmap` voordat deze naar een Web Worker wordt verzonden, levert betere prestaties op dan het direct verzenden van het originele object. Dit is vermoedelijk te danken aan interne browseroptimalisaties voor overdraagbare objecten.

## Browserondersteuning

`ImageBitmap` wordt momenteel breed ondersteund in alle belangrijke moderne browsers, waaronder de nieuwste versies van Chrome, Firefox, Edge en Safari. Uitgebreide informatie over compatibiliteit is beschikbaar in de [`createImageBitmap`-documentatie op caniuse.com](https://caniuse.com/createimagebitmap).

## Conclusie en vooruitblik

De implementatie van `ImageBitmap` in Look Scanned heeft niet alleen gezorgd voor aanzienlijke prestatieverbeteringen, maar maakte ook asynchrone decodering, efficiënte weergave en betere integratie met Web Workers mogelijk. Hoewel `Blob`-ondersteuning voor oudere browsers voorlopig nog noodzakelijk blijft, zal de geleidelijke overgang naar `ImageBitmap` op lange termijn steeds meer voordelen opleveren.

Ervaar de verbeterde prestaties zelf op [Look Scanned](https://lookscanned.io)!
