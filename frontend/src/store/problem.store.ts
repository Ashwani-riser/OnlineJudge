"use client";

import { create } from "zustand";

import { problemService } from "@/services/problem.service";
import type { Problem } from "@/types/problem";

interface ProblemState {
  problems: Problem[];
  isLoading: boolean;
  error: string | null;

  fetchProblems: () => Promise<void>;
}

export const useProblemStore = create<ProblemState>((set) => ({
  problems: [],
  isLoading: false,
  error: null,

  fetchProblems: async () => {
  set({
    isLoading: true,
    error: null,
  });

  try {
    const problems = await problemService.getAllProblems();

    set({
      problems,
      isLoading: false,
    });
  } catch (error: any) {
    set({
      error:
        error?.response?.data?.message ??
        "Failed to fetch problems.",
      isLoading: false,
    });
  }
},
}));