import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Globe, Smartphone, Search, Gauge, Shield, Mail } from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobil optimiert",
    description: "Jede Website wird mobile-first umgesetzt - perfekte Darstellung auf Smartphone, Tablet und Desktop.",
  },
  {
    icon: Gauge,
    title: "Performance optimiert",
    description: "Schnelle Ladezeiten, optimierte Bilder, sauberer Code - ohne Ballast.",
  },
  {
    icon: Search,
    title: "Technisches SEO",
    description: "Saubere Struktur, Meta-Daten und technisches SEO - damit du langfristig besser gefunden wirst.",
  },
  {
    icon: Shield,
    title: "Datenschutz (DSGVO)",
    description: "Consent-Mechanik, datenschutzfreundliche Analyse-Setups, sichere Formulare - technische Umsetzung nach Best Practices.",
  },
  {
    icon: Globe,
    title: "Hosting und Domain",
    description: "Komplettes Setup von Hosting, Domain, SSL-Zertifikaten und E-Mail - auf Wunsch auch als Managed-Betrieb über mich.",
  },
  {
    icon: Mail,
    title: "E-Mail Einrichtung",
    description: "Professionelle E-Mail Konfiguration, Weiterleitungen und Spam-Schutz.",
  },
];

const technologies = [
  "WordPress",
  "Individuelles HTML/CSS/JS",
  "React",
  "Tailwind CSS",
  "Headless CMS",
  "Webseiten Builder",
];

export default function WebDesignPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link 
              to="/services" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors mb-4 inline-block"
            >
              ← Zurück zu den Dienstleistungen
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Webentwicklung für Betriebe
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Webseiten und Webanwendungen, die Anfragen unterstützen, Informationen klar darstellen und technisch sauber laufen - vom Einstieg bis zur komplexen Lösung.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Angebot anfragen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Eingesetzte Tools und Frameworks
            </h2>
            <p className="text-muted-foreground">
              Passend zum Projekt ausgewählt - keine Lösung von der Stange.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <div
                key={tech}
                className="px-5 py-3 rounded-lg bg-card border border-border text-foreground font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Jedes Projekt enthalt:
              </h2>
              <ul className="space-y-4">
                {[
                  "Individuelle Umsetzung passend zum Unternehmen",
                  "Mobil optimierte Umsetzung fur Smartphone, Tablet und Desktop",
                  "Technisches SEO und Best Practices",
                  "Kontaktformulare und Lead-Erfassung",
                  "Datenschutzfreundliches Setup (DSGVO)",
                  "Performance-Optimierung",
                  "Hosting-Setup und DNS-Konfiguration",
                  "Einweisung zur Pflege und Verwaltung der Webseite",
                  "Vollstandige Dokumentation",
                  "30 Tage Support nach Go-live",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-card border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">Bereit für den Start?</h3>
              <p className="text-muted-foreground mb-6">
                Lass uns über dein Website-Projekt quatschen. Ich erstelle dir ein übersichtliches Angebot inklusive Zeitplan und Kosten.
              </p>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact">
                  Angebot anfordern
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
