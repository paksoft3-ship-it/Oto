export const siteConfig = {
  name: "ERZ GARAGE Bursa Nilüfer",
  shortName: "ERZ GARAGE",
  subtitle: "Bursa Nilüfer",
  businessType: "Oto Tamir • Bakım • Onarım",
  description:
    "Bursa Nilüfer’de BMW, Mercedes, Audi ve birçok araç için oto tamir, bakım, arıza tespit, periyodik bakım, mekanik onarım ve 7/24 yol yardım hizmeti.",
  location: "Üçevler, 80. Sk. no:5 Beşevler Küçük Sanayi Sitesi, 16000 Ni̇lüfer/Bursa",
  areaServed: ["Bursa", "Nilüfer"],
  phoneDisplay: "0538 585 8157",
  phoneDigits: "05385858157",
  phoneInternational: "+90 538 585 81 57",
  phoneE164: "+905385858157",
  phoneLink: "tel:+905385858157",
  whatsappUrl:
    "https://wa.me/905385858157?text=Merhaba%20ERZ%20GARAGE%2C%20arac%C4%B1m%20i%C3%A7in%20servis%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=40.20077325097891,28.939575028835023",
  email: "info@erzgaragebursa.com",
  defaultOgImage: "/og-image.svg",
  priceRange: "₺₺",
  geo: {
    latitude: 40.20077325097891,
    longitude: 28.939575028835023
  },
  openingHours: "Mo-Su 00:00-23:59",
  sameAs: ["https://www.instagram.com/erzgaragebursa"],
  instagramUrl: "https://www.instagram.com/erzgaragebursa",
  brands: ["BMW", "Mercedes", "Audi", "Premium European Cars"],
  neighborhoods: ["Nilüfer", "Özlüce", "Görükle", "Beşevler", "İhsaniye", "FSM"],
  navItems: [
    { label: "Anasayfa", href: "/" },
    { label: "Hakkımızda", href: "/hakkimizda" },
    { label: "Hizmetler", href: "/hizmetler" },
    { label: "Markalar", href: "/markalar/bmw-ozel-servis-bursa" },
    { label: "Yol Yardım", href: "/724-yol-yardim" },
    { label: "Blog", href: "/blog" },
    { label: "İletişim", href: "/iletisim" }
  ],
  socialProofPoints: [
    "BMW, Mercedes ve Audi odaklı teknik servis yaklaşımı",
    "Arıza tespitten bakım planlamasına net yönlendirme",
    "Hızlı iletişim, WhatsApp desteği ve yol yardım erişimi"
  ],
  schemaServices: [
    "Oto tamir",
    "Bakım",
    "Onarım",
    "Arıza tespit",
    "Periyodik bakım",
    "Mekanik onarım",
    "Fren tamiri",
    "Oto elektrik",
    "Yağ değişimi",
    "Akü değişimi",
    "Şanzıman tamiri",
    "Direksiyon ve süspansiyon tamiri",
    "Hava ve kabin filtresi değişimi",
    "Otomobil su kaçağı tamiri",
    "7/24 yol yardım"
  ]
};

export type NavItem = (typeof siteConfig.navItems)[number];
