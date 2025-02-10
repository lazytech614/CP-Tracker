import ContestItem from "./ContestItem";

interface Contest {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface ContestListProps {
  contests: Contest[];
  status: string;
}

const colorMapping: Record<string, { bg: string; border: string }> = {
  past: { bg: "bg-red-100", border: "border-red-500" },
  live: { bg: "bg-green-100", border: "border-green-500" },
  upcoming: { bg: "bg-blue-100", border: "border-blue-500" },
};

export default function ContestList({ contests, status }: ContestListProps) {
  const colors = colorMapping[status] || { bg: "bg-gray-100", border: "border-gray-500" };

  return (
    <div className="space-y-4">
      {contests.map((contest) => (
        <ContestItem key={contest.id} contest={contest} bgColor={colors.bg} borderColor={colors.border} />
      ))}
    </div>
  );
}
