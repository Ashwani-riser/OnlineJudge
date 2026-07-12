export type Language =
  | "c"
  | "cpp"
  | "java"
  | "python";

export interface RunCodePayload {
  language: Language;
  sourceCode: string;
  input: string;
}

export interface RunCodeResult {
  success: boolean;
  output?: string;
  error?: string;
  type?: string;
  executionTime: number;
}

export interface SubmitPayload {
  problemId: string;
  language: Language;
  sourceCode: string;
}