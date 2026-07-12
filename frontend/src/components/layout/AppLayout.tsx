"use client";

import type { ReactNode } from "react";

import Navbar from "./Navbar";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="h-screen bg-background overflow-hidden">
      <Navbar />

      <main className="h-[calc(100vh-5rem)] overflow-hidden px-8 py-4">
        {children}
      </main>
    </div>
  );
}