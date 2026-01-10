import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemsSection } from "@/components/sections/ProblemsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Software Atelier Systems | Web- & Softwareentwicklung"
        description="Webseiten, Web-Apps und individuelle Software für Handwerksbetriebe & Mittelstand. Digitale Lösungen, die Prozesse vereinfachen und Zeit sparen."
        path="/"
      />

      <HeroSection />
      <ProblemsSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
