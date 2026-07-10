"use client";

import { useEffect } from "react";

import { ProblemsHeader } from "@/components/problem/ProblemsHeader";
import { ProblemsToolbar } from "@/components/problem/ProblemsToolbar";

import { useProblemStore } from "@/store/problem.store";
import { ProblemsTable } from "@/components/problem/ProblemsTable";

export default function ProblemsPage() {
  const {
    problems,
    isLoading,
    fetchProblems,
  } = useProblemStore();

  useEffect(() => {
    fetchProblems();
  }, [fetchProblems]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-8">
      <ProblemsHeader />

      <ProblemsToolbar />

      <ProblemsTable problems={problems} />
    </div>
  );
}