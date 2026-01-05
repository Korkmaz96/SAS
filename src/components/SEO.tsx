import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  path: string; // must start with "/"
};

const SITE_ORIGIN = "https://softwareateliersystems.de";

export function SEO({ title, description, path }: SEOProps) {
  const canonical = `${SITE_ORIGIN}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
    </Helmet>
  );
}
