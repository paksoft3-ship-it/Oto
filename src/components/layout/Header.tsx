"use client";

import Link from "next/link";
import { useState } from "react";
import clsx from "clsx";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur shadow-header">
      <div className="mx-auto flex max-w-shell items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="ERZ GARAGE anasayfa">
          <div className="text-lg font-semibold tracking-[0.18em] text-white">{siteConfig.shortName}</div>
          <div className="text-xs uppercase tracking-[0.28em] text-soft">{siteConfig.subtitle}</div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Masaüstü menü">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-soft transition hover:text-white focus:outline-none focus-visible:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            href={siteConfig.phoneLink}
            ariaLabel="Hemen ara"
            trackingEvent="phone_click"
            trackingParams={{ location: "header", phone: siteConfig.phoneDigits }}
          >
            Hemen Ara
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center border border-white/10 text-white lg:hidden"
          aria-label="Menüyü aç"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="text-xl">{open ? "×" : "☰"}</span>
        </button>
      </div>

      <div className={clsx("border-t border-white/10 lg:hidden", open ? "block" : "hidden")}>
        <nav className="mx-auto flex max-w-shell flex-col px-4 py-4 sm:px-6" aria-label="Mobil menü">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-white/5 py-3 text-sm text-soft transition hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4">
            <Button
              href={siteConfig.phoneLink}
              className="w-full"
              ariaLabel="Mobil menüden hemen ara"
              trackingEvent="phone_click"
              trackingParams={{ location: "mobile_menu", phone: siteConfig.phoneDigits }}
            >
              Hemen Ara
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
