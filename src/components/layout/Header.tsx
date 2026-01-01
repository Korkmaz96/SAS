import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Leistungen", href: "/services" },
  { name: "Branchen", href: "/industries" },
  { name: "Ablauf", href: "/process" },
  { name: "Preise", href: "/pricing" },
  { name: "Unternehmen", href: "/about" },
  { name: "FAQ", href: "/faq" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

 //!!!!!!
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
    // Mobile Menü immer schließen (auch wenn nichts navigiert)
    setIsMobileMenuOpen(false);

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" onClick={handleNavClick("/")} className="flex items-center gap-2 group">
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* NUR die Box (Hintergrund/Rand/Glow) wird verschoben */}
            <div
              className="
                absolute inset-0 translate-x-[3px]
                rounded-lg
                bg-transparent border border-transparent
                group-hover:bg-primary/10 group-hover:border-primary/30
                group-hover:shadow-glow-sm
                transition
              "
              aria-hidden="true"
            />
              <img
                src="/sas-icon2.svg"
                alt="SAS"
                className="w-12 h-12 max-w-none"
                draggable={false}
              />
            </div>
            <span className="text-lg font-semibold text-foreground">
              Software<span className="text-primary">Atelier</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href} 
                onClick={handleNavClick(item.href)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname === item.href
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <Link to="/contact" onClick={handleNavClick("/contact")} >Kontakt</Link>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact" onClick={handleNavClick("/contact")} >Kostenloses Erstgespräch</Link>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground hover:bg-muted rounded-md"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-lg border-b border-border"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick(item.href)}
                  className={`px-4 py-3 text-sm font-medium rounded-md transition-colors ${
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="outline" asChild>
                  <Link to="/contact">Kontakt</Link>
                </Button>
                <Button variant="hero" asChild>
                  <Link to="/contact">Kostenloses Erstgespräch</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
