import { ProblemCard } from "./ProblemCard";

import type { Problem } from "@/types/problem";

interface ProblemsListProps {
  problems: Problem[];
}

export function ProblemsList({
  problems,
}: ProblemsListProps) {
  if (problems.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center rounded-2xl border border-dashed bg-card">
        <div className="text-center">
          <h3 className="text-lg font-semibold">
            No Problems Found
          </h3>

          <p className="mt-2 text-sm text-muted-foreground">
            Try changing your search or difficulty filter.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {problems.map((problem) => (
        <ProblemCard
          key={problem._id}
          problem={problem}
        />
      ))}
    </div>
  );
}