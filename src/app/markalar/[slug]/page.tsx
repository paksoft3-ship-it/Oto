import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { brands, brandsBySlug } from "@/data/brands";
import { siteConfig } from "@/data/site";
import { absoluteUrl, buildBreadcrumbSchema, buildFaqSchema, buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const brand = brandsBySlug[slug];

  if (!brand) {
    return buildMetadata({
      title: siteConfig.name,
      description: siteConfig.description,
      path: `/markalar/${slug}`
    });
  }

  return buildMetadata({
    title: brand.seoTitle,
    description: brand.metaDescription,
    path: `/markalar/${brand.slug}`
  });
}

export default async function BrandPage({ params }: Props) {
  const { slug } = await params;
  const brand = brandsBySlug[slug];
  if (!brand) notFound();

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Anasayfa", path: "/" },
    { name: "Markalar", path: "/markalar/bmw-ozel-servis-bursa" },
    { name: brand.brandName, path: `/markalar/${brand.slug}` }
  ]);
  const faqSchema = buildFaqSchema(brand.faqs);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: brand.h1,
    serviceType: `${brand.brandName} özel servis yaklaşımı`,
    description: brand.metaDescription,
    provider: {
      "@type": "AutoRepair",
      name: siteConfig.name,
      telephone: siteConfig.phoneE164
    },
    areaServed: siteConfig.areaServed,
    url: absoluteUrl(`/markalar/${brand.slug}`)
  };

  return (
    <>
      <JsonLd data={[breadcrumb, faqSchema, serviceSchema]} />
      <PageHero eyebrow="Premium marka servisi" title={brand.h1} image={brand.image} description={brand.intro}>
        <nav className="mb-6 text-sm font-semibold uppercase tracking-[0.12em] text-soft">
          <Link href="/" className="hover:text-white">
            Anasayfa
          </Link>{" "}
          / <span className="text-white">{brand.brandName} Özel Servis</span>
        </nav>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button
            href={siteConfig.phoneLink}
            trackingEvent="brand_page_cta_click"
            trackingParams={{ brand_name: brand.brandName, action_type: "phone" }}
          >
            Hemen Ara
          </Button>
          <Button
            href={siteConfig.whatsappUrl}
            external
            variant="secondary"
            trackingEvent="brand_page_cta_click"
            trackingParams={{ brand_name: brand.brandName, action_type: "whatsapp" }}
          >
            WhatsApp’tan Yaz
          </Button>
        </div>
      </PageHero>

      <section className="bg-ink py-20 sm:py-28">
        <Container>
          <span className="section-kicker">Marka servis kapsamı</span>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
            {brand.brandName} için öne çıkan hizmetler
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {brand.services.map((service, index) => (
              <Card key={service} className={index === 0 ? "p-7 md:col-span-2" : "p-7"}>
                <div className="mb-8 flex items-start justify-between">
                  <span className="text-3xl text-accent">{["⌕", "⚙", "⌁", "✚", "▤"][index % 5]}</span>
                  <span className="font-mono text-xs text-soft/60">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-black text-white">{service}</h3>
                <p className="mt-3 text-sm leading-7 text-soft">
                  {brand.brandName} araç karakterine uygun teknik kontrol ve servis yönlendirmesi.
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-metal bg-surface-low py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="section-kicker">Neden ERZ GARAGE?</span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
              {brand.brandName} araçlar için teknik hassasiyet
            </h2>
            <div className="mt-8 space-y-6">
              {brand.whyChooseUs.map((item) => (
                <div key={item} className="flex gap-4 border-b border-white/10 pb-5 last:border-none">
                  <span className="mt-1 text-accent">✚</span>
                  <p className="text-base leading-7 text-soft">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden border border-metal bg-ink">
            <Image src={brand.image} alt={`${brand.brandName} özel servis yaklaşımı`} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 font-mono text-xs uppercase tracking-[0.12em] text-soft">
              &gt; {brand.brandName}_service_protocol / diagnostic_active
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <Container>
          <div className="text-center">
            <span className="section-kicker justify-center">Yaygın ihtiyaçlar</span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Sık görülen servis başlıkları</h2>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {brand.commonProblems.map((problem) => (
              <div key={problem} className="border border-metal bg-surface-mid px-5 py-5 text-center text-sm font-semibold text-white">
                {problem}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ items={brand.faqs} />
      <FinalCTA sectionName={`brand_${brand.slug}_final_cta`} />
    </>
  );
}
