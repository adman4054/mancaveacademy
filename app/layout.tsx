import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://mancaveacademy.com"),
  title: {
    default: "Man Cave Academy",
    template: "%s | Man Cave Academy"
  },
  description:
    "Actionable playbooks for builders turning AI leverage, digital assets, and local systems into resilient income.",
  openGraph: {
    title: "Man Cave Academy",
    description:
      "Actionable playbooks for builders turning AI leverage, digital assets, and local systems into resilient income.",
    type: "website",
    siteName: "Man Cave Academy",
    url: "https://mancaveacademy.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Man Cave Academy",
    description:
      "Actionable playbooks for builders turning AI leverage, digital assets, and local systems into resilient income."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-10 pt-6 sm:px-6">
          <SiteHeader />
          <main className="mt-12 flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}


