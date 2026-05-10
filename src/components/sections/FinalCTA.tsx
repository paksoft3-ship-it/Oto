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
    <section className="pb-20 pt-16 sm:pb-24 sm:pt-20">
      <Container>
        <div className="border border-white/10 bg-black p-8 sm:p-10">
          <h2 className="text-3xl font-semibold text-white">{title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-soft">{description}</p>
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
      </Container>
    </section>
  );
}
