import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  { q: "Wie lange dauert ein typisches Projekt?", a: "Webseiten: meist 4-8 Wochen. Individuelle Software: häufig 8-16 Wochen, je nach Umfang und Integrationen. Du bekommst zu Beginn eine realistische Timeline mit Meilensteinen." },
  { q: "Was kostet das?", a: "Websites starten in der Regel ab ca. 1.000 €, individuelle Software ab ca. 7.500 €. Nach dem Erstgespräch erhältst du ein verbindliches Angebot mit klar definiertem Leistungsumfang." },
  { q: "Arbeitest du auch mit Kunden außerhalb Deutschlands?", a: "Ja. Ich arbeite remote mit Kunden in Europa. Die Kommunikation erfolgt auf Deutsch oder Englisch." },
  { q: "Welche Technologien nutzt du?", a: "Ich setze auf bewährte, wartbare Technologien: HTML/CSS/JavaScript, moderne Frontends (je nach Projekt), ASP.NET Core (.NET 8), REST/GraphQL, PostgreSQL (ggf. PostGIS), Azure AD/OAuth2 sowie Docker (optional Kubernetes) für den Betrieb." },
  { q: "Kannst du beim Hosting unterstützen?", a: "Ja. Es gibt zwei Wege: \n\n1. Setup auf deiner Infrastruktur / bei einem Provider (Domain, SSL, E-Mail, Deployment) - ich richte alles sauber ein und empfehle passende Optionen. \n\n2. Managed Hosting & Betrieb über mein Unternehmen als monatliche Pauschale (Servicepaket). Das umfasst typischerweise Betrieb, Monitoring/Backups und Updates. Kleine Änderungen (z. B. Textkorrekturen) können je nach Paket inklusive sein; größere Anpassungen laufen über ein separates Wartungs-/Weiterentwicklungspaket oder als definierter Change-Umfang. " },
  { q: "Erstellst du auch Inhalte und Bilder?", a: "Mein Fokus liegt auf Webentwicklung und Software. Inhalte lieferst du idealerweise selbst - alternativ kann ich dir Texter/Foto/Video empfehlen oder mit vorhandenen Materialien arbeiten" },
  { q: "Wie ist das mit DSGVO?", a: "Ich setze die technischen Maßnahmen um (z. B. Consent-Mechanik, datenschutzfreundliche Analyse-Setups, sichere Standardkonfigurationen). Rechtliche Bewertung (Texte, konkrete Auslegung) sollte über eine juristische Beratung erfolgen." },
  { q: "Kannst du unsere bestehenden Systeme integrieren?", a: "In vielen Fällen ja. Viele Systeme bieten APIs oder Schnittstellen. Im Erstgespräch klären wir Möglichkeiten, Aufwand und Risiken." },
  { q: "Was passiert nach dem Go-live?", a: "Ein definierter Supportzeitraum ist inklusive (z. B. 30 Tage). Danach sind Wartungs-/Betriebspakete optional. Du erhältst außerdem Dokumentation, damit du unabhängig bleibst." },
  { q: "Was ist, wenn ich später Änderungen brauche?", a: "Der Code gehört dir. Du kannst selbst anpassen, jemanden beauftragen oder wieder zu mir kommen. Für laufende Anpassungen bietet sich ein Weiterentwicklungs-/Wartungspaket an - transparent und ohne Bindung." },
];

export default function FAQPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Layout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Häufig gestellte Fragen</h1>
            <p className="text-xl text-muted-foreground">Kurze Antworten auf häufige Fragen zur Zusammenarbeit.</p>
          </motion.div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl bg-card border border-border overflow-hidden">
                <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                  <span className="font-medium text-foreground">{faq.q}</span>
                  {open === i ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-muted-foreground" />}
                </button>
                {open === i && <div className="px-6 pb-6 text-muted-foreground whitespace-pre-line">{faq.a}</div>}
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Noch eine Frage?</p>
            <Button variant="hero" asChild><Link to="/contact">Kontakt aufnehmen <ArrowRight className="w-4 h-4" /></Link></Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
