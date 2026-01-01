import { motion } from "framer-motion";
import { Check, Zap, Shield, Clock, FileCheck, Users } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Kosteneffizient",
    description: "Schlanke Struktur, wenig Overhead. Du bekommst Senior-Level Umsetzung ohne Agenturaufschlag.",
  },
  {
    icon: Clock,
    title: "Schnelle Umsetzung",
    description: "Keine Bürokratie. Direkte Abstimmung und fokussierte Umsetzung - Projekte kommen zügig voran.",
  },
  {
    icon: Shield,
    title: "Saubere Basis",
    description: "Gut strukturierter Code, der wartbar und erweiterbar bleibt. Kein Chaos, kein „Spaghetti“.",
  },
  {
    icon: FileCheck,
    title: "Dokumentiert",
    description: "Alles ist nachvollziehbar dokumentiert - du kannst übernehmen, abgeben oder später erweitern.",
  },
  {
    icon: Users,
    title: "Direkter Kontakt",
    description: "Du sprichst mit der Person, die entwickelt. Keine Account-Manager, keine Umwege.",
  },
  {
    icon: Check,
    title: "Langfristig gedacht",
    description: "Gebaut für die nächsten Jahre — nicht nur für den Launch. Skalierbar und zukunftssicher.",
  },
];

export function BenefitsSection() {
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
            WARUM SOFTWAREATELIER
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Was den Unterschied macht
          </h2>
          <p className="text-lg text-muted-foreground">
            Kein typischer Anbieter. Ein technischer Partner — fokussiert auf Ergebnisse, die langfristig funktionieren.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
