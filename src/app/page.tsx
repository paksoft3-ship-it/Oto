import { buildMetadata, buildFaqSchema } from "@/lib/seo";
import { homeFaqs } from "@/data/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { BrandExpertise } from "@/components/sections/BrandExpertise";
import { ContactPreview } from "@/components/sections/ContactPreview";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { ProblemCTA } from "@/components/sections/ProblemCTA";
import { RoadAssistanceCTA } from "@/components/sections/RoadAssistanceCTA";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export const metadata = buildMetadata({
  title: "Bursa Nilüfer Oto Tamir, Bakım ve Onarım | ERZ GARAGE",
  description:
    "ERZ GARAGE Bursa Nilüfer’de BMW, Mercedes, Audi ve birçok araç için oto tamir, arıza tespit, periyodik bakım, mekanik onarım ve 7/24 yol yardım hizmeti.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildFaqSchema(homeFaqs)} />
      <Hero
        title="Bursa Nilüfer’de Profesyonel Oto Tamir, Bakım ve Onarım"
        description="ERZ GARAGE; Bursa Nilüfer oto servis ihtiyacında arıza tespit, bakım, mekanik onarım ve 7/24 yol yardım için hızlı iletişim odaklı premium servis yaklaşımı sunar."
      />
      <ServiceCards pageLocation="home_quick_services" />
      <AboutPreview />
      <ServicesGrid />
      <BrandExpertise />
      <RoadAssistanceCTA />
      <WhyChooseUs />
      <ProblemCTA />
      <ContactPreview />
      <FAQ items={homeFaqs} />
      <FinalCTA />
    </>
  );
}
