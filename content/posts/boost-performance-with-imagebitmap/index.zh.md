+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = '通过 ImageBitmap 让 Look Scanned 性能提升 60%'
summary = '探索如何通过 ImageBitmap 的异步解码和高效渲染机制提升 Look Scanned 的性能，同时保持对旧版浏览器的兼容支持。'
description = '探索如何通过 ImageBitmap 的异步解码和高效渲染机制提升 Look Scanned 的性能，同时保持对旧版浏览器的兼容支持。'
tags = ['性能优化', 'imagebitmap', '图像处理', '浏览器技术']
+++

在开发像 [Look Scanned](https://lookscanned.io) 这样的现代 Web 应用时，性能优化是一个关键课题，特别是在图像处理方面。`ImageBitmap` 接口作为一个功能强大但尚未被广泛使用的工具，能够带来显著的性能提升。本文将深入探讨 `ImageBitmap` 的核心特性、应用优势，以及我们如何将其整合到 Look Scanned 中来提升渲染性能。

## ImageBitmap 简介

`ImageBitmap` 是一个 HTML5 提供的高性能位图接口。它最大的特点是能够在主线程之外进行图像解码和处理，这不仅降低了渲染开销，还能提升应用的整体响应性。一旦创建完成，`ImageBitmap` 对象可以直接用于 Canvas 2D 或 WebGL 等渲染环境中，这使其成为处理图像密集型应用的理想选择。

## 为何选择 ImageBitmap？

在此之前，Look Scanned 主要依赖 `Blob` 在各个处理函数之间传递图像数据。但 `Blob` 在性能优化方面存在局限性，因为每次使用都需要进行编码和解码操作。而 `ImageBitmap` 则提供了对图像数据的直接访问能力，避免了这些冗余操作，从而大幅提升了渲染性能。

## Look Scanned 的 ImageBitmap 实践

考虑到需要兼容旧版浏览器，我们不能完全放弃 `Blob` 而转向 `ImageBitmap`。这种双轨制确保了更广泛的浏览器兼容性。具体的浏览器兼容性信息可以在 [caniuse.com](https://caniuse.com/createimagebitmap) 查看。另外，由于 Safari 对 canvas 的支持存在限制，我们需要使用 WebAssembly (WASM) 来处理图像，而 WASM 只接受 `Blob` 作为输入格式。

为此，我们采用了一个渐进式的混合方案，同时支持 `Blob` 和 `ImageBitmap`。以下是具体的实现细节：

### 图像加载与解码

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // 降级使用 Blob
  return blob;
}
```

### WebAssembly 整合方案

对于需要高级处理的场景，我们会将 `Blob` 传递给 WASM 模块，以确保在不支持 `ImageBitmap` 的浏览器中也能正常工作。具体做法是先将图像绘制到 canvas 上，再通过 `canvas.toBlob` 获取所需的 `Blob` 对象。

### 降级渲染处理

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

## 性能提升效果

通过引入 `ImageBitmap`，Look Scanned 的图像处理性能获得了显著提升——处理时间从每张图像的 50ms 降低到了 20ms。这一改进为用户带来了更加流畅和快速的操作体验，尤其是在处理扫描文档时效果更为明显。

## 意外发现与优化

在实施过程中，我们发现了一个有趣的现象：在将图像传输到 Web Worker 之前，使用 `createImageBitmap` 创建新的副本，比直接传递原始对象的性能更好。这可能是由于浏览器引擎对可转移对象进行了特殊的优化处理。

## 浏览器兼容性

目前，`ImageBitmap` 已经获得了主流现代浏览器的广泛支持，包括最新版本的 Chrome、Firefox、Edge 和 Safari。详细的兼容性信息可以参考 [`createImageBitmap` 在 caniuse.com 的支持情况](https://caniuse.com/createimagebitmap)。

## 总结与展望

将 `ImageBitmap` 整合到 Look Scanned 中不仅带来了显著的性能提升，还实现了异步解码、高效渲染以及更好的 Web Workers 兼容性。虽然为了照顾旧版浏览器我们仍需保持对 `Blob` 的支持，但向 `ImageBitmap` 的渐进式迁移必将为应用带来长期的性能优势。

欢迎访问 [Look Scanned](https://lookscanned.io) 来亲身体验这些优化带来的性能提升！
