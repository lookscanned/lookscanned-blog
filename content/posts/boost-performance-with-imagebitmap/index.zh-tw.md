+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = '運用 ImageBitmap 提升 Look Scanned 效能 60%'
summary = '探討如何透過 ImageBitmap 的非同步解碼與高效渲染機制來提升 Look Scanned 的效能表現，並同時維持對舊版瀏覽器的相容支援。'
description = '探討如何透過 ImageBitmap 的非同步解碼與高效渲染機制來提升 Look Scanned 的效能表現，並同時維持對舊版瀏覽器的相容支援。'
tags = ['效能優化', 'imagebitmap', '影像處理', '瀏覽器技術']
+++

在開發如 [Look Scanned](https://lookscanned.io) 這類現代網頁應用程式時，效能優化是一項關鍵課題，尤其是在影像處理方面。`ImageBitmap` 介面雖然是個強大但尚未被廣泛運用的工具，卻能帶來顯著的效能提升。本文將深入探討 `ImageBitmap` 的核心特性、應用優勢，以及我們如何將它整合至 Look Scanned 以提升渲染效能。

## ImageBitmap 簡介

`ImageBitmap` 是 HTML5 提供的高效能點陣圖介面。其最大特色在於能夠在主執行緒外進行影像解碼與處理，不僅降低了渲染負擔，更能提升應用程式的整體回應速度。建立完成後的 `ImageBitmap` 物件可直接用於 Canvas 2D 或 WebGL 等渲染環境中，使其成為處理影像密集型應用程式的最佳選擇。

## 為何採用 ImageBitmap？

先前，Look Scanned 主要仰賴 `Blob` 在各個處理函式間傳遞影像資料。然而，`Blob` 在效能優化方面有其侷限性，因為每次使用都需要進行編碼和解碼作業。相較之下，`ImageBitmap` 提供了對影像資料的直接存取能力，避免了這些重複作業，進而大幅提升渲染效能。

## Look Scanned 的 ImageBitmap 實作經驗

考量到舊版瀏覽器的相容性需求，我們無法完全捨棄 `Blob` 而改用 `ImageBitmap`。這種雙軌並行的方式確保了更廣泛的瀏覽器相容性。詳細的瀏覽器相容性資訊可參考 [caniuse.com](https://caniuse.com/createimagebitmap)。此外，由於 Safari 對 canvas 的支援有所限制，我們需要使用 WebAssembly (WASM) 來處理影像，而 WASM 僅接受 `Blob` 作為輸入格式。

為此，我們採用了一套漸進式的混合方案，同時支援 `Blob` 與 `ImageBitmap`。以下是實作細節：

### 影像載入與解碼

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // 降級使用 Blob
  return blob;
}
```

### WebAssembly 整合方案

針對需要進階處理的情境，我們會將 `Blob` 傳遞給 WASM 模組，以確保在不支援 `ImageBitmap` 的瀏覽器中也能正常運作。具體做法是先將影像繪製至 canvas 上，再透過 `canvas.toBlob` 取得所需的 `Blob` 物件。

### 降級渲染機制

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

## 效能提升成果

透過導入 `ImageBitmap`，Look Scanned 的影像處理效能獲得顯著提升——處理時間從每張影像的 50ms 降至 20ms。這項改進為使用者帶來更順暢、更快速的操作體驗，特別是在處理掃描文件時更為明顯。

## 意外發現與最佳化

在實作過程中，我們發現了一個饒富趣味的現象：在將影像傳輸至 Web Worker 之前，使用 `createImageBitmap` 建立新的副本，比起直接傳遞原始物件的效能更佳。這可能是因為瀏覽器引擎對可轉移物件進行了特殊的最佳化處理。

## 瀏覽器相容性

目前，`ImageBitmap` 已獲得主流現代瀏覽器的廣泛支援，包括最新版本的 Chrome、Firefox、Edge 和 Safari。詳細的相容性資訊可參考 [`createImageBitmap` 在 caniuse.com 的支援狀況](https://caniuse.com/createimagebitmap)。

## 總結與未來展望

將 `ImageBitmap` 整合至 Look Scanned 不僅帶來顯著的效能提升，更實現了非同步解碼、高效渲染以及更好的 Web Workers 相容性。雖然為了顧及舊版瀏覽器，我們仍需維持對 `Blob` 的支援，但朝向 `ImageBitmap` 的漸進式轉移必將為應用程式帶來長期的效能優勢。

歡迎前往 [Look Scanned](https://lookscanned.io) 親身體驗這些優化所帶來的效能提升！
