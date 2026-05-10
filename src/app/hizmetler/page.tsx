import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Container } from "@/components/ui/Container";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Bursa Nilüfer Oto Servis Hizmetleri | ERZ GARAGE",
  description:
    "Bursa Nilüfer oto servis hizmetleri: arıza tespit, bakım, onarım, fren tamiri, oto elektrik, yağ değişimi ve daha fazlası.",
  path: "/hizmetler"
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "Hizmetler", path: "/hizmetler" }
        ])}
      />
      <section className="border-b border-white/10 bg-graphite py-16 sm:py-24">
        <Container>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Oto Tamir, Bakım ve Onarım Hizmetleri</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-soft">
            Bursa oto tamir, Nilüfer arıza tespit, Bursa fren tamiri ve premium Avrupa araçlarına uygun bakım
            başlıklarını tek sayfada inceleyin.
          </p>
        </Container>
      </section>
      <ServicesGrid />
      <FinalCTA sectionName="services_final_cta" />
    </>
  );
}
