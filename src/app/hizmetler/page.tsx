import { JsonLd } from "@/components/seo/JsonLd";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
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
      <PageHero
        eyebrow="Servis menüsü"
        title="Oto Tamir, Bakım ve Onarım Hizmetleri"
        image="/images/service-ariza-tespit.png"
        description="Bursa oto tamir, Nilüfer arıza tespit, Bursa fren tamiri ve premium Avrupa araçlarına uygun bakım başlıklarını tek sayfada inceleyin."
      />
      <ServicesGrid />
      <FinalCTA sectionName="services_final_cta" />
    </>
  );
}
