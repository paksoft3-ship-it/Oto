import Link from "next/link";
import Image from "next/image";

import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

type Props = {
  pageLocation: string;
};

export function ServiceCards({ pageLocation }: Props) {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-white">Hızlı Servis Başlıkları</h2>
            <p className="mt-3 max-w-2xl text-soft">
              Bursa Nilüfer oto servis ihtiyacında en sık talep edilen hizmet başlıklarına buradan ulaşabilirsiniz.
            </p>
          </div>
          <Link href="/hizmetler" className="hidden text-sm font-medium text-white underline-offset-4 hover:underline md:block">
            Tüm hizmetleri incele
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.slice(0, 8).map((service) => (
            <Card key={service.slug} className="flex flex-col overflow-hidden">
              <div className="relative h-48 w-full border-b border-white/10 bg-graphite">
                <Image src={service.image} alt={service.shortTitle} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold text-white">{service.shortTitle}</h3>
              <p className="mt-3 text-sm leading-7 text-soft">{service.intro}</p>
              <div className="mt-5">
                <Button
                  href={`/hizmetler/${service.slug}`}
                  variant="secondary"
                  className="w-full"
                  trackingEvent="service_card_click"
                  trackingParams={{ service_name: service.shortTitle, page_location: pageLocation }}
                >
                  Detayları Gör
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
