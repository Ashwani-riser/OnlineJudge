"use client";

import { Search } from "lucide-react";

interface ProblemsToolbarProps {
  search: string;
  difficulty: string;

  onSearchChange: (value: string) => void;
  onDifficultyChange: (difficulty: string) => void;
}

const difficulties = [
  "All",
  "Easy",
  "Medium",
  "Hard",
];

export function ProblemsToolbar({
  search,
  difficulty,
  onSearchChange,
  onDifficultyChange,
}: ProblemsToolbarProps) {
  return (
    <div className="space-y-5">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

        <input
          type="text"
          placeholder="Search problems..."
          value={search}
          onChange={(e) =>
            onSearchChange(e.target.value)
          }
          className="h-12 w-full rounded-xl border bg-background pl-12 pr-4 outline-none transition-all focus:border-primary"
        />
      </div>

      {/* Difficulty */}
      <div className="flex flex-wrap gap-3">
        {difficulties.map((item) => (
          <button
            key={item}
            onClick={() =>
              onDifficultyChange(item)
            }
            className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
              difficulty === item
                ? "bg-primary text-primary-foreground"
                : "border bg-card hover:bg-muted"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}