import { ProblemSection } from "./ProblemSection";

import type { ProblemDetails } from "@/types/problem";

interface ProblemContentProps {
  problem: ProblemDetails;
}

export function ProblemContent({
  problem,
}: ProblemContentProps) {
  return (
    <div className="space-y-6">
      <ProblemSection title="Problem Statement">
        <p className="whitespace-pre-wrap leading-7 text-muted-foreground">
          {problem.statement}
        </p>
      </ProblemSection>

      <ProblemSection title="Constraints">
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          {problem.constraints}
        </pre>
      </ProblemSection>

      <ProblemSection title="Input Format">
        <p className="whitespace-pre-wrap leading-7 text-muted-foreground">
          {problem.inputFormat}
        </p>
      </ProblemSection>

      <ProblemSection title="Output Format">
        <p className="whitespace-pre-wrap leading-7 text-muted-foreground">
          {problem.outputFormat}
        </p>
      </ProblemSection>

      <ProblemSection title="Sample Input">
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          {problem.sampleInput}
        </pre>
      </ProblemSection>

      <ProblemSection title="Sample Output">
        <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
          {problem.sampleOutput}
        </pre>
      </ProblemSection>
    </div>
  );
}