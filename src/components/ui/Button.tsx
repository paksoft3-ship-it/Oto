"use client";

import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

import { trackEvent } from "@/lib/tracking";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  trackingEvent?: string;
  trackingParams?: Record<string, unknown>;
};

const styles = {
  primary:
    "bg-accent text-white hover:bg-red-700 focus-visible:ring-accent/60",
  secondary:
    "border border-white/15 bg-white/5 text-white hover:bg-white/10 focus-visible:ring-white/30",
  ghost:
    "border border-metal bg-transparent text-soft hover:border-white/30 hover:text-white focus-visible:ring-white/30"
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external,
  ariaLabel,
  trackingEvent,
  trackingParams
}: ButtonProps) {
  const baseClassName = clsx(
    "inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] whitespace-nowrap transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
    styles[variant],
    className
  );

  const handleClick = () => {
    if (trackingEvent) {
      trackEvent(trackingEvent, trackingParams);
    }
    onClick?.();
  };

  if (href) {
    const isExternalLike =
      external ||
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");

    if (isExternalLike) {
      return (
        <a
          href={href}
          className={baseClassName}
          target="_blank"
          rel="noreferrer"
          aria-label={ariaLabel}
          onClick={handleClick}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={baseClassName} aria-label={ariaLabel} onClick={handleClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={baseClassName} aria-label={ariaLabel} onClick={handleClick}>
      {children}
    </button>
  );
}
