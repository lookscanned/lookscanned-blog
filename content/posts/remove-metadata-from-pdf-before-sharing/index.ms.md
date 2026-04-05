---
date: "2026-04-05T14:00:00+08:00"
draft: false
title: "Cara Membuang Metadata daripada PDF Sebelum Berkongsi"
summary: "PDF anda mungkin mengandungi metadata tersembunyi yang mendedahkan siapa anda, perisian apa yang anda gunakan, dan bila anda mengerjakannya. Berikut ialah perkara yang perlu disemak, cara membuangnya, dan bila menukar kepada PDF gaya imbasan menyelesaikan tugas dengan lebih menyeluruh berbanding mana-mana penyunting metadata."
description: "PDF anda mungkin mengandungi metadata tersembunyi yang mendedahkan siapa anda, perisian apa yang anda gunakan, dan bila anda mengerjakannya. Berikut ialah perkara yang perlu disemak, cara membuangnya, dan bila menukar kepada PDF gaya imbasan menyelesaikan tugas dengan lebih menyeluruh berbanding mana-mana penyunting metadata."
tags: ["pdf", "privasi", "metadata", "keselamatan dokumen", "dokumen sensitif"]
keywords:
  - "cara membuang metadata daripada pdf"
  - "risiko privasi metadata pdf"
  - "buang metadata pdf sebelum berkongsi"
  - "semak metadata pdf"
  - "data tersembunyi dalam pdf"
  - "alat pembuangan metadata pdf"
---

Saya menyemak metadata pada PDF yang hendak saya hantar minggu lepas. Ia masih mengandungi nama penuh saya, laluan fail dalaman syarikat saya, dan cap masa tepat setiap semakan yang saya buat sepanjang bulan lepas.

Halaman itu kelihatan bersih. Fail itu tidak.

Kebanyakan orang tidak pernah membuka panel sifat pada PDF sebelum berkongsinya. Kandungan yang kelihatan mendapat semua perhatian. Tetapi fail itu sendiri boleh memberitahu lebih banyak daripada apa yang dicetak di halaman, dan lapisan tersembunyi itulah yang diperkatakan dalam pos ini.

## Jawapan ringkas

Metadata PDF boleh merangkumi nama anda, perisian yang anda gunakan, cap masa penciptaan dan pengubahsuaian, sejarah semakan, ulasan, dan juga koordinat GPS daripada imej terbenam.

Untuk membuangnya, anda mempunyai beberapa pilihan:

- gunakan penyunting metadata atau alat pembersihan untuk melucutkan medan tertentu
- gunakan alat baris arahan seperti exiftool untuk kawalan penuh
- tukarkan PDF kepada fail berasaskan imej gaya imbasan, yang menggantikan keseluruhan struktur dokumen dan membuang semua data tersembunyi sekaligus

Jika dokumen itu sudah muktamad dan akan keluar daripada organisasi anda, pilihan terakhir itu ialah langkah tunggal paling menyeluruh yang boleh anda ambil.

## Apa yang sebenarnya terkandung dalam metadata PDF

PDF boleh membawa tiga lapisan maklumat di luar apa yang anda lihat di halaman.

Lapisan pertama ialah **sifat dokumen**. Ini ialah metadata yang kebanyakan orang fikirkan: nama pengarang, tajuk, subjek, tarikh penciptaan, tarikh pengubahsuaian, dan perisian yang menghasilkan fail. Buka mana-mana PDF dalam pemapar, semak File > Properties, dan anda mungkin akan melihat medan seperti "Author: Jane Smith" dan "Producer: Microsoft Word 2021." Maklumat itu mengikuti fail ke mana sahaja ia pergi.

Lapisan kedua ialah **XMP dan metadata terbenam**. Ini kurang kelihatan tetapi sering lebih mendedahkan. Jika PDF anda mengandungi imej terbenam, imej tersebut mungkin masih membawa data EXIF asalnya, termasuk model kamera, cap masa, dan koordinat GPS. Metadata XMP juga boleh merangkumi sejarah penyuntingan, tag tersuai, dan maklumat pelesenan fon. Kebanyakan orang tidak tahu lapisan ini wujud kerana pemapar PDF standard tidak menunjukkannya.

Lapisan ketiga ialah **data struktur tersembunyi**. Bergantung pada cara PDF dicipta dan disunting, fail itu mungkin mengandungi sejarah semakan, teks yang dipadam tetapi boleh dipulihkan, ulasan, anotasi, lalai medan borang, lapisan tersembunyi, JavaScript, dan lampiran fail terbenam. Ini ialah lapisan yang menyebabkan kerosakan paling banyak apabila ia bocor, kerana ia boleh mengandungi kandungan yang pengarang fikir mereka sudah buang.

Jika anda sudah memikirkan tentang data tersembunyi seperti ini dalam konteks memuat naik fail ke alat web, [Adakah Selamat Menggunakan Alat PDF Dalam Talian untuk Dokumen Sensitif?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) membincangkan model kepercayaan yang lebih luas.

## Mengapa perkara ini lebih penting daripada yang orang sangka

Kebocoran metadata tidak dramatik. Ia senyap, spesifik, dan sukar ditarik balik sebaik sahaja fail dikongsi.

**Pengenalpastian pengarang apabila kerahsiaan penting.** Jika PDF itu dicipta oleh seseorang yang tertentu, medan pengarang atau laluan fail dalaman boleh mengaitkan kembali kepada mereka. Ini penting untuk pemberi maklumat, laporan tanpa nama, dokumen bocor, atau apa-apa situasi di mana identiti penghantar sepatutnya tidak ada dalam fail.

**Sejarah semakan mendedahkan strategi rundingan.** PDF kontrak yang masih mengandungi perubahan yang dijejaki atau metadata semakan boleh mendedahkan kedudukan awal anda, apa yang anda padam, dan apa yang anda lembutkan sebelum menghantar versi akhir. Pihak satu lagi tidak perlu mahir teknikal untuk menemui perkara ini. Sesetengah pemapar PDF memaparkan data semakan secara automatik.

**Cap masa mendedahkan masa yang sensitif.** Tarikh penciptaan dan pengubahsuaian memberitahu seseorang bila dokumen itu dimulakan, bila ia terakhir diubah, dan berapa kali ia disentuh. Dalam konteks undang-undang, pematuhan, atau persaingan, maklumat masa seperti itu boleh lebih penting daripada kandungan itu sendiri.

**Koordinat GPS daripada imej terbenam.** Jika anda menampal foto ke dalam PDF dan foto itu masih membawa data lokasi EXIF, koordinat GPS tempat imej itu diambil kini terbenam dalam fail. Kebanyakan orang tidak memikirkan perkara ini kerana metadata itu hidup di dalam objek imej, bukan di panel sifat PDF.

**Versi perisian mendedahkan alat dalaman.** Medan seperti "Producer: Adobe Acrobat Pro DC 24.1.30225" atau "Creator: Microsoft Word for Microsoft 365" memberitahu seseorang alat dan versi yang organisasi anda gunakan. Untuk kebanyakan dokumen ini remeh. Untuk konteks sensitif, ia ialah kebocoran maklumat yang tidak perlu.

Tiada satu pun daripada ini hipotetikal. Ini ialah kebocoran metadata membosankan yang benar-benar berlaku.

## Cara menyemak metadata yang terkandung dalam PDF anda

Sebelum membuang apa-apa, lihat apa yang sebenarnya ada dalam fail.

**Dialog sifat pemapar PDF.** Dalam kebanyakan pembaca PDF, File > Properties atau Document Properties menunjukkan medan asas: pengarang, tajuk, subjek, tarikh penciptaan, tarikh pengubahsuaian, dan aplikasi penghasil. Ini menangkap lapisan pertama tetapi terlepas hampir semua yang lain.

**exiftool pada baris arahan.** Menjalankan `exiftool document.pdf` akan menunjukkan semua perkara: sifat dokumen, data XMP, EXIF imej terbenam, dan medan tersuai. Ini ialah kaedah pemeriksaan paling lengkap, tetapi ia memerlukan keselesaan dengan terminal. Jika anda tidak pernah menggunakannya sebelum ini, ia berbaloi dipasang hanya untuk melihat apa yang boleh terkandung dalam satu PDF.

**Pemapar metadata dalam talian.** Sesetengah laman web membenarkan anda memuat naik PDF untuk memeriksa metadatanya. Jika sebab anda menyemak metadata ialah privasi, memuat naik fail ke perkhidmatan pihak ketiga untuk memeriksanya ialah langkah yang dipersoalkan. Anda cuba mengetahui sama ada fail itu membocorkan maklumat, dan langkah pertama ialah menghantarnya kepada orang yang tidak dikenali.

Sebaik sahaja anda tahu apa yang ada dalam fail, persoalannya ialah cara membuangnya.

## Kaedah untuk membuang metadata PDF

Tiada satu kaedah terbaik tunggal. Pilihan yang tepat bergantung pada apa yang anda perlu simpan dan sejauh mana anda perlu teliti.

### Adobe Acrobat (Sanitize Document)

Acrobat Pro menyertakan ciri "Remove Hidden Information" dan "Sanitize Document" yang boleh melucutkan metadata, teks tersembunyi, ulasan, data borang, lampiran, dan kandungan tidak kelihatan yang lain. Ini ialah salah satu pendekatan paling lengkap jika anda perlu mengekalkan lapisan teks dan fail boleh dicari.

Hadnya ialah ia memerlukan lesen Acrobat Pro berbayar. Jika anda sudah memilikinya, ini ialah pilihan yang baik. Jika tidak, ini bukan jenis masalah yang membenarkan langganan dengan sendirinya.

### exiftool dan alat CLI lain

exiftool boleh membuang medan metadata tertentu secara pembedahan atau melucutkan semua daripada PDF dalam satu arahan. Ia percuma, berjalan di mana-mana platform, dan memberikan kawalan tepat terhadap apa yang dibuang.

Hadnya ialah halangan teknikal. Ia juga memfokuskan pada medan metadata berbanding data tersembunyi struktur. Jika PDF mengandungi sejarah semakan, lapisan tersembunyi, atau objek terbenam, exiftool tidak akan menangkapnya. Ia cemerlang dalam apa yang dilakukannya, tetapi ia tidak merangkumi setiap lapisan.

### Alat pembuangan metadata dalam talian

Beberapa laman web membenarkan anda memuat naik PDF, melucutkan metadata, dan memuat turun versi yang telah dibersihkan. Aliran kerjanya mudah dan tidak memerlukan pemasangan perisian.

Hadnya sepatutnya jelas. Anda memuat naik dokumen ke pelayan pihak ketiga untuk menyelesaikan masalah privasi. Itu seperti menyerahkan diari anda kepada orang asing supaya mereka boleh mengoyakkan halaman yang mengandungi alamat anda.

Jika fail itu berisiko rendah, itu mungkin pertukaran yang boleh diterima. Jika anda membuang metadata kerana dokumen itu sensitif, pendekatan ini memperkenalkan jenis pendedahan yang tepat yang anda cuba elakkan. Untuk lebih lanjut mengenai pertukaran itu, [Adakah Selamat Menggunakan Alat PDF Dalam Talian untuk Dokumen Sensitif?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) membincangkannya secara terperinci.

### Cetak ke PDF

Mencetak semula PDF melalui pencetak maya mencipta fail baharu yang sering melucutkan sebahagian metadata dan meratakan elemen tertentu. Ia percuma dan terbina dalam kebanyakan sistem pengendalian.

Hasilnya tidak konsisten. Sesetengah pencetak maya menyuntik metadata mereka sendiri ke dalam output. Sesetengah melucutkan data XMP, yang lain tidak. EXIF imej terbenam mungkin atau mungkin tidak terselamat dalam proses. Jika anda menggunakan kaedah ini, sentiasa sahkan hasilnya dan jangan menganggap ia bersih.

### Menukar kepada PDF gaya imbasan

Pendekatan ini menukarkan setiap halaman PDF kepada imej, kemudian membungkus imej tersebut ke dalam PDF baharu. Oleh kerana keseluruhan struktur dokumen digantikan, semua data tersembunyi dibuang: metadata, lapisan teks, ulasan, sejarah semakan, fail terbenam, medan borang, JavaScript, semuanya. Output ialah PDF baharu yang mengandungi hanya imej halaman yang dirender.

Pertukarannya ialah fail itu tidak lagi boleh dicari teks. Ia berkelakuan seperti gambar setiap halaman. Untuk dokumen yang sudah muktamad dan akan keluar daripada organisasi anda, pertukaran itu sering berbaloi. Untuk dokumen yang masih perlu dicari, dipetik, atau disunting di hiliran, ia tidak.

Itulah tugas yang dilakukan oleh [Look Scanned](https://lookscanned.io). Ia menukarkan PDF kepada versi gaya imbasan secara setempat dalam pelayar anda, jadi fail itu tidak pernah meninggalkan peranti anda. Hasilnya ialah PDF berasaskan imej yang bersih tanpa data tersembunyi, tanpa lapisan teks, tanpa metadata daripada asal, dan tanpa pemprosesan sisi pelayan untuk dibimbangkan.

## Perbandingan

| Kaedah | Membuang sifat dokumen | Membuang lapisan tersembunyi | Membuang EXIF imej | Mengekalkan carian teks | Memerlukan muat naik | Kos |
| --- | --- | --- | --- | --- | --- | --- |
| Adobe Acrobat (Sanitize) | Ya | Ya | Bergantung pada tetapan | Ya | Tidak | Berbayar |
| exiftool / CLI | Ya | Separa | Ya | Ya | Tidak | Percuma |
| Alat metadata dalam talian | Biasanya | Biasanya tidak | Kadang-kadang | Ya | Ya | Percuma |
| Cetak ke PDF | Separa | Separa | Kadang-kadang | Biasanya | Tidak | Percuma |
| Penukaran gaya imbasan (cth. Look Scanned) | Ya | Ya | Ya | Tidak | Tidak (pelayar setempat) | Percuma |

Tiada satu baris pun yang sempurna untuk setiap situasi. Persoalannya sentiasa pertukaran mana yang penting untuk fail tertentu ini.

## Bila setiap pendekatan sesuai

**Dokumen masih dalam proses.** Lucutkan metadata dengan Acrobat atau exiftool. Kekalkan lapisan teks. Pembuangan metadata pada peringkat ini ialah pengemasan, bukan perkara utama.

**Dokumen sudah muktamad dan akan keluar daripada organisasi anda.** Jika kebolehcarian tidak kritikal, penukaran gaya imbasan ialah langkah tunggal paling menyeluruh. Ia membuang semuanya dalam satu laluan. Jika fail masih perlu boleh dicari, gunakan ciri Sanitize Acrobat sebaliknya, dan sahkan hasilnya.

**Dokumen sangat sensitif.** Gabungkan pendekatan. Uruskan penyuntingan yang betul terlebih dahulu, kemudian pembersihan metadata, kemudian penukaran gaya imbasan akhir. Setiap langkah merangkumi lapisan yang berbeza. Jika penyuntingan ialah sebahagian daripada aliran kerja anda, [Bar Hitam Bukan Penyuntingan](../black-bars-arent-redaction-pdf-redaction-checklist/) menerangkan mengapa penyamaran visual tidak mencukupi.

**Anda tidak pasti apa yang ada dalam fail.** Semak dahulu dengan exiftool atau panel sifat. Kemudian tentukan berdasarkan apa yang anda temui dan ke mana fail itu akan dihantar. Memilih kaedah pembuangan sebelum memahami apa yang perlu dibuang membawa kepada sama ada berlebihan atau data terlepas.

Jika anda sedang menimbang sama ada PDF gaya imbasan ialah format yang tepat untuk situasi anda, [PDF Imbasan vs PDF Boleh Disunting: Yang Mana Patut Anda Hantar?](../scanned-pdf-vs-editable-pdf/) membincangkan keputusan itu dengan lebih luas.

## Aliran kerja yang sebenarnya saya gunakan

1. Siapkan kandungan dokumen dahulu. Jangan bersihkan metadata pada fail yang masih berubah.
2. Semak metadata pada eksport akhir. File > Properties sebagai minimum. exiftool jika ia penting.
3. Buang atau bersihkan berdasarkan apa yang saya temui dan sejauh mana sensitif destinasinya.
4. Jika fail itu akan keluar dan tidak perlu boleh dicari, saya menukarkannya kepada PDF gaya imbasan. [Look Scanned](https://lookscanned.io) mengendalikan langkah itu dalam pelayar tanpa memuat naik fail.
5. Buka hasilnya dalam pemapar baharu dan sahkan. Semak sifat, cuba pilih teks, cari istilah yang sepatutnya sudah tiada.

Langkah terakhir itu menangkap lebih banyak data baki daripada yang orang jangka.

Jika meratakan sudah mencukupi untuk situasi anda dan anda tidak memerlukan penukaran gaya imbasan penuh, [Cara Meratakan PDF Sebelum Menghantarnya](../how-to-flatten-a-pdf-before-sending/) membincangkan jalan tengah itu.

## Soalan Lazim

### Adakah menukar kepada PDF imbasan membuang semua metadata?

Ya. Menukar kepada PDF berasaskan imej menggantikan keseluruhan struktur fail. Hasilnya tidak mengandungi lapisan teks, tiada objek tersembunyi, tiada sifat dokumen daripada asal, dan tiada metadata fail terbenam. Output ialah PDF baharu yang mengandungi hanya imej halaman yang dirender.

### Bolehkah seseorang memulihkan metadata daripada PDF gaya imbasan?

Tidak daripada PDF itu sendiri. Struktur asal sudah tiada. Satu-satunya metadata dalam fail baharu ialah apa sahaja yang ditulis oleh alat penukaran, seperti tag penghasilnya sendiri. Jika penukaran berlaku secara setempat dalam pelayar, tiada salinan sisi pelayan yang wujud juga.

### Adakah membuang metadata sama dengan penyuntingan?

Tidak. Pembuangan metadata melucutkan sifat tersembunyi dan data peringkat dokumen. Penyuntingan membuang kandungan yang kelihatan daripada halaman. Jika anda perlu membuang nama, nombor, atau teks daripada halaman itu sendiri, itu ialah langkah berasingan yang mesti berlaku sebelum pembersihan metadata. [Bar Hitam Bukan Penyuntingan](../black-bars-arent-redaction-pdf-redaction-checklist/) menerangkan mengapa penyamaran visual sahaja tidak dikira.

### Patutkah saya membuang metadata daripada setiap PDF yang saya hantar?

Tidak semestinya. Untuk dokumen rutin yang sudah awam atau berisiko rendah, metadata tidak berbahaya. Persoalan itu menjadi penting apabila dokumen itu sensitif, penerima ialah pihak luar, atau identiti pengarang sepatutnya tidak ada dalam fail.

## Pemikiran akhir

Kebanyakan orang tidak pernah menyemak apa yang dikatakan PDF mereka tentang mereka sebelum menghantarnya.

Fail itu mungkin bersih. Atau ia mungkin mengandungi nama anda, sejarah semakan anda, dan koordinat GPS kedai kopi tempat anda menyuntingnya Selasa lepas.

Jika dokumen itu cukup penting untuk dikongsi dengan berhati-hati, ia cukup penting untuk disemak. Dan jika semakan mendedahkan lebih daripada yang anda jangkakan, ada cara mudah untuk membetulkannya sebelum anda tekan hantar.
