import { api } from "./api";

import type { ApiResponse } from "@/types/auth";
import type {
  Problem,
  CreateProblemPayload,
} from "@/types/problem";

export const problemService = {
  async getAllProblems() {
    const response = await api.get<ApiResponse<Problem[]>>(
      "/problems"
    );

    return response.data.data;
  },

  async createProblem(data: CreateProblemPayload) {
    const response = await api.post<ApiResponse<Problem>>(
      "/problems",
      data
    );

    return response.data.data;
  },
};