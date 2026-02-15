// app/start-here/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Start Here | Man Cave Academy",
  description:
    "Choose your starting path: AI leverage, build a digital asset, or build a simple service business—with practical playbooks and zero hype.",
};

type Track = {
  title: string;
  desc: string;
  who: string[];
  nextSteps: { label: string; href: string }[];
  cta: { label: string; href: string };
};

const tracks: Track[] = [
  {
    title: "Track 1: Use AI for income",
    desc: "Turn AI into leverage: automate tasks, build simple tools, and create repeatable output that can turn into income.",
    who: [
      "You’re short on time but want results",
      "You’re curious about AI but overwhelmed",
      "You want practical, step-by-step use cases",
    ],
    nextSteps: [
      { label: "AI Leverage — Start here", href: "/articles?category=ai-leverage" },
      { label: "Tools & Workflows", href: "/articles?tag=workflows" },
    ],
    cta: { label: "Start with AI leverage", href: "/ai-leverage" },
  },
  {
    title: "Track 2: Build a digital asset",
    desc: "Build something you can own: niche sites, directories, newsletters, micro-tools—assets that can earn and eventually be sold.",
    who: [
      "You want recurring revenue, not side gigs",
      "You like building projects with clear ROI",
      "You want something that compounds over time",
    ],
    nextSteps: [
      { label: "Digital Assets — Start here", href: "/articles?category=digital-assets" },
      { label: "Monetization Basics", href: "/articles?tag=monetization" },
    ],
    cta: { label: "Start building an asset", href: "/articles?category=digital-assets" },
  },
  {
    title: "Track 3: Build a simple service business",
    desc: "Start with cash flow: a focused service + a system. Use automation to avoid trading 100% of your time for dollars.",
    who: [
      "You want the fastest path to revenue",
      "You prefer real-world/local opportunities",
      "You want a repeatable system, not freelancing chaos",
    ],
    nextSteps: [
      { label: "Local Leverage — Start here", href: "/local-leverage" },

      { label: "Sales & Lead Flow", href: "/articles?tag=lead-gen" },
    ],
    cta: { label: "Start with service leverage", href: "/local-leverage" },

  },
];


export default function StartHerePage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <header className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight">
          Start building your income system
        </h1>
        <p className="mt-4 text-lg opacity-80">
          Pick the path that matches where you are today. No hype—just practical playbooks.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-medium hover:border-white/40 transition"
          >
            Get the free Starter Guide
          </Link>
          <Link
            href="/articles"
            className="inline-flex items-center justify-center rounded-md border border-white/10 px-6 py-3 font-medium hover:border-white/25 transition opacity-90"
          >
            Browse all articles
          </Link>
        </div>
      </header>

      <section className="mt-12 grid gap-6">
        {tracks.map((t) => (
          <div
            key={t.title}
            className="rounded-xl border border-white/10 p-6 hover:border-white/20 transition"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold">{t.title}</h2>
                <p className="mt-2 opacity-80">{t.desc}</p>

                <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide opacity-70">
                  This is for you if…
                </h3>
                <ul className="mt-3 space-y-2 opacity-85">
                  {t.who.map((w) => (
                    <li key={w} className="flex gap-2">
                      <span className="opacity-60">•</span>
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide opacity-70">
                  Next steps
                </h3>
                <ul className="mt-3 space-y-2">
                  {t.nextSteps.map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="underline underline-offset-4 opacity-90 hover:opacity-100">
                        {s.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0">
                <Link
                  href={t.cta.href}
                  className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-medium hover:border-white/40 transition"
                >
                  {t.cta.label}
                </Link>
                <p className="mt-3 text-sm opacity-70">
                  Start here. You can switch tracks anytime.
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mt-14 rounded-xl border border-white/10 p-6 text-center">
        <h2 className="text-xl font-semibold">Want the fastest path?</h2>
        <p className="mt-2 opacity-80">
          Join the weekly brief. One useful email: AI leverage, income plays, and asset strategy—without hype.
        </p>
        <div className="mt-5">
          <Link
            href="/newsletter"
            className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 font-medium hover:border-white/40 transition"
          >
            Get the Brief
          </Link>
        </div>
      </section>
    </main>
  );
}
