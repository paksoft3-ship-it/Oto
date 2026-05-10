import Image from "next/image";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

type HeroProps = {
  title: string;
  description: string;
  locationLabel?: string;
};

export function Hero({ title, description, locationLabel = "Bursa Nilüfer Oto Servis" }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink">
      <div className="absolute inset-0 bg-garage-grid bg-[size:36px_36px] opacity-20" />
      <Container className="relative grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <span className="inline-flex border border-accent/40 bg-accent/10 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
            {locationLabel}
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-soft">{description}</p>
          <div className="mt-8 flex flex-row flex-nowrap gap-2 sm:gap-3">
            <Button
              href={siteConfig.phoneLink}
              className="flex-1 px-2 text-[10px] sm:px-4 sm:text-xs md:text-sm"
              ariaLabel="Hero hemen ara"
              trackingEvent="phone_click"
              trackingParams={{ location: "hero", phone: siteConfig.phoneDigits }}
            >
              Ara: {siteConfig.phoneDisplay}
            </Button>
            <Button
              href={siteConfig.whatsappUrl}
              external
              variant="secondary"
              className="flex-1 px-2 text-[10px] sm:px-4 sm:text-xs md:text-sm"
              ariaLabel="Hero WhatsApp"
              trackingEvent="whatsapp_click"
              trackingParams={{ location: "hero", phone: siteConfig.phoneDigits }}
            >
              WhatsApp
            </Button>
            <Button
              href={siteConfig.directionsUrl}
              external
              variant="ghost"
              className="flex-1 px-2 text-[10px] sm:px-4 sm:text-xs md:text-sm"
              ariaLabel="Hero yol tarifi"
              trackingEvent="directions_click"
              trackingParams={{ location: "hero" }}
            >
              Yol Tarifi
            </Button>
          </div>
        </div>
        <div className="relative min-h-[320px] border border-white/10 bg-graphite">
          <Image
            src="/images/hero-garage.png"
            alt="ERZ GARAGE premium oto servis görseli"
            fill
            className="object-cover"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
