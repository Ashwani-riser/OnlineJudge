import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProblemsToolbar() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <Input
        placeholder="Search problems..."
        className="md:max-w-sm"
      />

      <Select defaultValue="all">
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