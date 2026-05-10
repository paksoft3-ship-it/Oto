"use client";

import { FormEvent, useState } from "react";

import { services } from "@/data/services";
import { trackEvent } from "@/lib/tracking";

export function ContactForm() {
  const [status, setStatus] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    trackEvent("form_submit_attempt", { form_name: "contact_form" });
    setStatus("Talebiniz için teşekkür ederiz. Ekibimiz en kısa sürede sizinle iletişime geçecektir.");
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-white">
          Ad Soyad
        </label>
        <input id="fullName" name="fullName" className="w-full border border-white/10 bg-ink px-4 py-3 text-white outline-none focus:border-accent" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-white">
          Telefon
        </label>
        <input id="phone" name="phone" className="w-full border border-white/10 bg-ink px-4 py-3 text-white outline-none focus:border-accent" />
      </div>
      <div>
        <label htmlFor="brand" className="mb-2 block text-sm font-medium text-white">
          Araç Markası
        </label>
        <input id="brand" name="brand" className="w-full border border-white/10 bg-ink px-4 py-3 text-white outline-none focus:border-accent" />
      </div>
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-white">
          Hizmet Seçimi
        </label>
        <select id="service" name="service" className="w-full border border-white/10 bg-ink px-4 py-3 text-white outline-none focus:border-accent">
          <option>Hizmet seçin</option>
          {services.map((service) => (
            <option key={service.slug} value={service.slug}>
              {service.shortTitle}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
          Mesaj
        </label>
        <textarea id="message" name="message" rows={5} className="w-full border border-white/10 bg-ink px-4 py-3 text-white outline-none focus:border-accent" />
      </div>
      <button
        type="submit"
        className="inline-flex min-h-11 items-center justify-center bg-accent px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white"
      >
        Mesaj Gönder
      </button>
      {status ? <p className="text-sm text-soft">{status}</p> : null}
    </form>
  );
}
