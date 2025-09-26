+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Zvýšení výkonu o 60% pomocí ImageBitmap v Look Scanned'
summary = 'Prozkoumejte, jak integrace ImageBitmap do Look Scanned zvyšuje výkon umožněním asynchronního dekódování a efektivního renderování, při zachování kompatibility se staršími prohlížeči.'
description = 'Prozkoumejte, jak integrace ImageBitmap do Look Scanned zvyšuje výkon umožněním asynchronního dekódování a efektivního renderování, při zachování kompatibility se staršími prohlížeči.'
tags = ['výkon', 'imagebitmap', 'obrázek', 'prohlížeč']
+++

Optimalizace výkonu je klíčová při vytváření moderních webových aplikací jako [Look Scanned](https://lookscanned.io), zejména při práci s obrázky. Mocným, ale nedostatečně využívaným nástrojem pro dosažení významného zlepšení výkonu je rozhraní `ImageBitmap`. V tomto blogovém příspěvku prozkoumáme, co je `ImageBitmap`, proč je efektivní a jak byl integrován do Look Scanned pro zvýšení výkonu renderování.

## Co je ImageBitmap?

`ImageBitmap` je HTML5 rozhraní, které představuje bitmapový obrázek. Umožňuje efektivní dekódování a zpracování obrázků mimo hlavní vlákno, čím snižuje overhead renderování a zlepšuje odezvu. Jakmile je vytvořen, objekt `ImageBitmap` může být přímo použit v kontextech renderování jako Canvas 2D nebo WebGL, což z něj činí mocný nástroj pro aplikace náročné na obrázky.

## Proč používat ImageBitmap v Look Scanned?

Dříve se Look Scanned spoléhal na `Blob` pro předávání obrazových dat mezi zpracovatelskými funkcemi. Nicméně `Blob` není ideální pro optimalizaci výkonu, protože vyžaduje kroky kódování a dekódování. Na rozdíl od toho `ImageBitmap` poskytuje přímý přístup k obrazovým datům, eliminuje redundantní dekódovací operace a významně zlepšuje výkon renderování.

## Jak používáme ImageBitmap v Look Scanned

Look Scanned podporuje starší prohlížeče, takže nemůže zcela přejít na `ImageBitmap` bez udržení podpory pro `Blob`. Tato dvojí podpora zajišťuje kompatibilitu napříč širokou škálou prohlížečů. Pro podrobnosti o kompatibilitě prohlížečů se podívejte na [caniuse.com](https://caniuse.com/createimagebitmap). Dodatečně, omezená podpora canvas v Safari vyžaduje používání WebAssembly (WASM) pro zpracování obrázků, což vyžaduje `Blob` jako vstupní formát.

Pro správu tohoto používá Look Scanned hybridní přístup, který podporuje jak `Blob`, tak `ImageBitmap`, přičemž postupně migruje k druhému. Níže jsou klíčové detaily implementace:

### Načítání a dekódování

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Záložní použití Blob
  return blob;
}
```

### Integrace WebAssembly

Pro pokročilé zpracování je `Blob` předán do WASM k zajištění funkčnosti i v nepodporovaných prohlížečích. Musíme nejprve nakreslit obrázek na canvas a pak použít `canvas.toBlob` k získání `Blob`.

### Záložní renderování

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

## Zlepšení výkonu

Integrací `ImageBitmap` dosáhl Look Scanned významného snížení času zpracování obrázků—z 50ms na 20ms na obrázek. Toto zlepšení se promítá do hladší a více responzivní uživatelské zkušenosti, zejména pro úkoly zahrnující naskenované dokumenty.

## Neočekávané objevy

Během implementace jsme objevili, že vytvoření nové kopie `ImageBitmap` pomocí `createImageBitmap` před jejím přenesením do workeru poskytuje lepší výkon než přímé předání původního objektu. Toto chování může být způsobeno optimalizacemi prohlížečového enginu pro přenositelné objekty.

## Podpora prohlížečů

`ImageBitmap` je podporován ve většině moderních prohlížečů, včetně nejnovějších verzí Chrome, Firefox, Edge a Safari. Pro podrobnosti o kompatibilitě zkontrolujte [`createImageBitmap` na caniuse.com](https://caniuse.com/createimagebitmap).

## Závěr

Integrace `ImageBitmap` do Look Scanned výrazně zlepšila výkon umožněním asynchronního dekódování, efektivního renderování a lepší kompatibility s Web Workers. Zatímco udržení podpory pro starší prohlížeče vyžaduje pokračující používání `Blob`, postupná migrace na `ImageBitmap` zajišťuje dlouhodobé výkonové výhody.

Využitím těchto pokroků poskytuje [Look Scanned](https://lookscanned.io) rychlejší, více responzivní zážitek pro své uživatele. Vyzkoušejte to a poznejte rozdíl na vlastní kůži!