export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  image: string;
  slug: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  overview: string[];
  symptoms: string[];
  process: string[];
  whyChooseUs: string[];
  faqs: ServiceFaq[];
  relatedServices: string[];
};

export const services: Service[] = [
  {
    slug: "ariza-tespit",
    image: "/images/service-ariza-tespit.png",
    title: "Arıza Tespit Hizmeti",
    shortTitle: "Arıza Tespit",
    seoTitle: "Bursa Nilüfer Arıza Tespit Hizmeti | ERZ GARAGE",
    metaDescription:
      "Bursa Nilüfer’de araç arıza tespit hizmeti. BMW, Mercedes, Audi ve birçok araç için profesyonel arıza tespiti, teknik kontrol ve servis desteği.",
    h1: "Bursa Nilüfer Arıza Tespit Hizmeti",
    intro:
      "Bursa arıza tespit ihtiyacında, doğru teşhis süreci gereksiz parça değişimini önler ve sorunun kaynağına hızlı ulaşılmasını sağlar.",
    overview: [
      "ERZ GARAGE, arıza ışıkları, performans düşüşü ve düzensiz çalışma gibi durumlarda sistematik kontrol yaklaşımı uygular.",
      "BMW, Mercedes ve Audi gibi premium araçlarda elektronik arızalar ile mekanik belirtiler birlikte değerlendirilir."
    ],
    symptoms: [
      "Motor arıza lambasının yanması",
      "Çekiş düşüklüğü veya düzensiz çalışma",
      "Yakıt tüketiminde ani artış",
      "Gösterge panelinde uyarı mesajları",
      "İlk çalıştırmada tekleme veya zor çalışma"
    ],
    process: [
      "Araç şikayeti ve kullanım bilgileri alınır.",
      "Temel fiziksel kontroller yapılır.",
      "Elektronik teşhis ve teknik değerlendirme tamamlanır.",
      "Muhtemel arıza nedenleri ve çözüm yolu net şekilde paylaşılır."
    ],
    whyChooseUs: [
      "Premium Avrupa araçları için teknik servis odağı",
      "Belirtiye göre değil, sorunun kaynağına göre yönlendirme",
      "Bakım, onarım ve ilgili servislerle entegre çözüm"
    ],
    faqs: [
      {
        question: "Arıza tespit ne kadar sürer?",
        answer:
          "Süre arızanın tipine göre değişir. Basit uyarı durumlarında kısa sürede yönlendirme yapılabilir, detaylı kontroller daha fazla zaman alabilir."
      },
      {
        question: "Arıza lambası yanıyorsa araç kullanılabilir mi?",
        answer:
          "Arıza türüne bağlıdır. Güvenlik veya motor sağlığı açısından riskli durumlarda aracı zorlamadan iletişime geçmeniz önerilir."
      }
    ],
    relatedServices: ["motor-ariza-tespiti", "oto-elektrik", "mekanik-onarim"]
  },
  {
    slug: "periyodik-bakim",
    image: "/images/service-periyodik-bakim.png",
    title: "Periyodik Bakım Hizmeti",
    shortTitle: "Periyodik Bakım",
    seoTitle: "Bursa Nilüfer Periyodik Bakım Hizmeti | ERZ GARAGE",
    metaDescription:
      "Bursa Nilüfer periyodik bakım hizmeti. BMW, Mercedes, Audi ve birçok araç için düzenli bakım, filtre kontrolü ve servis planlama desteği.",
    h1: "Bursa Nilüfer Periyodik Bakım Hizmeti",
    intro:
      "Bursa periyodik bakım ihtiyacında düzenli kontrol, aracın günlük kullanım güvenliğini ve uzun vadeli mekanik sağlığını destekler.",
    overview: [
      "Periyodik bakım; yağ, filtre, sıvı, fren ve genel kontrol başlıklarını araç kullanımına göre planlamayı içerir.",
      "Nilüfer oto servis arayan sürücüler için bakım süreci anlaşılır ve pratik şekilde yönlendirilir."
    ],
    symptoms: [
      "Bakım kilometresi veya zamanı yaklaşmış olması",
      "Yağ veya filtre değişim periyodunun dolması",
      "Fren, sıvı veya lastik kontrol ihtiyacı",
      "Uzun yol öncesi genel servis kontrol isteği"
    ],
    process: [
      "Araç kilometresi ve kullanım profili değerlendirilir.",
      "Bakım kalemleri netleştirilir.",
      "Kontrol ve değişim işlemleri planlı şekilde uygulanır.",
      "Sonraki bakım için öneri bilgisi paylaşılır."
    ],
    whyChooseUs: [
      "BMW özel servis Bursa arayışına uygun teknik yaklaşım",
      "Gereksiz işlem yerine ihtiyaç odaklı bakım planlama",
      "Arıza tespit ve mekanik kontrollerle bağlantılı bakım süreci"
    ],
    faqs: [
      {
        question: "Periyodik bakımda neler kontrol edilir?",
        answer:
          "Araç durumuna göre yağ, filtreler, sıvılar, fren sistemi, akü, lastik durumu ve temel mekanik noktalar değerlendirilir."
      },
      {
        question: "Bakım aralıkları sabit midir?",
        answer:
          "Hayır. Marka, model, kullanım koşulu ve önceki servis geçmişine göre değişebilir."
      }
    ],
    relatedServices: ["yag-degisimi", "hava-kabin-filtresi-degisimi", "fren-tamiri"]
  },
  {
    slug: "yag-degisimi",
    image: "/images/hero-garage.png",
    title: "Yağ Değişimi Hizmeti",
    shortTitle: "Yağ Değişimi",
    seoTitle: "Bursa Nilüfer Yağ Değişimi Hizmeti | ERZ GARAGE",
    metaDescription:
      "Bursa Nilüfer yağ değişimi hizmeti. Motor yağı ve filtre kontrolü ile premium araçlar için profesyonel bakım desteği.",
    h1: "Bursa Nilüfer Yağ Değişimi Hizmeti",
    intro:
      "Bursa oto tamir ve bakım süreçlerinde düzenli yağ değişimi, motorun verimli ve dengeli çalışması için temel işlemlerden biridir.",
    overview: [
      "Motor yağı zamanla özellik kaybedebilir ve bu durum sürtünme, ısınma ve performans sorunlarına zemin hazırlayabilir.",
      "ERZ GARAGE, aracın bakım ihtiyacına uygun planlama ile yağ ve ilgili kontrol başlıklarını birlikte değerlendirir."
    ],
    symptoms: [
      "Bakım zamanı veya kilometre sınırının dolması",
      "Motor sesinde artış",
      "Yağ uyarısı veya yağ seviyesi problemi",
      "Yoğun şehir içi kullanım sonrası bakım ihtiyacı"
    ],
    process: [
      "Araç bakım geçmişi değerlendirilir.",
      "Yağ ve filtre durumu kontrol edilir.",
      "Uygun yağ değişimi işlemi gerçekleştirilir.",
      "Kaçak ve seviye kontrolleri tamamlanır."
    ],
    whyChooseUs: [
      "Premium araç bakım ihtiyaçlarına odaklı yaklaşım",
      "Bakım planını diğer kontrol kalemleriyle birlikte değerlendirme",
      "Nilüfer oto tamir arayan kullanıcılar için hızlı iletişim"
    ],
    faqs: [
      {
        question: "Yağ değişimi gecikirse ne olur?",
        answer:
          "Uzun süre geciken yağ bakımı motor performansını olumsuz etkileyebilir ve aşınma riskini artırabilir."
      },
      {
        question: "Sadece yağ mı değişir?",
        answer:
          "Araç durumuna göre filtre ve temel sızıntı kontrolleri de birlikte değerlendirilir."
      }
    ],
    relatedServices: ["periyodik-bakim", "mekanik-onarim", "su-kacagi-tamiri"]
  },
  {
    slug: "fren-tamiri",
    image: "/images/hero-garage.png",
    title: "Fren Tamiri Hizmeti",
    shortTitle: "Fren Tamiri",
    seoTitle: "Bursa Nilüfer Fren Tamiri Hizmeti | ERZ GARAGE",
    metaDescription:
      "Bursa fren tamiri ve fren bakım hizmeti. Nilüfer’de fren sesi, performans düşüşü ve kontrol ihtiyacı için profesyonel servis desteği.",
    h1: "Bursa Nilüfer Fren Tamiri Hizmeti",
    intro:
      "Bursa fren tamiri ihtiyacında hızlı değerlendirme önemlidir çünkü fren sistemi sürüş güvenliğini doğrudan etkiler.",
    overview: [
      "Fren pedal hissi, ses, titreme veya duruş mesafesinde değişim gibi belirtiler göz ardı edilmemelidir.",
      "ERZ GARAGE, fren sistemi kontrollerini bakım ve mekanik değerlendirmeyle birlikte ele alır."
    ],
    symptoms: [
      "Fren sırasında ses gelmesi",
      "Pedalda sertlik veya yumuşama hissi",
      "Frenlemede titreme",
      "Duruş mesafesinin uzaması"
    ],
    process: [
      "Şikayet dinlenir ve temel test değerlendirmesi yapılır.",
      "Balata, disk ve ilgili parçalar kontrol edilir.",
      "Sorun kaynağına göre onarım veya değişim planı paylaşılır.",
      "Servis sonrası genel güvenlik kontrolü tamamlanır."
    ],
    whyChooseUs: [
      "Güvenlik odaklı teknik değerlendirme",
      "Fren sistemini diğer mekanik etkilerle birlikte inceleme",
      "Bursa Nilüfer oto servis içinde hızlı aksiyon"
    ],
    faqs: [
      {
        question: "Fren sesi her zaman balata kaynaklı mı olur?",
        answer:
          "Hayır. Sesin kaynağı balata, disk veya farklı mekanik etkenler olabilir. Kontrol edilmeden net yorum yapmak doğru değildir."
      },
      {
        question: "Fren problemi bekletilebilir mi?",
        answer:
          "Güvenlik açısından bekletilmesi önerilmez. Belirti görüldüğünde kısa sürede kontrol yaptırmak gerekir."
      }
    ],
    relatedServices: ["periyodik-bakim", "mekanik-onarim", "direksiyon-suspansiyon-tamiri"]
  },
  {
    slug: "oto-elektrik",
    image: "/images/hero-garage.png",
    title: "Oto Elektrik Hizmeti",
    shortTitle: "Oto Elektrik",
    seoTitle: "Bursa Nilüfer Oto Elektrik Hizmeti | ERZ GARAGE",
    metaDescription:
      "Bursa oto elektrik hizmeti. Nilüfer’de akü, şarj, sensör ve elektrik kaynaklı arızalar için profesyonel oto servis desteği.",
    h1: "Bursa Nilüfer Oto Elektrik Hizmeti",
    intro:
      "Bursa oto elektrik sorunlarında doğru teşhis, hem konfor hem de sürüş güvenliği açısından önem taşır.",
    overview: [
      "Modern araçlarda sensörler, şarj sistemi, akü ve elektronik modüller birbirini etkileyen bir yapıda çalışır.",
      "Arıza ışıkları, marş problemleri veya düzensiz elektrik tüketimi detaylı kontrol gerektirebilir."
    ],
    symptoms: [
      "Araç geç çalışma veya marş sorunu",
      "Akü veya şarj uyarısı",
      "Aydınlatma ve elektrik ekipmanlarında düzensizlik",
      "Sensör ve elektronik uyarılar"
    ],
    process: [
      "Akü ve şarj sistemi değerlendirilir.",
      "Elektriksel arıza belirtileri kontrol edilir.",
      "Gerekli arıza tespit süreci uygulanır.",
      "Uygun çözüm ve takip önerisi paylaşılır."
    ],
    whyChooseUs: [
      "Elektronik ve mekanik ilişkiyi birlikte değerlendiren yaklaşım",
      "Premium Avrupa araçlarında sık görülen elektrik arızalarına odak",
      "Akü, arıza tespit ve yol yardım süreçleriyle bağlantılı hizmet"
    ],
    faqs: [
      {
        question: "Oto elektrik arızası akü kaynaklı olmayabilir mi?",
        answer:
          "Evet. Akü dışında şarj sistemi, sensörler veya farklı elektrik bileşenleri de benzer belirtiler oluşturabilir."
      },
      {
        question: "Elektrik arızası sürüşü etkiler mi?",
        answer:
          "Araç sistemine bağlı olarak etkileyebilir. Uyarı devam ediyorsa teknik kontrol önerilir."
      }
    ],
    relatedServices: ["aku-degisimi", "ariza-tespit", "724-yol-yardim"]
  },
  {
    slug: "aku-degisimi",
    image: "/images/hero-garage.png",
    title: "Akü Değişimi Hizmeti",
    shortTitle: "Akü Değişimi",
    seoTitle: "Bursa Nilüfer Akü Değişimi Hizmeti | ERZ GARAGE",
    metaDescription:
      "Bursa akü değişimi hizmeti. Nilüfer’de araç aküsü kontrolü, akü arızası değerlendirmesi ve yol yardım desteği için ERZ GARAGE.",
    h1: "Bursa Nilüfer Akü Değişimi Hizmeti",
    intro:
      "Bursa akü değişimi ihtiyacında sorun yalnızca aküyle sınırlı olmayabilir; bu nedenle temel elektrik kontrolü önemlidir.",
    overview: [
      "Araç geç çalışıyor, marş zayıf geliyor veya akü uyarısı görülüyorsa hızlı kontrol gerekir.",
      "ERZ GARAGE, akü bitmesi ve ilgili yol yardım ihtiyaçlarında hızlı iletişim odaklı destek sunar."
    ],
    symptoms: [
      "Araç çalışmıyor veya zor çalışıyor",
      "Akü lambası yanıyor",
      "Far ve iç aydınlatmada zayıflama",
      "Soğuk havalarda marş problemi"
    ],
    process: [
      "Akü ve şarj sistemi temel kontrolden geçirilir.",
      "Akünün durumu değerlendirilir.",
      "Gerekli değişim veya yönlendirme paylaşılır.",
      "Sonrasında genel çalıştırma kontrolü yapılır."
    ],
    whyChooseUs: [
      "Bursa 7/24 yol yardım ile bağlantılı hızlı erişim",
      "Akü sorununun kaynağını kontrol etmeye odaklı yaklaşım",
      "Nilüfer oto servis içinde pratik çözüm süreci"
    ],
    faqs: [
      {
        question: "Akü bitince hemen değişim gerekir mi?",
        answer:
          "Her zaman değil. Önce akü ve şarj sistemi birlikte değerlendirilmelidir."
      },
      {
        question: "Yolda kalınca destek alabilir miyim?",
        answer:
          "Evet. 7/24 yol yardım sayfası üzerinden bizi arayabilir veya WhatsApp’tan konum paylaşabilirsiniz."
      }
    ],
    relatedServices: ["oto-elektrik", "724-yol-yardim", "ariza-tespit"]
  },
  {
    slug: "sanziman-tamiri",
    image: "/images/hero-garage.png",
    title: "Şanzıman Tamiri Hizmeti",
    shortTitle: "Şanzıman Tamiri",
    seoTitle: "Bursa Nilüfer Şanzıman Tamiri Hizmeti | ERZ GARAGE",
    metaDescription:
      "Bursa şanzıman tamiri hizmeti. Nilüfer’de geçiş problemleri, vuruntu ve şanzıman kontrol ihtiyacı için teknik servis desteği.",
    h1: "Bursa Nilüfer Şanzıman Tamiri Hizmeti",
    intro:
      "Bursa şanzıman tamiri ihtiyacında belirtilerin erken değerlendirilmesi, daha büyük maliyetlerin önüne geçilmesine yardımcı olabilir.",
    overview: [
      "Geçişlerde sarsıntı, gecikme veya anormal ses gibi durumlar detaylı kontrol gerektirebilir.",
      "Şanzımanla ilişkili belirtiler, bazı durumlarda farklı sistemlerden de etkilenebildiği için bütüncül değerlendirme yapılır."
    ],
    symptoms: [
      "Vites geçişlerinde sarsıntı",
      "Gecikmeli tepki veya vuruntu",
      "Anormal mekanik sesler",
      "Gösterge panelinde şanzıman uyarıları"
    ],
    process: [
      "Belirtiler ve sürüş davranışı dinlenir.",
      "Temel teknik kontroller uygulanır.",
      "Şanzıman ve ilişkili arıza başlıkları değerlendirilir.",
      "Uygun işlem planı net şekilde aktarılır."
    ],
    whyChooseUs: [
      "Premium araçlarda hassas sürüş konforuna odaklı yaklaşım",
      "Arıza tespit ile entegre değerlendirme",
      "Açık iletişim ve kontrollü servis planlama"
    ],
    faqs: [
      {
        question: "Şanzıman problemi kendiliğinden düzelir mi?",
        answer:
          "Genellikle hayır. Belirti hafif görünse bile teknik kontrol geciktirilmemelidir."
      },
      {
        question: "Geçiş sertliği başka sorunlardan kaynaklanabilir mi?",
        answer:
          "Evet. Arıza tespit sürecinde ilişkili sistemler de değerlendirilmelidir."
      }
    ],
    relatedServices: ["ariza-tespit", "mekanik-onarim", "yag-degisimi"]
  },
  {
    slug: "direksiyon-suspansiyon-tamiri",
    image: "/images/hero-garage.png",
    title: "Direksiyon ve Süspansiyon Tamiri",
    shortTitle: "Direksiyon ve Süspansiyon",
    seoTitle: "Bursa Nilüfer Direksiyon ve Süspansiyon Tamiri | ERZ GARAGE",
    metaDescription:
      "Bursa direksiyon ve süspansiyon tamiri hizmeti. Nilüfer’de yol tutuş, ses ve konfor problemleri için teknik kontrol desteği.",
    h1: "Bursa Nilüfer Direksiyon ve Süspansiyon Tamiri",
    intro:
      "Direksiyon ve süspansiyon sistemi, konfor kadar yol hakimiyeti için de önemlidir. Belirtiler ihmal edilmemelidir.",
    overview: [
      "Yol tutuş değişimi, vuruntu, dengesizlik veya direksiyon tepkilerinde bozulma mekanik kontrol gerektirebilir.",
      "ERZ GARAGE, sürüş hissindeki değişimleri güvenlik ve mekanik sağlık açısından değerlendirir."
    ],
    symptoms: [
      "Çukurlarda vuruntu sesi",
      "Direksiyonda boşluk veya sertlik hissi",
      "Araçta sağa sola çekme",
      "Konfor ve denge kaybı"
    ],
    process: [
      "Sürüş şikayetleri dinlenir.",
      "Temel mekanik noktalar kontrol edilir.",
      "Sorunlu bileşenler ve etki alanı değerlendirilir.",
      "Onarım veya ilgili servis önerisi paylaşılır."
    ],
    whyChooseUs: [
      "Güvenlik ve sürüş kalitesini birlikte değerlendiren yaklaşım",
      "Fren ve genel mekanik kontrollerle bağlantılı servis mantığı",
      "Nilüfer oto tamir ihtiyaçlarında hedefe yönelik çözüm"
    ],
    faqs: [
      {
        question: "Direksiyon sertleşmesi önemli midir?",
        answer:
          "Evet. Direksiyon tepkilerindeki belirgin değişiklikler mutlaka kontrol edilmelidir."
      },
      {
        question: "Süspansiyon sesi tek başına sorun göstergesi mi?",
        answer:
          "Çoğu zaman evet. Sesin kaynağının doğru tespiti için kontrol yapılması gerekir."
      }
    ],
    relatedServices: ["fren-tamiri", "mekanik-onarim", "ariza-tespit"]
  },
  {
    slug: "motor-ariza-tespiti",
    image: "/images/hero-garage.png",
    title: "Motor Arıza Tespiti Hizmeti",
    shortTitle: "Motor Arıza Tespiti",
    seoTitle: "Bursa Nilüfer Motor Arıza Tespiti | ERZ GARAGE",
    metaDescription:
      "Bursa Nilüfer motor arıza tespiti hizmeti. Çekiş düşüklüğü, tekleme ve motor uyarıları için profesyonel teknik kontrol desteği.",
    h1: "Bursa Nilüfer Motor Arıza Tespiti",
    intro:
      "Motorla ilgili belirtiler erken tespit edildiğinde, daha büyük arıza zincirlerinin önüne geçmek mümkün olabilir.",
    overview: [
      "Motor performans kaybı, düzensiz çalışma ve uyarı lambaları birbiriyle bağlantılı farklı nedenlerden kaynaklanabilir.",
      "ERZ GARAGE, elektronik veriler ile mekanik belirtileri birlikte ele alır."
    ],
    symptoms: [
      "Çekiş düşüklüğü",
      "Rölantide dengesizlik",
      "Tekleme veya sarsıntı",
      "Motor arıza lambası"
    ],
    process: [
      "Belirtiler kayıt altına alınır.",
      "Temel motor kontrol başlıkları değerlendirilir.",
      "Arıza tespit süreci uygulanır.",
      "Muhtemel nedenler ve çözüm adımları açıklanır."
    ],
    whyChooseUs: [
      "Premium araçlarda motor davranışına özel teknik yaklaşım",
      "Elektronik teşhis ile mekanik yorumun birlikte ilerlemesi",
      "Bakım ve onarım kararını netleştiren süreç"
    ],
    faqs: [
      {
        question: "Motor arıza tespiti ile genel arıza tespiti farklı mı?",
        answer:
          "Motor arıza tespiti, motor performansı ve ilişkili sistemlere daha yoğun odaklanır."
      },
      {
        question: "Çekiş düşüklüğü motor arızası anlamına gelir mi?",
        answer:
          "Her zaman değil. Farklı sistemler de benzer belirti verebilir, bu yüzden detaylı inceleme gerekir."
      }
    ],
    relatedServices: ["ariza-tespit", "oto-elektrik", "mekanik-onarim"]
  },
  {
    slug: "mekanik-onarim",
    image: "/images/hero-garage.png",
    title: "Mekanik Onarım Hizmeti",
    shortTitle: "Mekanik Onarım",
    seoTitle: "Bursa Nilüfer Mekanik Onarım Hizmeti | ERZ GARAGE",
    metaDescription:
      "Bursa Nilüfer mekanik onarım hizmeti. Oto tamir, teknik kontrol ve araçtaki mekanik sorunlar için profesyonel servis desteği.",
    h1: "Bursa Nilüfer Mekanik Onarım Hizmeti",
    intro:
      "Mekanik onarım süreçlerinde doğru tespit ve kontrollü uygulama, aracın güvenilir şekilde kullanımına yardımcı olur.",
    overview: [
      "ERZ GARAGE, genel mekanik arızaları bakım geçmişi ve mevcut belirtiler üzerinden değerlendirir.",
      "Nilüfer oto servis arayan kullanıcılar için anlaşılır yönlendirme ve hızlı iletişim ön plandadır."
    ],
    symptoms: [
      "Sürüş sırasında anormal sesler",
      "Titreşim, sarsıntı veya performans düşüşü",
      "Sızıntı, ısınma veya düzensiz çalışma belirtileri",
      "Servis sonrası takip gerektiren mekanik durumlar"
    ],
    process: [
      "Araç şikayeti alınır.",
      "İlgili mekanik sistemler kontrol edilir.",
      "Arıza kaynağı ve gerekli işlem planı paylaşılır.",
      "İlgili servis başlıklarıyla birlikte çözüm önerisi sunulur."
    ],
    whyChooseUs: [
      "Bakım, teşhis ve onarımı tek akışta değerlendirme",
      "BMW, Mercedes ve Audi gibi araçlarda özel servis yaklaşımı",
      "Açık iletişim ve yönlendirme odaklı servis anlayışı"
    ],
    faqs: [
      {
        question: "Mekanik onarım için önce arıza tespiti gerekir mi?",
        answer:
          "Çoğu durumda evet. Sorunun kaynağı netleşmeden doğru onarım planı yapmak sağlıklı olmaz."
      },
      {
        question: "Hangi mekanik sorunlarda iletişime geçmeliyim?",
        answer:
          "Anormal ses, titreşim, çekiş düşüşü, kaçak veya sürüşte belirgin değişim hissedildiğinde iletişime geçebilirsiniz."
      }
    ],
    relatedServices: ["ariza-tespit", "fren-tamiri", "sanziman-tamiri"]
  },
  {
    slug: "hava-kabin-filtresi-degisimi",
    image: "/images/hero-garage.png",
    title: "Hava ve Kabin Filtresi Değişimi",
    shortTitle: "Hava ve Kabin Filtresi",
    seoTitle: "Bursa Nilüfer Hava ve Kabin Filtresi Değişimi | ERZ GARAGE",
    metaDescription:
      "Bursa Nilüfer hava ve kabin filtresi değişimi hizmeti. Araç performansı ve iç hava kalitesi için profesyonel bakım desteği.",
    h1: "Bursa Nilüfer Hava ve Kabin Filtresi Değişimi",
    intro:
      "Hava ve kabin filtresi değişimi, hem motor verimi hem de araç içi konfor için düzenli bakım başlıkları arasında yer alır.",
    overview: [
      "Kirlenen filtreler performans, yakıt tüketimi ve iç mekandaki hava kalitesi üzerinde olumsuz etki oluşturabilir.",
      "Periyodik bakım içinde bu kalemlerin kontrol edilmesi sürüş konforunu destekler."
    ],
    symptoms: [
      "Klima performansında düşüş",
      "Araç içinde kötü koku veya hava akışında azalma",
      "Bakım periyodunun dolması",
      "Yoğun tozlu kullanım sonrası kontrol ihtiyacı"
    ],
    process: [
      "Bakım geçmişi gözden geçirilir.",
      "Filtre durumu kontrol edilir.",
      "Gerekli değişim planlanır.",
      "Genel bakım akışıyla birlikte teslim bilgisi verilir."
    ],
    whyChooseUs: [
      "Bursa periyodik bakım süreçleriyle uyumlu kontrol yaklaşımı",
      "Konfor ve teknik verimi birlikte ele alma",
      "Premium araç kullanıcılarına uygun düzenli servis planı"
    ],
    faqs: [
      {
        question: "Filtre değişimi performansı etkiler mi?",
        answer:
          "Uygun bakım aralıklarında değişim yapılması hem sürüş kalitesi hem de iç hava konforu açısından olumlu katkı sağlar."
      },
      {
        question: "Kabin filtresi ne zaman değişir?",
        answer:
          "Kullanım koşulları ve bakım planına göre değişir. Tozlu kullanımda daha sık kontrol gerekebilir."
      }
    ],
    relatedServices: ["periyodik-bakim", "yag-degisimi", "oto-elektrik"]
  },
  {
    slug: "su-kacagi-tamiri",
    image: "/images/hero-garage.png",
    title: "Otomobil Su Kaçağı Tamiri",
    shortTitle: "Su Kaçağı Tamiri",
    seoTitle: "Bursa Nilüfer Otomobil Su Kaçağı Tamiri | ERZ GARAGE",
    metaDescription:
      "Bursa Nilüfer otomobil su kaçağı tamiri hizmeti. Sızıntı, eksiltme ve soğutma sistemi problemleri için teknik kontrol desteği.",
    h1: "Bursa Nilüfer Otomobil Su Kaçağı Tamiri",
    intro:
      "Soğutma sistemi veya su eksiltme problemleri bekletildiğinde daha büyük motor riskleri oluşturabilir.",
    overview: [
      "Araçta su eksiltme, zemin altında sıvı izi veya hararet eğilimi gibi belirtiler gözlemleniyorsa teknik kontrol gerekir.",
      "ERZ GARAGE, kaçak ihtimalini sistematik şekilde değerlendirerek doğru müdahale planına yönlendirir."
    ],
    symptoms: [
      "Radyatör veya genleşme kabında eksilme",
      "Araç altında sıvı izi",
      "Hararet eğilimi",
      "Uzun kullanımda soğutma dengesizliği"
    ],
    process: [
      "Belirti ve kullanım geçmişi dinlenir.",
      "Kaçak ihtimali olan bölgeler kontrol edilir.",
      "Soğutma sistemi genel değerlendirmeden geçirilir.",
      "Uygun onarım planı paylaşılır."
    ],
    whyChooseUs: [
      "Motor sağlığını korumaya odaklı erken müdahale yaklaşımı",
      "Arıza tespit ve mekanik onarım ile bağlantılı servis akışı",
      "Bursa Nilüfer oto servis içinde net iletişim"
    ],
    faqs: [
      {
        question: "Su eksiltme her zaman büyük arıza mı demektir?",
        answer:
          "Her zaman değil ancak kontrol edilmeden kullanıma devam etmek risk yaratabilir."
      },
      {
        question: "Hararet yoksa bekleyebilir miyim?",
        answer:
          "Belirti hafif görünse de kaçak veya eksiltme devam ediyorsa kısa sürede kontrol önerilir."
      }
    ],
    relatedServices: ["motor-ariza-tespiti", "mekanik-onarim", "yag-degisimi"]
  }
];

export const servicesBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));
