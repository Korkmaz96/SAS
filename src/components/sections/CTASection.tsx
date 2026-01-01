import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="rounded-2xl bg-gradient-card border border-border p-8 lg:p-12 text-center">
            {/* Icon */}
            <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-primary" />
            </div>

            {/* Content */}
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Bereit, deinen Betrieb digital aufzustellen?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Buche ein kostenloses 30-Minuten Erstgespräch. Wir klären deinen Bedarf, besprechen Optionen und schauen, ob es passt - unverbindlich.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="cta" asChild>
                <Link to="/contact">
                  Kostenloses Erstgespräch buchen
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="glass" size="cta" asChild>
                <Link to="/pricing">Preise ansehen</Link>
              </Button>
            </div>

            {/* Trust Note */}
            <p className="mt-8 text-sm text-muted-foreground">
              Kein Verkaufsdruck • Ehrliches Gespräch • Schnelle Rückmeldung
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
