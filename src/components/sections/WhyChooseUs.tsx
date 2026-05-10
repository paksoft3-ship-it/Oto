import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const items = [
  {
    title: "Hızlı ve net iletişim",
    text: "Aracınızla ilgili sorunu hızlıca dinler, telefon veya WhatsApp üzerinden sizi doğru servis adımına yönlendiririz."
  },
  {
    title: "Premium Avrupa araçlarına uygun içerik",
    text: "BMW özel servis Bursa, Mercedes özel servis Bursa ve Audi özel servis Bursa aramalarına doğal şekilde hitap eder."
  },
  {
    title: "Teknik servis yaklaşımı",
    text: "Arıza tespit, bakım ve onarım başlıkları birbiriyle bağlantılı şekilde ele alınır."
  }
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 sm:py-28">
      <Container>
        <div className="mb-10">
          <span className="section-kicker">Servis standardı</span>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">Neden ERZ GARAGE?</h2>
          <p className="mt-4 max-w-3xl leading-7 text-soft">
            Bursa Nilüfer oto servis arayan kullanıcıların güven aradığı üç ana noktaya odaklanıyoruz: doğru yönlendirme,
            hızlı iletişim ve premium araç bilgisi.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-xl font-black text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-soft">{item.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
