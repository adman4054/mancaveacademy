// app/micro-saas-tools/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Micro SaaS & Tools | Man Cave Academy",
  description:
    "Build small tools that solve one problem: validate fast, ship simple, and grow recurring revenue without hype.",
};

export default function MicroSaasToolsHubPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Micro SaaS & Tools</h1>
        <p className="mt-4 text-lg opacity-80">
          Small tools win because they’re focused. One clear problem, one clear user, one clear outcome.
          Start simple, validate quickly, and iterate.
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
          <h2 className="text-2xl font-semibold">Start with these playbooks</h2>
          <p className="mt-2 opacity-80">
            Don’t overbuild. Prove demand first, then ship the smallest useful version.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">1) Find a painful workflow</h3>
              <p className="mt-2 text-sm opacity-80">
                Look for repetitive tasks people already pay to solve (time, money, compliance, mistakes).
              </p>
              <Link
                href="/articles?tag=ideas"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                See idea prompts →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">2) Validate fast</h3>
              <p className="mt-2 text-sm opacity-80">
                Pre-sell, collect emails, or run outreach before you build. Validation beats guessing.
              </p>
              <Link
                href="/articles/micro-saas-validation"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Read validation guide →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">3) Ship the minimum useful tool</h3>
              <p className="mt-2 text-sm opacity-80">
                Build the smallest version that delivers the outcome. Add features only after usage.
              </p>
              <Link
                href="/articles?tag=shipping"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Shipping playbooks →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">4) Price simply</h3>
              <p className="mt-2 text-sm opacity-80">
                Start with one plan. Charge for the outcome. Keep it easy to buy.
              </p>
              <Link
                href="/articles?tag=pricing"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Pricing basics →
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Quick wins</h2>
          <ul className="mt-5 space-y-3 opacity-90">
            <li className="flex gap-2"><span className="opacity-60">•</span><span>Make a one-page landing page describing the tool + who it’s for.</span></li>
            <li className="flex gap-2"><span className="opacity-60">•</span><span>Send 25 outreach messages to your target user and ask for a 10-minute call.</span></li>
            <li className="flex gap-2"><span className="opacity-60">•</span><span>Build a prototype that does one thing well, then collect feedback.</span></li>
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
