import Link from "next/link";
import { NewsletterSignupPlaceholder } from "@/components/newsletter-signup-placeholder";
import { OrganizationJsonLd } from "@/components/organization-json-ld";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <section className="rounded-2xl border border-workshop-800/60 bg-workshop-900/45 p-8 shadow-panel sm:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Man Cave Academy</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight text-workshop-50 sm:text-5xl">
          Build durable income with focused systems, not noisy hustle.
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-workshop-200">
          Tactical frameworks on AI leverage, digital assets, micro SaaS, local leverage, and financial infrastructure.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/start-here"
            className="rounded-md bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-workshop-950 hover:bg-cyan-300"
          >
            Start Here
          </Link>
          <Link
            href="/articles"
            className="rounded-md border border-workshop-700 px-5 py-2.5 text-sm font-semibold text-workshop-100 hover:border-workshop-500"
          >
            Browse Articles
          </Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          "AI Leverage",
          "Digital Assets",
          "Micro SaaS & Tools",
          "Local Leverage",
          "Financial Infrastructure"
        ].map((category) => (
          <div key={category} className="rounded-xl border border-workshop-800 bg-workshop-900/30 p-5">
            <p className="text-sm font-medium text-workshop-100">{category}</p>
          </div>
        ))}
      </section>

      <section className="mt-12">
        <NewsletterSignupPlaceholder />
      </section>
    </>
  );
}


