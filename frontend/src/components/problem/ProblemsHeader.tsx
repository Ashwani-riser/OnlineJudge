"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth.store";

export function ProblemsHeader() {
  const router = useRouter();
  const { user } = useAuthStore();

  return (
    <header className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight">
          Problems
        </h1>

        <p className="max-w-2xl text-sm text-muted-foreground">
          Solve coding challenges, improve your algorithmic thinking,
          and prepare for technical interviews.
        </p>
      </div>

      {user?.role === "admin" && (
        <Button
          onClick={() => router.push("/admin/problems/new")}
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          <span>Create Problem</span>
        </Button>
      )}
    </header>
  );
}