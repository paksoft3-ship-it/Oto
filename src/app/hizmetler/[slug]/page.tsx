import Link from "next/link";
import { notFound } from "next/navigation";

import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
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
      <PageHero eyebrow="Teknik hizmet" title={service.h1} image={service.image} description={service.intro}>
        <nav className="text-sm font-semibold uppercase tracking-[0.12em] text-soft">
          <Link href="/" className="hover:text-white">
            Anasayfa
          </Link>{" "}
          /{" "}
          <Link href="/hizmetler" className="hover:text-white">
            Hizmetler
          </Link>{" "}
          / <span className="text-white">{service.shortTitle}</span>
        </nav>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button
            href={siteConfig.phoneLink}
            trackingEvent="phone_click"
            trackingParams={{ location: `service_${service.slug}_hero`, phone: siteConfig.phoneDigits }}
          >
            Hemen Ara
          </Button>
          <Button
            href={siteConfig.whatsappUrl}
            external
            variant="secondary"
            trackingEvent="whatsapp_click"
            trackingParams={{ location: `service_${service.slug}_hero`, phone: siteConfig.phoneDigits }}
          >
            WhatsApp’tan Yaz
          </Button>
        </div>
      </PageHero>

      <section className="bg-ink py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.72fr_0.28fr]">
          <div>
            <span className="section-kicker">Servis kapsamı</span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Hizmet açıklaması</h2>
            <div className="prose-content mt-6 space-y-4 text-lg leading-8 text-soft">
              {service.overview.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-black text-white">Servis süreci</h2>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {service.process.map((step, index) => (
                  <Card key={step} className="p-6">
                    <div className="mb-5 font-mono text-xs text-accent-soft">STEP {String(index + 1).padStart(2, "0")}</div>
                    <h3 className="text-lg font-black text-white">{step}</h3>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <Card className="p-6">
              <h2 className="text-xl font-black text-white">Ne zaman gerekir?</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {service.symptoms.map((symptom) => (
                  <span key={symptom} className="border border-metal bg-ink px-3 py-2 text-sm text-soft">
                    {symptom}
                  </span>
                ))}
              </div>
            </Card>
            <Card className="p-6">
              <h2 className="text-xl font-black text-white">Neden ERZ GARAGE?</h2>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-soft">
                {service.whyChooseUs.map((item) => (
                  <li key={item} className="border-b border-white/10 pb-4 last:border-none last:pb-0">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </aside>
        </Container>
      </section>

      {related.length ? (
        <section className="border-y border-metal bg-surface-low py-20 sm:py-28">
          <Container>
            <span className="section-kicker">Bağlantılı servisler</span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">İlgili hizmetler</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item, index) => (
                <Card key={item.slug} className="p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-2xl text-accent">{["⌕", "⚙", "⌁"][index]}</span>
                    <span className="font-mono text-xs text-soft/60">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="text-xl font-black text-white">{item.shortTitle}</h3>
                  <p className="mt-3 text-sm leading-7 text-soft">{item.intro}</p>
                  <Link href={`/hizmetler/${item.slug}`} className="mt-5 inline-flex text-xs font-black uppercase tracking-[0.12em] text-accent underline-offset-4 hover:underline">
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
