import FeatureCard from "./FeatureCard";
import { 
    ChartNoAxesCombined,
    ArrowUpNarrowWide,
    Building2
} from "lucide-react";

export default function FeaturesSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <FeatureCard
          title="Multi-Platform Integration"
          description="Connect with LeetCode, CodeForces, and CodeChef."
          icon={<Building2 className="w-8 h-8" />}
        />
        <FeatureCard
          title="Performance Analytics"
          description="Detailed charts and insights into your coding performance."
          icon={<ChartNoAxesCombined className="w-8 h-8" />}
        />
        <FeatureCard
          title="Streak Tracking"
          description="Keep track of your daily and weekly coding streaks."
          icon={<ArrowUpNarrowWide className="w-8 h-8" />}
        />
      </div>
    </section>
  );
}
