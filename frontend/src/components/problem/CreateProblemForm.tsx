"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  createProblemSchema,
  type CreateProblemInput,
} from "@/lib/validations/Problem.Schema";

import { problemService } from "@/services/problem.service";

export function CreateProblemForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<CreateProblemInput>({
    resolver: zodResolver(createProblemSchema),
    defaultValues: {
      title: "",
      slug: "",
      statement: "",
      difficulty: "Easy",
      constraints: "",
      inputFormat: "",
      outputFormat: "",
      sampleInput: "",
      sampleOutput: "",
      tags: "",
    },
  });

  const title = watch("title");

  useEffect(() => {
    if (!title) {
      setValue("slug", "");
      return;
    }

    const slug = title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");

    setValue("slug", slug, {
      shouldValidate: true,
      shouldDirty: true,
    });
  }, [title, setValue]);

  const onSubmit = async (values: CreateProblemInput) => {
    try {
      const payload = {
        ...values,
        tags: values.tags
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean),
      };

      await problemService.createProblem(payload);

      toast.success("Problem created successfully.");

    router.push("/problems");
     router.refresh();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Failed to create problem."
      );
    }
  };
    return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="space-y-2">
        <Label htmlFor="title">Problem Title</Label>
        <Input
          id="title"
          placeholder="Enter problem title"
          {...register("title")}
        />
        {errors.title && (
          <p className="text-sm text-destructive">
            {errors.title.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          readOnly
          {...register("slug")}
        />
        {errors.slug && (
          <p className="text-sm text-destructive">
            {errors.slug.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="difficulty">Difficulty</Label>
        <Select
          defaultValue="Easy"
          onValueChange={(value) =>
            setValue(
              "difficulty",
              value as "Easy" | "Medium" | "Hard",
              {
                shouldValidate: true,
              }
            )
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="Select difficulty" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="Easy">
              Easy
            </SelectItem>

            <SelectItem value="Medium">
              Medium
            </SelectItem>

            <SelectItem value="Hard">
              Hard
            </SelectItem>
          </SelectContent>
        </Select>

        {errors.difficulty && (
          <p className="text-sm text-destructive">
            {errors.difficulty.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="statement">
          Problem Statement
        </Label>

        <Textarea
          id="statement"
          rows={10}
          placeholder="Write the complete problem statement..."
          {...register("statement")}
        />

        {errors.statement && (
          <p className="text-sm text-destructive">
            {errors.statement.message}
          </p>
        )}
      </div>
            <div className="space-y-2">
        <Label htmlFor="constraints">Constraints</Label>

        <Textarea
          id="constraints"
          rows={4}
          placeholder="Example: 1 ≤ N ≤ 10^5"
          {...register("constraints")}
        />

        {errors.constraints && (
          <p className="text-sm text-destructive">
            {errors.constraints.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="inputFormat">Input Format</Label>

        <Textarea
          id="inputFormat"
          rows={4}
          placeholder="Describe the input format..."
          {...register("inputFormat")}
        />

        {errors.inputFormat && (
          <p className="text-sm text-destructive">
            {errors.inputFormat.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="outputFormat">Output Format</Label>

        <Textarea
          id="outputFormat"
          rows={4}
          placeholder="Describe the output format..."
          {...register("outputFormat")}
        />

        {errors.outputFormat && (
          <p className="text-sm text-destructive">
            {errors.outputFormat.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="sampleInput">Sample Input</Label>

        <Textarea
          id="sampleInput"
          rows={5}
          placeholder="Enter sample input..."
          {...register("sampleInput")}
        />

        {errors.sampleInput && (
          <p className="text-sm text-destructive">
            {errors.sampleInput.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="sampleOutput">Sample Output</Label>

        <Textarea
          id="sampleOutput"
          rows={5}
          placeholder="Enter sample output..."
          {...register("sampleOutput")}
        />

        {errors.sampleOutput && (
          <p className="text-sm text-destructive">
            {errors.sampleOutput.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">
          Tags
        </Label>

        <Input
          id="tags"
          placeholder="array, sorting, binary-search"
          {...register("tags")}
        />

        <p className="text-xs text-muted-foreground">
          Separate multiple tags with commas.
        </p>

        {errors.tags && (
          <p className="text-sm text-destructive">
            {errors.tags.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Creating Problem..." : "Create Problem"}
      </Button>
    </form>
  );
}