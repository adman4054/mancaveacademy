import Link from "next/link";

const links = [
  { href: "/start-here", label: "Start Here" },
  { href: "/articles", label: "Articles" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" }
];

export function SiteHeader() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-4 border-b border-workshop-800/80 pb-5">
      <Link href="/" className="text-xl font-semibold tracking-wide text-workshop-50 hover:text-cyan-300">
        ManCaveAcademy
      </Link>
      <nav className="flex flex-wrap gap-4 text-sm text-workshop-300">
        {links.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-workshop-50">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}


