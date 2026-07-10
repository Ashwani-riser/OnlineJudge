import { ProblemRow } from "./problemRow";

import type { Problem } from "@/types/problem";

interface ProblemsTableProps {
  problems: Problem[];
}

export function ProblemsTable({
  problems,
}: ProblemsTableProps) {
  if (problems.length === 0) {
    return (
      <div className="rounded-lg border py-12 text-center">
        <h3 className="text-lg font-semibold">
          No problems found
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          There are no problems available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg border">
      <table className="w-full">
        <thead className="border-b bg-muted/50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Title
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
              Difficulty
            </th>

            <th className="px-4 py-3 text-left text-sm font-semibold">
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