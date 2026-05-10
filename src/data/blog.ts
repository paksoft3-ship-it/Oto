export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  image: string;
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: string;
  publishedDate: string;
  readingTime: string;
  excerpt: string;
  sections: BlogSection[];
  faqs: { question: string; answer: string }[];
  relatedServices: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "arac-ariza-lambasi-neden-yanar",
    image: `/images/blog-main.png`,
    title: "Araç Arıza Lambası Neden Yanar?",
    seoTitle: "Araç Arıza Lambası Neden Yanar? | ERZ GARAGE Blog",
    metaDescription:
      "Araç arıza lambası neden yanar, hangi durumlarda acil kontrol gerekir ve Bursa Nilüfer’de arıza tespit süreci nasıl ilerler?",
    category: "Arıza Tespit",
    publishedDate: "2024-10-12",
    readingTime: "4 dk",
    excerpt:
      "Motor ikaz lambasının yanmasına sebep olabilen yaygın sensör, yakıt ve mekanik sorunlara pratik bir bakış.",
    sections: [
      {
        heading: "Arıza lambası neden ciddiye alınmalıdır?",
        paragraphs: [
          "Araç arıza lambası, motor veya ilişkili sistemlerden birinde normal dışı durum algılandığını gösterir.",
          "Lambanın yanması her zaman büyük arıza anlamına gelmez ancak profesyonel kontrol gerektirdiğini gösterir."
        ]
      },
      {
        heading: "Sık görülen nedenler",
        paragraphs: [
          "Sensör kaynaklı uyarılar, ateşleme düzensizlikleri, yakıt-hava karışımı problemleri ve farklı elektronik hatalar en sık karşılaşılan başlıklardır."
        ],
        bullets: [
          "Çekiş düşüklüğü",
          "Tekleme",
          "Yakıt tüketiminde artış",
          "Rölantide dengesizlik"
        ]
      },
      {
        heading: "Ne zaman hemen destek alınmalı?",
        paragraphs: [
          "Arıza lambasına eşlik eden sarsıntı, performans kaybı veya farklı uyarılar varsa aracı zorlamadan destek almak gerekir."
        ]
      }
    ],
    faqs: [
      {
        question: "Arıza lambası yanınca araç kapatılmalı mı?",
        answer:
          "Duruma göre değişir. Güvenli koşullarda değerlendirme yapılıp profesyonel yönlendirme alınması en doğru yaklaşımdır."
      }
    ],
    relatedServices: ["ariza-tespit", "motor-ariza-tespiti"]
  },
  {
    slug: "periyodik-bakim-ne-zaman-yapilir",
    image: `/images/blog-main.png`,
    title: "Periyodik Bakım Ne Zaman Yapılır?",
    seoTitle: "Periyodik Bakım Ne Zaman Yapılır? | ERZ GARAGE Blog",
    metaDescription:
      "Periyodik bakım aralıkları nasıl belirlenir, hangi durumlarda erkene çekilmelidir ve Nilüfer oto servis planlaması nasıl yapılır?",
    category: "Periyodik Bakım",
    publishedDate: "2024-10-05",
    readingTime: "4 dk",
    excerpt:
      "Kilometre, kullanım şekli ve sürüş koşullarına göre bakım aralığını planlamanın temel noktaları.",
    sections: [
      {
        heading: "Bakım aralığı neden değişebilir?",
        paragraphs: [
          "Şehir içi yoğun trafik, kısa mesafe kullanımı ve yüksek dur-kalk temposu bakım ihtiyacını öne çekebilir.",
          "Marka ve model kadar sürüş profili de bakım zamanını etkiler."
        ]
      },
      {
        heading: "Bakım zamanı yaklaşırken hangi belirtiler görülür?",
        paragraphs: [
          "Gösterge uyarıları, yağ bakım ihtiyacı, filtre veriminde düşüş ve genel performans değişimleri dikkat çeker."
        ]
      }
    ],
    faqs: [
      {
        question: "Bakım zamanı dolmadan yaptırmak gerekir mi?",
        answer:
          "Kullanım şartları yoğunsa veya araç belirti veriyorsa evet, erkene çekmek faydalı olabilir."
      }
    ],
    relatedServices: ["periyodik-bakim", "yag-degisimi"]
  },
  {
    slug: "aku-bittiginde-ne-yapilmali",
    image: `/images/blog-main.png`,
    title: "Akü Bittiğinde Ne Yapılmalı?",
    seoTitle: "Akü Bittiğinde Ne Yapılmalı? | ERZ GARAGE Blog",
    metaDescription:
      "Akü bittiğinde güvenli şekilde ne yapılmalı, hangi belirtiler dikkat çekmeli ve 7/24 yol yardım desteği ne zaman istenmeli?",
    category: "Akü & Elektrik",
    publishedDate: "2024-09-28",
    readingTime: "3 dk",
    excerpt:
      "Araç çalışmadığında panik yapmadan doğru bilgileri paylaşarak destek sürecini hızlandırmanın yolları.",
    sections: [
      {
        heading: "Akünün bittiği nasıl anlaşılır?",
        paragraphs: [
          "Marşın zayıf dönmesi, aydınlatmanın sönükleşmesi ve aracın hiç çalışmaması sık belirtiler arasındadır."
        ]
      },
      {
        heading: "İlk yapılması gerekenler",
        paragraphs: [
          "Araç güvenli noktadaysa konum belirlenmeli, araç bilgisi hazırlanmalı ve yol yardım için iletişime geçilmelidir."
        ]
      }
    ],
    faqs: [
      {
        question: "Her çalışmama durumu akü kaynaklı mı olur?",
        answer:
          "Hayır. Şarj sistemi veya farklı elektrik arızaları da benzer belirti oluşturabilir."
      }
    ],
    relatedServices: ["aku-degisimi", "oto-elektrik"]
  },
  {
    slug: "fren-balatalari-ne-zaman-degisir",
    image: `/images/blog-main.png`,
    title: "Fren Balataları Ne Zaman Değişir?",
    seoTitle: "Fren Balataları Ne Zaman Değişir? | ERZ GARAGE Blog",
    metaDescription:
      "Fren balatası değişim zamanı nasıl anlaşılır, hangi sesler önemlidir ve Bursa fren tamiri için ne zaman destek alınmalıdır?",
    category: "Fren Sistemi",
    publishedDate: "2024-09-15",
    readingTime: "3 dk",
    excerpt:
      "Fren sesi, pedal hissi ve duruş performansındaki değişimleri doğru okumak güvenlik açısından önemlidir.",
    sections: [
      {
        heading: "Fren balatası değişim işaretleri",
        paragraphs: [
          "Ses, titreme, pedal hissinde farklılık ve fren performansında zayıflama önemli işaretlerdir."
        ]
      },
      {
        heading: "Kontrol neden geciktirilmemeli?",
        paragraphs: [
          "Fren sistemi güvenliği doğrudan etkilediği için belirtiler bekletilmemelidir."
        ]
      }
    ],
    faqs: [
      {
        question: "Fren sesi tek başına balata bittiği anlamına gelir mi?",
        answer:
          "Hayır. Disk veya farklı fren bileşenleri de sesi etkileyebilir, teknik kontrol gerekir."
      }
    ],
    relatedServices: ["fren-tamiri"]
  },
  {
    slug: "bmw-ariza-tespit-nasil-yapilir",
    image: `/images/blog-main.png`,
    title: "BMW Arıza Tespit Nasıl Yapılır?",
    seoTitle: "BMW Arıza Tespit Nasıl Yapılır? | ERZ GARAGE Blog",
    metaDescription:
      "BMW arıza tespit süreci nasıl ilerler, hangi belirtiler öne çıkar ve BMW özel servis Bursa arayanlar nelere dikkat etmelidir?",
    category: "BMW Uzmanlığı",
    publishedDate: "2024-09-02",
    readingTime: "4 dk",
    excerpt:
      "BMW araçlarda elektronik uyarılar ve sürüş hissi değişimleri değerlendirilirken nelere dikkat edilir?",
    sections: [
      {
        heading: "BMW araçlarda belirtiyi doğru okumak",
        paragraphs: [
          "BMW kullanıcıları çoğu zaman ilk olarak çekiş düşüklüğü, uyarı ışığı veya düzensiz çalışma hisseder."
        ]
      },
      {
        heading: "Arıza tespit neden kritik?",
        paragraphs: [
          "Doğru teşhis, gereksiz parça değişimini önler ve servis planını netleştirir."
        ]
      }
    ],
    faqs: [
      {
        question: "BMW arıza lambası her zaman ciddi midir?",
        answer:
          "Her zaman değil ancak mutlaka profesyonel kontrol gerektirir."
      }
    ],
    relatedServices: ["ariza-tespit", "motor-ariza-tespiti"]
  },
  {
    slug: "mercedes-bakimda-nelere-dikkat-edilmeli",
    image: `/images/blog-main.png`,
    title: "Mercedes Bakımda Nelere Dikkat Edilmeli?",
    seoTitle: "Mercedes Bakımda Nelere Dikkat Edilmeli? | ERZ GARAGE Blog",
    metaDescription:
      "Mercedes bakım süreçlerinde hangi kontroller öne çıkar, bakım neden geciktirilmemelidir ve özel servis yaklaşımı nasıl olmalıdır?",
    category: "Mercedes Uzmanlığı",
    publishedDate: "2024-08-20",
    readingTime: "4 dk",
    excerpt:
      "Mercedes araçlarda bakım yaklaşımının sürüş konforu ve uzun vadeli kullanım üzerindeki etkileri.",
    sections: [
      {
        heading: "Bakım planı neden önemli?",
        paragraphs: [
          "Mercedes araçlarda düzenli bakım, performansın ve sürüş konforunun korunması açısından önem taşır."
        ]
      },
      {
        heading: "Hangi başlıklar sık kontrol edilir?",
        paragraphs: [
          "Yağ ve filtreler, fren sistemi, elektronik uyarılar ve genel sürüş davranışı dikkatle değerlendirilir."
        ]
      }
    ],
    faqs: [
      {
        question: "Mercedes bakımını ertelemek sorun yaratır mı?",
        answer:
          "Evet. Düzenli bakımın gecikmesi zamanla farklı arıza başlıklarını tetikleyebilir."
      }
    ],
    relatedServices: ["periyodik-bakim", "fren-tamiri"]
  },
  {
    slug: "audi-periyodik-bakim-rehberi",
    image: `/images/blog-main.png`,
    title: "Audi Periyodik Bakım Rehberi",
    seoTitle: "Audi Periyodik Bakım Rehberi | ERZ GARAGE Blog",
    metaDescription:
      "Audi periyodik bakım rehberi. Nilüfer oto servis arayan Audi kullanıcıları için bakım planlama ve dikkat edilmesi gereken noktalar.",
    category: "Audi Uzmanlığı",
    publishedDate: "2024-08-08",
    readingTime: "4 dk",
    excerpt:
      "Audi kullanıcıları için bakım periyodu, filtre kontrolleri ve düzenli servis planlamasının ana başlıkları.",
    sections: [
      {
        heading: "Audi bakım takibini neden düzenli yapmak gerekir?",
        paragraphs: [
          "Bakım gecikmeleri performans, konfor ve sistem dengesi üzerinde olumsuz sonuçlar oluşturabilir."
        ]
      },
      {
        heading: "Periyodik bakımda öne çıkan başlıklar",
        paragraphs: [
          "Yağ, filtre, fren ve arıza tespit kontrolleri bakım planının merkezinde yer alır."
        ]
      }
    ],
    faqs: [
      {
        question: "Audi bakım aralığı kullanım tipine göre değişir mi?",
        answer:
          "Evet. Özellikle yoğun şehir içi kullanım bakım ihtiyacını etkileyebilir."
      }
    ],
    relatedServices: ["periyodik-bakim", "yag-degisimi"]
  }
];

export const blogBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));
