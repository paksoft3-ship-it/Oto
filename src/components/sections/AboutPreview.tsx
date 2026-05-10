import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";

export function AboutPreview() {
  return (
    <section className="border-y border-metal bg-surface-low py-20 sm:py-28">
      <Container className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <span className="section-kicker">Atölye yaklaşımı</span>
          <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">ERZ GARAGE Bursa Nilüfer</h2>
          <p className="mt-4 text-base leading-8 text-soft">
            BMW, Mercedes ve Audi başta olmak üzere premium Avrupa araçları için arıza tespit, bakım ve onarım
            süreçlerinde güvenilir iletişim odaklı hizmet sunuyoruz.
          </p>
          <p className="mt-4 text-base leading-8 text-soft">
            Nilüfer oto tamir arayışında, sürücünün ihtiyacını doğru anlamak ve gereksiz işlem yerine net yönlendirme
            yapmak bizim için temel önceliktir.
          </p>
          <div className="mt-8">
            <Button href="/hakkimizda" variant="secondary">
              Hakkımızda
            </Button>
          </div>
        </div>
        <Card className="p-6">
          <h3 className="text-lg font-black text-white">Neden tercih ediliyor?</h3>
          <ul className="mt-4 space-y-4 text-sm leading-7 text-soft">
            {siteConfig.socialProofPoints.map((point) => (
              <li key={point} className="border-b border-white/5 pb-4 last:border-none last:pb-0">
                {point}
              </li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  );
}
