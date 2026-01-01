import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Webentwicklung", href: "/services/web-engineering" },
    { name: "Software Lösungen", href: "/services/software-solutions" },
    { name: "Wartung & Support", href: "/services/maintenance" },
  ],
  industries: [
    { name: "CAFM Software", href: "/industries#cafm" },
    { name: "HOAI Workflows", href: "/industries#hoai" },
    { name: "Individuelle Software", href: "/industries#custom" },
  ],
  company: [
    { name: "Über Software Atelier", href: "/about" },
    { name: "Ablauf", href: "/process" },
    { name: "Preise", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Kontakt", href: "/contact" },
  ],
  legal:[
    { name: "Datenschutz", href: "/privacy"},
    { name: "Impressum", href: "/imprint"},
  ],
};

const trustBadges = [
  "Klare Kommunikation",
  "Saubere Übergabe",
  "Dokumentiert & Wartbar",
];

export function Footer() {
  const location = useLocation();

  const getHeaderOffset = () => {
    const header = document.querySelector("header");
    const h = header ? header.getBoundingClientRect().height : 0;
    return h + 12;
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollToHash = (hash: string) => {
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    const top = window.scrollY + el.getBoundingClientRect().top - getHeaderOffset();
    window.scrollTo({ top: Math.max(0, top), left: 0, behavior: "smooth" });
  };

  const handleNavClick = (to: string) => (e: React.MouseEvent) => {
    const [path, rawHash] = to.split("#");
    const targetHash = rawHash ? `#${rawHash}` : "";

    const samePath = location.pathname === path;
    const sameHash = location.hash === targetHash;

    // Wenn exakt gleiche Route/Hash: Router macht nichts -> wir scrollen manuell
    if (samePath && (targetHash ? sameHash : true)) {
      e.preventDefault();
      if (targetHash) scrollToHash(targetHash);
      else scrollTop();
    }
  };

  return (
    <footer className="bg-card/50 border-t border-border mt-auto">
      {/* Trust Badges */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" onClick={handleNavClick("/")} className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-transparent border border-transparent flex items-center justify-center">
                <img
                  src="/sas-icon2.svg"
                  alt="SAS"
                  className="w-14 h-14 max-w-none"
                  draggable={false}
                />
              </div>
              <span className="text-lg font-semibold text-foreground">
                Software<span className="text-primary">Atelier</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 max-w-xs">
              Webseiten & Business Software  <br></br> Zuverlässig umgesetzt  <br></br> Stabil im Betrieb 
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="mailto:kontakt@softwareateliersystems.de"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 shrink-0" />
                kontakt@softwareateliersystems.de
              </a>
              <a
                href="tel:+4915208389155"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +49 152 08389155
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Stuttgart / Deutschland
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Leistungen</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Branchen</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Unternehmen</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={handleNavClick(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Card */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <div className="bg-gradient-card rounded-lg p-5 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Bereit zu starten?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Lass uns dein Projekt in einem kostenlosen Erstgespräch besprechen.
              </p>
              <Link
                to="/contact"
                onClick={handleNavClick("/contact")}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Vereinbare ein Gespräch
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SoftwareAtelier. Alle Rechte vorbehalten.</p>
            <div className="flex items-center gap-6">
            {footerLinks.legal.map((l) => (
              <Link
                key={l.name}
                to={l.href}
                onClick={handleNavClick(l.href)}
                className="hover:text-primary transition-colors"
              >
                {l.name}
              </Link>
            ))}
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
