"use client";

import {
  CheckCircle2,
  Clock3,
  Terminal,
  XCircle,
} from "lucide-react";

interface OutputPanelProps {
  output?: string;
  error?: string;
  executionTime?: number;
  verdict?: string;
}

export function OutputPanel({
  output,
  error,
  executionTime,
  verdict,
}: OutputPanelProps) {
  const isAccepted = verdict === "Accepted";

  return (
    <div className="flex h-full flex-col border-t bg-card">
      {/* Header */}
      <div className="flex items-center justify-between border-b px-5 py-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-green-500" />

          <h3 className="text-lg font-semibold">
            Output
          </h3>
        </div>

        {executionTime !== undefined && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock3 className="h-4 w-4" />
            {executionTime} ms
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex-1 overflow-auto p-5">
        {verdict && (
          <div
            className={`mb-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold ${
              isAccepted
                ? "bg-green-500/10 text-green-500"
                : "bg-red-500/10 text-red-500"
            }`}
          >
            {isAccepted ? (
              <CheckCircle2 className="h-4 w-4" />
            ) : (
              <XCircle className="h-4 w-4" />
            )}

            {verdict}
          </div>
        )}

        {error ? (
          <pre className="overflow-x-auto rounded-xl border border-red-500/20 bg-red-500/10 p-4 font-mono text-sm text-red-400">
            {error}
          </pre>
        ) : output ? (
          <pre className="overflow-x-auto rounded-xl border bg-muted/50 p-4 font-mono text-sm leading-6">
            {output}
          </pre>
        ) : (
          <div className="flex h-full min-h-[170px] flex-col items-center justify-center rounded-xl border border-dashed text-center">
            <Terminal className="mb-4 h-12 w-12 text-muted-foreground/40" />

            <h4 className="text-lg font-semibold">
              No Output Yet
            </h4>

            <p className="mt-2 text-sm text-muted-foreground">
              Click <span className="font-semibold">Run</span> to execute your
              code.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}