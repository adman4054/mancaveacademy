// app/local-leverage/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Local Leverage | Man Cave Academy",
  description:
    "Build a simple service business with systems: lead flow, pricing, delivery, and automation—without freelancing chaos.",
};

export default function LocalLeverageHubPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">Local Leverage</h1>
        <p className="mt-4 text-lg opacity-80">
          The fastest path to cash flow is usually a focused service + a repeatable system.
          Build it once, refine it, and automate what you can.
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
            If you’re starting from zero, the goal is simple: pick one service, set a clear offer,
            build a lead channel, and deliver consistently.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">1) Pick a service</h3>
              <p className="mt-2 text-sm opacity-80">
                Choose something you can deliver reliably and improve over time (not a random gig).
              </p>
              <Link
                href="/articles?category=local-leverage"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Explore service plays →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">2) Build lead flow</h3>
              <p className="mt-2 text-sm opacity-80">
                You don’t need “marketing.” You need a repeatable way to get conversations weekly.
              </p>
              <Link
                href="/articles?tag=lead-gen"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                See lead-gen systems →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">3) Price and package</h3>
              <p className="mt-2 text-sm opacity-80">
                Clear offers convert. Package your service so it’s easy to say yes.
              </p>
              <Link
                href="/articles?tag=pricing"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Learn packaging & pricing →
              </Link>
            </div>

            <div className="rounded-lg border border-white/10 p-5">
              <h3 className="font-semibold">4) Automate delivery</h3>
              <p className="mt-2 text-sm opacity-80">
                Use templates, checklists, and AI to reduce time per job and increase consistency.
              </p>
              <Link
                href="/articles?tag=workflows"
                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
              >
                Build delivery workflows →
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 p-6">
          <h2 className="text-2xl font-semibold">Quick wins</h2>
          <p className="mt-2 opacity-80">If you want something you can do this week:</p>

          <ul className="mt-5 space-y-3 opacity-90">
            <li className="flex gap-2">
              <span className="opacity-60">•</span>
              <span>
                Write a 1-page “offer sheet” (who it’s for, what you do, price range, how to book).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="opacity-60">•</span>
              <span>
                Make a simple landing page + one call-to-action (quote request / booking).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="opacity-60">•</span>
              <span>
                Build a weekly outreach routine (10 messages/day) and track replies.
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

      <section className="mt-14 rounded-xl border border-white/10 p-6 text-center">
        <h2 className="text-xl font-semibold">Want the guided version?</h2>
        <p className="mt-2 opacity-80">
          Start Here routes you into the right track based on your goals.
        </p>
        <div className="mt-5">
          <Link
            href="/start-here"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-medium hover:border-white/40 transition"
          >
            Go to Start Here
          </Link>
        </div>
      </section>
    </main>
  );
}
