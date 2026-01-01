import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, HelpCircle } from "lucide-react";

const packages = [
  {
    name: "Starter",
    tagline: "For simple projects",
    description: "Kompakte Webseiten oder einfache Tools - ideal für einen klaren, professionellen Einstieg.",
    startingFrom: "€1000",
    features: [
      "Landingpage oder kompakte Website",
      "Bis zu 5 Seiten",
      "Optimiert für Smartphone, Tablet & Desktop",
      "Technisches SEO (saubere Struktur, Indexierbarkeit)",
      "Kontaktformular",
      "Deployment & Hosting auf Wunsch",
      "30 Tage Support nach Go-live",
    ],
    idealFor: "Kleine Betriebe, Startups oder Personal Brands, die professionell online sichtbar sein möchten.",
  },
  {
    name: "Business",
    tagline: "(Am Beliebtesten)",
    description: "Für die meisten Projekte die passende Wahl.",
    startingFrom: "€3,500",
    features: [
      "Alles aus Starter",
      "Bis zu 15 Seiten oder individuelle Webanwendung",
      "CMS oder Admin-Bereich",
      "Datenbank-Anbindung",
      "Schnittstellen zu Drittanbietern",
      "Einweisung / Übergabe-Session",
      "Vollständige Dokumentation",
      "60 Tage Support nach Go-live",
    ],
    idealFor: "Mittelstand, technische Dienstleister und Betriebe, die digitale Workflows oder interne Tools benötigen.",
    highlighted: true,
  },
  {
    name: "Enterprise",
    tagline: "For complex needs",
    description: "Größere Anwendungen, komplexe Integrationen oder Projekte in mehreren Phasen.",
    startingFrom: "€7,500",
    features: [
      "Alles aus Business",
      "Komplexe individuelle Anwendungen",
      "Mehrere Integrationen / Schnittstellen",
      "Erweiterte Sicherheits- und Rechteverwaltung",
      "Umsetzung in mehreren Projektphasen",
      "Erweiterte Einweisung",
      "Priorisierter Support",
      "Quartalsweise Review-Termine",
    ],
    idealFor: "Größere Organisationen, öffentlicher Sektor oder Unternehmen mit komplexen technischen Anforderungen.",
  },
];

const faqItems = [
  {
    question: "Sind das Festpreise?",
    answer:
      "Die Paketpreise sind Einstiegspunkte. Nach dem Erstgespräch erhältst du ein verbindliches Angebot auf Basis deiner Anforderungen - transparent und ohne spätere Überraschungen.",
  },
  {
    question: "Was, wenn mein Projekt in kein Paket passt?",
    answer:
      "Das ist normal. Die Pakete geben ein Gefühl für typische Umfänge. In der Praxis erstellen wir meist ein passgenaues Angebot.",
  },
  {
    question: "Gibt es Zahlungsmodelle?",
    answer:
      "Ja. Üblich sind 40% zum Start, 30% zur Projektmitte und 30% zum Go-live. Bei größeren Projekten sind alternative Modelle möglich.",
  },
  {
    question: "Welche laufenden Kosten entstehen?",
    answer:
      "Domains, Hosting und ggf. Drittanbieter-Services (z. B. E-Mail, Karten, Zahlungsanbieter) sind separat. Ich unterstütze beim Setup und empfehle kosteneffiziente Optionen. Wartungspakete sind optional.",
  },
];

export default function PricingPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Preise
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Transparent & fair kalkuliert
            </h1>
            <p className="text-xl text-muted-foreground">
              Keine versteckten Kosten. Keine Stunden-Überraschungen. Klarer Leistungsumfang, Festpreis und saubere Umsetzung. Das kannst du erwarten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Packages */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-2xl border p-8 flex flex-col ${
                  pkg.highlighted
                    ? "bg-card border-primary/50 shadow-glow"
                    : "bg-card border-border"
                }`}
              >
                {pkg.highlighted && (
                  <div className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                    {pkg.tagline}
                  </div>
                )}
                <h2 className="text-2xl font-bold text-foreground mb-1">{pkg.name}</h2>
                <p className="text-muted-foreground mb-4">{pkg.description}</p>

                <div className="mb-6">
                  <span className="text-sm text-muted-foreground">Preisrahmen ab</span>
                  <div className="text-3xl font-bold text-foreground">{pkg.startingFrom}</div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-sm text-muted-foreground mb-6 p-4 bg-muted/50 rounded-lg">
                  <strong className="text-foreground">Ideal für:</strong> {pkg.idealFor}
                </div>

                <Button
                  variant={pkg.highlighted ? "hero" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">
                    Angebot anfragen
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Projects */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Etwas Individuelles geplant?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Jedes Projekt ist anders. Die Pakete sind Startpunkte, keine Grenzen. Wir definieren gemeinsam den sinnvollen Umfang - und du erhältst ein Angebot, das dazu passt.
            </p>
            <Button variant="hero" size="cta" asChild>
              <Link to="/contact">
                Individuelles Angebot anfragen
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Fragen zu Preisen
            </h2>
            <div className="space-y-6">
              {faqItems.map((item) => (
                <div key={item.question} className="rounded-xl bg-card border border-border p-6">
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{item.question}</h3>
                      <p className="text-muted-foreground text-sm">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
