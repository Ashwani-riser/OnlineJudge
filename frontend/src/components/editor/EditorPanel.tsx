"use client";

import { useState } from "react";
import axios from "axios";

import { CodeEditor } from "./CodeEditor";
import { EditorToolbar } from "./EditorToolbar";
import { OutputPanel } from "./OutputPanel";

import { Textarea } from "@/components/ui/textarea";
import { EDITOR_TEMPLATES } from "@/constants/editorTemplates";
import { submissionService } from "@/services/submission.service";

type Language = "c" | "cpp" | "java" | "python";

interface EditorPanelProps {
  problemId: string;
  sampleInput: string;
}

export function EditorPanel({
  problemId,
  sampleInput,
}: EditorPanelProps) {
  const [language, setLanguage] =
    useState<Language>("cpp");

  const [code, setCode] = useState(
    EDITOR_TEMPLATES.cpp
  );

  const [customInput, setCustomInput] =
    useState("");

  const [output, setOutput] =
    useState("");

  const [error, setError] =
    useState("");

  const [
    executionTime,
    setExecutionTime,
  ] = useState<number>();

  const [verdict, setVerdict] =
    useState("");

  const [isRunning, setIsRunning] =
    useState(false);

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false);

  const handleLanguageChange = (
    newLanguage: Language
  ) => {
    setLanguage(newLanguage);

    setCode(
      EDITOR_TEMPLATES[newLanguage]
    );

    setOutput("");
    setError("");
    setVerdict("");
    setExecutionTime(undefined);
  };

  const handleRun = async () => {
    try {
      setIsRunning(true);

      setOutput("");
      setError("");
      setVerdict("");
      setExecutionTime(undefined);

      const result =
        await submissionService.runCode({
          language,
          sourceCode: code,
          input:
            customInput.trim() === ""
              ? sampleInput
              : customInput,
        });

      if (result.success) {
        setOutput(result.output ?? "");
        setVerdict(
          "Execution Successful"
        );
      } else {
        setOutput("");
        setError(
          result.error ??
            "Code execution failed."
        );
        setVerdict(result.type ?? "");
      }

      setExecutionTime(
        result.executionTime
      );
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ??
            "Network error. Please try again."
        );
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setIsRunning(false);
    }
  };
    const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      setOutput("");
      setError("");
      setVerdict("");
      setExecutionTime(undefined);

      const submission =
        await submissionService.submitSolution({
          problemId,
          language,
          sourceCode: code,
        });

      setVerdict(submission.verdict);

      if (submission.executionTime !== undefined) {
        setExecutionTime(submission.executionTime);
      }

      if (submission.error) {
        setError(submission.error);
      }

      if (submission.output) {
        setOutput(submission.output);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setError(
          error.response?.data?.message ??
            "Failed to submit solution."
        );
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-card">
      <EditorToolbar
        language={language}
        onLanguageChange={handleLanguageChange}
        onRun={handleRun}
        onSubmit={handleSubmit}
        isRunning={isRunning}
        isSubmitting={isSubmitting}
      />

      {/* Editor */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <CodeEditor
          language={language}
          value={code}
          onChange={setCode}
        />
      </div>

      {/* Bottom Panel */}
      <div className="h-72 border-t flex overflow-hidden">
        {/* Left */}
        <div className="w-1/2 border-r flex flex-col">
          <div className="border-b px-4 py-3">
            <h3 className="font-semibold">
              Custom Input
            </h3>

            <p className="mt-1 text-xs text-muted-foreground">
              Leave empty to use sample input.
            </p>
          </div>

          <div className="flex-1 p-3">
            <Textarea
              value={customInput}
              onChange={(e) =>
                setCustomInput(e.target.value)
              }
              placeholder={sampleInput}
              className="h-full resize-none font-mono"
            />
          </div>
        </div>

        {/* Right */}
        <div className="w-1/2 overflow-hidden">
          <OutputPanel
            output={output}
            error={error}
            executionTime={executionTime}
            verdict={verdict}
          />
        </div>
      </div>
    </div>
  );
}