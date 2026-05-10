import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { aboutFaqs } from "@/data/faqs";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ERZ GARAGE Bursa Nilüfer Hakkında | Güvenilir Oto Servis",
  description:
    "ERZ GARAGE Bursa Nilüfer hakkında bilgi alın. Güvenilir oto servis, arıza tespit, bakım, onarım ve 7/24 yol yardım yaklaşımımızı inceleyin.",
  path: "/hakkimizda"
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Anasayfa", path: "/" },
            { name: "Hakkımızda", path: "/hakkimizda" }
          ]),
          buildFaqSchema(aboutFaqs)
        ]}
      />
      <PageHero
        eyebrow="Hakkımızda"
        title="ERZ GARAGE Bursa Nilüfer"
        image="/images/hakkimizda.png"
        description="ERZ GARAJ olarak araçlarınız için profesyonel oto tamir, bakım ve onarım hizmeti sunuyoruz. BMW, Mercedes, Audi başta olmak üzere birçok araç markasında arıza tespit, periyodik bakım, mekanik onarım ve teknik servis hizmetleri vermekteyiz."
      />

      <section className="bg-ink py-20 sm:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Hikayemiz</h2>
            <p className="mt-4 text-base leading-8 text-soft">
              Kaliteli işçilik, güvenilir hizmet ve müşteri memnuniyetini ön planda tutarak araçlarınızı titizlikle
              teslim alıyor, en doğru çözümleri sunuyoruz. Ayrıca 7/24 yol yardım hizmetimiz ile ihtiyaç duyduğunuz her
              an yanınızdayız.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Misyonumuz</h2>
            <p className="mt-4 text-base leading-8 text-soft">
              Profesyonel ekipman, hızlı servis anlayışı ve güven odaklı hizmet yaklaşımıyla ERZ GARAJ her zaman
              yanınızda.
            </p>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Değerlerimiz</h2>
            <ul className="mt-4 space-y-3 text-soft">
              <li>Şeffaf iletişim</li>
              <li>İhtiyaca göre teknik yönlendirme</li>
              <li>Premium araç kullanıcılarına uygun servis yaklaşımı</li>
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Profesyonel ekipman ve premium araç odağı</h2>
            <p className="mt-4 text-base leading-8 text-soft">
              Bursa Nilüfer oto servis ihtiyacında BMW, Mercedes ve Audi gibi araçların bakım ve arıza tespit
              gereksinimlerini dikkate alan özel servis yaklaşımıyla çalışıyoruz.
            </p>
          </Card>
        </Container>
      </section>

      <FAQ items={aboutFaqs} />
      <FinalCTA sectionName="about_final_cta" />
    </>
  );
}
