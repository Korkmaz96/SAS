import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, HardHat, Cog } from "lucide-react";

const industries = [
  {
    id: "cafm",
    icon: Building2,
    title: "CAFM & Facility Management",
    subtitle: "CAFM Lösungen für das Facility Management",
    description:
      "Individuelle Tools für Flächenmanagement, Asset-Verwaltung, Instandhaltung und Reporting. Lösungen, die sich in bestehende Systeme integrieren - oder veraltete Abläufe ersetzen.",
    challenges: [
      "Verteilte Daten in Excel, E-Mails und Altsystemen",
      "Manuelle Planung und Nachverfolgung von Wartungen",
      "Keine Echtzeit-Transparenz über Flächennutzung und Auslastung",
      "Reports für Betrieb und Compliance sind aufwendig zu erstellen",
    ],
    solutions: [
      "Zentrale Asset- und Flächendatenbank",
      "Ticket-/Auftragssystem für Instandhaltung (automatisiert)",
      "Dashboards für Auslastung und Status in Echtzeit",
      "Individuelle Reports und Auswertungen",
      "Anbindungen an bestehende Systeme (Schnittstellen)",
      "Mobil-optimierte Oberflächen für Teams im Feld",
    ],
  },
  {
    id: "hoai",
    icon: HardHat,
    title: "HOAI nahe Workflows",
    subtitle: "Tools für Planungs- und Ingenieurbüros",
    description:
      "Interne Tools für Projektstruktur, Dokumentation, Kostenverfolgung und Zusammenarbeit. Fokus auf praktikable Unterstützung im Arbeitsalltag - nicht auf juristische Bewertung.",
    challenges: [
      "Umfangreiche Anforderungen an Projektdokumentation",
      "Kosten und Leistungen über Phasen hinweg nachvollziehen",
      "Abstimmung zwischen Team, Partnern und Auftraggebern",
      "Versionierung, Freigaben und Prüfprozesse sind unübersichtlich",
    ],
    solutions: [
      "Projektvorlagen entlang typischer HOAI-Phasen",
      "Kostenverfolgung und Budget-Monitoring",
      "Dokumentenverwaltung mit Versionierung",
      "Freigabe- und Review-Workflows",
      "Zeiterfassung und Ressourcenplanung",
      "Kunden-Reporting und Projektportale",
    ],
  },
  {
    id: "custom",
    icon: Cog,
    title: "Individuelle Business-Software",
    subtitle: "Maßgeschneiderte Lösungen für jede Branche",
    description:
      "Von der Ablösung komplexer Excel-Dateien bis zur vollständigen Business-Anwendung. Dashboards, Automatisierung, interne Web-Tools und Integrationen - passend zu deinen Anforderungen.",
    challenges: [
      "Kritische Prozesse laufen auf fragilen Excel-Dateien",
      "Datensilos verhindern klare Auswertungen",
      "Manuelle Abläufe kosten Zeit und erzeugen Fehler",
      "Es gibt keine passende Standardlösung am Markt",
    ],
    solutions: [
      "Individuelle Webanwendungen mit sauberer Datenvalidierung",
      "Automatisierte Verarbeitung, Reporting und Exporte",
      "API-Integrationen zur Verbindung deiner Systeme",
      "Dashboards für bessere Entscheidungen",
      "Mehrbenutzer-Systeme mit Rollen & Rechten",
      "Mobil optimierte Oberflächen",
    ],
  },
];

export default function IndustriesPage() {
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
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              Branchen & Lösungen
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Spezialisierte Lösungen für technische Branchen
            </h1>
            <p className="text-xl text-muted-foreground">
              Erfahrung in Facility Management, technischen Betrieben und individueller Business-Software. Ich kenne typische Abläufe - und setze Lösungen um, die im Alltag funktionieren.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
          {industries.map((industry) => (
              <section
                key={industry.id}
                id={industry.id}
                className="scroll-mt-24"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Content */}
                    <div>
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                        <industry.icon className="w-7 h-7 text-primary" />
                      </div>
                      <h2 className="text-3xl font-bold text-foreground mb-2">
                        {industry.title}
                      </h2>
                      <p className="text-lg text-primary mb-4">{industry.subtitle}</p>
                      <p className="text-muted-foreground mb-8">{industry.description}</p>
                      <Button variant="hero" asChild>
                        <Link to="/contact">
                          Anfrage stellen
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>

                    {/* Challenges & Solutions */}
                    <div className="space-y-8">
                      <div className="rounded-xl bg-card border border-border p-6">
                        <h3 className="font-semibold text-foreground mb-4">Typische Herausforderungen</h3>
                        <ul className="space-y-3">
                          {industry.challenges.map((challenge) => (
                            <li key={challenge} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2" />
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl bg-card border border-border p-6">
                        <h3 className="font-semibold text-foreground mb-4">Unsere Lösungen</h3>
                        <ul className="space-y-3">
                          {industry.solutions.map((solution) => (
                            <li key={solution} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Andere Branche? Lass uns sprechen.
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Das Prinzip ist gleich: Workflow verstehen, Engpässe erkennen, praktikable Lösungen umsetzen. Ich passe mich deinem Kontext an.
          </p>
          <Button variant="hero" size="cta" asChild>
            <Link to="/contact">
              Kostenloses Erstgespräch buchen
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
