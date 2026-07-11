"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";

import { DifficultyBadge } from "@/components/problem/DifficultyBadge";
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
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground text-lg">
          Loading problem...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto max-w-5xl py-10">
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-500">
          {error}
        </div>
      </div>
    );
  }

  // Wait until the API finishes
  if (!selectedProblem) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">
          Problem not found.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-5xl space-y-8 py-8">
      <section className="space-y-4">
        <h1 className="text-4xl font-bold">
          {selectedProblem.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3">
          <DifficultyBadge
            difficulty={selectedProblem.difficulty}
          />

          {selectedProblem.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <ProblemContent problem={selectedProblem} />
    </div>
  );
}