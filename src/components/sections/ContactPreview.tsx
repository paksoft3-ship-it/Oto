import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function ContactPreview() {
  return (
    <section className="bg-surface-low py-20 sm:py-28">
      <Container className="grid gap-8 lg:grid-cols-2">
        <div>
          <span className="section-kicker">İletişim</span>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Bize hızlıca ulaşın</h2>
          <p className="mt-4 text-base leading-8 text-soft">
            Bursa Nilüfer’de oto tamir, arıza tespit veya yol yardım ihtiyacınız için en hızlı yol doğrudan iletişimdir.
          </p>
          <ul className="mt-8 space-y-4 text-sm font-semibold uppercase tracking-[0.1em] text-soft">
            <li className="border-b border-white/10 pb-4">Telefon: {siteConfig.phoneDisplay}</li>
            <li className="border-b border-white/10 pb-4">WhatsApp: hızlı bilgi ve konum paylaşımı</li>
            <li>Konum: {siteConfig.location}</li>
          </ul>
        </div>
        <div className="technical-panel p-6 sm:p-8">
          <h3 className="text-xl font-black text-white">İletişim seçenekleri</h3>
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
