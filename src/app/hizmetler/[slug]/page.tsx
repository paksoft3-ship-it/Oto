import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { services, servicesBySlug } from "@/data/services";
import { siteConfig } from "@/data/site";
import { absoluteUrl, buildBreadcrumbSchema, buildFaqSchema, buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicesBySlug[slug];

  if (!service) {
    return buildMetadata({
      title: siteConfig.name,
      description: siteConfig.description,
      path: `/hizmetler/${slug}`
    });
  }

  return buildMetadata({
    title: service.seoTitle,
    description: service.metaDescription,
    path: `/hizmetler/${service.slug}`
  });
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesBySlug[slug];
  if (!service) notFound();

  const related = service.relatedServices.map((item) => servicesBySlug[item]).filter(Boolean);
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Anasayfa", path: "/" },
    { name: "Hizmetler", path: "/hizmetler" },
    { name: service.shortTitle, path: `/hizmetler/${service.slug}` }
  ]);
  const faqSchema = buildFaqSchema(service.faqs);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    description: service.metaDescription,
    provider: {
      "@type": "AutoRepair",
      name: siteConfig.name,
      telephone: siteConfig.phoneE164
    },
    areaServed: siteConfig.areaServed,
    url: absoluteUrl(`/hizmetler/${service.slug}`)
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
              /{" "}
              <Link href="/hizmetler" className="hover:text-white">
                Hizmetler
              </Link>{" "}
              / <span className="text-white">{service.shortTitle}</span>
            </nav>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">{service.h1}</h1>
            <p className="mt-6 text-lg leading-8 text-soft">{service.intro}</p>
          </div>
          <div className="relative min-h-[300px] w-full border border-white/10 lg:min-h-[400px]">
            <Image src={service.image} alt={service.h1} fill className="object-cover" priority />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-2">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Hizmet açıklaması</h2>
            <div className="prose-content mt-4 space-y-4 text-soft">
              {service.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Ne zaman gerekir?</h2>
            <ul className="mt-4 space-y-3 text-soft">
              {service.symptoms.map((symptom) => (
                <li key={symptom}>{symptom}</li>
              ))}
            </ul>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Servis süreci</h2>
            <ol className="mt-4 space-y-3 text-soft">
              {service.process.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Neden ERZ GARAGE?</h2>
            <ul className="mt-4 space-y-3 text-soft">
              {service.whyChooseUs.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
        </Container>
      </section>

      {related.length ? (
        <section className="border-y border-white/10 bg-graphite py-16 sm:py-20">
          <Container>
            <h2 className="text-3xl font-semibold text-white">İlgili hizmetler</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <Card key={item.slug} className="p-6">
                  <h3 className="text-xl font-semibold text-white">{item.shortTitle}</h3>
                  <p className="mt-3 text-sm leading-7 text-soft">{item.intro}</p>
                  <Link href={`/hizmetler/${item.slug}`} className="mt-5 inline-flex text-sm font-medium text-white underline-offset-4 hover:underline">
                    İncele
                  </Link>
                </Card>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <FAQ items={service.faqs} />
      <FinalCTA sectionName={`service_${service.slug}_final_cta`} />
    </>
  );
}
