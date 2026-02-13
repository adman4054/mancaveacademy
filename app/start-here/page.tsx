import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Start Here",
  description: "Read this first to pick your best leverage path and start shipping quickly."
};

export default function StartHerePage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-semibold text-workshop-50">Start Here</h1>
      <p className="mt-4 text-workshop-200">
        ManCaveAcademy is built for operators who prefer practical systems over theory. Start with one lane, publish proof,
        and compound from there.
      </p>
      <ol className="mt-8 space-y-4 text-workshop-200">
        <li>1. Pick one category where you already have context.</li>
        <li>2. Publish one outcome-focused article per week.</li>
        <li>3. Offer one clear next step through the newsletter.</li>
      </ol>
      <Link href="/articles" className="mt-8 inline-block text-cyan-300 hover:text-cyan-200">
        Explore the articles library
      </Link>
    </article>
  );
}


