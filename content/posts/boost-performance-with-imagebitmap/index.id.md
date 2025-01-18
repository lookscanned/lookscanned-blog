+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned Tingkatkan Performa 60% dengan ImageBitmap'
summary = 'Simak cara Look Scanned mengoptimalkan performa melalui dekoding asinkron dan rendering efisien dengan ImageBitmap, tanpa mengorbankan kompatibilitas dengan browser lama.'
description = 'Simak cara Look Scanned mengoptimalkan performa melalui dekoding asinkron dan rendering efisien dengan ImageBitmap, tanpa mengorbankan kompatibilitas dengan browser lama.'
tags = ['optimasi performa', 'imagebitmap', 'pemrosesan gambar', 'pengembangan web']
+++

Dalam pengembangan aplikasi web modern seperti [Look Scanned](https://lookscanned.io), optimasi performa menjadi prioritas utama, terutama dalam pemrosesan gambar. Antarmuka `ImageBitmap`, meski belum banyak digunakan, merupakan alat yang sangat efektif untuk meningkatkan performa secara signifikan. Dalam artikel ini, kami akan membahas fitur utama `ImageBitmap`, berbagai keunggulannya, dan pengalaman kami mengimplementasikannya di Look Scanned.

## Apa itu ImageBitmap?

`ImageBitmap` adalah antarmuka HTML5 yang dirancang khusus untuk pemrosesan gambar yang efisien. Keunggulan utamanya adalah kemampuan melakukan dekoding dan pemrosesan gambar di luar thread utama, sehingga secara signifikan mengurangi beban rendering dan meningkatkan responsivitas aplikasi. Setelah dibuat, objek `ImageBitmap` dapat langsung digunakan dalam konteks rendering seperti Canvas 2D atau WebGL, menjadikannya pilihan ideal untuk aplikasi yang memproses banyak gambar.

## Mengapa Kami Memilih ImageBitmap?

Sebelumnya, Look Scanned menggunakan `Blob` untuk transfer data gambar antar fungsi pemrosesan. Namun, `Blob` memerlukan proses encoding dan dekoding setiap kali digunakan, yang berdampak pada performa. Sebaliknya, `ImageBitmap` menyediakan akses langsung ke data gambar, menghilangkan tahapan tambahan tersebut dan meningkatkan performa rendering secara signifikan.

## Detail Implementasi

Karena perlunya mempertahankan kompatibilitas dengan browser lama, peralihan penuh ke `ImageBitmap` bukan pilihan yang memungkinkan. Karena itu, kami mengembangkan pendekatan hybrid untuk menjamin kompatibilitas yang luas. Detail dukungan browser dapat dilihat di [caniuse.com](https://caniuse.com/createimagebitmap). Selain itu, karena keterbatasan Safari terkait Canvas, kami menggunakan WebAssembly (WASM) untuk pemrosesan gambar, yang membutuhkan `Blob` sebagai format masukan.

Berdasarkan pertimbangan tersebut, kami mengembangkan solusi hybrid yang mendukung baik `Blob` maupun `ImageBitmap`. Berikut detail implementasi utamanya:

### Pemuatan dan Dekoding Gambar

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Gunakan Blob sebagai alternatif
  return blob;
}
```

### Integrasi WebAssembly

Untuk pemrosesan tingkat lanjut, kami mengirim `Blob` ke modul WASM untuk memastikan fungsionalitas di browser yang tidak mendukung `ImageBitmap`. Dalam prosesnya, kami merender gambar ke Canvas terlebih dahulu, lalu menggunakan `canvas.toBlob` untuk membuat objek `Blob` yang diperlukan.

### Sistem Rendering Alternatif

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

## Hasil yang Dicapai

Implementasi `ImageBitmap` berhasil menurunkan waktu pemrosesan gambar di Look Scanned dari 50ms menjadi hanya 20ms per gambar. Peningkatan ini sangat terasa terutama saat memproses dokumen hasil pemindaian, menghasilkan pengalaman pengguna yang jauh lebih responsif dan cepat.

## Temuan Menarik

Selama proses implementasi, kami menemukan hal menarik: pembuatan salinan baru `ImageBitmap` sebelum pengiriman ke Web Worker memberikan performa lebih baik dibandingkan pengiriman objek asli secara langsung. Hal ini kemungkinan disebabkan oleh optimasi internal browser untuk objek yang dapat ditransfer.

## Dukungan Browser

Saat ini, `ImageBitmap` telah didukung secara luas oleh semua browser modern utama, termasuk versi terbaru Chrome, Firefox, Edge, dan Safari. Informasi lengkap tentang kompatibilitas dapat dilihat di [dokumentasi `createImageBitmap` di caniuse.com](https://caniuse.com/createimagebitmap).

## Kesimpulan dan Prospek ke Depan

Implementasi `ImageBitmap` di Look Scanned tidak hanya menghasilkan peningkatan performa yang signifikan, tetapi juga memungkinkan dekoding asinkron, rendering yang efisien, dan integrasi yang lebih baik dengan Web Workers. Meski dukungan untuk `Blob` masih diperlukan untuk browser lama, peralihan bertahap ke `ImageBitmap` akan terus memberikan manfaat penting dalam jangka panjang.

Coba dan rasakan sendiri peningkatan performanya di [Look Scanned](https://lookscanned.io)!
