import type { Metadata } from "next";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileStickyCTA } from "@/components/layout/MobileStickyCTA";
import { GTM } from "@/components/seo/GTM";
import { JsonLd } from "@/components/seo/JsonLd";
import { autoRepairSchema, getBaseUrl, organizationSchema, websiteSchema } from "@/lib/seo";
import { siteConfig } from "@/data/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: siteConfig.name,
  description: siteConfig.description
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="tr">
      <body>
        <a href="#main-content" className="skip-link">
          İçeriğe geç
        </a>
        <GTM gtmId={gtmId} />
        <JsonLd data={[autoRepairSchema, websiteSchema, organizationSchema]} />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
