import { SITE } from "@/lib/data/site";

/**
 * Sitewide JSON-LD: Organization + LocalBusiness schema. Rendered once in
 * the root layout so every page benefits from it.
 */
export function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        email: SITE.email,
        telephone: SITE.phone,
        description: SITE.description,
        sameAs: Object.values(SITE.social).filter(Boolean),
      },
      {
        "@type": "LocalBusiness",
        "@id": `${SITE.url}/#localbusiness`,
        name: SITE.name,
        image: `${SITE.url}/images/founder.jpg`,
        url: SITE.url,
        telephone: SITE.phone,
        email: SITE.email,
        priceRange: "$$",
        openingHours: "Mo-Sa 10:00-19:00",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
