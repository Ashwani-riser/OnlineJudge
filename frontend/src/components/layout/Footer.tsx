import Link from "next/link";
import { Code2, Heart } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-background">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <Code2 className="h-7 w-7 text-indigo-400" />
              <span className="text-2xl font-bold">
                Code<span className="text-indigo-400">ForU</span>
              </span>
            </div>

            <p className="mt-5 max-w-md leading-7 text-muted-foreground">
              Practice coding, participate in contests, sharpen your
              problem-solving skills, and prepare for technical interviews—
              all on one modern platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/problems" className="transition hover:text-white">
                  Problems
                </Link>
              </li>

              <li>
                <Link href="/contests" className="transition hover:text-white">
                  Contests
                </Link>
              </li>

              <li>
                <Link href="/leaderboard" className="transition hover:text-white">
                  Leaderboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 font-semibold">Resources</h3>

            <ul className="space-y-3 text-muted-foreground">
              <li>
                <Link href="/docs" className="transition hover:text-white">
                  Documentation
                </Link>
              </li>

              <li>
                <Link href="/api" className="transition hover:text-white">
                  API
                </Link>
              </li>

              <li>
                <Link href="/about" className="transition hover:text-white">
                  About
                </Link>
              </li>

              <li>
                <Link href="/contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 font-semibold">Connect</h3>

            <div className="flex gap-3">
              <Link
                href="https://github.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-indigo-500/40 hover:bg-white/10"
              >
                <FaGithub className="text-lg" />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-indigo-500/40 hover:bg-white/10"
              >
                <FaLinkedin className="text-lg" />
              </Link>

              <Link
                href="https://x.com"
                target="_blank"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur transition hover:border-indigo-500/40 hover:bg-white/10"
              >
                <FaXTwitter className="text-lg" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© 2026 CodeForU. All rights reserved.</p>

          <p className="flex items-center gap-2">
            Built with{" "}
            <Heart className="h-4 w-4 fill-red-500 text-red-500" />
            by CodeForU Team
          </p>
        </div>
      </div>
    </footer>
  );
}