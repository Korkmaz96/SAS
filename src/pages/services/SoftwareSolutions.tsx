import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Database, Workflow, BarChart3, Plug, FileCode, RefreshCw } from "lucide-react";

const features = [
  {
    icon: Database,
    title: "CAFM Integration",
    description: "Individuelle Tools fur das Facility Management - Flachenverwaltung, Asset-Management und Ticket-Workflows.",
  },
  {
    icon: Workflow,
    title: "HOAI Workflows",
    description: "Projektstruktur, Dokumentationsablaufe und Phasen-Nachverfolgung - interne Tools fur Ingenieur- und Planungsburos.",
  },
  {
    icon: BarChart3,
    title: "Individuelle Dashboards",
    description: "Echtzeit-Transparenz im Betrieb - KPIs, Reports und Auswertungen an einem Ort.",
  },
  {
    icon: RefreshCw,
    title: "Prozessautomatisierung",
    description: "Manuelle Aufgaben durch automatisierte Ablaufe ersetzen - jede Woche Stunden sparen.",
  },
  {
    icon: Plug,
    title: "API Integrationen",
    description: "Systeme verbinden - CRM, ERP, Buchhaltung oder jeder Dienst mit API.",
  },
  {
    icon: FileCode,
    title: "Excel-Ablösung",
    description: "Komplexe Tabellen in solide Anwendungen uberfuhren - mit Validierung, Rechten und Nachvollziehbarkeit.",
  },
];

const useCases = [
  "Ticket- und Aufgabenmanagement",
  "Flachen- und Asset-Tracking",
  "Wartungsplanung und Nachverfolgung",
  "Dokumenten-Workflows",
  "Kostenverfolgung und Reporting",
  "Interne Tools fur mehrere Nutzer",
  "Kundenportale",
  "Automatisierte Report-Erstellung",
];

export default function SoftwareSolutionsPage() {
  return (
    <Layout>
      <SEO
        title="Softwareentwicklung | Software Atelier Systems"
        description="Individuelle Softwarelösungen für B2B: Automatisierung, Datenverarbeitung und skalierbare Anwendungen - passgenau für deine Prozesse."
        path="/services/software-solutions"
      />
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
              Business Software Lösungen
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Individuelle Anwendungen, die echte Probleme lösen - von der Ablösung von Excel bis zu vollständigen Workflow-Systemen für CAFM und Ingenieurbüros.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Projekt anfragen
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

      {/* Use Cases */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Typische Anwendungsfälle
              </h2>
              <p className="text-muted-foreground mb-8">
                Jeder Betrieb hat eigene Anforderungen. Hier sind Beispiele fur Lösungen, die häufig umgesetzt werden:
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {useCases.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-card border border-border p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Andere Herausforderung?
              </h3>
              <p className="text-muted-foreground mb-6">
                Das sind nur Beispiele. Wenn es einen Engpass im Workflow oder eine Daten-Herausforderung gibt, lässt sich eine passende Lösung definieren.
              </p>
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact">
                  Anforderungen beschreiben
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Vorgehensweise
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Klein starten und schrittweise verbessern. Keine große Anfangsinvestition. Fortschritt wird fruh sichtbar und die Richtung kann bei Bedarf angepasst werden.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-2">01</div>
                <h3 className="font-semibold text-foreground mb-2">Verstehen</h3>
                <p className="text-sm text-muted-foreground">
                  Aktuelle Ablaufe, Engpasse und Ziele werden strukturiert erfasst.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-2">02</div>
                <h3 className="font-semibold text-foreground mb-2">Prototyp</h3>
                <p className="text-sm text-muted-foreground">
                  Ein schneller, funktionsfahiger Prototyp validiert den Ansatz.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border">
                <div className="text-2xl font-bold text-primary mb-2">03</div>
                <h3 className="font-semibold text-foreground mb-2">Umsetzen und verfeinern</h3>
                <p className="text-sm text-muted-foreground">
                  Iterative Entwicklung mit Feedback in jedem Schritt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
