import { api } from "./api";

import type { ApiResponse } from "@/types/auth";
import type { Problem } from "@/types/problem";

export const problemService = {
  async getAllProblems() {
    const response = await api.get<ApiResponse<Problem[]>>(
      "/problems"
    );

    return response.data.data;
  },
};