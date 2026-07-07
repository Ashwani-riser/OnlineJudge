import Link from "next/link";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    title: "Problems",
    href: "/problems",
  },
  {
    title: "Contests",
    href: "/contests",
  },
  {
    title: "Leaderboard",
    href: "/leaderboard",
  },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight"
        >
          Code
          <span className="text-indigo-500">
            ForU
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.title}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-indigo-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Auth */}
        <div className="flex items-center gap-3">
          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Sign Up
          </Button>
        </div>

      </div>
    </header>
  );
}