import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Calendar, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import HCaptcha from "@hcaptcha/react-hcaptcha";



const WEB3FORMS_ACCESS_KEY = "b3e0f047-9863-4017-a31a-cbf39c782e36";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const [hCaptchaToken, setHCaptchaToken] = useState<string>("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [projectType, setProjectType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    try {
      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "Neue Kontaktanfrage (Website)",
          from_name: name,
          name,
          email,
          company,
          projectType,
          message,
          "h-captcha-response": hCaptchaToken,
        }),
      });

      const data = await resp.json().catch(() => null);

      if (!resp.ok || !data?.success) {
        throw new Error(data?.message || `HTTP ${resp.status}`);
      }

      toast.success("Danke! Ich melde mich innerhalb von 24 Stunden.");
      setName("");
      setEmail("");
      setCompany("");
      setProjectType("");
      setMessage("");
      setHCaptchaToken("");
    } catch {
      toast.error("Senden fehlgeschlagen. Bitte versuche es erneut oder schreibe eine E-Mail.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Unverbindlich anfragen</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Kostenloses Erstgesprach buchen oder eine Nachricht senden. Antwort erfolgt in der Regel innerhalb von 24 Stunden an Werktagen.
              </p>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:kontakt@softwareateliersystems.de" className="text-muted-foreground hover:text-primary">
                    kontakt@softwareateliersystems.de
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+4915208389155" className="text-muted-foreground hover:text-primary transition-colors">
                    +49 152 08389155
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Deutschland / Stuttgart / Remote</span>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-muted-foreground">Mo-Sa, 10:00-18:00 CET</span>
                </div>
              </div>

              <div className="rounded-xl bg-primary/5 border border-primary/20 p-6">
                <h3 className="font-semibold text-foreground mb-2">Kostenloses Erstgesprach</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  30 Minuten, um das Vorhaben einzuordnen, Optionen zu besprechen und zu prüfen, ob es passt. Unverbindlich.
                </p>
                <Button variant="hero" asChild>
                  <a href="tel:+4915208389155" aria-label="Jetzt anrufen">Jetzt anrufen</a>
                </Button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <form onSubmit={handleSubmit} className="rounded-2xl bg-card border border-border p-8 space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                    <Input
                      name="name"
                      placeholder="Dein Name"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Unternehmen</label>
                  <Input
                    name="company"
                    placeholder="Firmenname"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Projektart</label>
                  <Input
                    name="projectType"
                    placeholder="Webseite, Software, Wartung ..."
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Nachricht*</label>
                  <Textarea
                    name="message"
                    placeholder="Kurz das Vorhaben beschreiben ..."
                    rows={5}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <HCaptcha
                  sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                  reCaptchaCompat={false}
                  onVerify={(token) => setHCaptchaToken(token)}
                  onExpire={() => setHCaptchaToken("")}
                />

                <Button type="submit" variant="hero" className="w-full" disabled={loading || !hCaptchaToken} >
                  {loading ? "Senden..." : "Nachricht senden"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Hinweis: Daten werden entsprechend der Datenschutzerklärung verarbeitet.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
