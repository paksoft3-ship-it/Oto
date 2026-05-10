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
  const titleParts = title.split(/(Tamir|Bakım)/g);

  return (
    <section className="relative min-h-[690px] overflow-hidden border-b border-accent/20 bg-ink sm:min-h-[760px] lg:min-h-[820px]">
      <Image
        src="/images/hero-garage.png"
        alt="ERZ GARAGE Bursa Nilüfer premium oto servis atölyesi"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
      <div className="absolute inset-0 bg-garage-grid bg-[size:40px_40px] opacity-[0.12]" />
      <Container className="relative flex min-h-[690px] items-center py-20 sm:min-h-[760px] lg:min-h-[820px]">
        <div className="max-w-3xl">
          <span className="section-kicker">
            {locationLabel}
          </span>
          <h1 className="mt-6 text-4xl font-black leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            {titleParts.map((part, index) =>
              part === "Tamir" || part === "Bakım" ? (
                <span key={`${part}-${index}`} className="text-accent">
                  {part}
                </span>
              ) : (
                <span key={`${part}-${index}`}>{part}</span>
              )
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-soft sm:text-xl">{description}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button
              href={siteConfig.phoneLink}
              ariaLabel="Hero hemen ara"
              trackingEvent="phone_click"
              trackingParams={{ location: "hero", phone: siteConfig.phoneDigits }}
            >
              Hemen Ara: {siteConfig.phoneDisplay}
            </Button>
            <Button
              href={siteConfig.whatsappUrl}
              external
              variant="secondary"
              ariaLabel="Hero WhatsApp"
              trackingEvent="whatsapp_click"
              trackingParams={{ location: "hero", phone: siteConfig.phoneDigits }}
            >
              WhatsApp’tan Yaz
            </Button>
            <Button
              href={siteConfig.directionsUrl}
              external
              variant="ghost"
              ariaLabel="Hero yol tarifi"
              trackingEvent="directions_click"
              trackingParams={{ location: "hero" }}
            >
              Yol Tarifi Al
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-6">
            {["BMW • Mercedes • Audi", "Arıza Tespit", "Periyodik Bakım", "7/24 Yol Yardım", "Bursa Nilüfer"].map(
              (item) => (
                <span
                  key={item}
                  className="border border-white/10 bg-surface-mid/80 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-soft shadow-panel"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
