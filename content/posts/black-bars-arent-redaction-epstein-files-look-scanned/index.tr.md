---
date: "2026-03-04T00:00:00+08:00"
draft: false
title: "Siyah Çubuklar Redaksiyon Değildir (Evet, “Epstein files” PDF tartışması bunu yine hatırlattı)"
summary: "PDF içindeki siyah kutuların neden yetersiz kalabildiğine, göndermeden önce yaptığım basit kontrollerin neler olduğuna ve final tarama stili çıktı için neden Look Scanned kullandığıma dair kısa, pratik bir not."
description: "PDF içindeki siyah kutuların neden yetersiz kalabildiğine, göndermeden önce yaptığım basit kontrollerin neler olduğuna ve final tarama stili çıktı için neden Look Scanned kullandığıma dair kısa, pratik bir not."
slug: "black-bars-arent-redaction-pdf-redaction-checklist"
tags: ["PDF", "Redaksiyon", "Belge Güvenliği", "Look Scanned"]
keywords:
  - "Epstein files"
  - "PDF redaksiyonu"
  - "etkisiz redaksiyon"
  - "PDF siyah çubuklar"
  - "PDF'i taranmış gibi göstermek"
  - "Look Scanned"
---

Ne zaman yüksek profilli bir belge yayını viral olsa, akışımda aynı PDF tartışması beliriyor.  
Bu kez konu **“Epstein files”** PDF’leriydi: insanlar karartılmış bölgelere yakınlaşıp “redaksiyon gerçek mi, yoksa üstüne konmuş siyah dikdörtgenlerden mi ibaret?” diye soruyordu.

Burada olayın kendisini yeniden tartışmak istemiyorum. Ama bu tartışma faydalı, çünkü çoğu ekibin kabul etmek istemediğinden daha yaygın bir hatayı ortaya koyuyor:

**Siyah çubuk çoğu zaman sadece görsel bir örtüdür. Gerçek redaksiyon, içeriği kaldırmaktır.**

Evet, ikisi aynı şey değil.

## “Siyah görünüyor” demek neden hâlâ riskli olabilir

PDF her zaman “sayfanın resmi” değildir. Daha çok bir kapsayıcıdır. Tek bir dosyada şunlar olabilir:

- görünen sayfa
- seçilebilir metin
- gizli OCR metni (görünmez ama aranabilir)
- anotasyonlar (vurgular, şekiller, yorumlar)
- metadata (author/title/subject vb.)

Yani ekranda bir şeyi kapatsanız bile alttaki metni, OCR’ı veya artık nesneleri yanlışlıkla dışarı gönderebilirsiniz. İnsanların **etkisiz redaksiyon** derken kastettiği budur. Karmaşık bir saldırı değil; sadece “örtmek” ile “kaldırmak” arasını karıştıran bir süreç.

Eğer süreciniz “Word/PowerPoint’te siyah dikdörtgen çizip PDF’e aktarmak” ise risk alıyorsunuz demektir. Sorunsuz da olabilir, sorunlu da. Bunu ancak gönderdiğiniz *gerçek final dosyayı* kontrol edince anlarsınız.

## “Redaksiyon yapılmış” PDF göndermeden önce yaptığım hızlı kontroller

Bu bir compliance programı değil. 60-90 saniyelik, sıkıcı ama etkili bir kontrol rutini.

Sadece **nihai dışa aktarılan dosyayı** kontrol ediyorum (gerçekten göndereceğim veya paylaşacağım sürüm):

- Hassas terimler için **arama** (isimler, ID’ler, e-posta parçaları, adresler)
- Karartılmış alan çevresini seçip **kopyala/yapıştır** ile düz metin düzenleyicide deneme
- Dosyayı **iki farklı görüntüleyicide** açma (masaüstü + tarayıcı genelde yeterli)
- Kalan **notlar/yorumlar** var mı bakma (vurgular, notlar, şekiller)
- Dışarı gidecekse **üst veriler** (yazar/başlık/konu) kontrolü

Belge tarama kökenliyse veya OCR’dan geçtiyse ekstra dikkat ediyorum, çünkü gizli ama aranabilir metin çoğu zaman fark edilmeyen ek bir katman olarak kalabiliyor.

Hepsi bu. Basit, tekrarlanabilir ve şaşırtıcı derecede işe yarıyor.

## Beni hatadan uzak tutan süreç

Belgede hassas bilgi varsa süreci olabildiğince net tutuyorum:

1) **Gerçek redaksiyon yap** (kaplama değil, içeriği kaldır)  
2) **Ek katmanları temizle** (notlar, ekler, gizli katmanlar, üst veriler)  
3) **Nihai dışa aktarımı doğrula** (yukarıdaki kontrol listesiyle)  
4) **Gönderime hazır sürümü üret** (genelde tarama görünümlü, tutarlı, nihai)

Son adım çoğu kişinin düşündüğünden daha önemli. Güvenlik gösterisi için değil; cihazlar arası tutarsızlıkları ve kazara oluşan tuhaflıkları azaltmak için.

## Look Scanned benim akışımda nereye oturuyor

Look Scanned’i redaksiyon aracı olarak kullanmıyorum. Bu onun işi değil.  
Ben onu **son teslim aşaması aracı** olarak kullanıyorum.

Belge doğru şekilde redakte edilip nihai dışa aktarım doğrulandıktan sonra, Look Scanned temiz bir **tarama görünümlü PDF** üretmeme yardımcı oluyor. Resmî gönderimlerde insanların beklediği dosya tipi bu oluyor.

Pratikte bu şunları sağlıyor:

- “Benim bilgisayarda format bozuldu” konuşmalarının azalması  
- daha güçlü bir “nihai belge” hissi (özellikle karşı taraf taranmış görünüm bekliyorsa)  
- daha temiz çıktı ve rastgele işaretleme katmanlarının kalma ihtimalinin düşmesi (dışa aktarma sürecine bağlı)

Asıl mesele sıra: **kaldır → doğrula → sonlandır**.

## Kısa sonuç

“Epstein files” PDF tartışması bize yine bir şey öğrettiyse, o da şu:  
**siyah kutular kanıt değildir.**

Redaksiyonu bir veri işlemi olarak ele alın, yayınlayacağınız dosyanın kendisini doğrulayın, sonra tarama görünümünü sonlandırın.

Look Scanned’i deneyin: [https://lookscanned.io](https://lookscanned.io)
