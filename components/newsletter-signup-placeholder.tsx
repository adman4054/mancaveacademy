export function NewsletterSignupPlaceholder() {
  return (
    <section className="rounded-xl border border-workshop-700 bg-workshop-900/55 p-6">
      <h2 className="text-2xl font-semibold text-workshop-50">Get The Weekly Operator Brief</h2>
      <p className="mt-2 max-w-2xl text-workshop-200">
        Placeholder: wire this to ConvertKit, Beehiiv, MailerLite, or your preferred provider.
      </p>
      <form className="mt-5 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          placeholder="your@email.com"
          className="w-full rounded-md border border-workshop-700 bg-workshop-950 px-4 py-2.5 text-workshop-100 outline-none ring-cyan-300 placeholder:text-workshop-500 focus:ring-2"
        />
        <button
          type="submit"
          className="rounded-md bg-cyan-400 px-4 py-2.5 text-sm font-semibold text-workshop-950 hover:bg-cyan-300"
        >
          Join
        </button>
      </form>
    </section>
  );
}


