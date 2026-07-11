"use client";

import type { ReactNode } from "react";

import Navbar from "./Navbar";

interface AppNavbarProps {
  children: ReactNode;
}

export function AppNavbar({
  children,
}: AppNavbarProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-6 py-8 lg:px-8">
        {children}
      </main>
    </div>
  );
}