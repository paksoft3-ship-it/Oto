"use client";

import Link from "next/link";
import { ReactNode } from "react";

import { trackEvent } from "@/lib/tracking";

type TrackedLinkProps = {
  href: string;
  eventName: string;
  params?: Record<string, unknown>;
  className?: string;
  children: ReactNode;
};

export function TrackedLink({ href, eventName, params, className, children }: TrackedLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent(eventName, params)}
    >
      {children}
    </Link>
  );
}
