// Hand-maintained per-locale site data. Originally seeded from PaperMod's
// languages.yml via scripts/build-i18n.mjs, but extended manually since —
// re-running the generator would drop our edits.

export interface MenuItem {
  name: string;
  url: string;
  weight: number | null;
}

export interface LocaleData {
  code: string;
  languageName: string;
  title: string;
  description: string;
  homeTitle: string;
  menu: MenuItem[];
}

export const LOCALE_DATA: Record<string, LocaleData> = {
  "en": {
    "code": "en",
    "languageName": "English",
    "title": "Look Scanned Blog",
    "description": "Notes on web development, PDF processing, and privacy-first tools — from the team behind Look Scanned.",
    "homeTitle": "Look Scanned Blog",
    "menu": [
      {
        "name": "Archive",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Search",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Tags",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "zh": {
    "code": "zh",
    "languageName": "简体中文",
    "title": "Look Scanned 博客",
    "description": "网页开发、PDF 处理、隐私优先工具——来自 Look Scanned 团队的随手记。",
    "homeTitle": "Look Scanned 博客",
    "menu": [
      {
        "name": "归档",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "搜索",
        "url": "search",
        "weight": 10
      },
      {
        "name": "标签",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "zh-tw": {
    "code": "zh-tw",
    "languageName": "繁體中文",
    "title": "Look Scanned 部落格",
    "description": "網頁開發、PDF 處理、重視隱私的工具——來自 Look Scanned 團隊的隨手記。",
    "homeTitle": "Look Scanned 部落格",
    "menu": [
      {
        "name": "歸檔",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "搜尋",
        "url": "search",
        "weight": 10
      },
      {
        "name": "標籤",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "es": {
    "code": "es",
    "languageName": "Español",
    "title": "Blog de Look Scanned",
    "description": "Notas sobre desarrollo web, procesamiento de PDF y herramientas que respetan la privacidad — del equipo de Look Scanned.",
    "homeTitle": "Blog de Look Scanned",
    "menu": [
      {
        "name": "Archivo",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Buscar",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Etiquetas",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "hi": {
    "code": "hi",
    "languageName": "हिन्दी",
    "title": "Look Scanned ब्लॉग",
    "description": "वेब डेवलपमेंट, PDF प्रोसेसिंग और प्राइवेसी-फर्स्ट टूल्स पर Look Scanned टीम के नोट्स।",
    "homeTitle": "Look Scanned ब्लॉग",
    "menu": [
      {
        "name": "पुरालेख",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "खोज",
        "url": "search",
        "weight": 10
      },
      {
        "name": "टैग",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "ar": {
    "code": "ar",
    "languageName": "العربية",
    "title": "مدونة Look Scanned",
    "description": "ملاحظات حول تطوير الويب ومعالجة PDF والأدوات التي تحترم الخصوصية — من فريق Look Scanned.",
    "homeTitle": "مدونة Look Scanned",
    "menu": [
      {
        "name": "الأرشيف",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "بحث",
        "url": "search",
        "weight": 10
      },
      {
        "name": "الوسوم",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "fr": {
    "code": "fr",
    "languageName": "Français",
    "title": "Blog Look Scanned",
    "description": "Notes sur le développement web, le traitement de PDF et les outils respectueux de la vie privée — par l'équipe Look Scanned.",
    "homeTitle": "Blog Look Scanned",
    "menu": [
      {
        "name": "Archives",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Rechercher",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Tags",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "pt": {
    "code": "pt",
    "languageName": "Português",
    "title": "Blog do Look Scanned",
    "description": "Notas sobre desenvolvimento web, processamento de PDF e ferramentas com foco em privacidade — da equipe do Look Scanned.",
    "homeTitle": "Blog do Look Scanned",
    "menu": [
      {
        "name": "Arquivo",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Pesquisar",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Tags",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "ja": {
    "code": "ja",
    "languageName": "日本語",
    "title": "Look Scanned ブログ",
    "description": "Web 開発、PDF 処理、プライバシー重視のツールについて — Look Scanned チームのノート。",
    "homeTitle": "Look Scanned ブログ",
    "menu": [
      {
        "name": "アーカイブ",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "検索",
        "url": "search",
        "weight": 10
      },
      {
        "name": "タグ",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "de": {
    "code": "de",
    "languageName": "Deutsch",
    "title": "Look Scanned Blog",
    "description": "Notizen zu Webentwicklung, PDF-Verarbeitung und datenschutzorientierten Tools — vom Team hinter Look Scanned.",
    "homeTitle": "Look Scanned Blog",
    "menu": [
      {
        "name": "Archiv",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Suche",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Tags",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "ru": {
    "code": "ru",
    "languageName": "Русский",
    "title": "Блог Look Scanned",
    "description": "Заметки о веб-разработке, обработке PDF и инструментах, уважающих приватность — от команды Look Scanned.",
    "homeTitle": "Блог Look Scanned",
    "menu": [
      {
        "name": "Архив",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Поиск",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Теги",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "id": {
    "code": "id",
    "languageName": "Bahasa Indonesia",
    "title": "Blog Look Scanned",
    "description": "Catatan tentang pengembangan web, pemrosesan PDF, dan alat yang mengutamakan privasi — dari tim Look Scanned.",
    "homeTitle": "Blog Look Scanned",
    "menu": [
      {
        "name": "Arsip",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Cari",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Tag",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "ko": {
    "code": "ko",
    "languageName": "한국어",
    "title": "Look Scanned 블로그",
    "description": "웹 개발, PDF 처리, 프라이버시 우선 도구에 관한 Look Scanned 팀의 기록.",
    "homeTitle": "Look Scanned 블로그",
    "menu": [
      {
        "name": "아카이브",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "검색",
        "url": "search",
        "weight": 10
      },
      {
        "name": "태그",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "it": {
    "code": "it",
    "languageName": "Italiano",
    "title": "Blog di Look Scanned",
    "description": "Note su sviluppo web, elaborazione PDF e strumenti che rispettano la privacy — dal team di Look Scanned.",
    "homeTitle": "Blog di Look Scanned",
    "menu": [
      {
        "name": "Archivio",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Cerca",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Tag",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "tr": {
    "code": "tr",
    "languageName": "Türkçe",
    "title": "Look Scanned Blogu",
    "description": "Web geliştirme, PDF işleme ve gizliliği önceleyen araçlar üzerine — Look Scanned ekibinin notları.",
    "homeTitle": "Look Scanned Blogu",
    "menu": [
      {
        "name": "Arşiv",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Ara",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Etiketler",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "pl": {
    "code": "pl",
    "languageName": "Polski",
    "title": "Blog Look Scanned",
    "description": "Notatki o tworzeniu stron, przetwarzaniu PDF i narzędziach szanujących prywatność — od zespołu Look Scanned.",
    "homeTitle": "Blog Look Scanned",
    "menu": [
      {
        "name": "Archiwum",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Szukaj",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Tagi",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "nl": {
    "code": "nl",
    "languageName": "Nederlands",
    "title": "Look Scanned Blog",
    "description": "Notities over webontwikkeling, PDF-verwerking en privacyvriendelijke tools — van het Look Scanned-team.",
    "homeTitle": "Look Scanned Blog",
    "menu": [
      {
        "name": "Archief",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Zoeken",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Tags",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "vi": {
    "code": "vi",
    "languageName": "Tiếng Việt",
    "title": "Blog Look Scanned",
    "description": "Ghi chú về phát triển web, xử lý PDF và công cụ ưu tiên quyền riêng tư — từ đội ngũ Look Scanned.",
    "homeTitle": "Blog Look Scanned",
    "menu": [
      {
        "name": "Lưu trữ",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Tìm kiếm",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Thẻ",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "th": {
    "code": "th",
    "languageName": "ไทย",
    "title": "บล็อก Look Scanned",
    "description": "บันทึกเรื่องการพัฒนาเว็บ การประมวลผล PDF และเครื่องมือที่เคารพความเป็นส่วนตัว — จากทีม Look Scanned",
    "homeTitle": "บล็อก Look Scanned",
    "menu": [
      {
        "name": "คลังเก็บ",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "ค้นหา",
        "url": "search",
        "weight": 10
      },
      {
        "name": "แท็ก",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "sv": {
    "code": "sv",
    "languageName": "Svenska",
    "title": "Look Scanned Blogg",
    "description": "Anteckningar om webbutveckling, PDF-bearbetning och integritetsvänliga verktyg — från Look Scanned-teamet.",
    "homeTitle": "Look Scanned Blogg",
    "menu": [
      {
        "name": "Arkiv",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Sök",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Taggar",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "ms": {
    "code": "ms",
    "languageName": "Bahasa Melayu",
    "title": "Blog Look Scanned",
    "description": "Catatan tentang pembangunan web, pemprosesan PDF, dan alat yang mengutamakan privasi — daripada pasukan Look Scanned.",
    "homeTitle": "Blog Look Scanned",
    "menu": [
      {
        "name": "Arkib",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Cari",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Tag",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "he": {
    "code": "he",
    "languageName": "עברית",
    "title": "בלוג Look Scanned",
    "description": "הערות על פיתוח אתרים, עיבוד PDF וכלים ששומרים על פרטיות — מצוות Look Scanned.",
    "homeTitle": "בלוג Look Scanned",
    "menu": [
      {
        "name": "ארכיון",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "חיפוש",
        "url": "search",
        "weight": 10
      },
      {
        "name": "תגיות",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "cs": {
    "code": "cs",
    "languageName": "Čeština",
    "title": "Look Scanned Blog",
    "description": "Poznámky o vývoji webu, zpracování PDF a nástrojích respektujících soukromí — od týmu Look Scanned.",
    "homeTitle": "Look Scanned Blog",
    "menu": [
      {
        "name": "Archiv",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Hledat",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Štítky",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "hu": {
    "code": "hu",
    "languageName": "Magyar",
    "title": "Look Scanned Blog",
    "description": "Jegyzetek webfejlesztésről, PDF-feldolgozásról és adatvédelmet tisztelő eszközökről — a Look Scanned csapatától.",
    "homeTitle": "Look Scanned Blog",
    "menu": [
      {
        "name": "Archívum",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Keresés",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Címkék",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "ro": {
    "code": "ro",
    "languageName": "Română",
    "title": "Blogul Look Scanned",
    "description": "Notițe despre dezvoltare web, procesare PDF și instrumente care respectă confidențialitatea — de la echipa Look Scanned.",
    "homeTitle": "Blogul Look Scanned",
    "menu": [
      {
        "name": "Arhivă",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Căutare",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Etichete",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "el": {
    "code": "el",
    "languageName": "Ελληνικά",
    "title": "Ιστολόγιο Look Scanned",
    "description": "Σημειώσεις για την ανάπτυξη web, την επεξεργασία PDF και εργαλεία με σεβασμό στην ιδιωτικότητα — από την ομάδα του Look Scanned.",
    "homeTitle": "Ιστολόγιο Look Scanned",
    "menu": [
      {
        "name": "Αρχείο",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Αναζήτηση",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Ετικέτες",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "uk": {
    "code": "uk",
    "languageName": "Українська",
    "title": "Блог Look Scanned",
    "description": "Нотатки про веброзробку, обробку PDF та інструменти, що поважають приватність — від команди Look Scanned.",
    "homeTitle": "Блог Look Scanned",
    "menu": [
      {
        "name": "Архів",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Пошук",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Теги",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "fil": {
    "code": "fil",
    "languageName": "Filipino",
    "title": "Look Scanned Blog",
    "description": "Mga tala tungkol sa web development, pagpoproseso ng PDF, at mga tool na nagpapahalaga sa privacy — mula sa team ng Look Scanned.",
    "homeTitle": "Look Scanned Blog",
    "menu": [
      {
        "name": "Arkibo",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Paghahanap",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Mga Tag",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "bn": {
    "code": "bn",
    "languageName": "বাংলা",
    "title": "Look Scanned ব্লগ",
    "description": "ওয়েব ডেভেলপমেন্ট, PDF প্রসেসিং এবং গোপনীয়তা-কেন্দ্রিক টুল নিয়ে — Look Scanned টিমের নোট।",
    "homeTitle": "Look Scanned ব্লগ",
    "menu": [
      {
        "name": "সংরক্ষণাগার",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "অনুসন্ধান",
        "url": "search",
        "weight": 10
      },
      {
        "name": "ট্যাগ",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "ur": {
    "code": "ur",
    "languageName": "اردو",
    "title": "Look Scanned بلاگ",
    "description": "ویب ڈویلپمنٹ، PDF پراسیسنگ، اور پرائیویسی پر مرکوز ٹولز پر — Look Scanned ٹیم کے نوٹس۔",
    "homeTitle": "Look Scanned بلاگ",
    "menu": [
      {
        "name": "محفوظات",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "تلاش",
        "url": "search",
        "weight": 10
      },
      {
        "name": "ٹیگز",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "sw": {
    "code": "sw",
    "languageName": "Kiswahili",
    "title": "Blogu ya Look Scanned",
    "description": "Maelezo kuhusu uundaji wa wavuti, uchakataji wa PDF, na zana zinazoheshimu faragha — kutoka kwa timu ya Look Scanned.",
    "homeTitle": "Blogu ya Look Scanned",
    "menu": [
      {
        "name": "Kumbukumbu",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Tafuta",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Lebo",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
  "af": {
    "code": "af",
    "languageName": "Afrikaans",
    "title": "Look Scanned Blog",
    "description": "Notas oor webontwikkeling, PDF-verwerking en privaatheidsgesentreerde gereedskap — van die Look Scanned-span.",
    "homeTitle": "Look Scanned Blog",
    "menu": [
      {
        "name": "Argief",
        "url": "archives",
        "weight": 5
      },
      {
        "name": "Soek",
        "url": "search",
        "weight": 10
      },
      {
        "name": "Etikette",
        "url": "tags",
        "weight": 15
      },
      {
        "name": "Look Scanned",
        "url": "https://lookscanned.io",
        "weight": null
      }
    ]
  },
};
