"use client";

import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";

import { EditorPanel } from "@/components/editor/EditorPanel";
import { DifficultyBadge } from "@/components/problem/DifficultyBadge";

import type { ProblemDetails } from "@/types/problem";

interface ProblemContentProps {
  problem: ProblemDetails;
}

export function ProblemContent({
  problem,
}: ProblemContentProps) {
  return (
    <PanelGroup
      direction="horizontal"
      className="min-h-[calc(100vh-120px)] rounded-xl border bg-card"
    >
      {/* Left Panel */}
      <Panel defaultSize={45} minSize={30}>
        <div className="h-[calc(100vh-120px)] overflow-y-auto p-6">

          {/* Header */}
          <div className="border-b pb-6">
            <h1 className="text-3xl font-bold">
              {problem.title}
            </h1>

            <div className="mt-4 flex flex-wrap gap-3">
              <DifficultyBadge
                difficulty={problem.difficulty}
              />

              {problem.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Statement */}
          <section className="mt-6 mb-6">
            <h2 className="mb-3 text-xl font-semibold">
              Problem Statement
            </h2>

            <p className="whitespace-pre-wrap leading-7 text-muted-foreground">
              {problem.statement}
            </p>
          </section>

          {/* Constraints */}
          <section className="mb-6">
            <h3 className="mb-3 text-lg font-semibold">
              Constraints
            </h3>

            <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
              {problem.constraints}
            </pre>
          </section>

          {/* Input */}
          <section className="mb-6">
            <h3 className="mb-3 text-lg font-semibold">
              Input Format
            </h3>

            <p className="whitespace-pre-wrap leading-7 text-muted-foreground">
              {problem.inputFormat}
            </p>
          </section>

          {/* Output */}
          <section className="mb-6">
            <h3 className="mb-3 text-lg font-semibold">
              Output Format
            </h3>

            <p className="whitespace-pre-wrap leading-7 text-muted-foreground">
              {problem.outputFormat}
            </p>
          </section>

          {/* Samples */}
          <div className="grid gap-4 md:grid-cols-2">
            <section>
              <h3 className="mb-3 text-lg font-semibold">
                Sample Input
              </h3>

              <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                {problem.sampleInput}
              </pre>
            </section>

            <section>
              <h3 className="mb-3 text-lg font-semibold">
                Sample Output
              </h3>

              <pre className="overflow-x-auto rounded-lg bg-muted p-4 text-sm">
                {problem.sampleOutput}
              </pre>
            </section>
          </div>

        </div>
      </Panel>

      <PanelResizeHandle className="w-1 cursor-col-resize bg-border transition-colors hover:bg-primary" />

      {/* Right Panel */}
      <Panel defaultSize={55} minSize={35}>
        <div className="h-[calc(100vh-120px)]">
          <EditorPanel />
        </div>
      </Panel>
    </PanelGroup>
  );
}