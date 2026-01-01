import { motion } from "framer-motion";
import { MessageSquare, Lightbulb, Code, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Erstgespräch",
    description:
      "Wir starten mit einem kostenlosen Gespräch, um Ziele, Herausforderungen und Rahmenbedingungen zu klären. Ohne Verkaufsdruck - einfach sachlich und ehrlich.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Konzept & Angebot",
    description:
      "Auf Basis unseres Gesprächs erhältst du ein klares Angebot mit Umfang, Timeline und transparenter Preisstruktur. Du weißt exakt, was du bekommst",
  },
  {
    icon: Code,
    number: "03",
    title: "Entwicklung",
    description:
      "Regelmäßige Updates und Demos halten dich im Loop. Du kannst testen und Feedback geben — keine Überraschungen am Ende.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Übergabe",
    description:
      "Sauberes Testing, stabile Auslieferung und vollständige Dokumentation. Du bekommst alles, was du zur Weiterführung brauchst.",
  },
  {
    icon: HeadphonesIcon,
    number: "05",
    title: "Optionaler Support",
    description:
      "Auf Wunsch: Wartungspaket für einen ruhigen Betrieb. Oder du übernimmst selbst - mit Dokumentation ist das problemlos möglich.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Element */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-[80%] bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />

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
            SO ARBEITEN WIR
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Ein klarer Weg von der Idee bis zum Launch
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparenter Prozess. Keine Blackbox. Du bleibst informiert und behältst jederzeit die Kontrolle.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-16 w-px h-[calc(100%-2rem)] bg-border" />
              )}

              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-grow pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono text-primary">{step.number}</span>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
