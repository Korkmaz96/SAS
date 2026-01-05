import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, MessageSquare, Lightbulb, Code, Rocket, HeadphonesIcon } from "lucide-react";


const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Erstgespräch",
    duration: "30–60 Minuten",
    description:
      "Wir starten mit einem kostenlosen, unverbindlichen Gespräch. Ich möchte verstehen, wie dein Betrieb arbeitet, wo Engpässe entstehen und wie Erfolg für dich konkret aussieht.",
    details: [
      "Einordnung der aktuellen Situation und der Engpässe",
      "Ziele, Prioritäten und Rahmenbedingungen klären",
      "Vorgehensweisen und Optionen skizzieren",
      "Fragen zu Ablauf und Preisen beantworten",
    ],
    outcome: "Klare Einschätzung, ob und wie eine Zusammenarbeit sinnvoll ist",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Angebot & Planung",
    duration: "2-7 Tage",
    description:
      "Auf Basis unseres Gesprächs erstelle ich ein strukturiertes Angebot mit Leistungsumfang, Zeitplan und transparenter Preisstruktur. Du weißt vorab genau, was geliefert wird.",
    details: [
      "Schriftlicher Leistungsumfang & Deliverables",
      "Realistische Timeline mit Meilensteinen",
      "Transparentes Festpreis-Angebot (wenn sinnvoll)",
      "Technischer Ansatz verständlich erklärt",
    ],
    outcome: "Entscheidungsreife Grundlage - ohne versteckte Kosten oder unklare Formulierungen",
  },
  {
    icon: Code,
    number: "03",
    title: "Entwicklung",
    duration: "je nach Umfang",
    description:
      "Die Umsetzungsphase. Du erhältst regelmäßige Updates und Demos. Du kannst testen, Feedback geben und den Fortschritt nachvollziehen - ohne Überraschung am Ende.",
    details: [
      "Wöchentliche Status-Updates",
      "Demos zu definierten Meilensteinen",
      "Direkter Kommunikationskanal",
      "Iterative Anpassung auf Basis deines Feedbacks",
    ],
    outcome: "Kontinuierliche Transparenz über Richtung, Qualität und Fortschritt",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Go-live & Übergabe",
    duration: "1–2 Wochen",
    description:
      "Sorgfältiges Testing, saubere Auslieferung und vollständige Dokumentation. Du bekommst alles, um dein System sicher zu betreiben und weiterzuführen.",
    details: [
      "Umfassende Tests vor dem Go-live",
      "Reibungsloser Rollout mit minimaler Unterbrechung",
      "Kurze Einweisung in Betrieb und Pflege",
      "Vollständige technische Dokumentation",
    ],
    outcome: "Live-System unter deiner Kontrolle - inkl. Wissen für eigenständige Pflege",
  },
  {
    icon: HeadphonesIcon,
    number: "05",
    title: "Support & Weiterentwicklung",
    duration: "Optional",
    description:
      "Nach dem Launch wählst du das Support-Level, das zu dir passt. Wartungspakete sorgen für Stabilität - oder du übernimmst selbst, unterstützt durch Dokumentation.",
    details: [
      "30 Tage Support nach Übergabe inklusive",
      "Optionale Wartungs-/Supportpakete",
      "Priorisierte Reaktion bei Störungen",
      "Weiterentwicklung nach Bedarf",
    ],
    outcome: "Sicherheit, dass Hilfe verfügbar ist - ohne Abhängigkeit",
  },
];

export default function ProcessPage() {
  return (
    <Layout>
      <SEO
        title="Ablauf | Software Atelier Systems"
        description="So läuft dein Projekt ab: von Analyse und Konzept über Umsetzung bis Go-Live. Transparent, effizient und mit klaren Meilensteinen."
        path="/process"
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
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              So arbeiten wir
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Ein klarer, transparenter Prozess
            </h1>
            <p className="text-xl text-muted-foreground">
              Keine Überraschungen. Keine Blackbox. Du bleibst informiert und behältst die Kontrolle - vom ersten Gespräch bis zum laufenden Betrieb.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-16 last:mb-0"
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-7 top-20 w-px h-[calc(100%-3rem)] bg-border hidden lg:block" />
                )}

                <div className="flex gap-8">
                  {/* Step Number */}
                  <div className="hidden lg:block">
                    <div className="w-14 h-14 rounded-xl bg-card border border-border flex items-center justify-center relative z-10">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-mono text-primary">{step.number}</span>
                      <h2 className="text-2xl font-bold text-foreground">{step.title}</h2>
                      <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-6">{step.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="rounded-xl bg-card border border-border p-5">
                        <h3 className="font-medium text-foreground mb-3">Was passiert</h3>
                        <ul className="space-y-2">
                          {step.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-primary mt-2" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-xl bg-primary/5 border border-primary/20 p-5">
                        <h3 className="font-medium text-foreground mb-2">Ergebnis</h3>
                        <p className="text-sm text-muted-foreground">{step.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Bereit zu starten?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Der erste Schritt ist ein Gespräch. Lass uns dein Projekt einordnen und die nächsten Schritte klären.
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
