import Link from "next/link";
import type { ArticleSummary } from "@/lib/articles";

export function ArticleCard({ post }: { post: ArticleSummary }) {
  return (
    <article className="rounded-xl border border-workshop-800 bg-workshop-900/30 p-5 hover:border-workshop-600">
      <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">{post.categories.join(" • ")}</p>
      <h2 className="mt-2 text-xl font-semibold text-workshop-50">
        <Link href={`/articles/${post.slug}`} className="hover:text-cyan-200">
          {post.title}
        </Link>
      </h2>
      <p className="mt-3 text-sm text-workshop-300">{post.excerpt}</p>
      <p className="mt-4 text-xs text-workshop-400">
        {new Date(post.publishedAt).toLocaleDateString()} • {post.readingTime}
      </p>
    </article>
  );
}


