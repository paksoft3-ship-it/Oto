import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const problems = [
  "Arıza lambası yanıyor",
  "Frenlerden ses geliyor",
  "Araç geç çalışıyor",
  "Yağ bakım zamanı geldi",
  "Yolda kaldım"
];

export function ProblemCTA() {
  return (
    <section className="border-y border-white/10 bg-graphite py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-white">Sorun odaklı hızlı yönlendirme</h2>
            <p className="mt-4 text-base leading-8 text-soft">
              Sorunun tam adını bilmiyor olabilirsiniz. Belirtiyi paylaşın, uygun hizmet başlığına birlikte yönlendirelim.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {problems.map((problem) => (
              <div key={problem} className="border border-white/10 px-4 py-4 text-sm text-white">
                {problem}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            href={siteConfig.phoneLink}
            trackingEvent="phone_click"
            trackingParams={{ location: "problem_cta", phone: siteConfig.phoneDigits }}
          >
            Hemen Ara
          </Button>
          <Button
            href={siteConfig.whatsappUrl}
            external
            variant="secondary"
            trackingEvent="whatsapp_click"
            trackingParams={{ location: "problem_cta", phone: siteConfig.phoneDigits }}
          >
            WhatsApp’tan Yaz
          </Button>
        </div>
      </Container>
    </section>
  );
}
