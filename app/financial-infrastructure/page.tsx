// app/financial-infrastructure/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Financial Infrastructure | Man Cave Academy",
  description:
    "Build financial stability with systems: recurring revenue, budgeting for operators, cash buffers, and asset-first strategy.",
};

export default function FinancialInfrastructureHubPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Financial Infrastructure</h1>
        <p className="mt-4 text-lg opacity-80">
          Durable income isn’t just earning more—it’s building systems that reduce fragility:
          cash buffers, predictable expenses, and recurring revenue.
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
          <h2 className="text-2xl font-semibold">Start with these systems</h2>
          <p className="mt-2 opacity-80">
            Keep it simple: stabilize your baseline first, then expand.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">1) Cash buffer</h3>
              <p className="mt-2 text-sm opacity-80">
                Build a buffer so short-term shocks don’t force bad decisions. Start with 30 days, then grow.
              </p>
              <Link
                href="/articles?tag=cashflow"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Cashflow basics →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">2) Recurring revenue</h3>
              <p className="mt-2 text-sm opacity-80">
                Add recurring income streams that compound: subscriptions, retainers, maintenance plans.
              </p>
              <Link
                href="/articles?tag=recurring"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Recurring models →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">3) Expense control</h3>
              <p className="mt-2 text-sm opacity-80">
                Simplify and reduce fixed obligations. Lower burn rate increases freedom faster than “more hustle.”
              </p>
              <Link
                href="/articles?tag=systems"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Operator systems →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">4) Asset-first planning</h3>
              <p className="mt-2 text-sm opacity-80">
                Put time and money into assets that grow: content properties, tools, offers, and skills that pay back.
              </p>
              <Link
                href="/articles?tag=valuation"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Valuation & exit thinking →
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Quick wins</h2>
          <ul className="mt-5 space-y-3 opacity-90">
            <li className="flex gap-2"><span className="opacity-60">•</span><span>Write your baseline monthly burn (fixed expenses) and target a 30-day buffer.</span></li>
            <li className="flex gap-2"><span className="opacity-60">•</span><span>Create one recurring offer (maintenance/retainer) tied to a real outcome.</span></li>
            <li className="flex gap-2"><span className="opacity-60">•</span><span>Pick one asset to build for 60 days and track progress weekly.</span></li>
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
