import type { Metadata } from "next";

import { siteConfig } from "@/data/site";

export const getBaseUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL || "https://erzgaragebursa.com";

export const absoluteUrl = (path: string) => {
  const baseUrl = getBaseUrl();
  return new URL(path, baseUrl).toString();
};

type SeoInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export const buildMetadata = ({ title, description, path, image }: SeoInput): Metadata => {
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(image || siteConfig.defaultOgImage);

  return {
    title,
    description,
    alternates: {
      canonical
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: siteConfig.name,
      locale: "tr_TR",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
};

export const buildBreadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path)
  }))
});

export const buildFaqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
});

export const autoRepairSchema = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: siteConfig.name,
  description: siteConfig.description,
  telephone: siteConfig.phoneE164,
  priceRange: siteConfig.priceRange,
  areaServed: siteConfig.areaServed,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bursa Nilüfer",
    addressLocality: "Bursa",
    addressRegion: "Bursa",
    addressCountry: "TR"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteConfig.geo.latitude,
    longitude: siteConfig.geo.longitude
  },
  openingHours: siteConfig.openingHours,
  sameAs: siteConfig.sameAs,
  serviceType: siteConfig.schemaServices
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: getBaseUrl(),
  description: siteConfig.description,
  inLanguage: "tr-TR"
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: getBaseUrl(),
  telephone: siteConfig.phoneE164,
  sameAs: siteConfig.sameAs
};
