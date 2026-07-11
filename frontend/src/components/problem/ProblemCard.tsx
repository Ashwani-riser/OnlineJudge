"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Circle,
  ChevronRight,
} from "lucide-react";

import { DifficultyBadge } from "./DifficultyBadge";

import type { Problem } from "@/types/problem";

interface ProblemCardProps {
  problem: Problem;

  // Later this will come from backend
  solved?: boolean;
}

export function ProblemCard({
  problem,
  solved = false,
}: ProblemCardProps) {
  return (
    <Link
      href={`/problems/${problem.slug}`}
      className="group block"
    >
      <div
        className="
          flex items-center justify-between
          rounded-xl border border-border/60
          bg-card
          px-5 py-3
          transition-all duration-200
          hover:border-primary/30
          hover:bg-muted/30
          hover:shadow-sm
        "
      >
        {/* Left */}
        <div className="flex items-center gap-3">
          {solved ? (
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
          ) : (
            <Circle className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
          )}

          <h3 className="text-[15px] font-medium transition-colors group-hover:text-primary">
            {problem.title}
          </h3>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <DifficultyBadge
            difficulty={problem.difficulty}
          />

          <ChevronRight
            className="
              h-4 w-4
              text-muted-foreground
              opacity-0
              transition-all duration-200
              group-hover:translate-x-1
              group-hover:opacity-100
            "
          />
        </div>
      </div>
    </Link>
  );
}