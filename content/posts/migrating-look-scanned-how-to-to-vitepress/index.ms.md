---
date: "2025-12-19T15:55:33+08:00"
draft: false
title: "Memindahkan Dokumentasi Look Scanned How-To ke VitePress dengan Keselamatan yang Dipertingkatkan"
summary: "Temui bagaimana Look Scanned menaik taraf infrastruktur dokumentasinya dengan berpindah dari Vue + Vite ke VitePress, sambil melaksanakan npm Trusted Publishers dengan OIDC untuk keluaran pakej selamat tanpa token."
description: "Temui bagaimana Look Scanned menaik taraf infrastruktur dokumentasinya dengan berpindah dari Vue + Vite ke VitePress, sambil melaksanakan npm Trusted Publishers dengan OIDC untuk keluaran pakej selamat tanpa token."
tags: ["vitepress", "dokumentasi", "keselamatan", "cicd", "npm"]
---

Di [Look Scanned](https://lookscanned.io), kami sentiasa menambah baik infrastruktur kami untuk menyediakan dokumentasi yang lebih baik dan amalan pembangunan yang lebih selamat. Hari ini, kami teruja untuk berkongsi butiran tentang peningkatan penting pada laman dokumentasi How-To kami: berpindah dari aplikasi Vue + Vite tersuai ke VitePress, sambil meningkatkan keselamatan CI/CD kami dengan npm Trusted Publishers.

## 📚 Mengapa Kami Berpindah ke VitePress

Laman dokumentasi How-To kami ([github.com/lookscanned/how-to](https://github.com/lookscanned/how-to)) berfungsi sebagai panduan penggunaan komprehensif untuk Look Scanned. Walaupun persediaan Vue + Vite kami sebelum ini berfungsi dengan baik, kami menyedari bahawa VitePress akan menjadi pilihan yang lebih baik untuk laman dokumentasi yang berorientasikan kandungan.

### Apakah VitePress?

VitePress ialah penjana laman statik yang direka khusus untuk dokumentasi. Dibina di atas Vite dan Vue 3, ia menggabungkan yang terbaik dari kedua-dua dunia: pengalaman pembangunan pantas kilat dengan ciri dokumentasi yang berkuasa sedia ada.

### Faedah Utama Pemindahan

**🎯 Seni Bina Lebih Baik untuk Dokumentasi**
- **Penghalaan berasaskan fail**: Setiap fail markdown secara automatik menjadi halaman, menjadikan organisasi kandungan intuitif
- **Ciri dokumentasi terbina dalam**: Jadual kandungan, carian, pengantarabangsaan, dan banyak lagi datang prakonfigurasi
- **Penjanaan laman statik**: HTML yang diberikan lebih awal menyediakan SEO yang cemerlang dan pemuatan halaman serta-merta

**⚡ Pengalaman Pembangun yang Lebih Baik**
- **Muat semula panas serta-merta**: Perubahan muncul dengan segera semasa pembangunan
- **Markdown dahulu**: Fokus pada kandungan, bukan perancah komponen
- **Sokongan komponen Vue**: Apabila diperlukan, kami masih boleh menggunakan komponen Vue tersuai dalam markdown

**🔧 Penyelenggaraan Lebih Mudah**
- **Struktur yang lebih jelas**: Dokumentasi mengikuti konvensyen, mengurangkan beban kognitif untuk penyumbang
- **Pembinaan yang lebih stabil**: Struktur berpendapat VitePress membawa kepada pembinaan yang lebih boleh dihasilkan semula
- **Kerjasama yang lebih baik**: Ahli pasukan boleh menyumbang kepada dokumentasi tanpa pengetahuan Vue yang mendalam

## 🔒 Keselamatan yang Dipertingkatkan dengan npm Trusted Publishers

Bersama dengan pemindahan VitePress, kami melaksanakan peningkatan keselamatan kritikal: **npm Trusted Publishers menggunakan pengesahan OIDC**.

### Masalah dengan Token npm Tradisional

Sebelum ini, menerbitkan pakej ke npm memerlukan penyimpanan `NPM_TOKEN` berjangka panjang dalam rahsia repositori. Pendekatan ini mempunyai beberapa kelemahan:

- **Risiko keselamatan**: Token boleh terdedah atau terjejas secara tidak sengaja
- **Overhed pengurusan**: Token memerlukan putaran dan kemas kini manual
- **Cabaran audit**: Sukar untuk menjejaki siapa menerbitkan apa dan bila

### Penyelesaian: Penerbitan Dipercayai Berasaskan OIDC

[npm Trusted Publishers](https://docs.npmjs.com/trusted-publishers/) memanfaatkan OpenID Connect (OIDC) untuk membolehkan penerbitan selamat tanpa token terus dari GitHub Actions. Begini cara ia berfungsi:

1. **Tiada rahsia disimpan**: Daripada menyimpan token, GitHub Actions meminta kelayakan jangka pendek dari npm
2. **Pengesahan identiti**: npm mengesahkan bahawa permintaan penerbitan datang dari repositori GitHub yang dibenarkan
3. **Pengurusan kelayakan automatik**: Kelayakan dikeluarkan secara automatik dan tamat tempoh dengan cepat

### Faedah Dunia Sebenar

Perubahan ini membawa penambahbaikan segera kepada aliran kerja pembangunan kami:

- ✅ **Tiada lagi pengurusan token**: Tidak perlu membuat, menyimpan, atau memutar token npm
- ✅ **Permukaan serangan berkurangan**: Kelayakan jangka pendek meminimumkan risiko pendedahan
- ✅ **Kebolehauditan yang lebih baik**: Setiap tindakan penerbitan dikaitkan dengan larian GitHub Actions tertentu
- ✅ **Amalan terbaik moden**: Selaras dengan prinsip keselamatan sifar amanah

**Nota teknikal**: Untuk menyokong npm Trusted Publishers, kami mengemas kini konfigurasi CI kami untuk menggunakan Node.js `lts/*`, memastikan kami mempunyai versi npm terkini yang diperlukan untuk pengesahan OIDC.

## 📦 Garis Masa Keluaran

Pemindahan selesai melalui tiga keluaran pada 19 Disember 2025:

- **v2.0.0**: Pemindahan teras dari Vue + Vite ke VitePress (perubahan pecah)
- **v2.0.1**: Pembetulan CI untuk menyokong npm Trusted Publishers dengan versi Node.js yang sesuai
- **v2.0.2**: Peningkatan prestasi dengan memindahkan `@fontsource/noto-mono` ke devDependencies

## 🌍 Sokongan Pelbagai Bahasa yang Berterusan

Nota penting: dokumentasi How-To kami menjana PDF pelbagai bahasa yang sentiasa digunakan sebagai fail contoh dalam aplikasi utama Look Scanned (tersedia di [lookscanned.io/en/scan](https://lookscanned.io/en/scan)). Pemindahan VitePress ini tidak mengubah fungsi tersebut—ia hanya menyediakan asas yang lebih baik untuk menyelenggara dan menambah baik infrastruktur dokumentasi kami.

## 💡 Apa Maksudnya untuk Pengguna

Jika anda menggunakan dokumentasi Look Scanned:

- **Capaian sama, pengalaman lebih baik**: Dokumentasi kekal di URL yang sama dengan pemuatan dan navigasi yang lebih baik
- **Lebih boleh dipercayai**: Penjanaan laman statik bermakna pemuatan lebih pantas dan kestabilan yang lebih baik
- **Carian dan penemuan yang lebih baik**: Carian terbina dalam VitePress membantu anda mencari jawapan dengan lebih cepat
- **Sokongan PDF berterusan**: Penjanaan PDF pelbagai bahasa berterusan seperti sebelumnya

## 🚀 Apa Seterusnya

Dengan peningkatan infrastruktur selesai, kami memberi tumpuan kepada penambahbaikan kandungan:

- **Kes penggunaan yang diperluas**: Lebih banyak contoh praktikal dan panduan langkah demi langkah
- **Penambahbaikan konsistensi**: Memperhalusi terminologi pelbagai bahasa untuk kejelasan
- **Eksport PDF yang dipertingkatkan**: Meningkatkan pengalaman penjanaan PDF merentas penyemak imbas

## Cuba Look Scanned Hari Ini

Look Scanned menyediakan kesan pengimbasan PDF berasaskan penyemak imbas, mengutamakan privasi tanpa memuat naik fail anda ke mana-mana. Dokumentasi yang lebih baik menjadikannya lebih mudah daripada sebelumnya untuk bermula.

👉 **Lawati [lookscanned.io](https://lookscanned.io) untuk mengalami pengimbasan dokumen yang pantas dan selamat dalam penyemak imbas anda.**
