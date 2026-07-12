"use client";

interface LanguageSelectorProps {
  value: "c" | "cpp" | "java" | "python";
  onChange: (
    language: "c" | "cpp" | "java" | "python"
  ) => void;
}

const languages = [
  {
    label: "C",
    value: "c",
  },
  {
    label: "C++",
    value: "cpp",
  },
  {
    label: "Java",
    value: "java",
  },
  {
    label: "Python",
    value: "python",
  },
];

export function LanguageSelector({
  value,
  onChange,
}: LanguageSelectorProps) {
  return (
    <select
      value={value}
      onChange={(e) =>
        onChange(
          e.target.value as
            | "c"
            | "cpp"
            | "java"
            | "python"
        )
      }
      className="rounded-lg border bg-background px-3 py-2 text-sm outline-none"
    >
      {languages.map((language) => (
        <option
          key={language.value}
          value={language.value}
        >
          {language.label}
        </option>
      ))}
    </select>
  );
}