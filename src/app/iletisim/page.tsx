import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { contactFaqs } from "@/data/faqs";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { buildBreadcrumbSchema, buildFaqSchema, buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "ERZ GARAGE İletişim | Bursa Nilüfer Oto Servis",
  description:
    "ERZ GARAGE iletişim sayfası. Bursa Nilüfer oto servis, 7/24 yol yardım, WhatsApp, telefon ve konum bilgilerine ulaşın.",
  path: "/iletisim"
});

export default function ContactPage() {
  const contactCards = [
    {
      title: "Telefon",
      text: "Hızlı destek için bizi arayın.",
      action: siteConfig.phoneDisplay,
      href: siteConfig.phoneLink,
      event: "phone_click",
      tone: "accent"
    },
    {
      title: "WhatsApp",
      text: "Mesaj atarak randevu veya servis bilgisi alın.",
      action: "Mesaj Gönder",
      href: siteConfig.whatsappUrl,
      event: "whatsapp_click",
      tone: "whatsapp"
    },
    {
      title: "Konum",
      text: "Bursa Nilüfer servis konumu için yol tarifi alın.",
      action: "Yol Tarifi Al",
      href: siteConfig.directionsUrl,
      event: "directions_click",
      tone: "accent"
    },
    {
      title: "7/24 Yol Yardım",
      text: "Acil durumlarda hızlı iletişim kurun.",
      action: "Acil Destek İste",
      href: "/724-yol-yardim",
      event: "",
      tone: "emergency"
    }
  ];

  return (
    <>
      <JsonLd
        data={[
          buildBreadcrumbSchema([
            { name: "Anasayfa", path: "/" },
            { name: "İletişim", path: "/iletisim" }
          ]),
          buildFaqSchema(contactFaqs)
        ]}
      />
      <PageHero
        eyebrow="Servis talebi"
        title="İletişim"
        image="/images/iletisim.png"
        description="Bursa Nilüfer oto servis, arıza tespit, bakım ve 7/24 yol yardım için bize telefon, WhatsApp veya form üzerinden ulaşabilirsiniz."
      />
      <section className="bg-ink py-20 sm:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((item, index) => {
              const isExternal = item.href.startsWith("http");
              return (
                <Card
                  key={item.title}
                  className={
                    item.tone === "emergency"
                      ? "relative overflow-hidden border-accent/60 bg-accent/10 p-7"
                      : "p-7"
                  }
                >
                  {item.tone === "emergency" ? (
                    <div className="absolute right-0 top-0 h-20 w-20 rounded-bl-full bg-accent/15" />
                  ) : null}
                  <div className={item.tone === "whatsapp" ? "mb-7 text-3xl text-[#25D366]" : "mb-7 text-3xl text-accent-soft"}>
                    {["☎", "▣", "⌖", "✚"][index]}
                  </div>
                  <h2 className={item.tone === "emergency" ? "text-2xl font-black text-accent-soft" : "text-2xl font-black text-white"}>
                    {item.title}
                  </h2>
                  <p className="mt-3 min-h-14 text-base leading-7 text-soft">{item.text}</p>
                  <Button
                    href={item.href}
                    external={isExternal}
                    variant={item.tone === "emergency" ? "primary" : "ghost"}
                    className="mt-7 w-full"
                    trackingEvent={item.event || undefined}
                    trackingParams={
                      item.event === "phone_click" || item.event === "whatsapp_click"
                        ? { location: "contact_card", phone: siteConfig.phoneDigits }
                        : item.event === "directions_click"
                          ? { location: "contact_card" }
                          : undefined
                    }
                  >
                    {item.action}
                  </Button>
                </Card>
              );
            })}
          </div>
          <div className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-8">
            {services.slice(0, 8).map((service) => (
              <span key={service.slug} className="border border-metal bg-surface-mid px-3 py-2 text-sm font-semibold text-white">
                {service.shortTitle}
              </span>
            ))}
          </div>
        </Container>
      </section>
      <section className="border-y border-metal bg-surface-low py-20 sm:py-28">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <span className="section-kicker">Konum ve talep</span>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Harita ve servis talebi</h2>
            <div className="relative mt-8 min-h-[500px] overflow-hidden border border-metal bg-ink">
            <iframe
              src="https://www.google.com/maps?q=40.20077325097891,28.939575028835023&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
              title="ERZ GARAGE Google Maps Konumu"
            />
              <div className="pointer-events-none absolute bottom-6 left-6 right-6 border border-metal bg-ink/85 p-5 backdrop-blur">
                <div className="font-mono text-sm font-bold uppercase tracking-[0.12em] text-white">ERZ GARAGE</div>
                <div className="mt-1 text-sm text-soft">Nilüfer, Bursa</div>
              </div>
            </div>
          </div>
          <Card className="p-7 sm:p-8">
            <h2 className="text-3xl font-black text-white">Servis Talebi</h2>
            <p className="mt-3 text-sm leading-7 text-soft">
              Aracınızla ilgili talebi kısa şekilde iletin; uygun servis yönlendirmesi için sizi arayalım.
            </p>
            <div className="mt-7">
              <ContactForm />
            </div>
          </Card>
        </Container>
      </section>
      <FAQ items={contactFaqs} />
      <FinalCTA sectionName="contact_final_cta" />
    </>
  );
}
