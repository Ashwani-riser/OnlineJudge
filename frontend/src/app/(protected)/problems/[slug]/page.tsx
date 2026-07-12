"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { ProblemContent } from "@/components/problem/ProblemContent";
import { useProblemStore } from "@/store/problem.store";

export default function ProblemPage() {
  const { slug } = useParams<{ slug: string }>();

  const {
    selectedProblem,
    isLoading,
    error,
    fetchProblemBySlug,
    clearSelectedProblem,
  } = useProblemStore();

  useEffect(() => {
    if (!slug) return;

    fetchProblemBySlug(slug);

    return () => {
      clearSelectedProblem();
    };
  }, [slug, fetchProblemBySlug, clearSelectedProblem]);

  if (isLoading) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-lg text-muted-foreground">
          Loading problem...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-8">
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-500">
          {error}
        </div>
      </div>
    );
  }

  if (!selectedProblem) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center">
        <p className="text-muted-foreground">
          Problem not found.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full py-4">
      <ProblemContent problem={selectedProblem} />
    </div>
  );
}