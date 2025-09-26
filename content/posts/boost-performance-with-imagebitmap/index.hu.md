+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Teljesítmény Növelése 60%-kal ImageBitmap-pel a Look Scanned-ben'
summary = 'Fedezze fel, hogy az ImageBitmap integrálása a Look Scanned-be hogyan javítja a teljesítményt az aszinkron dekódolás és hatékony renderelés lehetővé tételével, miközben megőrzi a régebbi böngészőkkel való kompatibilitást.'
description = 'Fedezze fel, hogy az ImageBitmap integrálása a Look Scanned-be hogyan javítja a teljesítményt az aszinkron dekódolás és hatékony renderelés lehetővé tételével, miközben megőrzi a régebbi böngészőkkel való kompatibilitást.'
tags = ['teljesítmény', 'imagebitmap', 'kép', 'böngésző']
+++

A teljesítmény-optimalizálás kulcsfontosságú a modern webalkalmazások, például a [Look Scanned](https://lookscanned.io) építésekor, különösen képek kezelésekor. Egy hatékony, de kevésbé kihasznált eszköz a jelentős teljesítményjavulások eléréséhez az `ImageBitmap` interfész. Ebben a blogbejegyzésben felfedezzük, mi az `ImageBitmap`, miért hatékony, és hogyan lett integrálva a Look Scanned-be a renderelési teljesítmény javítása érdekében.

## Mi az ImageBitmap?

Az `ImageBitmap` egy HTML5 interfész, amely egy bitmap képet reprezentál. Lehetővé teszi a hatékony képdekódolást és -feldolgozást a főszálon kívül, csökkentve a renderelési többletterhelést és javítva a reakcióképességet. Létrehozás után az `ImageBitmap` objektum közvetlenül használható renderelési kontextusokban, mint például a Canvas 2D vagy WebGL, ami hatékony eszközzé teszi a képintenzív alkalmazásokhoz.

## Miért Használjuk az ImageBitmap-et a Look Scanned-ben?

Korábban a Look Scanned a `Blob`-ra támaszkodott a képadatok feldolgozási funkciók közötti átadásához. A `Blob` azonban nem ideális a teljesítmény-optimalizáláshoz, mivel kódolási és dekódolási lépéseket igényel. Ezzel szemben az `ImageBitmap` közvetlen hozzáférést biztosít a képadatokhoz, kiküszi a redundáns dekódolási műveleteket és jelentősen javítja a renderelési teljesítményt.

## Hogyan Használjuk az ImageBitmap-et a Look Scanned-ben

A Look Scanned támogatja a régebbi böngészőket, így nem tud teljesen áttérni az `ImageBitmap`-re a `Blob` támogatás fenntartása nélkül. Ez a kettős támogatás biztosítja a kompatibilitást böngészők széles skáláján. A böngésző-kompatibilitás részleteiért lásd: [caniuse.com](https://caniuse.com/createimagebitmap). Továbbá a Safari korlátozott canvas támogatása WebAssembly (WASM) használatát teszi szükségessé a képfeldolgozáshoz, ami `Blob`-ot igényel bemeneti formátumként.

Ennek kezeléséhez a Look Scanned hibrid megközelítést alkalmaz, amely támogatja mind a `Blob`-ot, mind az `ImageBitmap`-et, miközben fokozatosan átáll az utóbbira. Íme a főbb implementációs részletek:

### Betöltés és Dekódolás

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Visszaesés Blob használatára
  return blob;
}
```

### WebAssembly Integráció

A fejlett feldolgozáshoz a `Blob` átadásra kerül a WASM-nak a funkcionalitás biztosítása érdekében, még a nem támogatott böngészőkben is. Először rajzolnunk kell a képet a canvas-ra, majd `canvas.toBlob`-ot kell használni a `Blob` megszerzéséhez.

### Visszaesési Renderelés

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

## Teljesítményjavulások

Az `ImageBitmap` integrálásával a Look Scanned jelentős csökkenést ért el a képfeldolgozási időkben—50ms-ról 20ms-ra képenként. Ez a javulás simább és reakcióképesebb felhasználói élményt eredményez, különösen a beolvasott dokumentumokat érintő feladatoknál.

## Váratlan Felfedezések

Az implementáció során felfedztük, hogy egy új `ImageBitmap` másolat létrehozása a `createImageBitmap` használatával, mielőtt átvinnénk egy worker-hez, jobb teljesítményt nyújt, mint az eredeti objektum közvetlen átadása. Ez a viselkedés a böngésző motor optimalizációinak köszönhető az átvihetõ objektumoknál.

## Böngésző Támogatás

Az `ImageBitmap` támogatott a legtöbb modern böngészőben, beleértve a Chrome, Firefox, Edge és Safari legújabb verzióit. A kompatibilitás részleteiért nézze meg a [`createImageBitmap` a caniuse.com-on](https://caniuse.com/createimagebitmap).

## Következtetés

Az `ImageBitmap` Look Scanned-be való integrálása jelentősen javította a teljesítményt az aszinkron dekódolás, hatékony renderelés és jobb Web Workers kompatibilitás lehetővé tételével. Míg a régebbi böngészők támogatásának fenntartása továbbra is megköveteli a `Blob` használatát, a fokozatos áttérés az `ImageBitmap`-re hosszú távú teljesítményelőnyöket biztosít.

Ezen fejlesztések kihasználásával a [Look Scanned](https://lookscanned.io) gyorsabb, reakcióképesebb élményt nyújt felhasználóinak. Próbálja ki, és tapasztalja meg a különbséget saját maga!