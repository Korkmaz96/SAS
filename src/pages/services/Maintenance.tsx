import { SEO } from "@/components/SEO";
import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Shield, RefreshCw, BarChart3, HeadphonesIcon, Clock, FileText } from "lucide-react";

const features = [
  {
    icon: RefreshCw,
    title: "Regelmäßige Updates",
    description: "WordPress, Plugins und Frameworks bleiben aktuell und sicher.",
  },
  {
    icon: Shield,
    title: "Sicherheitsmonitoring",
    description: "Proaktive Checks, Schwachstellen-Scanning und schnelle Reaktion bei Auffälligkeiten.",
  },
  {
    icon: BarChart3,
    title: "Performance Monitoring",
    description: "Uptime, Ladezeiten und Nutzererlebnis im Blick behalten - Probleme werden behoben, bevor sie zum Risiko werden.",
  },
  {
    icon: HeadphonesIcon,
    title: "Priorisierter Support",
    description: "Kurze Reaktionszeiten und direkter Kontakt - ohne Ticket-Warteschlangen und ohne Umwege.",
  },
  {
    icon: Clock,
    title: "Backup-Management",
    description: "Regelmäßige Backups mit getesteter Wiederherstellung - Daten bleiben abgesichert.",
  },
  {
    icon: FileText,
    title: "Monatliches Reporting",
    description: "Klarer Überblick uber erledigte Arbeiten, Systemzustand und Empfehlungen.",
  },
];

const packages = [
  {
    name: "Essential",
    description: "Für kleinere Webseiten mit grundlegender Wartung.",
    features: [
      "Monatliche Updates",
      "Sicherheitsmonitoring",
      "Monatliches Backup",
      "E-Mail Support",
      "Uptime Monitoring",
    ],
  },
  {
    name: "Professional (Meist gewählt)",
    description: "Für geschäftskritische Webseiten und Anwendungen.",
    features: [
      "Wöchentliche Updates",
      "Erweitertes Sicherheitsmonitoring",
      "Tägliche Backups",
      "Priorisierter E-Mail Support",
      "Performance-Monitoring",
      "Monatlicher Report",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Für komplexe Systeme mit erhöhtem Betreuungsbedarf.",
    features: [
      "Kontinuierliche Updates",
      "24/7 Sicherheitsmonitoring",
      "Backups in Echtzeit",
      "Telefon + E-Mail Support",
      "Performance Optimierung",
      "Wöchentliches Reporting",
      "Festes Stundenkontingent für Weiterentwicklungen",
    ],
  },
];

export default function MaintenancePage() {
  return (
    <Layout>
      <SEO
        title="Wartung & Pflege | Software Atelier Systems"
        description="Wartung, Updates und Weiterentwicklung für Webseiten und Web-Apps: stabiler Betrieb, schnelle Fixes und kontinuierliche Optimierung."
        path="/services/maintenance"
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
              Wartung und Support
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Damit Systeme stabil laufen, ohne dauernde Aufmerksamkeit. Regelmäßige Updates, Sicherheitsmonitoring und schnelle Hilfe, wenn es darauf ankommt. Dokumentation und transparente Nachvollziehbarkeit sind immer Teil der Übergabe.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Support Angebot anfragen
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

      {/* Packages */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Support-Pakete
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Das passende Support-Level je nach Kritikalität wählen. Alle Pakete enthalten Dokumentation, nachvollziehbares Reporting und klare Zuständigkeiten. Optional ist auch ein Managed-Betrieb möglich - als monatliche Pauschale mit Abomodell.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`p-8 rounded-2xl border h-full flex flex-col ${
                  pkg.highlighted
                    ? "bg-card border-primary/50 shadow-glow"
                    : "bg-card border-border"
                }`}
              >
                {pkg.highlighted && (
                  <div className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{pkg.description}</p>
                <ul className="space-y-3 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.highlighted ? "hero" : "outline"}
                  className="w-full mt-8"
                  asChild
                >
                  <Link to="/contact">Angebot anfragen</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
