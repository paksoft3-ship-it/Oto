import type { MetadataRoute } from "next";

import { blogPosts } from "@/data/blog";
import { brands } from "@/data/brands";
import { services } from "@/data/services";
import { getBaseUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/hakkimizda`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/hizmetler`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/724-yol-yardim`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/iletisim`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/bolgeler/nilufer-oto-tamir`, lastModified: now, changeFrequency: "monthly", priority: 0.8 }
  ];

  return [
    ...routes,
    ...services.map((service) => ({
      url: `${baseUrl}/hizmetler/${service.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8
    })),
    ...brands.map((brand) => ({
      url: `${baseUrl}/markalar/${brand.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7
    })),
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: "monthly" as const,
      priority: 0.6
    }))
  ];
}
