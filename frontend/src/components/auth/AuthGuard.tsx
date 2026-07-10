"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useAuthStore } from "@/store/auth.store";

export default function AuthGuard({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { isAuthenticated, isLoading } = useAuthStore();

  useEffect(() => {
     if (!isLoading && isAuthenticated) {
       router.replace("/problems");
     }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return null;
  }

  return <>{children}</>;
}