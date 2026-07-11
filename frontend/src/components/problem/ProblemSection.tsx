import type { ReactNode } from "react";

interface ProblemSectionProps {
  title: string;
  children: ReactNode;
}

export function ProblemSection({
  title,
  children,
}: ProblemSectionProps) {
  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold tracking-tight">
        {title}
      </h2>

      <div className="text-sm leading-7 text-muted-foreground">
        {children}
      </div>
    </section>
  );
}