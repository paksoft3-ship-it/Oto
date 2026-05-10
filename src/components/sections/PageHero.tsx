import Image from "next/image";
import { ReactNode } from "react";

import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, description, image, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[520px] overflow-hidden border-b border-accent/20 bg-ink sm:min-h-[620px]">
      <Image src={image} alt={title} fill className="object-cover" priority sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="absolute inset-0 bg-garage-grid bg-[size:40px_40px] opacity-[0.10]" />
      <Container className="relative flex min-h-[520px] items-center py-20 sm:min-h-[620px]">
        <div className="max-w-4xl">
          <span className="section-kicker">{eyebrow}</span>
          <h1 className="mt-5 text-4xl font-black leading-[1.08] text-white sm:text-6xl">{title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-soft">{description}</p>
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
