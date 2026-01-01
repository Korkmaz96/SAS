import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

function getHeaderOffset() {
  const header = document.querySelector("header");
  const headerHeight = header ? header.getBoundingClientRect().height : 0;
  return headerHeight + 12;
}

function scrollToY(y: number) {
  window.scrollTo({ top: Math.max(0, y), left: 0, behavior: "smooth" });
}

function scrollToIdWithOffset(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;

  const top = window.scrollY + el.getBoundingClientRect().top - getHeaderOffset();
  scrollToY(top);
  return true;
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Hash -> Abschnitt
    if (hash) {
      const id = hash.slice(1);

      // 1) Erstmal "oben" setzen, damit Ausgangsposition konsistent ist
      window.scrollTo({ top: 0, left: 0 });

      // 2) Dann retry: warten bis DOM + Layout stabil sind
      let tries = 0;
      const maxTries = 30; // höher = stabiler bei Animationen

      const attempt = () => {
        const ok = scrollToIdWithOffset(id);

        // Falls Element noch nicht da ODER Layout noch "springt":
        // wir versuchen es noch ein paar Frames weiter.
        if (tries < maxTries) {
          tries += 1;
          requestAnimationFrame(attempt);
        }
      };

      // Extra kleine Verzögerung hilft oft bei Framer Motion + Fonts
      setTimeout(() => requestAnimationFrame(attempt), 0);
      return;
    }

    // Normaler Seitenwechsel -> oben
    scrollToY(0);
  }, [pathname, hash]);

  return null;
}
