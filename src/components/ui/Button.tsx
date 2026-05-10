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
    "bg-accent text-white shadow-red hover:bg-red-700 focus-visible:ring-accent/60",
  secondary:
    "border-2 border-metal bg-transparent text-white hover:border-accent hover:text-white focus-visible:ring-white/30",
  ghost:
    "border border-white/10 bg-surface-mid/70 text-soft hover:border-white/30 hover:text-white focus-visible:ring-white/30"
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
    "inline-flex min-h-12 items-center justify-center gap-2 px-6 py-4 text-xs font-extrabold uppercase tracking-[0.12em] whitespace-nowrap transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
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
