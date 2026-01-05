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
        description="Webentwicklung und Softwarelösungen für B2B - mit Fokus auf Handwerk und Facility Management. Von der Website bis zur individuellen Anwendung."
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
