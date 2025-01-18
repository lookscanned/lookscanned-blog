+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned aumenta su rendimiento un 60% gracias a ImageBitmap'
summary = 'Descubre cómo Look Scanned optimiza su rendimiento mediante la decodificación asíncrona y el renderizado eficiente de ImageBitmap, sin comprometer la compatibilidad con navegadores antiguos.'
description = 'Descubre cómo Look Scanned optimiza su rendimiento mediante la decodificación asíncrona y el renderizado eficiente de ImageBitmap, sin comprometer la compatibilidad con navegadores antiguos.'
tags = ['optimización', 'imagebitmap', 'procesamiento de imágenes', 'desarrollo web']
+++

En el desarrollo de aplicaciones web modernas como [Look Scanned](https://lookscanned.io), la optimización del rendimiento juega un papel crucial, especialmente en el procesamiento de imágenes. La interfaz `ImageBitmap` es una herramienta potente, aunque infrautilizada, que permite conseguir mejoras sustanciales en el rendimiento. En este artículo, analizaremos las características principales de `ImageBitmap`, sus ventajas y cómo la hemos implementado en Look Scanned.

## ¿Qué es ImageBitmap?

`ImageBitmap` es una interfaz HTML5 diseñada para el procesamiento eficiente de imágenes. Su característica más destacada es la capacidad de realizar la decodificación y el procesamiento de imágenes fuera del hilo principal, lo que no solo reduce la carga de renderizado, sino que también mejora la capacidad de respuesta general de la aplicación. Una vez creado, un objeto `ImageBitmap` se puede utilizar directamente en contextos de renderizado como Canvas 2D o WebGL, lo que lo convierte en la solución ideal para aplicaciones que manejan múltiples imágenes.

## ¿Por qué apostamos por ImageBitmap?

Anteriormente, Look Scanned utilizaba `Blob` para transferir datos de imagen entre funciones de procesamiento. Sin embargo, `Blob` no es la mejor opción para optimizar el rendimiento, ya que requiere procesos de codificación y decodificación en cada uso. En cambio, `ImageBitmap` ofrece acceso directo a los datos de la imagen, evitando estas operaciones redundantes y mejorando notablemente el rendimiento del renderizado.

## Nuestra implementación

Debido a la necesidad de mantener la compatibilidad con navegadores antiguos, no podemos migrar por completo a `ImageBitmap`. Este enfoque híbrido nos permite garantizar una amplia compatibilidad. Puedes consultar los detalles de compatibilidad en [caniuse.com](https://caniuse.com/createimagebitmap). Además, debido a las limitaciones de Safari con canvas, utilizamos WebAssembly (WASM) para el procesamiento de imágenes, que necesita `Blob` como formato de entrada.

Por ello, hemos desarrollado una solución híbrida progresiva que soporta tanto `Blob` como `ImageBitmap`. Estos son los detalles principales de la implementación:

### Carga y decodificación de imágenes

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Fallback a Blob
  return blob;
}
```

### Integración con WebAssembly

Para el procesamiento avanzado, transferimos `Blob` al módulo WASM para asegurar la funcionalidad en navegadores sin soporte para `ImageBitmap`. El proceso consiste en dibujar primero la imagen en un canvas y luego utilizar `canvas.toBlob` para obtener el objeto `Blob` necesario.

### Sistema de renderizado alternativo

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

## Mejoras de rendimiento

La integración de `ImageBitmap` ha permitido a Look Scanned reducir drásticamente el tiempo de procesamiento de imágenes, pasando de 50ms a 20ms por imagen. Esta mejora se traduce en una experiencia de usuario notablemente más fluida y ágil, especialmente al procesar documentos escaneados.

## Hallazgos interesantes

Durante la implementación, realizamos un descubrimiento sorprendente: crear una nueva copia de `ImageBitmap` antes de transferirla a un Web Worker proporciona mejor rendimiento que transferir directamente el objeto original. Esto probablemente se debe a optimizaciones específicas del navegador para objetos transferibles.

## Compatibilidad con navegadores

Actualmente, `ImageBitmap` cuenta con amplio soporte en los navegadores modernos, incluyendo las últimas versiones de Chrome, Firefox, Edge y Safari. Puedes encontrar información detallada sobre compatibilidad en la [documentación de `createImageBitmap` en caniuse.com](https://caniuse.com/createimagebitmap).

## Conclusiones y futuro

La integración de `ImageBitmap` en Look Scanned no solo ha proporcionado mejoras significativas en el rendimiento, sino que también ha permitido implementar decodificación asíncrona, renderizado eficiente y mejor compatibilidad con Web Workers. Aunque debemos mantener el soporte de `Blob` para navegadores antiguos, la migración gradual a `ImageBitmap` continuará aportando beneficios considerables a largo plazo.

¡Visita [Look Scanned](https://lookscanned.io) y comprueba por ti mismo las mejoras en el rendimiento!
