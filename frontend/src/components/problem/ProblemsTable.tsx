import { ProblemRow } from "./ProblemRow";

import type { Problem } from "@/types/problem";

interface ProblemsTableProps {
  problems: Problem[];
}

export function ProblemsTable({
  problems,
}: ProblemsTableProps) {
  if (problems.length === 0) {
    return (
      <div className="rounded-2xl border bg-card px-6 py-16 text-center shadow-sm">
        <h3 className="text-xl font-semibold">
          No Problems Found
        </h3>

        <p className="mt-2 text-muted-foreground">
          Try changing your search or filter criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
      <table className="w-full border-collapse">
        <thead className="bg-muted/60">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold">
              Title
            </th>

            <th className="w-40 px-6 py-4 text-left text-sm font-semibold">
              Difficulty
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Tags
            </th>
          </tr>
        </thead>

        <tbody>
          {problems.map((problem) => (
            <ProblemRow
              key={problem._id}
              problem={problem}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}