+++
date = '2025-01-18T19:15:33+08:00'
draft = false
title = 'Look Scanned Tingkatkan Prestasi Sebanyak 60% Menggunakan ImageBitmap'
summary = 'Ketahui cara Look Scanned mengoptimumkan prestasi melalui penyahkodan asinkronus dan pemaparan yang cekap dengan ImageBitmap, sambil mengekalkan keserasian dengan pelayar web lama'
description = 'Ketahui cara Look Scanned mengoptimumkan prestasi melalui penyahkodan asinkronus dan pemaparan yang cekap dengan ImageBitmap, sambil mengekalkan keserasian dengan pelayar web lama'
tags = ['pengoptimuman prestasi', 'imagebitmap', 'pemprosesan imej', 'pembangunan web']
+++

Dalam pembangunan aplikasi web moden seperti [Look Scanned](https://lookscanned.io), pengoptimuman prestasi merupakan keutamaan tertinggi, terutama dalam aspek pemprosesan imej. Antara muka `ImageBitmap`, walaupun masih belum digunakan secara meluas, merupakan alat yang berkeupayaan tinggi untuk meningkatkan prestasi secara mendadak. Dalam artikel ini, kami akan membincangkan ciri-ciri utama `ImageBitmap`, kelebihannya, serta pengalaman kami mengimplementasikannya di Look Scanned.

## Apakah itu ImageBitmap?

`ImageBitmap` ialah antara muka HTML5 yang direka khas untuk pemprosesan imej yang cekap. Kelebihan utamanya adalah keupayaan untuk melaksanakan penyahkodan dan pemprosesan imej di luar thread utama, yang mengurangkan beban pemaparan dengan ketara dan meningkatkan tindak balas aplikasi. Objek `ImageBitmap` yang dihasilkan boleh digunakan terus dalam konteks pemaparan seperti Canvas 2D atau WebGL, menjadikannya pilihan terbaik untuk aplikasi yang memproses banyak imej.

## Mengapa Kami Memilih ImageBitmap?

Sebelum ini, Look Scanned menggunakan `Blob` untuk memindahkan data imej antara fungsi pemprosesan. Namun, `Blob` memerlukan pengekodan dan penyahkodan setiap kali digunakan, yang menjejaskan prestasi. Sebaliknya, `ImageBitmap` membolehkan capaian terus kepada data imej, menghapuskan langkah-langkah tambahan tersebut dan meningkatkan prestasi pemaparan dengan ketara.

## Butiran Pelaksanaan

Memandangkan keperluan untuk mengekalkan keserasian dengan pelayar web lama, peralihan sepenuhnya kepada `ImageBitmap` tidak dapat dilaksanakan. Oleh itu, kami membangunkan pendekatan hibrid untuk memastikan keserasian yang menyeluruh. Butiran sokongan boleh dirujuk di [caniuse.com](https://caniuse.com/createimagebitmap). Selain itu, disebabkan kekangan Safari berkaitan Canvas, kami menggunakan WebAssembly (WASM) untuk pemprosesan imej, yang memerlukan `Blob` sebagai format input.

Dengan mengambil kira faktor-faktor tersebut, kami membangunkan penyelesaian hibrid yang menyokong kedua-dua `Blob` dan `ImageBitmap`. Berikut adalah butiran pelaksanaan utama:

### Pemuatan dan Penyahkodan Imej

```typescript
async function loadImage(url): Promise<ImageBitmap | Blob> {
  const response = await fetch(url);
  const blob = await response.blob();
  if (window.createImageBitmap) {
    return createImageBitmap(blob);
  }
  // Gunakan Blob sebagai penyelesaian alternatif
  return blob;
}
```

### Integrasi WebAssembly

Untuk pemprosesan lanjutan, kami menghantar `Blob` ke modul WASM bagi memastikan kefungsian dalam pelayar web yang tidak menyokong `ImageBitmap`. Dalam proses ini, kami terlebih dahulu memaparkan imej ke Canvas dan kemudiannya menggunakan `canvas.toBlob` untuk mencipta objek `Blob` yang diperlukan.

### Sistem Pemaparan Alternatif

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

Pelaksanaan `ImageBitmap` telah berjaya mengurangkan masa pemprosesan imej di Look Scanned daripada 50ms kepada 20ms bagi setiap imej. Peningkatan ini amat ketara terutamanya semasa memproses dokumen yang diimbas, memberikan pengalaman pengguna yang lebih lancar dan pantas.

## Penemuan Menarik

Semasa pelaksanaan, kami menemui satu penemuan menarik: penghasilan salinan baharu `ImageBitmap` sebelum penghantaran ke Web Worker memberikan prestasi yang lebih baik berbanding penghantaran objek asal secara terus. Ini berkemungkinan disebabkan oleh pengoptimuman dalaman pelayar web untuk objek yang boleh dipindahkan.

## Sokongan Pelayar Web

Pada masa ini, `ImageBitmap` mendapat sokongan meluas dalam semua pelayar web moden utama, termasuk versi terkini Chrome, Firefox, Edge dan Safari. Maklumat terperinci tentang keserasian boleh didapati dalam [dokumentasi `createImageBitmap` di caniuse.com](https://caniuse.com/createimagebitmap).

## Kesimpulan dan Hala Tuju

Pelaksanaan `ImageBitmap` di Look Scanned bukan sahaja membawa peningkatan prestasi yang ketara, malah membolehkan penyahkodan asinkronus, pemaparan yang cekap dan integrasi yang lebih baik dengan Web Workers. Walaupun sokongan untuk `Blob` masih diperlukan bagi pelayar web lama, peralihan secara berperingkat kepada `ImageBitmap` akan terus memberikan manfaat penting dalam jangka masa panjang.

Alami sendiri peningkatan prestasi di [Look Scanned](https://lookscanned.io)!
