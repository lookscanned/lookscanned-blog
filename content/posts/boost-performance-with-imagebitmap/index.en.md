+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Boost Performance by 60% with ImageBitmap in Look Scanned'
summary = 'Explore how integrating ImageBitmap into Look Scanned enhances performance by enabling asynchronous decoding and efficient rendering, while maintaining compatibility with older browsers.'
description = 'Explore how integrating ImageBitmap into Look Scanned enhances performance by enabling asynchronous decoding and efficient rendering, while maintaining compatibility with older browsers.'
tags = ['performance', 'imagebitmap', 'image', 'browser']
+++

Performance optimization is crucial when building modern web applications like [Look Scanned](https://lookscanned.io), especially when dealing with images. A powerful yet underutilized tool for achieving significant performance gains is the `ImageBitmap` interface. In this blog post, we’ll explore what `ImageBitmap` is, why it’s effective, and how it has been integrated into Look Scanned to enhance rendering performance.

## What is ImageBitmap?

`ImageBitmap` is an HTML5 interface that represents a bitmap image. It enables efficient image decoding and processing off the main thread, reducing rendering overhead and improving responsiveness. Once created, an `ImageBitmap` object can be directly used in rendering contexts like Canvas 2D or WebGL, making it a powerful tool for image-heavy applications.

## Why Use ImageBitmap in Look Scanned?

Previously, Look Scanned relied on `Blob` to pass image data between processing functions. However, `Blob` is not ideal for performance optimization since it requires encoding and decoding steps. In contrast, `ImageBitmap` provides direct access to image data, eliminating redundant decoding operations and significantly improving rendering performance.

## How We Use ImageBitmap in Look Scanned

Look Scanned supports older browsers, so it cannot fully transition to `ImageBitmap` without maintaining support for `Blob`. This dual support ensures compatibility across a wide range of browsers. For browser compatibility details, refer to [caniuse.com](https://caniuse.com/createimagebitmap). Additionally, Safari’s limited canvas support necessitates using WebAssembly (WASM) for image processing, which requires `Blob` as an input format.

To manage this, Look Scanned employs a hybrid approach that supports both `Blob` and `ImageBitmap` while gradually migrating to the latter. Below are key implementation details:

### Loading and Decoding

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Fallback to using Blob
  return blob;
}
```

### WebAssembly Integration

For advanced processing, `Blob` is passed to WASM to ensure functionality even in unsupported browsers. We need to draw the image to canvas first and then use `canvas.toBlob` to get `Blob`.

### Fallback Rendering

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

## Performance Improvements

By integrating `ImageBitmap`, Look Scanned has achieved a significant reduction in image processing times—from 50ms to 20ms per image. This improvement translates to a smoother and more responsive user experience, particularly for tasks involving scanned documents.

## Unexpected Findings

During implementation, we discovered that creating a new `ImageBitmap` copy using `createImageBitmap` before transferring it to a worker yields better performance than directly passing the original object. This behavior may be due to browser engine optimizations for transferable objects.

## Browser Support

`ImageBitmap` is supported in most modern browsers, including the latest versions of Chrome, Firefox, Edge, and Safari. For details on compatibility, check [`createImageBitmap` in caniuse.com](https://caniuse.com/createimagebitmap).

## Conclusion

Integrating `ImageBitmap` into Look Scanned has markedly improved performance by enabling asynchronous decoding, efficient rendering, and better compatibility with Web Workers. While maintaining support for older browsers requires continued use of `Blob`, the gradual migration to `ImageBitmap` ensures long-term performance benefits.

By leveraging these advancements, [Look Scanned](https://lookscanned.io) delivers a faster, more responsive experience for its users. Try it out and experience the difference firsthand!
