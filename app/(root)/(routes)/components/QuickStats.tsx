import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from "@/components/ui/card";

interface QuickStatsProps {
  rating: number;
  solved: number;
  streak: number;
}

export default function QuickStats({ rating, solved, streak }: QuickStatsProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Rating</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">{rating}</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Problems Solved</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">{solved}</p>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Current Streak</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-semibold">{streak} days</p>
        </CardContent>
      </Card>
    </section>
  );
}
