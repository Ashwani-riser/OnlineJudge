interface DifficultyBadgeProps {
  difficulty: "Easy" | "Medium" | "Hard";
}

const difficultyConfig = {
  Easy: {
    dot: "bg-emerald-500",
    badge:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
  },

  Medium: {
    dot: "bg-amber-500",
    badge:
      "border-amber-500/20 bg-amber-500/10 text-amber-400",
  },

  Hard: {
    dot: "bg-red-500",
    badge:
      "border-red-500/20 bg-red-500/10 text-red-400",
  },
};

export function DifficultyBadge({
  difficulty,
}: DifficultyBadgeProps) {
  const config = difficultyConfig[difficulty];

  return (
    <span
      className={`
        inline-flex items-center gap-2
        rounded-full border
        px-3 py-1.5
        text-xs font-semibold
        ${config.badge}
      `}
    >
      <span
        className={`h-2 w-2 rounded-full ${config.dot}`}
      />

      {difficulty}
    </span>
  );
}