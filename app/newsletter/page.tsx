import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "One useful brief each week: AI leverage, income plays, and asset-building strategy—without hype.",
};

export default function NewsletterPage() {
  return (
    <section className="max-w-xl">
      <h1 className="text-3xl font-semibold text-workshop-50">Get the Brief</h1>
      <p className="mt-3 text-workshop-200">
        One useful email each week: AI leverage, income plays, and asset-building
        strategy—without hype.
      </p>

      <form
        action="https://app.kit.com/forms/9094720/subscriptions"
        method="post"
        acceptCharset="utf-8"
        className="mt-6 flex flex-col gap-3"
      >
        <label className="text-sm text-workshop-200" htmlFor="email_address">
          Email address
        </label>
        <input
          id="email_address"
          type="email"
          name="email_address"
          placeholder="you@example.com"
          required
          className="rounded-md border border-white/10 bg-transparent px-4 py-3 text-workshop-50 placeholder:text-workshop-300"
        />

        <button
          type="submit"
          className="mt-2 inline-flex items-center justify-center rounded-md border border-white/20 px-4 py-3 font-medium text-workshop-50 hover:border-white/40 transition"
        >
          Get the Brief
        </button>
      </form>

      <p className="mt-4 text-xs text-workshop-300">
        After you subscribe, check your inbox to confirm (sometimes it lands in
        Promotions/Spam).
      </p>
    </section>
  );
}
