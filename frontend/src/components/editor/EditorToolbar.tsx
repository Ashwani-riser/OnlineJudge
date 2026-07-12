"use client";

import { Play, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LanguageSelector } from "./LanguageSelector";

interface EditorToolbarProps {
  language: "c" | "cpp" | "java" | "python";

  onLanguageChange: (
    language: "c" | "cpp" | "java" | "python"
  ) => void;

  onRun: () => void;

  onSubmit: () => void;

  isRunning: boolean;

  isSubmitting: boolean;
}

export function EditorToolbar({
  language,
  onLanguageChange,
  onRun,
  onSubmit,
  isRunning,
  isSubmitting,
}: EditorToolbarProps) {
  return (
    <div className="flex items-center justify-between border-b p-4">
      <LanguageSelector
        value={language}
        onChange={onLanguageChange}
      />

      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={onRun}
          disabled={isRunning}
        >
          <Play className="mr-2 h-4 w-4" />

          {isRunning
            ? "Running..."
            : "Run"}
        </Button>

        <Button
          onClick={onSubmit}
          disabled={isSubmitting}
        >
          <Send className="mr-2 h-4 w-4" />

          {isSubmitting
            ? "Submitting..."
            : "Submit"}
        </Button>
      </div>
    </div>
  );
}