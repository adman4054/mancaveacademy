import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-workshop-800/80 pt-6 text-sm text-workshop-400">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Man Cave Academy</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="hover:text-workshop-200">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-workshop-200">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}


