"use client";

import { Card, CardContent } from "@/components/ui/card";

const streak = 7; // Example data

export default function StreakTracker() {
  return (
    <Card className="bg-blue-100 text-blue-800">
      <CardContent className="text-center">
        <p className="text-xl font-semibold">{streak} Days</p>
        <p>Current Streak</p>
      </CardContent>
    </Card>
  );
}
