import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type FinalCTAProps = {
  title?: string;
  description?: string;
  sectionName?: string;
};

export function FinalCTA({
  title = "Aracınız için doğru yönlendirmeyi şimdi alın",
  description = "Telefonla hızlı bilgi alın, WhatsApp’tan sorunuzu yazın veya doğrudan yol tarifi oluşturun.",
  sectionName = "final_cta"
}: FinalCTAProps) {
  return (
    <section className="bg-ink pb-20 pt-16 sm:pb-28 sm:pt-20">
      <Container>
        <div className="relative overflow-hidden border border-accent/25 bg-black p-8 sm:p-12">
          <div className="absolute inset-0 bg-garage-grid bg-[size:40px_40px] opacity-10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(225,29,46,0.20),transparent_34%)]" />
          <div className="relative">
            <span className="section-kicker">Servis randevusu</span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">{title}</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-soft">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={siteConfig.phoneLink}
                trackingEvent="phone_click"
                trackingParams={{ location: sectionName, phone: siteConfig.phoneDigits }}
              >
                Hemen Ara: {siteConfig.phoneDisplay}
              </Button>
              <Button
                href={siteConfig.whatsappUrl}
                external
                variant="secondary"
                trackingEvent="whatsapp_click"
                trackingParams={{ location: sectionName, phone: siteConfig.phoneDigits }}
              >
                WhatsApp’tan Yaz
              </Button>
              <Button
                href={siteConfig.directionsUrl}
                external
                variant="ghost"
                trackingEvent="directions_click"
                trackingParams={{ location: sectionName }}
              >
                Yol Tarifi Al
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
