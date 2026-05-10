import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

const items = [
  {
    title: "SEO ve reklam odaklı net CTA yapısı",
    text: "Telefon, WhatsApp ve yol tarifi aksiyonları sayfa boyunca görünür tutulur."
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
    <section className="py-16 sm:py-20">
      <Container>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-white">Neden ERZ GARAGE?</h2>
          <p className="mt-3 max-w-3xl text-soft">
            Bursa Nilüfer oto servis arayan kullanıcıların güven aradığı üç ana noktaya odaklanıyoruz: doğru yönlendirme,
            hızlı iletişim ve premium araç bilgisi.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-soft">{item.text}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
