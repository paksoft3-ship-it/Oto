import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { homeFaqs } from "@/data/faqs";
import { siteConfig } from "@/data/site";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nilüfer Oto Tamir, Bakım ve Onarım Servisi | ERZ GARAGE",
  description:
    "Nilüfer oto tamir, bakım, arıza tespit, periyodik bakım ve 7/24 yol yardım için ERZ GARAGE Bursa Nilüfer servis sayfası.",
  path: "/bolgeler/nilufer-oto-tamir"
});

export default function LocationPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Anasayfa", path: "/" },
            { name: "Bölgeler", path: "/bolgeler/nilufer-oto-tamir" },
            { name: "Nilüfer Oto Tamir", path: "/bolgeler/nilufer-oto-tamir" }
          ]),
          buildFaqSchema(homeFaqs)
        ]}
      />
      <PageHero
        eyebrow="Bursa Nilüfer"
        title="Nilüfer Oto Tamir, Bakım ve Onarım Servisi"
        image="/images/hero-garage.png"
        description="Nilüfer oto tamir, Nilüfer oto servis, Nilüfer arıza tespit ve Nilüfer periyodik bakım ihtiyaçları için ERZ GARAGE; hızlı iletişim ve premium araç odaklı servis yaklaşımı sunar."
      />
      <section className="bg-ink py-20 sm:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Nilüfer ve çevresi için servis kapsamı</h2>
            <p className="mt-4 text-base leading-8 text-soft">
              Bursa Nilüfer oto servis aramalarında arıza tespit, bakım, mekanik onarım, Bursa fren tamiri ve Bursa
              oto elektrik gibi ana ihtiyaçlara çözüm odaklı içerik sunuyoruz.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Hizmet verdiğimiz yakın bölgeler</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {siteConfig.neighborhoods.map((item) => (
                <span key={item} className="border border-white/10 px-3 py-2 text-sm text-white">
                  {item}
                </span>
              ))}
            </div>
          </Card>
        </Container>
      </section>
      <FAQ items={homeFaqs} />
      <FinalCTA sectionName="location_final_cta" />
    </>
  );
}
