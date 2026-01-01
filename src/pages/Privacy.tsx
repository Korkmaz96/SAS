import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Datenschutzerklärung | Software Atelier Systems";
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Datenschutzerklärung</h1>

        <div className="mt-8 space-y-10">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold">1. Datenschutz auf einen Blick</h2>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Allgemeine Hinweise</h3>
              <p className="leading-relaxed">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
                denen Sie persönlich identifiziert werden können.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Datenerfassung auf dieser Website</h3>
              <p className="leading-relaxed">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten
                (z.&nbsp;B. technische Daten/Server-Logs). Weitere Daten werden verarbeitet, wenn Sie uns diese
                aktiv mitteilen (z.&nbsp;B. per Kontaktformular oder per E-Mail).
              </p>
              <p className="leading-relaxed">
                Diese Website nutzt kein Newsletter-System, keine Terminbuchung und keine Werbe-/Tracking-Tools.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Ihre Rechte</h3>
              <p className="leading-relaxed">
                Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck
                Ihrer gespeicherten personenbezogenen Daten. Sie haben außerdem ein Recht, die Berichtigung oder
                Löschung dieser Daten zu verlangen. Zudem können Sie - soweit die Voraussetzungen vorliegen -
                die Einschränkung der Verarbeitung verlangen und Widerspruch gegen bestimmte Verarbeitungen
                einlegen. Ihnen steht außerdem ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">2. Hinweis zur verantwortlichen Stelle</h2>
            <p className="leading-relaxed">
              Verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              <br />
              Mikail Korkmaz (Einzelunternehmer), handelnd unter „Software Atelier Systems“
              <br />
              Burgfelderstraße.2
              <br /> 
              70567 Stuttgart
              <br />
              Telefon: +49 152 08389155
              <br />
              E-Mail: kontakt@softwareateliersystems.de
            </p>
            <p className="leading-relaxed">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit
              anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">3. Hosting und Server-Logs</h2>
            <p className="leading-relaxed">
              Wir hosten die Inhalte dieser Website bei: <strong>GitHub Pages (GitHub, Inc., USA)</strong>.
            </p>
            <p className="leading-relaxed">
              Beim Aufruf der Website können durch den Hoster Server-Logfiles verarbeitet werden
              (z.&nbsp;B. IP-Adresse, Datum und Uhrzeit des Zugriffs, angeforderte Seite/Datei, Browsertyp,
              Betriebssystem, Referrer-URL). Diese Daten werden in der Regel benötigt, um den sicheren und
              stabilen Betrieb der Website zu gewährleisten.
            </p>
            <p className="leading-relaxed">
              Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO (berechtigtes Interesse an sicherer
              und zuverlässiger Bereitstellung).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">4. Kontaktaufnahme</h2>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Kontaktformular</h3>
              <p className="leading-relaxed">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular
                inklusive der von Ihnen dort angegebenen Kontaktdaten zur Bearbeitung der Anfrage und für den
                Fall von Anschlussfragen verarbeitet.
              </p>
              <p className="leading-relaxed">
                Für die technische Abwicklung und Übermittlung von Kontaktformularanfragen nutzen wir Web3Forms 
                (Web3Forms ist ein Produkt des Unternehmens Web3Creative,(Web3Forms / Web3Creative - Anbieterangaben siehe Datenschutzhinweise des Dienstes)).
                Die von Ihnen im Formular eingegebenen Daten werden hierfür an Web3Forms übermittelt und zur Zustellung Ihrer Nachricht an uns verarbeitet.
              </p>
              <p className="leading-relaxed">
                Zum Schutz vor Spam und Missbrauch verwenden wir außerdem hCaptcha (Anbieter: Intuition Machines, Inc., USA).
              </p>    
              <p className="leading-relaxed">
                Rechtsgrundlage für den Einsatz von hCaptcha ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO
                (Schutz vor Missbrauch/Spam-Prävention) bzw. - falls erforderlich - Ihre Einwilligung nach
                Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;a DSGVO.
              </p> 
              <p className="leading-relaxed">
                Rechtsgrundlage für die Verarbeitung Ihrer Anfrage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO
                (Anbahnung/Erfüllung eines Vertragsverhältnisses) oder Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO
                (allgemeine Anfragen).
              </p>

              {/* Modul: Spam-Schutz (nur aktivieren, wenn du wirklich einen nutzt) */}
              {/* 
              <div className="space-y-2">
                <h4 className="text-base font-semibold">Spam-Schutz</h4>
                <p className="leading-relaxed">
                  Zum Schutz vor automatisierten Anfragen (Spam) setzen wir im Kontaktformular [SPAM-SCHUTZ] ein.
                  Dabei können technische Daten (z. B. IP-Adresse, Browserdaten) verarbeitet werden.
                </p>
                <p className="leading-relaxed">
                  Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (Schutz vor Missbrauch) bzw. – falls erforderlich –
                  Ihre Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO.
                </p>
              </div>
              */}
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Kontakt per E-Mail oder Telefon</h3>
              <p className="leading-relaxed">
                Wenn Sie uns per E-Mail oder telefonisch kontaktieren, wird Ihre Anfrage einschließlich der daraus
                hervorgehenden personenbezogenen Daten (z.&nbsp;B. Name, Kontaktdaten, Inhalt der Anfrage) zum
                Zwecke der Bearbeitung Ihrer Anfrage verarbeitet.
              </p>
              <p className="leading-relaxed">
                Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO oder Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO.
              </p>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">5. Speicherdauer</h2>
            <p className="leading-relaxed">
              Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
              verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt.
            </p>
            <p className="leading-relaxed">
                Kontaktanfragen speichern wir in der Regel für <strong>730 Tage</strong> (24 Monate) bzw. so lange, wie es zur
                Bearbeitung erforderlich ist, und löschen sie anschließend, sofern keine gesetzlichen Aufbewahrungspflichten
                entgegenstehen (z. B. bei geschäftlicher Korrespondenz oder steuerrelevanten Unterlagen).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">6. Empfänger von personenbezogenen Daten</h2>
            <p className="leading-relaxed">
                Eine Weitergabe Ihrer personenbezogenen Daten erfolgt nur, soweit dies zur Bereitstellung dieser Website
                oder zur Bearbeitung Ihrer Anfrage erforderlich ist. Dabei können folgende Kategorien von Empfängern
                eingesetzt werden:
            </p>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
                <li>Hosting/Website-Auslieferung: GitHub Pages (GitHub, Inc., USA)</li>
                <li>DNS/Reverse Proxy/CDN (je nach Konfiguration): Cloudflare (Cloudflare, Inc., USA)</li>
                <li>E-Mail-Weiterleitung/Empfang: Cloudflare Email Routing und Ihr E-Mail-Postfach bei Google (Gmail), USA</li>
                <li>Kontaktformular-Abwicklung/Übermittlung: Web3Forms (Web3Forms ist ein Produkt der Web3Creative, Kerala, Indien)</li>
                <li>Spam-Schutz (hCaptcha): hCaptcha (Intuition Machines, Inc., USA)</li>
            </ul>
            </section>


          <section className="space-y-3">
            <h2 className="text-xl font-semibold">7. Ihre Rechte</h2>
            <ul className="list-disc pl-6 space-y-2 leading-relaxed">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen bestimmte Verarbeitungen (Art. 21 DSGVO)</li>
              <li>Beschwerde bei einer Aufsichtsbehörde (Art. 77 DSGVO)</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold">8. Sicherheit</h2>
            <p className="leading-relaxed">
              Wir treffen geeignete technische und organisatorische Maßnahmen, um Ihre Daten gegen zufällige oder
              vorsätzliche Manipulationen, teilweisen oder vollständigen Verlust, Zerstörung oder gegen den
              unbefugten Zugriff Dritter zu schützen.
            </p>
          </section>

          <p className="text-sm opacity-70">Stand: 01.01.2026</p>
        </div>
      </div>
    </Layout>
  );
}
