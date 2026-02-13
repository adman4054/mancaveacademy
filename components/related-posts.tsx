import Link from "next/link";
import type { ArticleSummary } from "@/lib/articles";

export function RelatedPosts({ posts }: { posts: ArticleSummary[] }) {
  if (!posts.length) {
    return null;
  }

  return (
    <section className="mt-14 border-t border-workshop-800 pt-8">
      <h2 className="text-xl font-semibold text-workshop-50">Related Posts</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <article key={post.slug} className="rounded-lg border border-workshop-800 bg-workshop-900/30 p-4">
            <h3 className="font-semibold text-workshop-100">
              <Link href={`/articles/${post.slug}`} className="hover:text-cyan-200">
                {post.title}
              </Link>
            </h3>
            <p className="mt-2 text-sm text-workshop-300">{post.excerpt}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


