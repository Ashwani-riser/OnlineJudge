"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth.store";

export function ProblemsHeader() {
  const router = useRouter();

  const { user } = useAuthStore();

  return (
    <div className="flex items-center justify-between">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Problems
        </h1>

        <p className="text-muted-foreground">
          Solve coding problems and improve your programming skills.
        </p>
      </div>

      {user?.role === "admin" && (
        <Button
          onClick={() =>
            router.push("/admin/problems/new")
          }
        >
          Create Problem
        </Button>
      )}
    </div>
  );
}