import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function RoadAssistanceCTA() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid overflow-hidden border border-accent/30 bg-graphite lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-8 sm:p-12">
            <h2 className="text-3xl font-semibold text-white">Bursa Nilüfer 7/24 Yol Yardım</h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-soft">
              Araç çalışmıyor, akü bitti veya yolda kaldınız. Konumunuzu paylaşın, size uygun yönlendirme için hızlıca
              iletişime geçelim.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                href={siteConfig.phoneLink}
                trackingEvent="phone_click"
                trackingParams={{ location: "road_assistance_cta", phone: siteConfig.phoneDigits }}
              >
                Hemen Ara
              </Button>
              <Button
                href={siteConfig.whatsappUrl}
                external
                variant="secondary"
                trackingEvent="whatsapp_click"
                trackingParams={{ location: "road_assistance_cta", phone: siteConfig.phoneDigits }}
              >
                WhatsApp’tan Yaz
              </Button>
              <Button href="/724-yol-yardim" variant="ghost">
                Yol Yardım Sayfası
              </Button>
            </div>
          </div>
          <div className="relative min-h-[300px] bg-ink">
            <Image
              src="/images/road-assistance.png"
              alt="Bursa Nilüfer 7/24 Yol Yardım"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
