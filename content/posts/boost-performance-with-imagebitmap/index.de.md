+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned: 60% mehr Performance durch ImageBitmap'
summary = 'Entdecken Sie, wie Look Scanned mithilfe von ImageBitmap durch asynchrone Dekodierung und effizientes Rendering die Performance steigert und dabei die Kompatibilität mit älteren Browsern gewährleistet.'
description = 'Entdecken Sie, wie Look Scanned mithilfe von ImageBitmap durch asynchrone Dekodierung und effizientes Rendering die Performance steigert und dabei die Kompatibilität mit älteren Browsern gewährleistet.'
tags = ['Performance-Optimierung', 'imagebitmap', 'Bildverarbeitung', 'Browser-Technologie']
+++

Bei der Entwicklung moderner Webanwendungen wie [Look Scanned](https://lookscanned.io) spielt Performance-Optimierung eine zentrale Rolle, besonders im Bereich der Bildverarbeitung. Die `ImageBitmap`-Schnittstelle ist dabei ein leistungsstarkes, wenn auch bisher wenig genutztes Werkzeug, das beachtliche Performance-Steigerungen ermöglicht. In diesem Artikel beleuchten wir die Kernfunktionen von `ImageBitmap`, dessen Vorteile und unseren Implementierungsansatz in Look Scanned.

## Was ist ImageBitmap?

`ImageBitmap` ist eine HTML5-Schnittstelle für hochperformante Bitmap-Verarbeitung. Das Besondere daran ist die Fähigkeit, Bilddekodierung und -verarbeitung außerhalb des Hauptthreads durchzuführen. Dies reduziert nicht nur den Rendering-Aufwand erheblich, sondern verbessert auch die Gesamtperformance der Anwendung. Ein erstelltes `ImageBitmap`-Objekt kann direkt in Rendering-Kontexten wie Canvas 2D oder WebGL verwendet werden – ideal für bildintensive Anwendungen.

## Warum setzen wir auf ImageBitmap?

Bisher nutzte Look Scanned `Blob` für die Bildübertragung zwischen Verarbeitungsfunktionen. `Blob` ist jedoch für Performance-Optimierungen suboptimal, da bei jeder Verwendung Kodierungs- und Dekodierungsschritte notwendig sind. `ImageBitmap` hingegen ermöglicht direkten Zugriff auf Bilddaten und vermeidet diese redundanten Operationen, was zu einer deutlichen Performance-Steigerung führt.

## Unsere Implementierung

Da wir die Unterstützung älterer Browser gewährleisten müssen, können wir nicht komplett auf `ImageBitmap` umsteigen. Dieser hybride Ansatz sichert eine breite Browser-Kompatibilität. Detaillierte Informationen zur Browser-Unterstützung finden Sie auf [caniuse.com](https://caniuse.com/createimagebitmap). Wegen der eingeschränkten Canvas-Unterstützung in Safari setzen wir für die Bildverarbeitung auf WebAssembly (WASM), das `Blob` als Eingabeformat benötigt.

Wir haben daher eine progressive Hybrid-Lösung entwickelt, die sowohl `Blob` als auch `ImageBitmap` unterstützt. Hier die wichtigsten Implementierungsdetails:

### Bildladung und Dekodierung

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Fallback auf Blob
  return blob;
}
```

### WebAssembly-Integration

Für erweiterte Verarbeitungsanforderungen übergeben wir `Blob` an das WASM-Modul, um die Funktionalität auch in Browsern ohne `ImageBitmap`-Unterstützung sicherzustellen. Das Bild wird zunächst auf ein Canvas gezeichnet und anschließend mittels `canvas.toBlob` das erforderliche `Blob`-Objekt generiert.

### Fallback-Rendering

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

## Performance-Verbesserungen

Die Integration von `ImageBitmap` ermöglichte Look Scanned eine beachtliche Reduzierung der Bildverarbeitungszeit – von 50ms auf 20ms pro Bild. Diese Optimierung resultiert in einer spürbar flüssigeren und schnelleren Benutzeroberfläche, insbesondere bei der Verarbeitung gescannter Dokumente.

## Interessante Erkenntnisse

Während der Implementierung machten wir eine überraschende Entdeckung: Das Erstellen einer neuen `ImageBitmap`-Kopie vor der Übertragung an einen Web Worker liefert bessere Performance als die direkte Übergabe des ursprünglichen Objekts. Dies ist vermutlich auf spezielle Browser-Optimierungen für übertragbare Objekte zurückzuführen.

## Browser-Kompatibilität

`ImageBitmap` wird inzwischen von allen modernen Browsern unterstützt, einschließlich der aktuellen Versionen von Chrome, Firefox, Edge und Safari. Eine detaillierte Übersicht zur Kompatibilität finden Sie in der [`createImageBitmap`-Dokumentation auf caniuse.com](https://caniuse.com/createimagebitmap).

## Fazit und Ausblick

Die Integration von `ImageBitmap` in Look Scanned hat nicht nur signifikante Performance-Verbesserungen gebracht, sondern auch asynchrone Dekodierung, effizientes Rendering und bessere Web Worker-Kompatibilität ermöglicht. Obwohl wir für ältere Browser weiterhin `Blob` unterstützen müssen, wird die schrittweise Migration zu `ImageBitmap` langfristig erhebliche Vorteile bringen.

Testen Sie [Look Scanned](https://lookscanned.io) und überzeugen Sie sich selbst von den Performance-Verbesserungen!
