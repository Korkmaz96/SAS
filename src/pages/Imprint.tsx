import { Layout } from "@/components/layout/Layout";
import { useEffect } from "react";

export default function Imprint() {
  useEffect(() => {
    document.title = "Impressum | Software Atelier Systems";
  }, []);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-semibold tracking-tight">Impressum</h1>

        <div className="mt-8 space-y-10">
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Angaben gemäß §5 DDG</h2>
            <p className="leading-relaxed">
              Mikail Korkmaz (Einzelunternehmer)
              <br />
              handelnd unter „Software Atelier Systems“
              <br />
              Burgfelderstraße.2
              <br /> 
              70567 Stuttgart
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Kontakt</h2>
            <p className="leading-relaxed">
              Telefon: +49 1520 8389155
              <br />
              E-Mail: kontakt@softwareateliersystems.de
            </p>
            {/* Falls du wirklich ein Fax hast, Zeile ergänzen:
                Telefax: [FAX]
            */}
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">Umsatzsteuer-ID</h2>
            <p className="leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
              <br />
              DE458029696
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p className="leading-relaxed">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <p className="text-sm opacity-70">Stand: 01.01.2026</p>

          {/* Hinweis: "Quelle: e-recht24.de" habe ich bewusst NICHT ausgegeben.
              Wenn du es unbedingt anzeigen willst, sag kurz Bescheid. */}
        </div>
      </div>
    </Layout>
  );
}
