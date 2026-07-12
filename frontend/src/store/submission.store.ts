"use client";

import { create } from "zustand";

import { submissionService } from "@/services/submission.service";

import type {
  RunCodePayload,
  RunCodeResult,
  SubmitPayload,
} from "@/types/submission";

interface SubmissionState {
  isRunning: boolean;
  isSubmitting: boolean;

  runResult: RunCodeResult | null;

  runCode: (
    data: RunCodePayload
  ) => Promise<void>;

  submitSolution: (
    data: SubmitPayload
  ) => Promise<any>;

  clearResult: () => void;
}

export const useSubmissionStore =
  create<SubmissionState>((set) => ({
    isRunning: false,
    isSubmitting: false,

    runResult: null,

    runCode: async (data) => {
      set({
        isRunning: true,
      });

      try {
        const result =
          await submissionService.runCode(data);

        set({
          runResult: result,
          isRunning: false,
        });
      } catch (error: any) {
        set({
          isRunning: false,
          runResult: {
            success: false,
            type: "Error",
            error:
              error?.response?.data?.message ??
              "Failed to run code.",
            executionTime: 0,
          },
        });
      }
    },

    submitSolution: async (data) => {
      set({
        isSubmitting: true,
      });

      try {
        const result =
          await submissionService.submitSolution(
            data
          );

        set({
          isSubmitting: false,
        });

        return result;
      } catch (error) {
        set({
          isSubmitting: false,
        });

        throw error;
      }
    },

    clearResult: () =>
      set({
        runResult: null,
      }),
  }));