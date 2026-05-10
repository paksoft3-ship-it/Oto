import Image from "next/image";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function RoadAssistanceCTA() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden border border-accent/35 bg-graphite">
          <Image
            src="/images/road-assistance.png"
            alt="Bursa Nilüfer 7/24 Yol Yardım"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
          <div className="relative max-w-3xl p-8 sm:p-12 lg:p-16">
            <span className="section-kicker">Acil destek</span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-5xl">Bursa Nilüfer 7/24 Yol Yardım</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-soft">
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
        </div>
      </Container>
    </section>
  );
}
