"use client";

import Link from "next/link";

export function AppSidebar() {
  return (
    <aside className="w-64 border-r bg-background p-4">
      <nav className="flex flex-col gap-2">
        <Link href="/problems">Problems</Link>

        <Link href="/contests">Contests</Link>

        <Link href="/profile">Profile</Link>

        <Link href="/settings">Settings</Link>
      </nav>
    </aside>
  );
}