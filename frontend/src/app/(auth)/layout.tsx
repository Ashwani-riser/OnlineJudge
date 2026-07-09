import type { ReactNode } from "react";
import { AuthLayout } from "@/components/auth";
import AuthGuard from "@/components/auth/AuthGuard";

export default function Layout({
  children,
}: {
  children: ReactNode;
}) {
  return (
  <AuthGuard>
    <AuthLayout>{children}</AuthLayout>
  </AuthGuard>
);
}