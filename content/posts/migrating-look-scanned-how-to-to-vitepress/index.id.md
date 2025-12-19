---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Migrasi Dokumentasi Look Scanned How-To ke VitePress dengan Keamanan yang Ditingkatkan"
summary: "Temukan bagaimana Look Scanned meningkatkan infrastruktur dokumentasinya dengan migrasi dari Vue + Vite ke VitePress, sambil menerapkan npm Trusted Publishers dengan OIDC untuk rilis paket yang aman tanpa token."
description: "Temukan bagaimana Look Scanned meningkatkan infrastruktur dokumentasinya dengan migrasi dari Vue + Vite ke VitePress, sambil menerapkan npm Trusted Publishers dengan OIDC untuk rilis paket yang aman tanpa token."
tags: ["vitepress", "dokumentasi", "keamanan", "cicd", "npm"]
---

Di [Look Scanned](https://lookscanned.io), kami terus meningkatkan infrastruktur kami untuk menyediakan dokumentasi yang lebih baik dan praktik pengembangan yang lebih aman. Hari ini, kami sangat senang berbagi detail tentang peningkatan signifikan pada situs dokumentasi How-To kami: migrasi dari aplikasi kustom Vue + Vite ke VitePress, sambil secara bersamaan meningkatkan keamanan CI/CD kami dengan npm Trusted Publishers.

## 📚 Mengapa Kami Bermigrasi ke VitePress

Situs dokumentasi How-To kami ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) berfungsi sebagai panduan penggunaan komprehensif untuk Look Scanned. Meskipun pengaturan Vue + Vite kami sebelumnya berfungsi dengan baik, kami menyadari bahwa VitePress akan menjadi pilihan yang lebih baik untuk situs dokumentasi yang berfokus pada konten.

### Apa itu VitePress?

VitePress adalah generator situs statis yang dirancang khusus untuk dokumentasi. Dibangun di atas Vite dan Vue 3, ini menggabungkan yang terbaik dari kedua dunia: pengalaman pengembangan secepat kilat dengan fitur dokumentasi yang kuat dari awal.

### Manfaat Utama Migrasi

**🎯 Arsitektur yang Lebih Baik untuk Dokumentasi**
- **Routing berbasis file**: Setiap file markdown secara otomatis menjadi halaman, membuat organisasi konten menjadi intuitif
- **Fitur dokumentasi bawaan**: Daftar isi, pencarian, internasionalisasi, dan lainnya sudah dikonfigurasi sebelumnya
- **Pembuatan situs statis**: HTML yang di-render sebelumnya memberikan SEO yang sangat baik dan pemuatan halaman instan

**⚡ Pengalaman Pengembang yang Lebih Baik**
- **Reload panas instan**: Perubahan muncul segera selama pengembangan
- **Markdown pertama**: Fokus pada konten, bukan pada scaffolding komponen
- **Dukungan komponen Vue**: Saat diperlukan, kami masih dapat menggunakan komponen Vue kustom di dalam markdown

**🔧 Pemeliharaan yang Lebih Mudah**
- **Struktur yang lebih jelas**: Dokumentasi mengikuti konvensi, mengurangi beban kognitif untuk kontributor
- **Build yang lebih stabil**: Struktur yang berpendapat dari VitePress menghasilkan build yang lebih dapat direproduksi
- **Kolaborasi yang lebih baik**: Anggota tim dapat berkontribusi pada dokumentasi tanpa pengetahuan Vue yang mendalam

## 🔒 Keamanan yang Ditingkatkan dengan npm Trusted Publishers

Bersamaan dengan migrasi VitePress, kami menerapkan peningkatan keamanan kritis: **npm Trusted Publishers menggunakan autentikasi OIDC**.

### Masalah dengan Token npm Tradisional

Sebelumnya, menerbitkan paket ke npm memerlukan penyimpanan `NPM_TOKEN` yang berumur panjang di rahasia repositori. Pendekatan ini memiliki beberapa kelemahan:

- **Risiko keamanan**: Token dapat terekspos atau dikompromikan secara tidak sengaja
- **Overhead manajemen**: Token memerlukan rotasi dan pembaruan manual
- **Tantangan audit**: Sulit melacak siapa yang menerbitkan apa dan kapan

### Solusi: Penerbitan Tepercaya Berbasis OIDC

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) memanfaatkan OpenID Connect (OIDC) untuk memungkinkan penerbitan yang aman tanpa token langsung dari GitHub Actions. Berikut cara kerjanya:

1. **Tidak ada rahasia yang disimpan**: Alih-alih menyimpan token, GitHub Actions meminta kredensial jangka pendek dari npm
2. **Verifikasi identitas**: npm memverifikasi bahwa permintaan penerbitan berasal dari repositori GitHub yang diotorisasi
3. **Manajemen kredensial otomatis**: Kredensial dikeluarkan secara otomatis dan kedaluwarsa dengan cepat

### Manfaat Dunia Nyata

Perubahan ini membawa peningkatan langsung pada alur kerja pengembangan kami:

- ✅ **Tidak ada lagi manajemen token**: Tidak perlu membuat, menyimpan, atau merotasi token npm
- ✅ **Permukaan serangan berkurang**: Kredensial jangka pendek meminimalkan risiko eksposur
- ✅ **Auditabilitas yang lebih baik**: Setiap tindakan penerbitan terkait dengan eksekusi GitHub Actions tertentu
- ✅ **Praktik terbaik modern**: Selaras dengan prinsip keamanan zero-trust

**Catatan teknis**: Untuk mendukung npm Trusted Publishers, kami memperbarui konfigurasi CI kami untuk menggunakan Node.js `lts/*`, memastikan kami memiliki versi npm terbaru yang diperlukan untuk autentikasi OIDC.

## 📦 Timeline Rilis

Migrasi diselesaikan melalui tiga rilis pada 19 Desember 2025:

- **v2.0.0**: Migrasi inti dari Vue + Vite ke VitePress (perubahan yang melanggar)
- **v2.0.1**: Perbaikan CI untuk mendukung npm Trusted Publishers dengan versi Node.js yang tepat
- **v2.0.2**: Peningkatan kinerja dengan memindahkan `@fontsource/noto-mono` ke devDependencies

## 🌍 Dukungan Multibahasa yang Berkelanjutan

Catatan penting: dokumentasi How-To kami menghasilkan PDF multibahasa yang selalu digunakan sebagai file contoh dalam aplikasi utama Look Scanned (tersedia di [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Migrasi VitePress ini tidak mengubah fungsionalitas tersebut—ini hanya menyediakan fondasi yang lebih baik untuk memelihara dan meningkatkan infrastruktur dokumentasi kami.

## 💡 Apa Artinya Ini untuk Pengguna

Jika Anda menggunakan dokumentasi Look Scanned:

- **Akses yang sama, pengalaman yang lebih baik**: Dokumentasi tetap di URL yang sama dengan pemuatan dan navigasi yang lebih baik
- **Lebih andal**: Pembuatan situs statis berarti pemuatan lebih cepat dan stabilitas yang lebih baik
- **Pencarian dan penemuan yang lebih baik**: Pencarian bawaan VitePress membantu Anda menemukan jawaban lebih cepat
- **Dukungan PDF berkelanjutan**: Pembuatan PDF multibahasa berlanjut seperti sebelumnya

## 🚀 Apa Selanjutnya

Dengan peningkatan infrastruktur selesai, kami fokus pada peningkatan konten:

- **Kasus penggunaan yang diperluas**: Lebih banyak contoh praktis dan panduan langkah demi langkah
- **Peningkatan konsistensi**: Memperhalus terminologi multibahasa untuk kejelasan
- **Ekspor PDF yang ditingkatkan**: Meningkatkan pengalaman pembuatan PDF lintas browser

## Coba Look Scanned Hari Ini

Look Scanned menyediakan efek pemindaian PDF berbasis browser yang mengutamakan privasi tanpa mengunggah file Anda ke mana pun. Dokumentasi yang lebih baik membuatnya lebih mudah dari sebelumnya untuk memulai.

👉 **Kunjungi [lookscanned.io](https://lookscanned.io) untuk mengalami pemindaian dokumen yang cepat dan aman di browser Anda.**
