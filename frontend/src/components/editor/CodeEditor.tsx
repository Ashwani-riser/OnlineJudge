"use client";

import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  language: "c" | "cpp" | "java" | "python";
  value: string;
  onChange: (value: string) => void;
}

export function CodeEditor({
  language,
  value,
  onChange,
}: CodeEditorProps) {
  return (
    <div className="h-full w-full overflow-hidden">
      <Editor
        height="100%"
        width="100%"
        language={language}
        theme="vs-dark"
        value={value}
        onChange={(value) => onChange(value ?? "")}
        options={{
          minimap: {
            enabled: false,
          },
          fontSize: 15,
          fontLigatures: true,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          tabSize: 4,
          wordWrap: "on",
          padding: {
            top: 16,
          },
        }}
      />
    </div>
  );
}