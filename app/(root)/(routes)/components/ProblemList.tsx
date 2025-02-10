import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const problems = [
  { name: "Two Sum", platform: "LeetCode", difficulty: "Easy" },
  { name: "Binary Search", platform: "CodeForces", difficulty: "Medium" },
  { name: "Dijkstra's Algorithm", platform: "CodeChef", difficulty: "Hard" },
];

export default function ProblemList() {
  return (
    <div className="overflow-x-auto">
      <Table className="min-w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Problem</TableHead>
            <TableHead>Platform</TableHead>
            <TableHead>Difficulty</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {problems.map((problem, index) => (
            <TableRow key={index}>
              <TableCell>{problem.name}</TableCell>
              <TableCell>{problem.platform}</TableCell>
              <TableCell>{problem.difficulty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
