import Link from "next/link";
import { DifficultyBadge } from "./DifficultyBadge";

import type { Problem } from "@/types/problem";

interface ProblemRowProps {
  problem: Problem;
}

export function ProblemRow({
  problem,
}: ProblemRowProps) {
  return (
   <tr className="border-b last:border-0">
  <td className="px-4 py-4 font-medium">
    <Link
      href={`/problems/${problem.slug}`}
      className="transition-colors hover:text-primary hover:underline"
    >
      {problem.title}
    </Link>
  </td>

  <td className="px-4 py-4">
    <DifficultyBadge difficulty={problem.difficulty} />
  </td>

  <td className="px-4 py-4">
    <div className="flex flex-wrap gap-2">
      {problem.tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md bg-muted px-2 py-1 text-xs"
        >
          {tag}
        </span>
      ))}
    </div>
  </td>
</tr>
  );
}