import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Optional: warn statt error, damit keine künstlichen "Errors" in der Console entstehen.
    console.warn("404: Route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Seite nicht gefunden | Software Atelier Systems</title>
        <meta name="description" content="Die angeforderte Seite wurde nicht gefunden." />
        <link rel="canonical" href="https://softwareateliersystems.de/404" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="flex min-h-screen items-center justify-center bg-muted">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">404</h1>
          <p className="mb-4 text-xl text-muted-foreground">
            Oops! Seite nicht gefunden
          </p>
          <a href="/" className="text-primary underline hover:text-primary/90">
            Zur Startseite
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
