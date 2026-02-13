export function OrganizationJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ManCaveAcademy",
    url: "https://mancaveacademy.com",
    description:
      "Actionable frameworks for AI leverage, digital assets, micro SaaS, local leverage, and financial infrastructure.",
    sameAs: []
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}


