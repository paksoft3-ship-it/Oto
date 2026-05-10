import Link from "next/link";
import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type Props = {
  pageLocation: string;
};

export function ServiceCards({ pageLocation }: Props) {
  const quickServices = services.slice(0, 3);

  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <span className="section-kicker">Servis protokolü</span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Hızlı Servis Başlıkları</h2>
            <p className="mt-4 max-w-2xl leading-7 text-soft">
              Bursa Nilüfer oto servis ihtiyacında en sık talep edilen hizmet başlıklarına buradan ulaşabilirsiniz.
            </p>
          </div>
          <Link href="/hizmetler" className="hidden text-xs font-extrabold uppercase tracking-[0.12em] text-accent underline-offset-4 hover:underline md:block">
            Tüm hizmetleri incele
          </Link>
        </div>
        <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-4">
          {quickServices.map((service, index) => (
            <Card key={service.slug} className="group flex min-h-[220px] flex-col p-7">
              <div className="mb-7 flex items-start justify-between">
                <span className="text-3xl text-accent">{["⌕", "⚙", "✚"][index]}</span>
                <span className="font-mono text-xs text-soft/60">0{index + 1}</span>
              </div>
              <h3 className="text-2xl font-black text-white">{service.shortTitle}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-soft">{service.intro}</p>
              <div className="mt-6">
                <Button
                  href={`/hizmetler/${service.slug}`}
                  variant="ghost"
                  className="w-full"
                  trackingEvent="service_card_click"
                  trackingParams={{ service_name: service.shortTitle, page_location: pageLocation }}
                >
                  Detayları Gör
                </Button>
              </div>
            </Card>
          ))}
          <div className="flex min-h-[220px] flex-col border border-accent bg-accent p-7 text-white shadow-red">
            <div className="mb-7 text-5xl font-black leading-none">*</div>
            <h3 className="text-2xl font-black">7/24 Yol Yardım</h3>
            <p className="mt-3 flex-1 text-sm leading-7 text-white/90">Yolda kaldığınızda hızlı iletişim ve yönlendirme desteği.</p>
            <Button
              href="/724-yol-yardim"
              variant="secondary"
              className="mt-6 border-white/60 bg-transparent text-white hover:border-white"
            >
              Hemen Ulaşın
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
