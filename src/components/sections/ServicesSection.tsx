import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Cog, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Webentwicklung für das Handwerk",
    description:
      "WordPress, individuelles HTML/CSS/JS oder ein schlanker Builder - passend zu Budget und Anforderungen. Schnell, mobil-optimiert, SEO-ready.",
    features: ["Mobil optimiert", "Suchmaschinenoptimiert", "DSGVO Konforme Umsetzung", "Deployment & Hosting auf Wunsch"],
    href: "/services/web-design",
  },
  {
    icon: Cog,
    title: "Business-Software & Tools",
    description:
      "Individuelle Anwendungen für CAFM, HOAI Workflows, Dashboards und Automatisierung. Schluss mit Excel-Provisorien - hin zu sauberen Systemen.",
    features: ["CAFM Integration", "Prozess Automatisierung", "Dashboards & Reports", "API Entwicklung"],
    href: "/services/software-solutions",
  },
  {
    icon: Wrench,
    title: "Wartung & Support",
    description:
      "Updates, Security Patches, Monitoring und Performance-Checks. Deine Systeme bleiben stabil - ohne dauernde Feuerwehreinsätze.",
    features: ["Regelmäßige Updates", "Sicherheits Monitoring", "Performance Checks", "Priorisierter Support"],
    href: "/services/maintenance",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
            LEISTUNGEN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Leistungen, die zu deinem Betrieb passen
          </h2>
          <p className="text-lg text-muted-foreground">
            Von der kompakten Website bis zur individuellen Business-Anwendung. Skalierbare Lösungen, die mit dir wachsen.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-glow flex flex-col">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:shadow-glow-sm transition-shadow">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1 h-1 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="outline" className="w-full group/btn" asChild>
                  <Link to={service.href}>
                    Mehr erfahren
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Nicht sicher, was du brauchst? Lass dich beraten.
          </p>
          <Button variant="hero" size="cta" asChild>
            <Link to="/contact">
              Kostenloses Erstgespräch vereinbaren
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
