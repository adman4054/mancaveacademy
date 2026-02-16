import Link from "next/link";
import { NewsletterSignupPlaceholder } from "@/components/newsletter-signup-placeholder";
import { OrganizationJsonLd } from "@/components/organization-json-ld";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <section className="rounded-2xl border border-workshop-800/60 bg-workshop-900/45 p-8 shadow-panel sm:p-12">
        <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">Man Cave Academy</p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
  Build durable income with focused systems.
</h1>
        <p className="mt-6 text-lg opacity-80 max-w-2xl">
  Man Cave Academy is for working adults who want to use AI, digital assets,
  simple services, and financial infrastructure to create real income —
  without hype or hustle culture.
</p>
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
  <Link
    href="/start-here"
    className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-medium hover:border-white/40 transition"
  >
    Start Here
  </Link>
          <Link
    href="/newsletter"
    className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-3 font-medium hover:border-white/25 transition opacity-90"
  >
    Get the Brief
  </Link>
</div>
      </section>
      <section className="mt-16">
  <h2 className="text-2xl font-semibold">The 5-Part Income System</h2>
  <p className="mt-3 opacity-80 max-w-3xl">
    Durable income isn’t one tactic. It’s a system built from leverage,
    assets, services, tools, and financial stability.
  </p>
</section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  {[
    { label: "AI Leverage", href: "/ai-leverage" },
    { label: "Digital Assets", href: "/digital-assets" },
    { label: "Micro SaaS & Tools", href: "/micro-saas-tools" },
    { label: "Local Leverage", href: "/local-leverage" },
    { label: "Financial Infrastructure", href: "/financial-infrastructure" },
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
<section className="mt-16 rounded-xl border border-white/10 p-6">
  <h2 className="text-xl font-semibold">Who This Is For</h2>
  <ul className="mt-4 space-y-3 opacity-85">
    <li>• Professionals who want more control over income</li>
    <li>• Operators who prefer systems over motivation</li>
    <li>• Builders who want assets, not endless freelancing</li>
    <li>• People serious about financial stability</li>
  </ul>
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
<section className="mt-10 rounded-xl border border-white/10 p-6">
  <h2 className="text-xl font-semibold">Start Here Paths</h2>
  <p className="mt-2 opacity-80">
    Pick a path and start building. These hubs are designed to guide you in the right direction.
  </p>

  <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
    <Link
      href="/ai-leverage"
      className="rounded-lg border border-white/10 p-4 hover:border-white/20 transition"
    >
      <div className="font-semibold">AI Leverage</div>
      <div className="mt-1 text-sm opacity-80">Use AI to save time and create income systems.</div>
    </Link>

    <Link
      href="/digital-assets"
      className="rounded-lg border border-white/10 p-4 hover:border-white/20 transition"
    >
      <div className="font-semibold">Digital Assets</div>
      <div className="mt-1 text-sm opacity-80">Build properties that compound and can be sold.</div>
    </Link>

    <Link
      href="/local-leverage"
      className="rounded-lg border border-white/10 p-4 hover:border-white/20 transition"
    >
      <div className="font-semibold">Local Leverage</div>
      <div className="mt-1 text-sm opacity-80">Simple service + systems for fast cash flow.</div>
    </Link>

    <Link
      href="/micro-saas-tools"
      className="rounded-lg border border-white/10 p-4 hover:border-white/20 transition"
    >
      <div className="font-semibold">Micro SaaS & Tools</div>
      <div className="mt-1 text-sm opacity-80">Validate fast, ship simple, grow recurring revenue.</div>
    </Link>

    <Link
      href="/financial-infrastructure"
      className="rounded-lg border border-white/10 p-4 hover:border-white/20 transition"
    >
      <div className="font-semibold">Financial Infrastructure</div>
      <div className="mt-1 text-sm opacity-80">Cash buffer, recurring revenue, asset-first planning.</div>
    </Link>

    <Link
      href="/start-here"
      className="rounded-lg border border-white/10 p-4 hover:border-white/20 transition"
    >
      <div className="font-semibold">Start Here</div>
      <div className="mt-1 text-sm opacity-80">Not sure? Choose the right track in 60 seconds.</div>
    </Link>
  </div>
</section>
<section className="mt-16 text-center">
  <h2 className="text-2xl font-semibold">
    Start building income that lasts.
  </h2>
  <p className="mt-3 opacity-80">
    One useful brief each week. Practical plays. No hype.
  </p>

  <div className="mt-6">
    <Link
      href="/newsletter"
      className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-medium hover:border-white/40 transition"
    >
      Get the Brief
    </Link>
  </div>
</section>


    </>
  );
}


