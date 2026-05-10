import Link from "next/link";
import Image from "next/image";

import { siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { brands } from "@/data/brands";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-accent/15 bg-[#070f17] pb-[calc(8rem+env(safe-area-inset-bottom))] pt-16 lg:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-4">
              <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border border-accent/35 bg-black shadow-red">
                <Image
                  src="/images/logo.jpg"
                  alt="ERZ GARAGE logo"
                  fill
                  sizes="64px"
                  className="object-cover"
                />
              </span>
              <h2 className="text-xl font-black text-white">{siteConfig.name}</h2>
            </div>
            <p className="mt-3 text-sm text-soft">{siteConfig.businessType}</p>
            <p className="mt-2 text-sm text-soft">{siteConfig.brands.slice(0, 3).join(" • ")}</p>
            <p className="mt-2 text-sm text-soft">Telefon: {siteConfig.phoneDisplay}</p>
            <p className="mt-2 text-sm text-soft">Konum: {siteConfig.subtitle}</p>
            <div className="mt-4 flex gap-4">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-soft hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white">Hızlı Linkler</h2>
            <ul className="mt-4 space-y-3 text-sm text-soft">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/site-haritasi" className="hover:text-white">
                  Site Haritası
                </Link>
              </li>
              <li>
                <Link href="/sitemap.xml" className="hover:text-white">
                  XML Sitemap
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white">Hizmetler</h2>
            <ul className="mt-4 space-y-3 text-sm text-soft">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/hizmetler/${service.slug}`} className="hover:text-white">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.18em] text-white">Markalar ve İletişim</h2>
            <ul className="mt-4 space-y-3 text-sm text-soft">
              {brands.map((brand) => (
                <li key={brand.slug}>
                  <Link href={`/markalar/${brand.slug}`} className="hover:text-white">
                    {brand.brandName}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-col gap-3">
              <Button
                href={siteConfig.phoneLink}
                ariaLabel="Footer hemen ara"
                trackingEvent="phone_click"
                trackingParams={{ location: "footer", phone: siteConfig.phoneDigits }}
              >
                Hemen Ara
              </Button>
              <Button
                href={siteConfig.whatsappUrl}
                external
                variant="secondary"
                ariaLabel="Footer WhatsApp"
                trackingEvent="whatsapp_click"
                trackingParams={{ location: "footer", phone: siteConfig.phoneDigits }}
              >
                WhatsApp’tan Yaz
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 grid grid-cols-1 gap-6 items-center sm:grid-cols-3">
          <p className="text-sm text-soft text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex justify-center">
            <a
              href="https://paksoft.com.tr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center"
            >
              <span className="mr-2 text-sm text-soft transition-colors group-hover:text-accent">
                Geliştiren
              </span>
              <div className="flex items-center text-accent transition-colors group-hover:opacity-80">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 -rotate-12">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.08-1.38-.7.13-1.42.21-2.16.21-5.52 0-10-4.48-10-10S9.42 2.83 14.92 2.83c.74 0 1.46.08 2.16.21C15.58 2.5 13.85 2 12 2z" />
                </svg>
                <span className="ml-1 text-lg font-bold tracking-wide">PakSoft</span>
              </div>
            </a>
          </div>
          <div className="hidden sm:block" />
        </div>
      </Container>
    </footer>
  );
}
