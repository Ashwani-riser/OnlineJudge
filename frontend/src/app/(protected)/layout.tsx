"use client";

import type { ReactNode } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth.store";
import { AppLayout } from "@/components/layout/AppLayout";

export default function ProtectedLayout({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();

  const { isAuthenticated, isLoading } = useAuthStore();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading || !isAuthenticated) {
    return null;
  }

  return <AppLayout>{children}</AppLayout>;
}