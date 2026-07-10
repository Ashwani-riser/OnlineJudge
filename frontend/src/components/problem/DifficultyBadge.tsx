interface DifficultyBadgeProps {
  difficulty: "Easy" | "Medium" | "Hard";
}

export function DifficultyBadge({
  difficulty,
}: DifficultyBadgeProps) {
  const styles = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${styles[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}