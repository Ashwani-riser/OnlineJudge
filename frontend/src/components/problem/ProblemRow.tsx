import Link from "next/link";

import { DifficultyBadge } from "./DifficultyBadge";

import type { Problem } from "@/types/problem";

interface ProblemRowProps {
  problem: Problem;
}

export function ProblemRow({
  problem,
}: ProblemRowProps) {
    console.log("Problem Slug:", problem.slug);
  return (
    <tr className="border-b transition-colors hover:bg-muted/40 last:border-0">
      <td className="px-6 py-5">
        <Link
          href={`/problems/${problem.slug}`}
          className="font-medium transition-colors hover:text-primary"
        >
          {problem.title}
        </Link>
      </td>

      <td className="px-6 py-5">
        <DifficultyBadge
          difficulty={problem.difficulty}
        />
      </td>

      <td className="px-6 py-5">
        <div className="flex flex-wrap gap-2">
          {problem.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </td>
    </tr>
  );
}