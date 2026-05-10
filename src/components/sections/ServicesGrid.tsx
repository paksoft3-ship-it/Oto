import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ServicesGrid() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <div className="mb-10">
          <span className="section-kicker">Tüm hizmetler</span>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Oto Tamir, Bakım ve Onarım Hizmetleri</h2>
          <p className="mt-4 max-w-3xl leading-7 text-soft">
            Bursa oto tamir, Bursa periyodik bakım, Bursa oto elektrik ve diğer teknik ihtiyaçlar için tüm ana hizmet
            sayfalarımızı buradan inceleyebilirsiniz.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <Card key={service.slug} className="group flex min-h-[265px] flex-col p-7">
              <div className="mb-6 flex items-start justify-between">
                <span className="text-2xl text-accent">{["⌕", "⚙", "⌁", "✚", "▤", "●"][index % 6]}</span>
                <span className="font-mono text-xs text-soft/60">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className="text-xl font-black text-white">{service.shortTitle}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-soft">{service.metaDescription}</p>
              <div className="mt-5">
                <Button
                  href={`/hizmetler/${service.slug}`}
                  variant="ghost"
                  className="w-full"
                  trackingEvent="service_card_click"
                  trackingParams={{ service_name: service.shortTitle, page_location: "services_grid" }}
                >
                  Detaya Git
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
