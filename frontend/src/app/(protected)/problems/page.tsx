"use client";

import { useEffect, useMemo, useState } from "react";

import { ProblemsHeader } from "@/components/problem/ProblemsHeader";
import { ProblemsToolbar } from "@/components/problem/ProblemsToolbar";
import { ProblemsList } from "@/components/problem/ProblemsList";

import { useProblemStore } from "@/store/problem.store";

export default function ProblemsPage() {
  const {
    problems,
    isLoading,
    fetchProblems,
  } = useProblemStore();

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] =
    useState("All");

  useEffect(() => {
    fetchProblems();
  }, [fetchProblems]);

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const matchesSearch = problem.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesDifficulty =
        difficulty === "All" ||
        problem.difficulty === difficulty;

      return (
        matchesSearch &&
        matchesDifficulty
      );
    });
  }, [
    problems,
    search,
    difficulty,
  ]);

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">
          Loading problems...
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ProblemsHeader />

      <ProblemsToolbar
        search={search}
        difficulty={difficulty}
        onSearchChange={setSearch}
        onDifficultyChange={
          setDifficulty
        }
      />

      <ProblemsList
        problems={filteredProblems}
      />
    </div>
  );
}