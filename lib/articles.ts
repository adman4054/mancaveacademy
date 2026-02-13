import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const contentDirectory = path.join(process.cwd(), "content", "articles");

export const categories = [
  "AI Leverage",
  "Digital Assets",
  "Micro SaaS & Tools",
  "Local Leverage",
  "Financial Infrastructure"
] as const;

export type Category = (typeof categories)[number];

export type ArticleSummary = {
  slug: string;
  title: string;
  excerpt: string;
  categories: Category[];
  publishedAt: string;
  readingTime: string;
  content: string;
};

type Frontmatter = {
  title: string;
  excerpt: string;
  categories: Category[];
  publishedAt: string;
};

function getArticleFilepaths() {
  return fs.readdirSync(contentDirectory).filter((file) => file.endsWith(".mdx"));
}

export function getAllArticles(): ArticleSummary[] {
  return getArticleFilepaths()
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, filename);
      const source = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(source);
      const frontmatter = data as Frontmatter;

      return {
        slug,
        title: frontmatter.title,
        excerpt: frontmatter.excerpt,
        categories: frontmatter.categories,
        publishedAt: frontmatter.publishedAt,
        readingTime: readingTime(content).text,
        content
      };
    })
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getArticleBySlug(slug: string): ArticleSummary | null {
  return getAllArticles().find((post) => post.slug === slug) ?? null;
}

export function getRelatedArticles(slug: string, selectedCategories: Category[], limit = 3): ArticleSummary[] {
  return getAllArticles()
    .filter((post) => post.slug !== slug)
    .map((post) => ({
      post,
      score: post.categories.filter((category) => selectedCategories.includes(category)).length
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((entry) => entry.post);
}

export async function getCompiledArticle(post: ArticleSummary) {
  return compileMDX<Frontmatter>({
    source: post.content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: "wrap" }]]
      }
    }
  });
}


