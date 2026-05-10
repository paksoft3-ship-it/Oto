import Image from "next/image";
import { brands } from "@/data/brands";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function BrandExpertise() {
  return (
    <section className="border-y border-metal bg-surface-low py-20 sm:py-28">
      <Container>
        <div className="mb-10">
          <span className="section-kicker">Premium uzmanlık</span>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">BMW, Mercedes ve Audi için teknik servis yaklaşımı</h2>
          <p className="mt-4 max-w-3xl leading-7 text-soft">
            Marka logoları kullanmadan, araç karakterine uygun bakım ve arıza tespit süreci sunan özel servis yaklaşımı
            ile çalışıyoruz.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {brands.map((brand) => (
            <Card key={brand.slug} className="flex flex-col overflow-hidden">
              <div className="relative h-72 w-full border-b border-metal bg-graphite">
                <Image src={brand.image} alt={brand.brandName} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/15 to-transparent" />
                <div className="absolute bottom-5 left-5 border border-white/10 bg-ink/70 px-4 py-3 text-3xl font-black text-white backdrop-blur">
                  {brand.brandName}
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="inline-flex self-start border border-accent/30 bg-accent/10 px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-accent-soft">
                  Özel servis yaklaşımı
                </div>
                <h3 className="mt-4 text-xl font-black text-white">{brand.h1}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-soft">{brand.intro}</p>
                <div className="mt-5">
                  <Button
                    href={`/markalar/${brand.slug}`}
                    variant="secondary"
                    className="w-full"
                    trackingEvent="brand_page_cta_click"
                    trackingParams={{ brand_name: brand.brandName, action_type: "visit_brand_page" }}
                  >
                    Marka Sayfası
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
