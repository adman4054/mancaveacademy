import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn the philosophy behind ManCaveAcademy."
};

export default function AboutPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-semibold text-workshop-50">About</h1>
      <p className="mt-4 text-workshop-200">
        ManCaveAcademy publishes concise operating playbooks for builders pursuing independent income streams. Everything
        here is written to reduce friction between idea and execution.
      </p>
    </article>
  );
}


