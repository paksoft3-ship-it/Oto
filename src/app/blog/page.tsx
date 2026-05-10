import Link from "next/link";
import Image from "next/image";

import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { blogPosts } from "@/data/blog";
import { buildBreadcrumbSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Oto Bakım ve Arıza Rehberi | ERZ GARAGE Bursa Nilüfer",
  description:
    "ERZ GARAGE blog sayfasında oto bakım, arıza tespit, fren, akü ve premium araç servis rehberlerini inceleyin.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <>
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: "Anasayfa", path: "/" },
          { name: "Blog", path: "/blog" }
        ])}
      />
      <PageHero
        eyebrow="Teknik rehber"
        title="Oto Bakım ve Arıza Rehberi"
        image="/images/blog-main.png"
        description="Bursa Nilüfer oto servis ve bakım süreçleri hakkında profesyonel, yerel ve anlaşılır içerikleri burada bulabilirsiniz."
      />
      <section className="bg-ink py-20 sm:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden">
                <div className="relative h-48 w-full border-b border-white/10 bg-graphite">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-soft">{post.category}</p>
                <h2 className="mt-3 text-2xl font-semibold text-white">{post.title}</h2>
                <p className="mt-3 text-sm leading-7 text-soft">{post.excerpt}</p>
                <p className="mt-4 text-sm text-soft">
                  {post.publishedDate} • {post.readingTime}
                </p>
                  <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex text-sm font-medium text-white underline-offset-4 hover:underline">
                    Devamını Oku
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
      <FinalCTA sectionName="blog_listing_final_cta" />
    </>
  );
}
