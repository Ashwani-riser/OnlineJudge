import { api } from "./api";

import type { ApiResponse } from "@/types/auth";

export interface RunCodePayload {
  language: "c" | "cpp" | "java" | "python";
  sourceCode: string;
  input: string;
}

export interface RunCodeResponse {
  success: boolean;
  output?: string;
  error?: string;
  type?: string;
  executionTime: number;
}

export interface CreateSubmissionPayload {
  problemId: string;
  language: "c" | "cpp" | "java" | "python";
  sourceCode: string;
}

export const submissionService = {
  async runCode(data: RunCodePayload) {
    const response = await api.post<
      ApiResponse<RunCodeResponse>
    >("/submissions/run", data);

    return response.data.data;
  },

  async submitSolution(
    data: CreateSubmissionPayload
  ) {
    const response = await api.post(
      "/submissions",
      data
    );

    return response.data.data;
  },
};