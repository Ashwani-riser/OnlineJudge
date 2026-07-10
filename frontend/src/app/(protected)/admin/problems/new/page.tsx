import { CreateProblemForm } from "@/components/problem/CreateProblemForm";

export default function CreateProblemPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">
          Create Problem
        </h1>

        <p className="mt-2 text-muted-foreground">
          Add a new coding problem to the platform.
        </p>
      </div>

      <CreateProblemForm />
    </div>
  );
}