// app/digital-assets/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Digital Assets | Man Cave Academy",
  description:
    "Build digital assets that compound: niche sites, tools, newsletters, and micro products you can monetize and eventually sell.",
};

export default function DigitalAssetsHubPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Digital Assets
        </h1>
        <p className="mt-4 text-lg opacity-80">
          Build once. Improve over time. Monetize repeatedly. Digital assets
          are the foundation of durable income.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/start-here"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-medium hover:border-white/40 transition"
          >
            Back to Start Here
          </Link>
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-3 font-medium hover:border-white/25 transition opacity-90"
          >
            Get the Brief
          </Link>
        </div>
      </header>

      <section className="mt-12 grid gap-6">
        <div className="rounded-xl border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Start here</h2>
          <p className="mt-2 opacity-80">
            These are the core asset types we focus on.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">1) Niche Websites</h3>
              <p className="mt-2 text-sm opacity-80">
                Build focused content properties that generate traffic and
                monetize via ads, affiliates, or products.
              </p>
              <Link
                href="/articles?category=digital-assets"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Explore website builds →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">2) Micro Tools</h3>
              <p className="mt-2 text-sm opacity-80">
                Simple calculators, templates, or automation tools that solve
                one real problem well.
              </p>
              <Link
                href="/articles?category=micro-saas"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                See tool ideas →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">3) Paid Newsletters</h3>
              <p className="mt-2 text-sm opacity-80">
                Audience-first assets that can compound authority and revenue.
              </p>
              <Link
                href="/newsletter"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Learn the model →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">4) Sellable Properties</h3>
              <p className="mt-2 text-sm opacity-80">
                Structure projects from day one with valuation and exit in mind.
              </p>
              <Link
                href="/articles?tag=valuation"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Understand valuation →
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Quick wins</h2>
          <ul className="mt-5 space-y-3 opacity-90">
            <li className="flex gap-2">
              <span className="opacity-60">•</span>
              <span>
                Launch a 10-page niche site around a focused problem.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="opacity-60">•</span>
              <span>
                Build a simple spreadsheet or calculator and publish it as a
                free lead magnet.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="opacity-60">•</span>
              <span>
                Turn one recurring task into a small paid template.
              </span>
            </li>
          </ul>

          <div className="mt-6">
            <Link
              href="/newsletter"
              className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-medium hover:border-white/40 transition"
            >
              Get the Brief
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
