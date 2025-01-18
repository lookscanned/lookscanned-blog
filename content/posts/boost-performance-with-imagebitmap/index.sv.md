+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned ökar prestandan med 60% genom ImageBitmap'
summary = 'Läs om hur Look Scanned optimerar sin prestanda med hjälp av asynkron avkodning och effektiv rendering via ImageBitmap, samtidigt som stödet för äldre webbläsare behålls.'
description = 'Läs om hur Look Scanned optimerar sin prestanda med hjälp av asynkron avkodning och effektiv rendering via ImageBitmap, samtidigt som stödet för äldre webbläsare behålls.'
tags = ['prestandaoptimering', 'imagebitmap', 'bildhantering', 'webbutveckling']
+++

I utvecklingen av moderna webbapplikationer som [Look Scanned](https://lookscanned.io) är prestandaoptimering högsta prioritet. Detta gäller särskilt vid bildhantering. `ImageBitmap`-gränssnittet är, trots att det ännu inte används brett, ett kraftfullt verktyg som kan ge märkbara prestandaförbättringar. I denna artikel beskriver vi de viktigaste funktionerna i `ImageBitmap`, dess fördelar och våra erfarenheter av implementeringen i Look Scanned.

## Vad är ImageBitmap?

`ImageBitmap` är ett HTML5-gränssnitt särskilt utvecklat för effektiv bildhantering. Dess främsta styrka är förmågan att utföra bildavkodning och bearbetning utanför huvudtråden, vilket avsevärt minskar renderingsbelastningen och förbättrar applikationens övergripande responstid. Ett skapat `ImageBitmap`-objekt kan användas direkt i renderingssammanhang som Canvas 2D eller WebGL, vilket gör det perfekt för applikationer som hanterar stora mängder bilder.

## Varför valde vi ImageBitmap?

Tidigare använde Look Scanned `Blob` för att överföra bilddata mellan bearbetningsfunktioner. `Blob` kräver dock kodning och avkodning vid varje användning, vilket hämmar prestandan. `ImageBitmap` ger istället direkt åtkomst till bilddata, vilket eliminerar dessa extra steg och ger betydande prestandavinster vid rendering.

## Implementationsdetaljer

Eftersom vi behövde behålla kompatibiliteten med äldre webbläsare var en fullständig övergång till `ImageBitmap` inte genomförbar. Vi valde därför en hybridlösning som säkerställer bred kompatibilitet. Information om webbläsarstöd finns på [caniuse.com](https://caniuse.com/createimagebitmap). På grund av Safaris begränsningar gällande Canvas använder vi dessutom WebAssembly (WASM) för bildhantering, vilket kräver `Blob` som indata.

Med dessa förutsättningar utvecklade vi en stegvis hybridlösning som stödjer både `Blob` och `ImageBitmap`. Här följer de viktigaste implementationsdetaljerna:

### Bildladdning och avkodning

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Återgå till Blob som reservlösning
  return blob;
}
```

### WebAssembly-integration

För avancerad bearbetning skickar vi `Blob` till WASM-modulen, vilket säkerställer funktionalitet i webbläsare utan `ImageBitmap`-stöd. I denna process renderar vi först bilden till en Canvas och använder sedan `canvas.toBlob` för att skapa det nödvändiga `Blob`-objektet.

### Alternativt renderingssystem

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

## Uppnådda resultat

Implementationen av `ImageBitmap` har reducerat bildbehandlingstiden i Look Scanned från 50 ms till 20 ms per bild. Denna förbättring är särskilt påtaglig vid hantering av skannade dokument, vilket ger en markant smidigare och snabbare användarupplevelse.

## Intressanta upptäckter

Under implementationsarbetet gjorde vi en spännande upptäckt: att skapa en ny kopia av `ImageBitmap` innan den skickas till en Web Worker ger bättre prestanda än att skicka originalobjektet direkt. Detta beror sannolikt på webbläsarens interna optimeringar för överförbara objekt.

## Webbläsarstöd

`ImageBitmap` har idag brett stöd i alla större moderna webbläsare, inklusive de senaste versionerna av Chrome, Firefox, Edge och Safari. Detaljerad information om kompatibilitet finns i [`createImageBitmap`-dokumentationen på caniuse.com](https://caniuse.com/createimagebitmap).

## Slutsats och framtidsutsikter

Implementationen av `ImageBitmap` i Look Scanned har inte bara medfört betydande prestandaförbättringar utan också möjliggjort asynkron avkodning, effektiv rendering och bättre integration med Web Workers. Även om `Blob`-stöd fortfarande behövs för äldre webbläsare kommer den gradvisa övergången till `ImageBitmap` att fortsätta ge viktiga fördelar på lång sikt.

Testa prestandaförbättringarna själv på [Look Scanned](https://lookscanned.io)!
