---
date: "2026-04-22T15:00:00+08:00"
draft: false
title: "Bir PDF'yi Yazdırıp İmzalayıp Taramışsınız Gibi Görünecek Şekilde Nasıl İmzalarsınız"
summary: "Alıcı taranmış görünümlü imzalı bir kopya beklediğinde dijital imza eklemek yeterli değildir. İşte yazıcı olmadan yazdır-imzala-tara estetiğini karşılayan iki adımlı iş akışı ve bu yaklaşımın ne zaman yanlış seçim olduğu."
description: "Alıcı taranmış görünümlü imzalı bir kopya beklediğinde dijital imza eklemek yeterli değildir. İşte yazıcı olmadan yazdır-imzala-tara estetiğini karşılayan iki adımlı iş akışı ve bu yaklaşımın ne zaman yanlış seçim olduğu."
tags: ["pdf", "imza", "taranmış pdf", "belge iş akışı", "sözleşmeler"]
keywords:
  - "pdf nasıl taranmış görünsün diye imzalanır"
  - "pdf'yi yazdırılmış ve taranmış gibi imzala"
  - "yazıcısız pdf imzala"
  - "imzayı taranmış göstermek"
  - "sahte imzalı taranmış pdf"
  - "dijital imzayı el yazısı gibi göstermek"
  - "yazdır imzala tara alternatifi"
---

Sözleşme gece 11'de geldi. Gönderenin e-postası nazik ve netti: "Lütfen yazdırıp imzalayın ve taranmış bir kopya gönderin."

Yaşamadığım bir şehirde bir otel odasındaydım ve ertesi sabah uçağım vardı. En yakın kırtasiye saat 10'da kapanmıştı. Elimde sadece dizüstü bilgisayarım vardı.

Tam olarak bu durumu yeterince yaşadım, bu yüzden çoğu insanın sonra ne yaptığını biliyorum. Preview veya Adobe Reader'da bir imza ekliyor, PDF'yi dışa aktarıyor, geri gönderiyor ve karşı tarafın fark etmemesini umuyorlar. Bazen fark etmiyor. Bazen dosya "lütfen dijital imza değil, taranmış bir kopya gönderin" notuyla geri dönüyor ve bütün yazışma bir gün daha uzuyor.

Bunu halletmenin daha iyi bir yolu var ve yazıcılarla hiçbir ilgisi yok.

## Kısa cevap

Biri sizden "yazdırılmış, imzalanmış ve taranmış" bir PDF istiyorsa, bir değil iki adıma ihtiyacınız var:

1. PDF'ye imzanızı ekleyin.
2. İmzalanmış tüm belgeye tarama efekti uygulayın.

İkinci adım, insanların atladığı adımdır. Aynı zamanda geçen bir dosya ile geri dönen dosya arasındaki farkı yaratan da odur.

Sebebi basit. Net bir dijital PDF üzerine yapıştırılmış bir dijital imza, yapıştırılmış gibi görünür. İmza kendi başına gerçekçi olabilir, ancak gerçek bir tarayıcının ürettiği artefaktlardan hiçbirine sahip olmayan bir arka planın üzerinde durur. İşte dosyayı ele veren bu uyumsuzluktur.

Eğer imza ve sayfanın geri kalanı aynı gürültüyü, aynı hafif eğriliği, aynı yumuşatılmış kenarları paylaşırsa, dosya "bu yazdırıldı, imzalandı ve tarandı" olarak okunur — hiçbiri olmasa bile.

## "Sadece dijital imza ekle" neden geçmez

Çoğu PDF düzenleyicisi, bir imzayı bir sayfaya bir dakikadan kısa sürede bırakmanıza izin verir. Sorun hız değil. Sorun son halidir.

Tipik bir dijital imza iş akışı şunu üretir:

- **Keskin, kenar yumuşatmalı bir imza.** Her eğri pürüzsüzdür. Mürekkep asla yayılmaz. Altında kağıt dokusu yoktur.
- **Aynı şekilde keskin bir arka plan.** Belge metni mükemmel hizalanmıştır. Sıfır gürültü vardır. Sayfa saf beyazdır.
- **Üstte yüzen bir imza.** Yakınlaştırdığınızda, bazen imzanın kendi sıkıştırmasıyla ayrı bir katman olarak durduğunu, etrafındaki metinden biraz farklı olduğunu görebilirsiniz.

Gerçek bir tarama asla böyle görünmez. Gerçek bir tarama şunları içerir:

- İmza dahil tüm sayfa boyunca hafif gürültü
- Genellikle bir veya iki derece hafif döndürme
- Sensör ve alt örneklemeden kaynaklanan yumuşatılmış harf kenarları
- Asla saf beyaz olmayan kağıt renk kayması
- Mürekkep ve kağıda eşit şekilde uygulanan sıkıştırma artefaktları

İmza sayfanın bir parçasıdır. Tarayıcı onun bir imza olduğunu bilmez. Mürekkep ve basılı metne aynı şekilde davranır.

Bu tekdüzelik, alıcının gözünün yakaladığı şeydir — nedenini ifade edemese bile. Vize evraklarını inceleyen bir memur, iş teklif mektuplarını inceleyen bir İK çalışanı, kira sözleşmesini inceleyen bir ev sahibi — binlerce taranmış belge ve birkaç yüz yapıştırılmış imzalı PDF gördüler. Desen tanıma eğitilmiştir.

## İnsanların bugün bir PDF'yi imzalamasının üç yolu

İş akışını geçmeden önce, seçenekler ve her birinin gerçekten ne başardığı konusunda net olmakta fayda var.

| Yaklaşım | Gerçek bir tarama gibi görünür | Hukuki etki | Süre | Yazıcı/tarayıcı gerektirir |
| --- | --- | --- | --- | --- |
| DocuSign / Adobe Sign | Hayır (belli ki dijital) | Güçlü (eIDAS / ESIGN) | ~2 dk | Hayır |
| Preview/Acrobat'ta yazılmış veya çizilmiş imza | Pek değil | Herhangi bir el yazısı imzayla aynı | ~5 dk | Hayır |
| Yazdır → elle imzala → tara | Evet | Herhangi bir el yazısı imzayla aynı | 10-20 dk | Evet |
| İmza ekle + tarama efekti uygula | Evet | Herhangi bir el yazısı imzayla aynı | ~2 dk | Hayır |

Dördüncü satır, bu yazının konusu olan iş akışıdır. Yazıcı ve tarayıcı olmadan üçüncü satırın görsel sonucunu verir.

Bu tabloyu doğru okumak önemlidir. Tarama tarzı imzalanmış bir PDF, normal imzalı bir PDF'den sihirli bir şekilde daha güçlü değildir. Herhangi bir görüntü tabanlı imzayla aynı hukuki etkiye sahiptir. Amaç hukuki ağırlık üretmek değildir. Amaç, alıcının beklediği estetikle eşleşmektir.

## Alıcılar neden "yazdır-imzala-tara" görünümünü bekliyor

İnsanlar kısmen alışkanlıktan, kısmen süreçten "taranmış bir kopya" ister.

Alışkanlık kısmı dijital imzalardan daha eskidir. On yıllar boyunca, imzalı bir belgeyi iletmenin tek yolu kağıdı imzalayıp ya faks çekmek ya da taramaktı. Bir taramanın görsel artefaktları — hafif eğim, gürültü, yumuşatılmış kenarlar — "gerçek bir insan bu belgeye dokundu" sinyali haline geldi. Çok fazla evrak işleyen kuruluşlar o sinyali içselleştirdi. Hukuki altyapı ilerlemiş olsa bile formları hâlâ bunu istiyor.

Süreç kısmı bürokratik ataletdir. Birçok form, dijital imza yaygın olmadığı zamanlarda yazılmıştı ve talimatları güncellemek kimsenin listesinin başına asla gelmedi. Dosyayı inceleyen kişinin taranıp taranmadığı gerçekten umurunda olmayabilir. Beş yıl önce talimatları yazan kişi, öyle olacağını varsaymıştı.

Bunu en sık şurada görürsünüz:

- Vize ve konsolosluk başvuruları
- Göçmenlik ve oturum evrakları
- Yerel düzeyde devlet formları
- Geleneksel hukuk ve muhasebe firmaları
- Karşı tarafın DocuSign'ı kurmadığı sınır ötesi sözleşmeler
- Eski uyum iş akışlarına sahip şirketlerdeki İK işe alım evrakları
- Sigorta hasar başvuruları
- Bazı banka hesabı ve kredi formları

Tüm bunlarda, en az dirençli yol, istedikleri şeyi bekledikleri formatta onlara vermektir. Talimatla mücadele etmek nadiren işe yarar. Onunla eşleşmek birkaç dakika sürer.

## İş akışı

Bunun için kullandığım araç [Look Scanned](https://lookscanned.io), çünkü her iki adımı aynı geçişte yapıyor. İmza ve tarama efekti birlikte uygulanır, bu da imzanın yapıştırılmış gibi görünmesini engelleyen şeydir.

### 1. PDF'nin son sürümünü hazırlayın

Bir taslağı imzalamayın. İmzadan sonraki her düzenleme, yeniden başlamak anlamına gelir. Dosyada yorumlar, form alanları veya değişiklik izleme varsa, önce onları düzleştirin. [Göndermeden Önce Bir PDF Nasıl Düzleştirilir](../how-to-flatten-a-pdf-before-sending/) bu adımı ele alır.

### 2. Look Scanned'i açın ve dosyayı yükleyin

PDF'yi sürükleyin. Dosya tarayıcıda yerel olarak işlenir. Hiçbir şey bir sunucuya yüklenmez, bu da belge kişisel veri, sözleşme şartları veya NDA altındaki herhangi bir şey içeriyorsa önemlidir. [Hassas Belgeler İçin Çevrimiçi PDF Araçlarını Kullanmak Güvenli mi?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) bu ayrımın neden kozmetik olmadığını açıklar.

### 3. İmzanızı ekleyin

Araçta imza oluşturmanın üç yolu vardır:

- **Mevcut bir imzanın görüntüsünü yükleyin.** Önceki bir belgeden kaydedilmiş el yazısı imzanızın temiz bir taraması zaten varsa, bu en gerçekçi seçenektir.
- **Adınızı yazın** ve aracın imza tarzı bir yazı tipinde işlemesine izin verin. İmzaya benzeyen bir şeye ihtiyacınız olduğunda ancak kaydedilmiş bir görüntünüz olmadığında yararlıdır.
- **İmzanızı çizin** imza pedi üzerinde fare, trackpad veya dokunmatik ekranla. Bu, en doğal görünümlü sonucu verir çünkü çizim gerçek insan tutarsızlığı içerir.

Çizme yöntemi, tablet veya trackpad'de varsayılan seçimimdir. Yüklenen görüntü, kaydedilmiş bir tane olduğunda masaüstünde varsayılan seçimimdir.

İmza yerleştirildikten sonra, imza satırının üzerine konumlandırın. O ölçekte gerçek bir imzanın nasıl görüneceğiyle eşleşecek şekilde yeniden boyutlandırın. Çok küçük veya çok mükemmel merkezlenmiş imzalar başka bir ipucudur.

### 4. Tarama efektini uygulayın

Asıl işi yapan adım budur.

Şu sırayla başvurduğum ayarlar:

- **Gri tonlama veya hafif bir sepya tonu.** Saf beyaz arka planlar ele verir. Gerçek bir tarama neredeyse hiçbir zaman saf beyaz bir sayfa üretmez.
- **Yaklaşık 0,5 ila 1,5 derece arasında döndürme.** Daha fazlası özensiz görünür. Daha azı sahnelenmiş görünür. Belge birden fazla sayfadan oluşuyorsa, sayfaların hepsinin aynı şekilde eğilmemesi için sayfa başına döndürme rastgeleleştirmesini etkinleştirin.
- **Yüksek değil, düşük gürültü.** Modern tarayıcılar sessizdir. Ağır gürültü, sahte görünen araçların ürettiği şeydir. Hafif bir tane yeterlidir.
- **Hafif bulanıklık.** Sensör yumuşaklığı inceliklidir. Metnin okunamaz olmasını istemezsiniz; mükemmel dijital vektör kenarını kaybetmesini istersiniz.
- **150-200 civarında DPI.** Daha yüksek DPI daha gerçekçi değildir. Gerçek ofis tarayıcıları neredeyse her zaman varsayılan olarak 150 veya 200 DPI çıkışı verir. 600 DPI'lık bir "tarama" kendi başına şüphelidir.

Bu varsayılanların amacı sınırlamadır. Çoğu sahte tarama, efektler çok düşük değil, çok yüksek ayarlandığı için başarısız olur.

### 5. İndirip sonucu kontrol edin

Göndermeden önce, dosyayı oluşturmak için kullandığınızdan farklı bir görüntüleyicide açın. İmzaya yakınlaştırın. İmza, etrafındaki metinle aynı gürültü dokusuna sahip olmalıdır. İmza hâlâ net görünürken sayfanın geri kalanı yumuşatılmışsa, tarama efekti imza katmanına uygulanmamıştır ve yeniden dışa aktarmanız gerekir.

Sayfadaki metni seçmeyi deneyin. Yapamamanız gerekir. Dosya hâlâ seçilebilir bir metin katmanına sahipse, gerçekten rasterleştirilmemiştir ve dikkatli bir alıcı bunu anlayabilir.

Bu doğrulama adımı, insanların beklediğinden daha fazla sorunu yakalar.

## Bu iş akışı ne zaman yanlış seçim olur

Tarama tarzı imzalı bir PDF'nin normal bir dijital imzadan daha iyi değil, daha kötü olduğu durumlar vardır.

**Hukuki ağırlık görünümden daha önemli olduğunda.** DocuSign, Adobe Sign veya herhangi bir eIDAS nitelikli sağlayıcı tarafından desteklenen dijital imzalar, imzalayanın kimliğinin ve belge bütünlüğünün kriptografik kanıtını taşır. Tarama tarzı bir PDF bunların hiçbirini taşımaz. Yüksek hukuki risk taşıyan her şey için — birleşmeler, büyük finansal anlaşmalar, düzenlenmiş sözleşmeler — kriptografik seçeneği kullanın. [Taranmış PDF vs Düzenlenebilir PDF: Hangisini Göndermelisiniz?](../scanned-pdf-vs-editable-pdf/) format seçimini ele alır.

**Şirketinizin zorunlu bir iş akışı olduğunda.** İşvereniniz sözleşmeler için DocuSign kullanıyorsa, DocuSign kullanın. Tarama tarzı bir PDF onların denetim iziyle entegre olmayacaktır ve süreç imzalı bir zarf beklerken bir tane göndermek sürtüşmeye neden olacaktır.

**Alıcı açıkça dijital imza istediğinde.** Bazı kuruluşlar ters yöne hareket etti ve şimdi taranmış görüntüleri reddediyor. Talimatları okuyun. Kriptografik olarak imzalanmış bir PDF istiyorlarsa, tarama tarzı bir dosya yanlış cevaptır.

**Belge makine tarafından işleneceğinde.** Alıcı sistem OCR çalıştırıyor, alanları çıkarıyor veya dosyayı seçilebilir metin bekleyen bir iş akışına besliyorsa, rasterleştirilmiş tarama tarzı bir PDF o boru hattını bozacaktır. Bu durumda, temiz bir dijital imzayla düzenlenebilir PDF'yi gönderin.

Kural: tarama tarzı imzalama, insan tarafından okunabilen evrakların insan tarafından incelenmesi içindir. Evrensel bir yedek değildir.

## SSS

### Alıcılar gerçek bir tarama ile tarama tarzı bir PDF arasındaki farkı gerçekten anlayabilir mi?

Bazen ve efektlerin ne kadar dikkatli uygulandığına bağlıdır. Mütevazı ayarlar ve gerçek bir imza (yazılmış değil, çizilmiş veya yüklenmiş) ile sonuç, normal bir inceleyici için gerçek bir taramadan ayırt edilemez. Adli inceleme farklı bir sorudur ve bunun önemli olduğu herhangi bir durumda bu iş akışı uygun değildir.

### Bu yasal mı?

Tarama tarzı imzalanmış bir PDF, sıradan sözleşmeler için çoğu yargı alanında geniş çapta kabul edilen diğer herhangi bir taranmış el yazısı imzayla aynı hukuki etkiye sahiptir. Daha güçlü kriptografik garantiler taşıyan nitelikli elektronik imzaya (eIDAS) veya ESIGN Act dijital imzasına eşdeğer değildir. Bu güvence düzeyini gerektiren belgeler için nitelikli bir e-imza sağlayıcısı kullanın.

### DocuSign'ım zaten var. Buna ihtiyacım var mı?

Alıcı DocuSign zarflarını kabul ederse, DocuSign kullanın. Bu iş akışını kullanmanın nedeni, özellikle alıcının taranmış görünümlü imzalı bir PDF istediği ve başka hiçbir şeyin onları tatmin etmeyeceği durumlardır.

### Bunu vize, göçmenlik veya konsolosluk başvuruları için kullanabilir miyim?

Uygulamada birçok başvuru sahibi bunu yapar, çünkü bu başvurular tipik olarak taranmış bir kopya ister ve dijital imza için bir yol sağlamaz. Başvurunun istediğiyle eşleştirin. Talimatlar özellikle orijinalin bir noter önünde fiziksel olarak imzalanmasını gerektiriyorsa, hiçbir dijital iş akışı bunun yerini tutmaz.

### Bu fiziksel bir tarayıcı gerektirir mi?

Hayır. Olay da bu. Tüm iş akışı bir tarayıcıda çalışır. Tek girdi dijital bir PDF ve bir imzadır ve çıktı, bir tarayıcıdan geçmiş gibi görünen bir PDF'dir.

### İmza son PDF'de düzenlenebilir olacak mı?

Hayır. Tarama efekti uygulandıktan sonra tüm sayfa bir görüntüye rasterleştirilir. İmza, yazdırmış, imzalamış ve taramış olsaydınız nasıl olacaksa, sayfanın bir parçası haline gelir. Bu noktadan sonra seçilemez, taşınamaz veya düzenlenemez. Daha sonra temiz bir düzenlenebilir kopyaya ihtiyacınız olursa, tarama öncesi sürümü saklayın.

## Son düşünce

Bu e-postanın diğer tarafındaki kişi genellikle sizi test etmiyor. Dijital imzalamanın sıradan olmasından önce birinin yazdığı bir süreci takip ediyor. İncelemeye alışkın olduğu şeyle eşleşen bir dosya istiyor ve gününe devam etmek istiyor.

Ona istediği gibi görünen dosyayı verin, göndermeden önce doğrulayın ve düzenlenebilir ana sürümü kendinize saklayın.

Genellikle tüm iş budur.
