"use client";

import { useEffect, useMemo, useState } from "react";

import { ProblemsHeader } from "@/components/problem/ProblemsHeader";
import { ProblemsToolbar } from "@/components/problem/ProblemsToolbar";
import { ProblemsTable } from "@/components/problem/ProblemsTable";

import { useProblemStore } from "@/store/problem.store";
import { ProblemsList } from "@/components/problem/ProblemsList";

export default function ProblemsPage() {
  const {
    problems,
    isLoading,
    fetchProblems,
  } = useProblemStore();

  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState("all");

  useEffect(() => {
    fetchProblems();
  }, [fetchProblems]);

  const filteredProblems = useMemo(() => {
    return problems.filter((problem) => {
      const matchesSearch = problem.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesDifficulty =
        difficulty === "all" ||
        problem.difficulty === difficulty;

      return matchesSearch && matchesDifficulty;
    });
  }, [problems, search, difficulty]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-8">
      <ProblemsHeader />

<ProblemsToolbar
  search={search}
  difficulty={difficulty}
  onSearchChange={setSearch}
  onDifficultyChange={setDifficulty}
/>

<ProblemsList
  problems={filteredProblems}
/>
    </div>
  );
}