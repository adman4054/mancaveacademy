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
          Build durable income with focused systems—not noisy hustle.


        </h1>
        <p className="mt-6 max-w-2xl text-lg text-workshop-200">
          Practical playbooks for working adults who want to use AI and systems to create real side income—and eventually own sellable assets.

        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/start-here" className="btn-primary">
  Start Here
</Link>
          <Link href="/newsletter" className="btn-secondary">
  Get the Free Starter Guide
</Link>
        </div>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {[
    { label: "AI Leverage", href: "/ai-leverage" },
    { label: "Digital Assets", href: null },
    { label: "Micro SaaS & Tools", href: null },
    { label: "Local Leverage", href: null },
    { label: "Financial Infrastructure", href: null },
  ].map((item) => (
    <div
      key={item.label}
      className="rounded-lg border border-white/10 p-5 hover:border-white/20 transition"
    >
      {item.href ? (
        <Link
          href={item.href}
          className="text-lg font-semibold underline underline-offset-4 hover:opacity-100"
        >
          {item.label}
        </Link>
      ) : (
        <h3 className="text-lg font-semibold">{item.label}</h3>
      )}
    </div>
  ))}
</section>


     <section className="mt-12 text-center">
  <p className="text-lg text-gray-300 mb-4">
    One useful brief each week: AI leverage, income plays, and asset-building strategy—without hype.
  </p>

  <a
    href="/newsletter"
    className="inline-block px-6 py-3 rounded-md font-medium transition border border-white/20 hover:border-white/40"
  >
    Get the Brief
  </a>
</section>


    </>
  );
}


