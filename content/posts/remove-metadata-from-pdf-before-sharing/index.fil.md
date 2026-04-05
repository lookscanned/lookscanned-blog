---
date: "2026-04-05T14:00:00+08:00"
draft: false
title: "Paano Tanggalin ang Metadata mula sa isang PDF Bago Ibahagi"
summary: "Ang iyong PDF ay maaaring maglaman ng nakatagong metadata na nagbubunyag kung sino ka, anong software ang ginamit mo, at kailan ka nagtrabaho dito. Narito kung ano ang dapat suriin, paano ito tanggalin, at kung kailan ang pag-convert sa scan-style na PDF ang mas masusing solusyon kaysa sa anumang metadata editor."
description: "Ang iyong PDF ay maaaring maglaman ng nakatagong metadata na nagbubunyag kung sino ka, anong software ang ginamit mo, at kailan ka nagtrabaho dito. Narito kung ano ang dapat suriin, paano ito tanggalin, at kung kailan ang pag-convert sa scan-style na PDF ang mas masusing solusyon kaysa sa anumang metadata editor."
tags: ["pdf", "privacy", "metadata", "seguridad ng dokumento", "sensitibong dokumento"]
keywords:
  - "paano tanggalin ang metadata mula sa pdf"
  - "panganib sa privacy ng metadata ng pdf"
  - "tanggalin ang metadata ng pdf bago ibahagi"
  - "suriin ang metadata ng pdf"
  - "nakatagong data sa pdf"
  - "tool sa pagtanggal ng metadata ng pdf"
---

Sinuri ko ang metadata sa isang PDF na ipapadala ko noong nakaraang linggo. Naroroon pa rin ang aking buong pangalan, ang panloob na file path ng aming kumpanya, at ang eksaktong timestamp ng bawat rebisyon na ginawa ko sa nakalipas na buwan.

Malinis ang hitsura ng pahina. Ang file ay hindi.

Karamihan sa mga tao ay hindi kailanman binubuksan ang properties panel ng isang PDF bago ito ibahagi. Ang nakikitang nilalaman ang nakakakuha ng lahat ng atensyon. Ngunit ang file mismo ay nakakapagsabi ng higit pa kaysa sa nakaprint sa pahina, at ang nakatagong layer na iyon ang pinag-uusapan sa post na ito.

## Ang maikling sagot

Ang metadata ng PDF ay maaaring magsama ng iyong pangalan, ang software na ginamit mo, mga timestamp ng paglikha at pagbabago, kasaysayan ng rebisyon, mga komento, at maging mga koordinadang GPS mula sa mga naka-embed na larawan.

Para tanggalin ito, may ilang pagpipilian ka:

- gumamit ng metadata editor o sanitization tool para tanggalin ang mga partikular na field
- gumamit ng command-line tool tulad ng exiftool para sa buong kontrol
- i-convert ang PDF sa isang scan-style na image-based na file, na pinapalitan ang buong istruktura ng dokumento at tinatanggal ang lahat ng nakatagong data nang sabay-sabay

Kung ang dokumento ay pinal na at papalabas ng iyong organisasyon, ang huling opsyon na iyon ang pinakamasusing iisang hakbang na magagawa mo.

## Ano talaga ang nilalaman ng metadata ng PDF

Ang isang PDF ay maaaring magdala ng tatlong layer ng impormasyon na lampas sa nakikita mo sa pahina.

Ang unang layer ay ang **mga katangian ng dokumento**. Ito ang metadata na iniisip ng karamihang tao: pangalan ng may-akda, pamagat, paksa, petsa ng paglikha, petsa ng pagbabago, at ang software na lumikha ng file. Buksan ang anumang PDF sa isang viewer, suriin ang File > Properties, at malamang makikita mo ang mga field tulad ng "Author: Jane Smith" at "Producer: Microsoft Word 2021." Ang impormasyong iyon ay kasama ng file saanman ito pumunta.

Ang pangalawang layer ay ang **XMP at naka-embed na metadata**. Ito ay hindi gaanong nakikita ngunit kadalasang mas nakakabunyag. Kung ang iyong PDF ay naglalaman ng mga naka-embed na larawan, ang mga larawang iyon ay maaaring nagdadala pa rin ng kanilang orihinal na EXIF data, kasama ang modelo ng camera, mga timestamp, at mga koordinadang GPS. Ang XMP metadata ay maaari ding magsama ng kasaysayan ng pag-edit, mga custom na tag, at impormasyon ng lisensya ng font. Karamihan sa mga tao ay hindi alam na umiiral ang layer na ito dahil hindi ito ipinapakita ng mga karaniwang PDF viewer.

Ang ikatlong layer ay ang **nakatagong structural data**. Depende sa kung paano nilikha at in-edit ang PDF, ang file ay maaaring maglaman ng kasaysayan ng rebisyon, na-delete ngunit nare-recover na teksto, mga komento, mga anotasyon, mga default ng form field, mga nakatagong layer, JavaScript, at mga naka-embed na file attachment. Ito ang layer na nagdudulot ng pinakamalaking pinsala kapag nabunyag, dahil maaari itong maglaman ng nilalaman na akala ng may-akda ay natanggal na nila.

Kung naisip mo na ang ganitong uri ng nakatagong data sa konteksto ng pag-upload ng mga file sa mga web tool, ang [Ligtas Ba ang Paggamit ng Online na PDF Tools para sa mga Sensitibong Dokumento?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) ang sumasaklaw sa mas malawak na modelo ng tiwala.

## Bakit mas mahalaga ito kaysa sa iniisip ng mga tao

Ang mga pagtagas ng metadata ay hindi dramatiko. Tahimik, tiyak, at mahirap i-undo kapag naibahagi na ang file.

**Pagkakakilanlan ng may-akda kapag mahalaga ang pagiging anonymous.** Kung ang PDF ay nilikha ng isang partikular na tao, ang field ng may-akda o panloob na file path ay maaaring magbalik-ugnay sa kanila. Mahalaga ito para sa mga whistleblower, anonymous na ulat, mga leaked na dokumento, o anumang sitwasyon kung saan ang pagkakakilanlan ng nagpadala ay dapat na wala sa file.

**Kasaysayan ng rebisyon na nagbubunyag ng estratehiya sa negosasyon.** Ang isang kontratang PDF na naglalaman pa rin ng mga sinusubaybayan na pagbabago o metadata ng rebisyon ay maaaring ibunyag ang iyong paunang posisyon, kung ano ang dinelete mo, at kung ano ang pinalibot mo bago ipadala ang pinal na bersyon. Hindi kailangang maging teknikal ang kabilang panig para matuklas ito. Awtomatikong inilalabas ng ilang PDF viewer ang data ng rebisyon.

**Mga timestamp na nagbubunyag ng sensitibong timing.** Ang mga petsa ng paglikha at pagbabago ay nagsasabi sa isang tao kung kailan sinimulan ang dokumento, kung kailan ito huling binago, at ilang beses itong nahawakan. Sa mga kontekstong legal, pang-compliance, o kompetitibo, ang ganitong uri ng impormasyon sa timing ay maaaring mas mahalaga pa kaysa sa mismong nilalaman.

**Mga koordinadang GPS mula sa mga naka-embed na larawan.** Kung nag-paste ka ng larawan sa PDF at ang larawang iyon ay may dalang EXIF location data pa rin, ang mga koordinadang GPS ng kinunan ng larawan ay naka-embed na ngayon sa file. Karamihan sa mga tao ay hindi ito iniisip dahil ang metadata ay nabubuhay sa loob ng image object, hindi sa PDF properties panel.

**Mga bersyon ng software na nagbubunyag ng mga panloob na tool.** Ang mga field tulad ng "Producer: Adobe Acrobat Pro DC 24.1.30225" o "Creator: Microsoft Word for Microsoft 365" ay nagsasabi sa isang tao kung anong mga tool at bersyon ang ginagamit ng iyong organisasyon. Para sa karamihang mga dokumento, ito ay walang halaga. Para sa mga sensitibong konteksto, ito ay isang hindi kinakailangang pagtagas ng impormasyon.

Wala sa mga ito ang hypothetical. Ito ang mga boringna pagtagas ng metadata na talagang nangyayari.

## Paano suriin kung anong metadata ang nilalaman ng iyong PDF

Bago tanggalin ang anumang bagay, tingnan muna kung ano talaga ang nasa file.

**Dialog ng mga katangian ng PDF viewer.** Sa karamihan ng mga PDF reader, ang File > Properties o Document Properties ay nagpapakita ng mga pangunahing field: may-akda, pamagat, paksa, petsa ng paglikha, petsa ng pagbabago, at application na lumikha. Ito ay nakakahuli ng unang layer ngunit hindi nakukuha ang halos lahat ng iba pa.

**exiftool sa command line.** Ang pagpapatakbo ng `exiftool document.pdf` ay magpapakita sa iyo ng lahat: mga katangian ng dokumento, XMP data, naka-embed na image EXIF, at mga custom na field. Ito ang pinakakumpletong paraan ng inspeksyon, ngunit nangangailangan ito ng kasanayan sa terminal. Kung hindi mo pa ito nagamit dati, sulit itong i-install kahit para lang makita kung ano ang maaaring nilalaman ng isang PDF.

**Mga online metadata viewer.** Ang ilang website ay nagpapahintulot sa iyong mag-upload ng PDF para suriin ang metadata nito. Kung ang dahilan ng iyong pagsuri ng metadata ay privacy, ang pag-upload ng file sa isang third-party na serbisyo para suriin ito ay isang kaduda-dudang hakbang. Sinusubukan mong malaman kung ang file ay nagbubunyag ng impormasyon, at ang unang hakbang ay ipinapadala ito sa isang estranghero.

Kapag alam mo na kung ano ang nasa file, ang tanong ay kung paano ito tanggalin.

## Mga paraan para tanggalin ang metadata ng PDF

Walang iisang pinakamahusay na paraan. Ang tamang pagpili ay depende sa kung ano ang kailangan mong itago at kung gaano ka kailangang maging masusi.

### Adobe Acrobat (Sanitize Document)

Kasama sa Acrobat Pro ang mga feature na "Remove Hidden Information" at "Sanitize Document" na maaaring mag-tanggal ng metadata, nakatagong teksto, mga komento, form data, mga attachment, at iba pang hindi nakikitang nilalaman. Ito ay isa sa mga pinakamasusing pamamaraan kung kailangan mong panatilihin ang text layer at ang file na nase-search.

Ang limitasyon ay nangangailangan ito ng bayad na lisensya ng Acrobat Pro. Kung mayroon ka na nito, ito ay isang magandang opsyon. Kung wala, ito ay hindi ang uri ng problemang nagbibigay-katwiran sa subscription nang mag-isa.

### exiftool at iba pang mga CLI tool

Maaaring surgical na tanggalin ng exiftool ang mga partikular na metadata field o alisin ang lahat mula sa isang PDF sa isang command. Ito ay libre, tumatakbo sa anumang platform, at nagbibigay ng tumpak na kontrol sa kung ano mismo ang tinatanggal.

Ang limitasyon ay ang teknikal na hadlang. Nakatuon din ito sa mga metadata field sa halip na structural na nakatagong data. Kung ang PDF ay naglalaman ng kasaysayan ng rebisyon, mga nakatagong layer, o mga naka-embed na object, hindi ito mahuhuli ng exiftool. Mahusay ito sa ginagawa nito, ngunit hindi nito sinasaklaw ang bawat layer.

### Mga online na tool sa pagtanggal ng metadata

Ang ilang website ay nagpapahintulot sa iyong mag-upload ng PDF, tanggalin ang metadata, at i-download ang nalinis na bersyon. Ang workflow ay simple at hindi nangangailangan ng pag-install ng software.

Ang limitasyon ay dapat halata. Nag-a-upload ka ng dokumento sa isang third-party na server para malutas ang isang problema sa privacy. Ito ay parang ibigay ang iyong talaarawan sa isang estranghero para mapunit nila ang pahinang may address mo.

Kung ang file ay mababa ang panganib, maaaring katanggap-tanggap ang kasunduang iyon. Kung tinatanggal mo ang metadata dahil sensitibo ang dokumento, ang pamamaraang ito ay nagpapakilala ng eksaktong uri ng pagkakalantad na sinusubukan mong iwasan. Para sa higit pa tungkol sa kasunduang iyon, ang [Ligtas Ba ang Paggamit ng Online na PDF Tools para sa mga Sensitibong Dokumento?](../is-it-safe-to-use-online-pdf-tools-for-sensitive-documents/) ang sumasaklaw nito nang detalyado.

### Print to PDF

Ang muling pag-print ng PDF sa pamamagitan ng virtual printer ay lumilikha ng bagong file na madalas ay nag-aalis ng ilang metadata at nagpa-flatten ng ilang elemento. Ito ay libre at built-in sa karamihang operating system.

Ang mga resulta ay hindi consistent. Ang ilang virtual printer ay nag-i-inject ng kanilang sariling metadata sa output. Ang ilan ay nag-aalis ng XMP data, ang iba ay hindi. Ang naka-embed na image EXIF ay maaaring manatili o hindi sa proseso. Kung gagamitin mo ang paraang ito, palaging i-verify ang resulta sa halip na ipagpalagay na malinis ito.

### Pag-convert sa scan-style na PDF

Ang pamamaraang ito ay nagko-convert ng bawat pahina ng PDF sa isang larawan, pagkatapos ay binabalot ang mga larawang iyon sa isang bagong PDF. Dahil pinapalitan ang buong istruktura ng dokumento, lahat ng nakatagong data ay tinatanggal: metadata, mga text layer, mga komento, kasaysayan ng rebisyon, mga naka-embed na file, mga form field, JavaScript, lahat. Ang output ay isang bagong PDF na naglalaman lamang ng mga na-render na page image.

Ang kapalit ay hindi na ma-search ang teksto sa file. Kumikilos ito tulad ng larawan ng bawat pahina. Para sa mga dokumentong pinal na at papalabas ng iyong organisasyon, ang kapalit na iyon ay madalas na sulit. Para sa mga dokumentong kailangan pa ring i-search, i-quote, o i-edit sa ibaba, hindi ito angkop.

Iyan ang ginagawa ng [Look Scanned](https://lookscanned.io). Kino-convert nito ang PDF sa isang scan-style na bersyon nang lokal sa iyong browser, kaya hindi kailanman umalis ang file sa iyong device. Ang resulta ay isang malinis na image-based na PDF na walang nakatagong data, walang mga text layer, walang metadata mula sa orihinal, at walang server-side na pagproseso na ikababahala.

## Paghahambing

| Paraan | Tinatanggal ang mga katangian ng dokumento | Tinatanggal ang mga nakatagong layer | Tinatanggal ang image EXIF | Pinapanatili ang text search | Nangangailangan ng upload | Gastos |
| --- | --- | --- | --- | --- | --- | --- |
| Adobe Acrobat (Sanitize) | Oo | Oo | Depende sa mga setting | Oo | Hindi | Bayad |
| exiftool / CLI | Oo | Bahagya | Oo | Oo | Hindi | Libre |
| Mga online metadata tool | Karaniwan | Karaniwang hindi | Minsan | Oo | Oo | Libre |
| Print to PDF | Bahagya | Bahagya | Minsan | Karaniwan | Hindi | Libre |
| Scan-style na conversion (hal. Look Scanned) | Oo | Oo | Oo | Hindi | Hindi (lokal na browser) | Libre |

Walang iisang hilera na perpekto para sa bawat sitwasyon. Ang tanong ay palaging kung aling mga kapalit ang mahalaga para sa partikular na file na ito.

## Kailan angkop ang bawat pamamaraan

**Ang dokumento ay ginagawa pa rin.** Tanggalin ang metadata gamit ang Acrobat o exiftool. Panatilihin ang text layer. Ang pagtanggal ng metadata sa yugtong ito ay paglilinis, hindi ang pangunahing gawain.

**Ang dokumento ay pinal na at papalabas ng iyong organisasyon.** Kung hindi kritikal ang kakayahang mag-search, ang scan-style na conversion ang pinakamasusing iisang hakbang. Tinatanggal nito ang lahat sa isang pass. Kung kailangan pa ring ma-search ang file, gamitin ang Sanitize feature ng Acrobat sa halip, at i-verify ang resulta.

**Ang dokumento ay lubhang sensitibo.** Pagsamahin ang mga pamamaraan. Asikasuhin muna ang tamang redaction, pagkatapos ang paglilinis ng metadata, pagkatapos ang huling scan-style na conversion. Bawat hakbang ay sumasaklaw sa ibang layer. Kung ang redaction ay bahagi ng iyong workflow, ang [Ang mga Itim na Bar ay Hindi Redaction](../black-bars-arent-redaction-pdf-redaction-checklist/) ay nagpapaliwanag kung bakit hindi sapat ang visual na pagtatakip.

**Hindi ka sigurado kung ano ang nasa file.** Suriin muna gamit ang exiftool o ang properties panel. Pagkatapos ay magpasya batay sa kung ano ang natuklasan mo at kung saan pupunta ang file. Ang pagpili ng paraan ng pagtanggal bago maunawaan kung ano ang kailangang tanggalin ay nagreresulta sa labis na aksyon o napalampas na data.

Kung tinitimbang mo kung ang scan-style na PDF ang tamang format para sa iyong sitwasyon, ang [Scanned PDF vs Editable PDF: Alin ang Dapat Mong Ipadala?](../scanned-pdf-vs-editable-pdf/) ang sumasaklaw sa desisyong iyon nang mas malawak.

## Ang workflow na talagang ginagamit ko

1. Tapusin muna ang nilalaman ng dokumento. Huwag linisin ang metadata sa isang file na nagbabago pa.
2. Suriin ang metadata sa pinal na export. File > Properties bilang minimum. exiftool kung mahalaga ito.
3. Tanggalin o linisin batay sa natuklasan ko at kung gaano kasensitibo ang destinasyon.
4. Kung ang file ay papalabas at hindi kailangang ma-search, kino-convert ko ito sa scan-style na PDF. Ang [Look Scanned](https://lookscanned.io) ang humahawak ng hakbang na iyon sa browser nang hindi ina-upload ang file.
5. Buksan ang resulta sa isang bagong viewer at i-verify. Suriin ang mga katangian, subukang pumili ng teksto, maghanap ng mga termino na dapat wala na.

Ang huling hakbang na iyon ay nakakahuli ng mas maraming natirang data kaysa sa inaasahan ng mga tao.

Kung sapat na ang pag-flatten para sa iyong sitwasyon at hindi mo kailangan ang buong scan-style na conversion, ang [Paano I-flatten ang isang PDF Bago Ipadala](../how-to-flatten-a-pdf-before-sending/) ang sumasaklaw sa gitnang solusyon na iyon.

## FAQ

### Tinatanggal ba ng pag-convert sa scanned na PDF ang lahat ng metadata?

Oo. Ang pag-convert sa isang image-based na PDF ay pinapalitan ang buong istruktura ng file. Ang resulta ay walang text layer, walang nakatagong mga object, walang mga katangian ng dokumento mula sa orihinal, at walang naka-embed na file metadata. Ang output ay isang bagong PDF na naglalaman lamang ng mga na-render na page image.

### Maaari bang ma-recover ng isang tao ang metadata mula sa isang scan-style na PDF?

Hindi mula sa mismong PDF. Wala na ang orihinal na istruktura. Ang tanging metadata sa bagong file ay kung ano lang ang isinulat ng conversion tool, tulad ng sarili nitong producer tag. Kung ang conversion ay nangyari nang lokal sa browser, wala ring umiiral na server-side na kopya.

### Pareho ba ang pagtanggal ng metadata at redaction?

Hindi. Ang pagtanggal ng metadata ay nag-aalis ng mga nakatagong katangian at data sa antas ng dokumento. Ang redaction ay nag-aalis ng nakikitang nilalaman mula sa pahina. Kung kailangan mong tanggalin ang mga pangalan, numero, o teksto mula sa mismong pahina, iyon ay isang hiwalay na hakbang na dapat mangyari bago ang paglilinis ng metadata. Ang [Ang mga Itim na Bar ay Hindi Redaction](../black-bars-arent-redaction-pdf-redaction-checklist/) ay nagpapaliwanag kung bakit hindi sapat ang visual na pagtatakip lamang.

### Dapat ko bang tanggalin ang metadata mula sa bawat PDF na ipinapadala ko?

Hindi naman kinakailangan. Para sa mga karaniwang dokumento na pampubliko na o mababa ang panganib, ang metadata ay hindi nakakapinsala. Ang tanong ay nagiging mahalaga kapag sensitibo ang dokumento, ang tatanggap ay panlabas, o ang pagkakakilanlan ng may-akda ay dapat na wala sa file.

## Huling iniisip

Karamihan sa mga tao ay hindi kailanman sinusuri kung ano ang sinasabi ng kanilang PDF tungkol sa kanila bago nila ito ipadala.

Maaaring malinis ang file. O maaari itong naglalaman ng iyong pangalan, iyong kasaysayan ng rebisyon, at ang mga koordinadang GPS ng coffee shop kung saan mo ito in-edit noong nakaraang Martes.

Kung sapat na mahalaga ang dokumento para ibahagi nang maingat, sapat na rin itong mahalaga para suriin. At kung ang pagsuri ay nagbubunyag ng higit pa kaysa sa inaasahan mo, may mga diretso na paraan para ayusin ito bago mo pindutin ang send.
