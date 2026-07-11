"use client";

import { create } from "zustand";

import { problemService } from "@/services/problem.service";

import type {
  Problem,
  ProblemDetails,
} from "@/types/problem";

interface ProblemState {
  problems: Problem[];
  selectedProblem: ProblemDetails | null;

  isLoading: boolean;
  error: string | null;

  fetchProblems: () => Promise<void>;
  fetchProblemBySlug: (slug: string) => Promise<void>;
  clearSelectedProblem: () => void;
}

export const useProblemStore = create<ProblemState>((set) => ({
  problems: [],
  selectedProblem: null,

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

  fetchProblemBySlug: async (slug) => {
  set({
    isLoading: true,
    error: null,
  });

  try {
    const problem = await problemService.getProblemBySlug(slug);
    console.log("Fetched Problem:", problem);
    
    set({
      selectedProblem: problem,
      isLoading: false,
    });
  } catch (error: any) {
    set({
      error:
        error?.response?.data?.message ??
        "Failed to fetch problem.",
      isLoading: false,
    });
  }
},

  clearSelectedProblem: () =>
    set({
      selectedProblem: null,
    }),
}));