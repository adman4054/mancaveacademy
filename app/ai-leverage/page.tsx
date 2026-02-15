import Link from "next/link";

// app/ai-leverage/page.tsx

export const metadata = {
    title: "AI Leverage | Man Cave Academy",
    description:
        "Practical AI playbooks to create leverage, automate work, and build income systems—without hype.",
};

export default function AiLeverageHubPage() {
    return (
        <main className="mx-auto max-w-5xl px-6 py-12">
            <header className="text-center">
                <h1 className="text-4xl font-semibold tracking-tight">AI Leverage</h1>
                <p className="mt-4 text-lg opacity-80">
                    Practical ways to use AI to save time, increase output, and build income systems. No guru
                    nonsense—just repeatable workflows.
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
                        If you’re new here, start with the basics below. These are designed to be practical,
                        not theoretical.
                    </p>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        <div className="rounded-lg border border-white/10 p-5">
                            <h3 className="font-semibold">1) AI for time savings</h3>
                            <p className="mt-2 text-sm opacity-80">
                                The fastest leverage: reclaim hours each week using simple, repeatable prompts and
                                workflows.
                            </p>
                            <Link
                                href="/articles?tag=workflows"
                                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
                            >
                                See workflows →
                            </Link>
                        </div>

                        <div className="rounded-lg border border-white/10 p-5">
                            <h3 className="font-semibold">2) AI for output</h3>
                            <p className="mt-2 text-sm opacity-80">
                                Increase production: content, research, drafts, outlines, offers, and assets—without
                                burning nights.
                            </p>
                            <Link
                                href="/articles?category=ai-leverage"
                                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
                            >
                                Browse AI articles →
                            </Link>
                        </div>

                        <div className="rounded-lg border border-white/10 p-5">
                            <h3 className="font-semibold">3) AI for lead flow</h3>
                            <p className="mt-2 text-sm opacity-80">
                                Use AI to build outreach, follow-up, and content systems that generate leads for
                                services or products.
                            </p>
                            <Link
                                href="/articles?tag=lead-gen"
                                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
                            >
                                See lead-gen plays →
                            </Link>
                        </div>

                        <div className="rounded-lg border border-white/10 p-5">
                            <h3 className="font-semibold">4) AI + assets</h3>
                            <p className="mt-2 text-sm opacity-80">
                                Turn leverage into ownership: build small tools, templates, and digital assets you
                                can monetize and sell.
                            </p>
                            <Link
                                href="/articles?category=digital-assets"
                                className="mt-3 inline-block underline underline-offset-4 opacity-90 hover:opacity-100"
                            >
                                Build assets →
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="rounded-xl border border-white/10 p-6">
                    <h2 className="text-2xl font-semibold">Quick wins</h2>
                    <p className="mt-2 opacity-80">
                        If you want something you can do this week, pick one:
                    </p>

                    <ul className="mt-5 space-y-3 opacity-90">
                        <li className="flex gap-2">
                            <span className="opacity-60">•</span>
                            <span>
                                Build a reusable prompt pack for your job (emails, proposals, SOPs) and save 3–5
                                hours/week.
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span className="opacity-60">•</span>
                            <span>
                                Use AI to generate a “service offer + landing page” in 60 minutes and start outreach.
                            </span>
                        </li>
                        <li className="flex gap-2">
                            <span className="opacity-60">•</span>
                            <span>
                                Turn one skill into a template (checklist, calculator, script) and publish it as a
                                simple digital product.
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
                <h2 className="text-xl font-semibold">Want a guided path?</h2>
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