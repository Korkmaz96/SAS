import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Cog, Wrench, Check } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Webentwicklung & Webanwendungen",
    description: "Von der kompakten Webseite bis zur individuellen Webanwendung. Ob WordPress, Custom Code oder ein schlanker Builder: Wir wählen die passende Technologie für Anforderungen, Budget und langfristigen Betrieb.",
    href: "/services/web-engineering", //web-engineering
    features: [
      "Mobil optimiert für alle Endgeräte",
      "Technisches SEO",
      "Performance Optimierung",
      "Datenschutz konforme Umsetzung (DSGVO)",
      "Deployment, Hosting & Domain auf Wunsch",
      "E-Mail-Einrichtung",
    ],
  },
  {
    icon: Cog,
    title: "Business Software & Systemlösungen",
    description: "Individuelle Anwendungen, die Excel-Provisorien ersetzen, Workflows automatisieren und Systeme verbinden. Schwerpunkt: CAFM sowie HOAI-nahe Prozesse und Tools.",
    href: "/services/software-solutions",
    features: [
      "CAFM- & Facility-Management-Tools",
      "HOAI Workflows & Dokumentation",
      "Individuelle Dashboards",
      "Prozess Automatisierung",
      "API-Integrationen",
      "Datenmigration",
    ],
  },
  {
    icon: Wrench,
    title: "Wartung & Support",
    description: "Damit deine Systeme stabil laufen - ohne ständige Aufmerksamkeit. Sicherheitsupdates, Monitoring, Performance-Checks und schnelle Hilfe, wenn es darauf ankommt.",
    href: "/services/maintenance",
    features: [
      "Regelmäßige Updates & Patches",
      "Sicherheits Monitoring",
      "Performance Optimierung",
      "Backup Management",
      "Priorisierter Support",
      "Monatliches Reporting",
    ],
  },
];

export default function ServicesPage() {
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
              Unsere Leistungen
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Webentwicklung & individuelle Software
            </h1>
            <p className="text-xl text-muted-foreground">
              Maßgeschneiderte Lösungen für den Mittelstand, technische Dienstleister sowie Facility Management. Fokus auf das, was du wirklich brauchst - klar definiert, sauber umgesetzt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>
                  <Button variant="hero" asChild>
                    <Link to={service.href}>
                      Mehr erfahren
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Features Card */}
                <div className={`rounded-2xl bg-card border border-border p-8 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="font-semibold text-foreground mb-6">Was enthalten ist:</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
            Nicht sicher, was du brauchst?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Lass uns kurz sprechen. Ich helfe dir, den richtigen Ansatz für deine Situation zu finden - unverbindlich und transparent
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
