import Image from "next/image";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function ServicesGrid() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white">Oto Tamir, Bakım ve Onarım Hizmetleri</h2>
          <p className="mt-3 max-w-3xl text-soft">
            Bursa oto tamir, Bursa periyodik bakım, Bursa oto elektrik ve diğer teknik ihtiyaçlar için tüm ana hizmet
            sayfalarımızı buradan inceleyebilirsiniz.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="flex h-full flex-col overflow-hidden">
              <div className="relative h-48 w-full border-b border-white/10 bg-graphite">
                <Image src={service.image} alt={service.shortTitle} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">{service.shortTitle}</h3>
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
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
