export interface Problem {
  _id: string;
  title: string;
  slug: string;
  difficulty: "Easy" | "Medium" | "Hard";
  tags: string[];
}