export interface Problem {
  _id: string;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
}


export interface ProblemDetails extends Problem {
  statement: string;
  constraints: string;
  inputFormat: string;
  outputFormat: string;
  sampleInput: string;
  sampleOutput: string;
  createdBy?: {
    _id?: string;
    username: string;
    fullName: string;
  };
  createdAt?: string;
  updatedAt?: string;
}

export interface CreateProblemPayload {
  title: string;
  slug: string;

  statement: string;

  difficulty: "Easy" | "Medium" | "Hard";

  constraints: string;

  inputFormat: string;
  outputFormat: string;

  sampleInput: string;
  sampleOutput: string;

  tags: string[];
}

export interface UpdateProblemPayload
  extends Partial<CreateProblemPayload> {}