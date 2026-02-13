import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for ManCaveAcademy."
};

export default function TermsPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-semibold text-workshop-50">Terms of Use</h1>
      <p className="mt-4 text-workshop-200">
        Content is provided for educational purposes. You are responsible for your own implementation and business decisions.
      </p>
    </article>
  );
}


