import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { JsonLd } from "@/components/seo/JsonLd";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { blogBySlug, blogPosts } from "@/data/blog";
import { servicesBySlug } from "@/data/services";
import { absoluteUrl, buildBreadcrumbSchema, buildFaqSchema, buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = blogBySlug[slug];

  if (!post) {
    return buildMetadata({
      title: siteConfig.name,
      description: siteConfig.description,
      path: `/blog/${slug}`
    });
  }

  return buildMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`
  });
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = blogBySlug[slug];
  if (!post) notFound();

  const breadcrumb = buildBreadcrumbSchema([
    { name: "Anasayfa", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` }
  ]);
  const faqSchema = buildFaqSchema(post.faqs);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    author: {
      "@type": "Organization",
      name: siteConfig.name
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`)
  };

  return (
    <>
      <JsonLd data={[breadcrumb, faqSchema, articleSchema]} />
      <section className="border-b border-white/10 bg-graphite py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1fr_1fr] items-center">
          <div>
            <nav className="mb-6 text-sm text-soft">
              <Link href="/" className="hover:text-white">
                Anasayfa
              </Link>{" "}
              /{" "}
              <Link href="/blog" className="hover:text-white">
                Blog
              </Link>{" "}
              / <span className="text-white">{post.category}</span>
            </nav>
            <p className="text-xs uppercase tracking-[0.18em] text-soft">{post.category}</p>
            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">{post.title}</h1>
            <p className="mt-4 text-sm text-soft">
              {post.publishedDate} • {post.readingTime}
            </p>
          </div>
          <div className="relative min-h-[300px] w-full border border-white/10 lg:min-h-[400px]">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="grid gap-8 lg:grid-cols-[0.72fr_0.28fr]">
          <article className="space-y-8">
            {post.sections.map((section, index) => (
              <section key={section.heading} id={`section-${index + 1}`}>
                <h2 className="text-2xl font-semibold text-white">{section.heading}</h2>
                <div className="prose-content mt-4 space-y-4 text-base leading-8 text-soft">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.bullets ? (
                    <ul>
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </section>
            ))}
          </article>
          <aside className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white">İçindekiler</h2>
              <ul className="mt-4 space-y-3 text-sm text-soft">
                {post.sections.map((section, index) => (
                  <li key={section.heading}>
                    <a href={`#section-${index + 1}`} className="hover:text-white">
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="p-6">
              <h2 className="text-xl font-semibold text-white">İlgili hizmetler</h2>
              <div className="mt-4 space-y-3">
                {post.relatedServices.map((slugItem) => {
                  const service = servicesBySlug[slugItem];
                  if (!service) return null;
                  return (
                    <Link key={service.slug} href={`/hizmetler/${service.slug}`} className="block text-sm text-soft hover:text-white">
                      {service.shortTitle}
                    </Link>
                  );
                })}
              </div>
            </Card>
          </aside>
        </Container>
      </section>
      <FAQ items={post.faqs} />
      <FinalCTA sectionName={`blog_${post.slug}_final_cta`} />
    </>
  );
}
