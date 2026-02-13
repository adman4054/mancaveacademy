import type { ArticleSummary } from "@/lib/articles";

export function ArticleJsonLd({ post }: { post: ArticleSummary }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Man Cave Academy"
    },
    publisher: {
      "@type": "Organization",
      name: "Man Cave Academy"
    },
    mainEntityOfPage: `https://mancaveacademy.com/articles/${post.slug}`
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}


