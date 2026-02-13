import type { Metadata } from "next";
import { NewsletterSignupPlaceholder } from "@/components/newsletter-signup-placeholder";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Get tactical weekly notes from Man Cave Academy."
};

export default function NewsletterPage() {
  return (
    <section className="max-w-2xl">
      <h1 className="text-3xl font-semibold text-workshop-50">Newsletter</h1>
      <p className="mt-4 text-workshop-200">Weekly operator notes with templates, prompts, and playbooks.</p>
      <div className="mt-8">
        <NewsletterSignupPlaceholder />
      </div>
    </section>
  );
}


