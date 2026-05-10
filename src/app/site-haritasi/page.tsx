import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/data/blog";
import { brands } from "@/data/brands";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Site Haritası | ERZ GARAGE Bursa Nilüfer",
  description:
    "ERZ GARAGE Bursa Nilüfer site haritası. Hizmetler, markalar, blog yazıları, iletişim ve yol yardım sayfalarına hızlı erişim.",
  path: "/site-haritasi"
});

const staticLinks = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "7/24 Yol Yardım", href: "/724-yol-yardim" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
  { label: "Nilüfer Oto Tamir", href: "/bolgeler/nilufer-oto-tamir" },
  { label: "XML Sitemap", href: "/sitemap.xml" }
];

export default function SiteMapPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "Site Haritası", path: "/site-haritasi" }
        ])}
      />
      <PageHero
        eyebrow="Site navigasyonu"
        title="Site Haritası"
        image="/images/hero-garage.png"
        description={`${siteConfig.name} sayfalarına, hizmet detaylarına, marka sayfalarına ve blog rehberlerine hızlı erişim.`}
      />
      <section className="bg-ink py-20 sm:py-28">
        <Container className="grid gap-6 lg:grid-cols-2">
          <SitemapGroup title="Ana Sayfalar" links={staticLinks} />
          <SitemapGroup
            title="Hizmetler"
            links={services.map((service) => ({
              label: service.shortTitle,
              href: `/hizmetler/${service.slug}`
            }))}
          />
          <SitemapGroup
            title="Markalar"
            links={brands.map((brand) => ({
              label: brand.h1,
              href: `/markalar/${brand.slug}`
            }))}
          />
          <SitemapGroup
            title="Blog"
            links={blogPosts.map((post) => ({
              label: post.title,
              href: `/blog/${post.slug}`
            }))}
          />
        </Container>
      </section>
    </>
  );
}

function SitemapGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <Card className="p-7">
      <h2 className="text-2xl font-black text-white">{title}</h2>
      <ul className="mt-6 grid gap-3 text-sm text-soft sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
