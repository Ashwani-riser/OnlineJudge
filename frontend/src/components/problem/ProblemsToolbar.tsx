import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ProblemsToolbarProps {
  search: string;
  difficulty: string;
  onSearchChange: (value: string) => void;
  onDifficultyChange: (value: string) => void;
}

export function ProblemsToolbar({
  search,
  difficulty,
  onSearchChange,
  onDifficultyChange,
}: ProblemsToolbarProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Input
        placeholder="Search problems..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="md:max-w-sm"
      />

      <Select
        value={difficulty}
         onValueChange={(value) => onDifficultyChange(value ?? "all")}
      >
        <SelectTrigger className="w-48">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Difficulties</SelectItem>
          <SelectItem value="Easy">Easy</SelectItem>
          <SelectItem value="Medium">Medium</SelectItem>
          <SelectItem value="Hard">Hard</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}