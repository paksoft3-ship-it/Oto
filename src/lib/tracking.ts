"use client";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export const trackEvent = (eventName: string, params: Record<string, unknown> = {}) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...params
  });
};

// `phone_click` can be mapped in GTM to a Google Ads phone conversion.
// `whatsapp_click` can be mapped in GTM to a lead conversion.
// `directions_click` can be mapped in GTM to a local intent conversion.
// `form_submit_attempt` can be mapped in GTM to a lead form conversion.
