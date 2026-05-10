import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { roadAssistanceFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bursa Nilüfer 7/24 Yol Yardım Hizmeti | ERZ GARAGE",
  description:
    "Bursa Nilüfer 7/24 yol yardım hizmeti. Araç çalışmıyor, akü bitti veya yolda kaldınızsa ERZ GARAGE ile hemen iletişime geçin.",
  path: "/724-yol-yardim"
});

const cases = ["Araç çalışmıyor", "Akü bitti", "Araç yolda kaldı", "Arıza lambası yandı", "Acil teknik destek gerekiyor"];
const steps = ["Bizi arayın", "Konumunuzu paylaşın", "Durumu anlatın", "Size uygun destek için yönlendirme yapılır"];

export default function RoadAssistancePage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Anasayfa", path: "/" },
            { name: "7/24 Yol Yardım", path: "/724-yol-yardim" }
          ]),
          buildFaqSchema(roadAssistanceFaqs)
        ]}
      />
      <PageHero
        eyebrow="Acil destek"
        title="Bursa Nilüfer 7/24 Yol Yardım Hizmeti"
        image="/images/road-assistance.png"
        description="Acil durumda hızlı iletişim önemlidir. Telefon numaramız görünür, WhatsApp ve konum paylaşımı hazır şekilde sizi bekliyor."
      >
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href={siteConfig.phoneLink}
              trackingEvent="phone_click"
              trackingParams={{ location: "road_assistance_hero", phone: siteConfig.phoneDigits }}
            >
              Hemen Ara: {siteConfig.phoneDisplay}
            </Button>
            <Button
              href={siteConfig.whatsappUrl}
              external
              variant="secondary"
              trackingEvent="whatsapp_click"
              trackingParams={{ location: "road_assistance_hero", phone: siteConfig.phoneDigits }}
            >
              WhatsApp’tan Yaz
            </Button>
            <Button
              href={siteConfig.directionsUrl}
              external
              variant="ghost"
              trackingEvent="directions_click"
              trackingParams={{ location: "road_assistance_hero" }}
            >
              Konum Paylaş / Yol Tarifi
            </Button>
          </div>
      </PageHero>
      <section className="bg-ink py-20 sm:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Sık karşılaşılan durumlar</h2>
            <ul className="mt-4 space-y-3 text-soft">
              {cases.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Süreç nasıl işler?</h2>
            <ol className="mt-4 space-y-3 text-soft">
              {steps.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </Card>
        </Container>
      </section>
      <FAQ items={roadAssistanceFaqs} />
      <FinalCTA sectionName="road_assistance_final_cta" />
    </>
  );
}
