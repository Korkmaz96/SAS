import { motion } from "framer-motion";
import { AlertTriangle, Clock, FileX, Puzzle, RefreshCw, Shield } from "lucide-react";

const problems = [
  {
    icon: FileX,
    title: "Veraltete Website",
    description: "Deine aktuelle Seite wirkt alt, lädt langsam oder ist nicht mobil-optimiert. Der erste Eindruck zählt.",
  },
  {
    icon: Puzzle,
    title: "Zerstreute Abläufe",
    description: "Daten liegen in Excel, E-Mails und einzelnen Tools. Nichts greift sauber ineinander.",
  },
  {
    icon: Clock,
    title: "Zeitfressende Prozesse",
    description: "Manuelle Aufgaben kosten jede Woche Stunden. Automatisierung schafft Luft für das Wesentliche.",
  },
  {
    icon: AlertTriangle,
    title: "Unzuverlässige Dienstleister",
    description: "Frühere Anbieter lieferten unübersichtlichen Code oder waren nach dem Launch weg. Du brauchst Verlässlichkeit.",
  },
  {
    icon: RefreshCw,
    title: "Wartung als Dauerproblem",
    description: "Updates brechen Funktionen. Keine Dokumentation. Niemand kennt das System wirklich - und du stehst alleine da.",
  },
  {
    icon: Shield,
    title: "Compliance & Sicherheit",
    description: "Datenschutz, Barrierefreiheit, Sicherheit - du weißt, dass es wichtig ist, bist aber nicht sicher, ob alles abgedeckt ist.",
  },
];

export function ProblemsSection() {
  return (
    <section id="problems" className="py-20 lg:py-32 relative">
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
            HERAUSFORDERUNGEN IN BETRIEBEN
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Typische Engpässe
          </h2>
          <p className="text-lg text-muted-foreground">
            Häufige Engpässe in Prozessen und Systemen. Im Erstgespräch prüfen wir, was sich verbessern lässt - pragmatisch und nachvollziehbar.
          </p>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-xl bg-gradient-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:shadow-glow-sm transition-shadow">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
