import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for ManCaveAcademy."
};

export default function PrivacyPage() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-3xl font-semibold text-workshop-50">Privacy Policy</h1>
      <p className="mt-4 text-workshop-200">
        We only collect the minimum data required to operate the site and newsletter. We do not sell personal information.
      </p>
    </article>
  );
}


