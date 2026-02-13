import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/article-json-ld";
import { RelatedPosts } from "@/components/related-posts";
import { getAllArticles, getArticleBySlug, getCompiledArticle, getRelatedArticles } from "@/lib/articles";

type Params = {
  slug: string;
};

export async function generateStaticParams() {
  return getAllArticles().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = getArticleBySlug(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      tags: post.categories
    }
  };
}

export default async function ArticlePage({ params }: { params: Params }) {
  const post = getArticleBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const { content } = await getCompiledArticle(post);
  const related = getRelatedArticles(post.slug, post.categories, 3);

  return (
    <article className="max-w-3xl">
      <ArticleJsonLd post={post} />
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{post.categories.join(" • ")}</p>
      <h1 className="mt-3 text-4xl font-semibold text-workshop-50">{post.title}</h1>
      <p className="mt-4 text-workshop-300">
        {new Date(post.publishedAt).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
        })}{" "}
        • {post.readingTime}
      </p>
      <div className="prose-workshop mt-10">{content}</div>
      <RelatedPosts posts={related} />
    </article>
  );
}


