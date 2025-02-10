interface Contest {
  id: string;
  title: string;
  date: string;
  description: string;
}

interface ContestItemProps {
  contest: Contest;
  bgColor: string;
  borderColor: string;
}

export default function ContestItem({ contest, bgColor, borderColor }: ContestItemProps) {
  return (
    <div className={`p-4 border ${borderColor} rounded-lg shadow-sm`}>
      <h2 className="text-2xl font-bold">{contest.title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-200">{contest.date}</p>
      <p className="mt-2">{contest.description}</p>
    </div>
  );
}
