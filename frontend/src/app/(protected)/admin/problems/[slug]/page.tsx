"use client";

import { useEffect } from "react";
import { notFound, useParams } from "next/navigation";

import { DifficultyBadge } from "@/components/problem/DifficultyBadge";
import { useProblemStore } from "@/store/problem.store";

export default function ProblemPage() {
  const params = useParams();
  const slug = params.slug as string;

  const {
    selectedProblem,
    isLoading,
    error,
    fetchProblemBySlug,
    clearSelectedProblem,
  } = useProblemStore();

  useEffect(() => {
    if (slug) {
      fetchProblemBySlug(slug);
    }

    return () => {
      clearSelectedProblem();
    };
  }, [slug, fetchProblemBySlug, clearSelectedProblem]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!selectedProblem) {
    notFound();
  }

  return (
    <div>
      <h1>{selectedProblem.title}</h1>

      <DifficultyBadge difficulty={selectedProblem.difficulty} />

      {/* Rest of the UI */}
    </div>
  );
}