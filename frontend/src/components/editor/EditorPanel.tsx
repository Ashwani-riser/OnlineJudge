"use client";

import { useState } from "react";

import { CodeEditor } from "./CodeEditor";
import { EditorToolbar } from "./EditorToolbar";
import { OutputPanel } from "./OutputPanel";

import { EDITOR_TEMPLATES } from "@/constants/editorTemplates";

type Language = "c" | "cpp" | "java" | "python";

export function EditorPanel() {
  const [language, setLanguage] =
    useState<Language>("cpp");

  const [code, setCode] = useState(
    EDITOR_TEMPLATES.cpp
  );

  const [output, setOutput] = useState("");

  const [error, setError] = useState("");

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
    setIsRunning(true);

    setOutput("");
    setError("");
    setVerdict("");
    setExecutionTime(undefined);

    setTimeout(() => {
      setOutput(
        "Run API will be integrated in the next step."
      );

      setExecutionTime(0);

      setIsRunning(false);
    }, 500);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setVerdict(
        "Submit API will be integrated next."
      );

      setIsSubmitting(false);
    }, 500);
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

      {/* Output */}
      <div className="h-48 border-t">
        <OutputPanel
          output={output}
          error={error}
          executionTime={executionTime}
          verdict={verdict}
        />
      </div>
    </div>
  );
}