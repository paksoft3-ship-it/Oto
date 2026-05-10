import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ContactPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-white">Bize hızlıca ulaşın</h2>
          <p className="mt-4 text-base leading-8 text-soft">
            Bursa Nilüfer’de oto tamir, arıza tespit veya yol yardım ihtiyacınız için en hızlı yol doğrudan iletişimdir.
          </p>
          <ul className="mt-6 space-y-3 text-soft">
            <li>Telefon: {siteConfig.phoneDisplay}</li>
            <li>WhatsApp: hızlı bilgi ve konum paylaşımı</li>
            <li>Konum: {siteConfig.location}</li>
          </ul>
        </div>
        <div className="border border-white/10 bg-graphite p-6">
          <h3 className="text-xl font-semibold text-white">İletişim seçenekleri</h3>
          <div className="mt-6 flex flex-col gap-3">
            <Button
              href={siteConfig.phoneLink}
              trackingEvent="phone_click"
              trackingParams={{ location: "contact_preview", phone: siteConfig.phoneDigits }}
            >
              Hemen Ara
            </Button>
            <Button
              href={siteConfig.whatsappUrl}
              external
              variant="secondary"
              trackingEvent="whatsapp_click"
              trackingParams={{ location: "contact_preview", phone: siteConfig.phoneDigits }}
            >
              WhatsApp’tan Yaz
            </Button>
            <Button
              href={siteConfig.directionsUrl}
              external
              variant="ghost"
              trackingEvent="directions_click"
              trackingParams={{ location: "contact_preview" }}
            >
              Yol Tarifi Al
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
