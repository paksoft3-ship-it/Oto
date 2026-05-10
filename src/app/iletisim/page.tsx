import Image from "next/image";

import { ContactForm } from "@/components/sections/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
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
      <section className="border-b border-white/10 bg-graphite py-16 sm:py-24">
        <Container>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">İletişim</h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-soft">
            Bursa Nilüfer oto servis, arıza tespit, bakım ve 7/24 yol yardım için bize telefon, WhatsApp veya form
            üzerinden ulaşabilirsiniz.
          </p>
        </Container>
      </section>
      <section className="py-16 sm:py-20">
        <Container className="grid gap-6 lg:grid-cols-[0.48fr_0.52fr]">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">İletişim bilgileri</h2>
            <div className="mt-5 space-y-3 text-soft">
              <p>Telefon: {siteConfig.phoneDisplay}</p>
              <p>WhatsApp: hızlı mesaj ve araç bilgisi paylaşımı</p>
              <p>Konum: {siteConfig.location}</p>
              <p>7/24 yol yardım: acil durumda doğrudan arayın</p>
            </div>
            <div className="mt-6 flex flex-col gap-3">
              <Button
                href={siteConfig.phoneLink}
                trackingEvent="phone_click"
                trackingParams={{ location: "contact_page", phone: siteConfig.phoneDigits }}
              >
                Hemen Ara
              </Button>
              <Button
                href={siteConfig.whatsappUrl}
                external
                variant="secondary"
                trackingEvent="whatsapp_click"
                trackingParams={{ location: "contact_page", phone: siteConfig.phoneDigits }}
              >
                WhatsApp’tan Yaz
              </Button>
              <Button
                href={siteConfig.directionsUrl}
                external
                variant="ghost"
                trackingEvent="directions_click"
                trackingParams={{ location: "contact_page" }}
              >
                Yol Tarifi Al
              </Button>
            </div>
            <h2 className="mt-10 text-2xl font-semibold text-white">Hızlı hizmet linkleri</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {services.slice(0, 6).map((service) => (
                <span key={service.slug} className="border border-white/10 px-3 py-2 text-sm text-white">
                  {service.shortTitle}
                </span>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-white">Servis Talep Formu</h2>
            <p className="mt-3 text-sm leading-7 text-soft">
              Form yapısı, gelecekte API entegrasyonu eklenebilecek şekilde hazırlanmıştır.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Card>
        </Container>
      </section>
      <section className="border-y border-white/10 bg-graphite py-16 sm:py-20">
        <Container>
          <h2 className="text-3xl font-semibold text-white">Konum ve harita</h2>
          <div className="relative mt-8 min-h-[400px] border border-white/10 overflow-hidden">
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
          </div>
        </Container>
      </section>
      <FAQ items={contactFaqs} />
      <FinalCTA sectionName="contact_final_cta" />
    </>
  );
}
