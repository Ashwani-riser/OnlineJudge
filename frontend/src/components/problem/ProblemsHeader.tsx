"use client";

import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store/auth.store";

export function ProblemsHeader() {
  const router = useRouter();

  const { user } = useAuthStore();

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Problems
        </h1>

        <p className="mt-1 text-muted-foreground">
          Solve coding challenges and sharpen your problem-solving skills.
        </p>
      </div>

      {user?.role === "admin" && (
        <Button
          onClick={() => router.push("/admin/problems/new")}
          className="gap-2"
        >
          <Plus className="h-4 w-4" />
          Create Problem
        </Button>
      )}
    </div>
  );
}