+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned migliora le prestazioni del 60% con ImageBitmap'
summary = 'Scopri come Look Scanned ottimizza le prestazioni grazie alla decodifica asincrona e al rendering efficiente di ImageBitmap, garantendo la compatibilità con i browser meno recenti.'
description = 'Scopri come Look Scanned ottimizza le prestazioni grazie alla decodifica asincrona e al rendering efficiente di ImageBitmap, garantendo la compatibilità con i browser meno recenti.'
tags = ['ottimizzazione prestazioni', 'imagebitmap', 'elaborazione immagini', 'sviluppo web']
+++

Nello sviluppo di applicazioni web moderne come [Look Scanned](https://lookscanned.io), l'ottimizzazione delle prestazioni gioca un ruolo fondamentale, in particolare nell'elaborazione delle immagini. L'interfaccia `ImageBitmap` rappresenta uno strumento potente, seppur ancora poco sfruttato, che consente di ottenere notevoli miglioramenti prestazionali. In questo articolo, analizzeremo le caratteristiche chiave di `ImageBitmap`, i suoi vantaggi e il nostro approccio implementativo in Look Scanned.

## Che cos'è ImageBitmap?

`ImageBitmap` è un'interfaccia HTML5 pensata per l'elaborazione ottimizzata delle immagini. Il suo punto di forza sta nella capacità di eseguire la decodifica e l'elaborazione delle immagini fuori dal thread principale, alleggerendo il carico di rendering e migliorando la reattività generale dell'applicazione. Una volta istanziato, un oggetto `ImageBitmap` è utilizzabile direttamente nei contesti di rendering come Canvas 2D o WebGL, rendendolo perfetto per applicazioni che manipolano numerose immagini.

## Perché abbiamo optato per ImageBitmap?

Inizialmente, Look Scanned utilizzava `Blob` per il trasferimento dei dati delle immagini tra le funzioni di elaborazione. Tuttavia, `Blob` non è la scelta ottimale in termini prestazionali, poiché richiede continui passaggi di codifica e decodifica. `ImageBitmap`, invece, fornisce accesso diretto ai dati dell'immagine, eliminando queste operazioni ridondanti e migliorando sensibilmente le prestazioni di rendering.

## La nostra implementazione

Considerata la necessità di mantenere la compatibilità con i browser meno recenti, non possiamo effettuare una migrazione completa a `ImageBitmap`. Questo approccio ibrido ci permette di garantire un'ampia compatibilità. Per i dettagli sulla compatibilità, consultare [caniuse.com](https://caniuse.com/createimagebitmap). Inoltre, date le limitazioni di Safari con canvas, utilizziamo WebAssembly (WASM) per l'elaborazione delle immagini, che necessita di `Blob` come formato di input.

Abbiamo quindi sviluppato una soluzione ibrida evolutiva che supporta sia `Blob` che `ImageBitmap`. Ecco i dettagli tecnici principali:

### Caricamento e decodifica immagini

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Soluzione di fallback con Blob
  return blob;
}
```

### Integrazione WebAssembly

Per l'elaborazione avanzata, trasferiamo `Blob` al modulo WASM per garantire la funzionalità nei browser che non supportano `ImageBitmap`. Il processo prevede inizialmente il rendering dell'immagine su canvas, seguito dall'utilizzo di `canvas.toBlob` per ottenere l'oggetto `Blob` necessario.

### Sistema di rendering alternativo

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

## Miglioramenti prestazionali

L'integrazione di `ImageBitmap` ha consentito a Look Scanned di ridurre notevolmente i tempi di elaborazione delle immagini, passando da 50ms a 20ms per immagine. Questo miglioramento si traduce in un'esperienza utente decisamente più fluida e reattiva, specialmente durante l'elaborazione di documenti digitalizzati.

## Scoperte interessanti

Durante l'implementazione, abbiamo fatto un'interessante scoperta: la creazione di una nuova copia di `ImageBitmap` prima del trasferimento a un Web Worker offre prestazioni superiori rispetto al trasferimento diretto dell'oggetto originale. Questo comportamento è probabilmente dovuto a specifiche ottimizzazioni del browser per gli oggetti trasferibili.

## Compatibilità browser

Attualmente, `ImageBitmap` gode di un ampio supporto nei browser moderni, comprese le ultime versioni di Chrome, Firefox, Edge e Safari. Per informazioni dettagliate sulla compatibilità, consultare la [documentazione di `createImageBitmap` su caniuse.com](https://caniuse.com/createimagebitmap).

## Conclusioni e sviluppi futuri

L'integrazione di `ImageBitmap` in Look Scanned non solo ha portato a significativi miglioramenti prestazionali, ma ha anche permesso di implementare la decodifica asincrona, il rendering ottimizzato e una migliore compatibilità con i Web Workers. Sebbene sia ancora necessario mantenere il supporto per `Blob` sui browser meno recenti, la graduale migrazione verso `ImageBitmap` continuerà a offrire vantaggi sostanziali nel lungo periodo.

Prova [Look Scanned](https://lookscanned.io) e tocca con mano i miglioramenti prestazionali!
