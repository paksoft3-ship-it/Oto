import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
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
      <section className="border-b border-white/10 bg-graphite py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <nav className="mb-6 text-sm text-soft">
              <Link href="/" className="hover:text-white">
                Anasayfa
              </Link>{" "}
              / <span className="text-white">{brand.brandName} Özel Servis</span>
            </nav>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">{brand.h1}</h1>
            <p className="mt-6 text-lg leading-8 text-soft">{brand.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
          </div>
          <div className="relative min-h-[300px] w-full border border-white/10 lg:min-h-[400px]">
            <Image src={brand.image} alt={brand.h1} fill className="object-cover" priority />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">{brand.brandName} için öne çıkan hizmetler</h2>
            <ul className="mt-4 space-y-3 text-soft">
              {brand.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Sık görülen ihtiyaçlar</h2>
            <ul className="mt-4 space-y-3 text-soft">
              {brand.commonProblems.map((problem) => (
                <li key={problem}>{problem}</li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-graphite py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl font-semibold text-white">Neden ERZ GARAGE?</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {brand.whyChooseUs.map((item) => (
              <Card key={item} className="p-6">
                <h3 className="text-lg font-semibold text-white">{brand.brandName}</h3>
                <p className="mt-3 text-sm leading-7 text-soft">{item}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <FAQ items={brand.faqs} />
      <FinalCTA sectionName={`brand_${brand.slug}_final_cta`} />
    </>
  );
}
