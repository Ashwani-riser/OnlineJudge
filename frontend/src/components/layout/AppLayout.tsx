"use client";

import type { ReactNode } from "react";

import { AppNavbar } from "./AppNavbar";
import { AppSidebar } from "./AppSidebar";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({
  children,
}: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <AppNavbar />

      <div className="flex flex-1">
        <AppSidebar />

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}