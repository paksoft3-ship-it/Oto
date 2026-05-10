"use client";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 p-3 backdrop-blur lg:hidden">
      <div className="grid grid-cols-2 gap-3">
        <Button
          href={siteConfig.phoneLink}
          className="w-full"
          ariaLabel="Mobil hemen ara"
          trackingEvent="phone_click"
          trackingParams={{ location: "mobile_sticky", phone: siteConfig.phoneDigits }}
        >
          Hemen Ara
        </Button>
        <Button
          href={siteConfig.whatsappUrl}
          external
          variant="secondary"
          className="w-full"
          ariaLabel="Mobil WhatsApp"
          trackingEvent="whatsapp_click"
          trackingParams={{ location: "mobile_sticky", phone: siteConfig.phoneDigits }}
        >
          WhatsApp
        </Button>
      </div>
    </div>
  );
}
