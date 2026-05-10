import Image from "next/image";
import { brands } from "@/data/brands";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function BrandExpertise() {
  return (
    <section className="border-y border-white/10 bg-graphite py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white">BMW, Mercedes ve Audi için teknik servis yaklaşımı</h2>
          <p className="mt-3 max-w-3xl text-soft">
            Marka logoları kullanmadan, araç karakterine uygun bakım ve arıza tespit süreci sunan özel servis yaklaşımı
            ile çalışıyoruz.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {brands.map((brand) => (
            <Card key={brand.slug} className="flex flex-col overflow-hidden">
              <div className="relative h-48 w-full border-b border-white/10 bg-graphite">
                <Image src={brand.image} alt={brand.brandName} fill className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="inline-flex self-start border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.18em] text-white">
                  {brand.brandName}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">{brand.h1}</h3>
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
