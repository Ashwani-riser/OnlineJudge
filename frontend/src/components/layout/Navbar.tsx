"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth.store";

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
  const pathname = usePathname();
  const router = useRouter();

  const { user, logout } = useAuthStore();

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="flex h-20 items-center justify-between px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-black tracking-tight transition-transform duration-200 hover:scale-105"
        >
          <span className="text-foreground">
            Code
          </span>

          <span className="bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
            ForU
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => {
            const active =
              pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`rounded-full px-4 py-2 text-[15px] font-medium transition-all duration-200 ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        {!user ? (
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost">
                Login
              </Button>
            </Link>

            <Link href="/signup">
              <Button>
                Sign Up
              </Button>
            </Link>
          </div>
        ) : (
          <div className="group relative">
            <button
              className="
                flex items-center gap-2
                rounded-full
                border border-border/60
                bg-background/60
                px-2 py-1.5
                transition-all duration-200
                hover:border-primary/30
                hover:bg-muted/40
                hover:shadow-lg
              "
            >
              {/* Avatar */}
              <div
                className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full
                  bg-gradient-to-br
                  from-indigo-500
                  via-violet-500
                  to-purple-600
                  text-sm font-bold
                  text-white
                "
              >
                {user.username
                  ?.substring(0, 2)
                  .toUpperCase()}
              </div>

              <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Dropdown */}
            <div
              className="
                invisible absolute right-0 mt-3
                w-64 overflow-hidden rounded-2xl
                border border-border
                bg-background/95
                shadow-2xl
                opacity-0
                backdrop-blur-xl
                transition-all duration-200
                translate-y-2
                group-hover:visible
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              {/* Header */}
              <div className="border-b px-5 py-4">
                <p className="font-semibold">
                  {user.username}
                </p>

                <p className="text-sm text-muted-foreground">
                  {user.email}
                </p>
              </div>

              <button
                onClick={() =>
                  router.push("/profile")
                }
                className="flex w-full items-center gap-3 px-5 py-3 text-sm transition-colors hover:bg-muted"
              >
                <User className="h-4 w-4" />
                My Profile
              </button>

              <button
                onClick={() =>
                  router.push("/settings")
                }
                className="flex w-full items-center gap-3 px-5 py-3 text-sm transition-colors hover:bg-muted"
              >
                <Settings className="h-4 w-4" />
                Settings
              </button>

              <div className="border-t" />

              <button
                onClick={() => {
                  logout();
                  router.push("/");
                }}
                className="flex w-full items-center gap-3 px-5 py-3 text-sm text-red-500 transition-colors hover:bg-red-500/10"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}