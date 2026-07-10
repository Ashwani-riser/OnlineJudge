import { z } from "zod";

export const createProblemSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters"),

  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters"),

  statement: z
    .string()
    .min(10, "Statement is required"),

  difficulty: z.enum([
    "Easy",
    "Medium",
    "Hard",
  ]),

  constraints: z
    .string()
    .min(1, "Constraints are required"),

  inputFormat: z
    .string()
    .min(1, "Input format is required"),

  outputFormat: z
    .string()
    .min(1, "Output format is required"),

  sampleInput: z
    .string()
    .min(1, "Sample input is required"),

  sampleOutput: z
    .string()
    .min(1, "Sample output is required"),

  // User enters: "array, dp, graph"
  tags: z
    .string()
    .min(1, "At least one tag is required"),
});

export type CreateProblemInput =
  z.infer<typeof createProblemSchema>;