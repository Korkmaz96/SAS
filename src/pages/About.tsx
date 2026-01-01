import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code2, Target, Heart, Lightbulb, Wrench } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Pragmatisch",
    description: "Lösungen, die im Alltag funktionieren. Ohne Over-Engineering - mit klarem Nutzen.",
  },
  {
    icon: Wrench,
    title: "Technische Qualität",
    description: "Saubere Architektur, wartbarer Code, nachvollziehbare Dokumentation. Für langfristigen Betrieb.",
  },
  {
    icon: Heart,
    title: "Ehrlich",
    description: "Klare Aussagen darüber, was sinnvoll ist, welche Risiken es gibt und wofür sich Investitionen lohnen.",
  },
  {
    icon: Lightbulb,
    title: "Neugierig",
    description: "Kontinuierliches Lernen, neue Werkzeuge prüfen und bessere Wege finden, Probleme zu lösen.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
                Über das SoftwareAtelier
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Technische Expertise. Persönliche Zusammenarbeit.
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Das SoftwareAtelier steht für eine einfache Idee: Betriebe verdienen einen technischen Partner, der klar kommuniziert, verlässlich liefert und Lösungen baut, die langfristig funktionieren
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Kontakt aufnehmen
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-gradient-card border border-border p-8 lg:p-10 px-6 py-5 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 text-center sm:text-left">
                <div className="mx-auto sm:mx-0 shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-transparent border border-transparent flex items-center justify-center">
                  <img
                    src="/sas-icon2.svg"
                    alt="SAS"
                    className="w-full h-full object-contain"
                    draggable={false}
                  />
                </div>

                <div className="min-w-0">
                  <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                    Ihr Ansprechpartner
                  </h2>

                  <p className="text-muted-foreground">Mikail Korkmaz</p>

                  <p className="text-muted-foreground text-sm leading-snug">
                    <span className="inline-flex flex-wrap justify-center sm:justify-start gap-x-2 gap-y-1">
                      <span>Gründer</span><span className="opacity-60">•</span>
                      <span>Softwareentwickler</span><span className="opacity-60">•</span>
                      <span>Berater</span>
                    </span>
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
              Ich komme ursprünglich aus dem Handwerk: Meine Ausbildung habe ich als Kfz-Mechatroniker absolviert. Heute unterstütze ich Unternehmen bei der Umsetzung digitaler Lösungen - mit Fokus auf Webtechnologien und robuste, wartbare Systeme.
                <br /><br />
                Technische Informatik habe ich an der Hochschule Esslingen studiert und früh praktische Erfahrung in der Branche gesammelt - zunächst in der App- und Webentwicklung, später in einem IT-Unternehmen mit professionellen Strukturen und anspruchsvollen Projekten.
                <br /><br />
                SoftwareAtelier habe ich gegründet, um beides zu verbinden: praxisnahe Lösungen aus dem Arbeitsalltag und eine saubere technische Umsetzung, die langfristig zuverlässig bleibt.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Warum „Atelier“?
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Ein Atelier ist eine Werkstatt: dort treffen Handwerk, Sorgfalt und Qualität aufeinander. Genau so arbeite ich - lieber wenige Projekte, dafür sauber umgesetzt.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Ohne Agentur, hier gibt es keine Umwege: keine Account-Manager, keine wechselnden Ansprechpartner, keine „Junior-Lernkurve“ auf deinem Projekt. Du arbeitest direkt mit der Person, die entwickelt.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Das bedeutet schnelle Abstimmung, saubere Umsetzung und echte Verantwortung für das Ergebnis. Es bedeutet auch: Ich nehme Projekte gezielt an - nur dann, wenn ich sie fachlich und zeitlich zuverlässig liefern kann.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Grundsätze
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Das sind keine Schlagworte. Es sind Prinzipien, die jede Entscheidung - und jede Zeile Code - leiten.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Passt das zu deinem Vorhaben?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Am besten finden wir es im Gespräch heraus. Kein Sales Pitch - sondern eine ehrliche Einordnung deiner Situation und möglicher nächster Schritte.
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
