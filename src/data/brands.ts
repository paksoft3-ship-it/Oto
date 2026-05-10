export type Brand = {
  image: string;
  slug: string;
  brandName: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  services: string[];
  commonProblems: string[];
  whyChooseUs: string[];
  faqs: { question: string; answer: string }[];
};

export const brands: Brand[] = [
  {
    slug: "bmw-ozel-servis-bursa",
    image: "/images/brand-bmw.png",
    brandName: "BMW",
    seoTitle: "BMW Özel Servis Bursa Nilüfer | ERZ GARAGE",
    metaDescription:
      "BMW özel servis Bursa Nilüfer arayanlar için arıza tespit, bakım, mekanik onarım ve teknik servis yaklaşımıyla ERZ GARAGE.",
    h1: "BMW Özel Servis Bursa Nilüfer",
    intro:
      "BMW araçlarda sürüş karakteri, motor davranışı ve elektronik sistemler hassas yaklaşım ister. ERZ GARAGE, BMW özel servis Bursa arayan kullanıcılar için teknik servis odaklı destek sunar.",
    services: ["Arıza tespit", "Periyodik bakım", "Fren kontrolü", "Mekanik onarım", "Oto elektrik"],
    commonProblems: [
      "Motor arıza lambası ve sensör uyarıları",
      "Çekiş düşüklüğü veya düzensiz çalışma",
      "Fren ve süspansiyon kaynaklı sürüş hissi değişimleri",
      "Akü, şarj ve elektronik uyarılar"
    ],
    whyChooseUs: [
      "BMW araçlara uygun özel servis yaklaşımı",
      "Bakım ve arıza tespiti arasında net yönlendirme",
      "Bursa Nilüfer’de hızlı iletişim ve yol yardım bağlantısı"
    ],
    faqs: [
      {
        question: "ERZ GARAGE BMW yetkili servisi mi?",
        answer:
          "Hayır. ERZ GARAGE, BMW araçlara yönelik özel servis yaklaşımıyla çalışan bağımsız bir işletmedir."
      },
      {
        question: "BMW arıza lambası yandığında ne yapmalıyım?",
        answer:
          "Aracı zorlamadan durumu değerlendirip bizi aramanız önerilir. Gerekirse arıza tespit veya yol yardım yönlendirmesi yapılır."
      }
    ]
  },
  {
    slug: "mercedes-ozel-servis-bursa",
    image: "/images/brand-mercedes.png",
    brandName: "Mercedes",
    seoTitle: "Mercedes Özel Servis Bursa Nilüfer | ERZ GARAGE",
    metaDescription:
      "Mercedes özel servis Bursa Nilüfer arayanlar için bakım, arıza tespit, mekanik onarım ve teknik servis desteği sunan ERZ GARAGE.",
    h1: "Mercedes Özel Servis Bursa Nilüfer",
    intro:
      "Mercedes araçlar için bakım ve arıza tespit süreçlerinde konfor, sürüş dengesi ve sistem bütünlüğü birlikte değerlendirilmelidir.",
    services: ["Periyodik bakım", "Arıza tespit", "Şanzıman kontrolü", "Fren servisi", "Oto elektrik"],
    commonProblems: [
      "Elektronik uyarılar ve sensör kaynaklı bildirimler",
      "Şanzıman geçişlerinde hissedilen düzensizlikler",
      "Konfor sistemleri ve klima ile ilgili elektrik arızaları",
      "Bakım periyodu ihmaline bağlı performans düşüşleri"
    ],
    whyChooseUs: [
      "Mercedes araçlar için teknik servis hizmeti yaklaşımı",
      "Sürüş konforunu etkileyen detaylara odaklanan kontrol",
      "Nilüfer oto servis içinde erişilebilir iletişim"
    ],
    faqs: [
      {
        question: "Mercedes için hangi hizmetler öne çıkıyor?",
        answer:
          "Periyodik bakım, arıza tespit, fren sistemi, şanzıman değerlendirmesi ve oto elektrik başlıkları sık talep edilen hizmetlerdir."
      },
      {
        question: "Mercedes bakımında erken kontrol neden önemli?",
        answer:
          "Belirtiler erken değerlendirildiğinde daha büyük arızaların önüne geçmek daha kolay olabilir."
      }
    ]
  },
  {
    slug: "audi-ozel-servis-bursa",
    image: "/images/brand-audi.png",
    brandName: "Audi",
    seoTitle: "Audi Özel Servis Bursa Nilüfer | ERZ GARAGE",
    metaDescription:
      "Audi özel servis Bursa Nilüfer arayanlar için bakım, arıza tespit, fren, oto elektrik ve mekanik onarım desteği sunan ERZ GARAGE.",
    h1: "Audi Özel Servis Bursa Nilüfer",
    intro:
      "Audi araçlarda bakım ve onarım süreçlerinde hem performans hem sürüş konforu açısından dengeli teknik değerlendirme gerekir.",
    services: ["Arıza tespit", "Periyodik bakım", "Yağ değişimi", "Fren tamiri", "Mekanik onarım"],
    commonProblems: [
      "Arıza lambaları ve sürüş moduna etki eden uyarılar",
      "Elektrik ve sensör kaynaklı düzensiz çalışma belirtileri",
      "Fren sistemi veya süspansiyon kaynaklı konfor sorunları",
      "Düzenli bakım ihtiyacına bağlı performans değişimleri"
    ],
    whyChooseUs: [
      "Audi araçlar için bakım ve onarım desteğine odaklı yaklaşım",
      "Servis ihtiyacını netleştiren arıza tespit akışı",
      "Bursa oto tamir arayan kullanıcılar için güçlü CTA yapısı"
    ],
    faqs: [
      {
        question: "Audi araçlarda arıza tespit neden önemli?",
        answer:
          "Elektronik sistem yoğunluğu nedeniyle doğru teşhis, sorunun kaynağını bulmak için kritik önemdedir."
      },
      {
        question: "Audi bakımında hangi başlıklar öne çıkar?",
        answer:
          "Yağ ve filtre bakımları, fren kontrolleri, oto elektrik değerlendirmeleri ve genel arıza tespit süreci öne çıkar."
      }
    ]
  }
];

export const brandsBySlug = Object.fromEntries(brands.map((brand) => [brand.slug, brand]));
