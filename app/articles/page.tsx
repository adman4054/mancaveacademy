import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { getAllArticles } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description: "Operator-focused guides across AI leverage, assets, software, and finance."
};

export default function ArticlesPage() {
  const posts = getAllArticles();

  return (
    <section>
      <h1 className="text-3xl font-semibold text-workshop-50">Articles</h1>
      <p className="mt-3 text-workshop-200">Build in public with practical systems and tactical playbooks.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}


