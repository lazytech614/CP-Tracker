"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatsChart from "./components/StatsChart";
import ProblemList from "./components/ProblemList";
import StreakTracker from "./components/StreakTracker";

export default function Dashboard() {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Rating Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">1450</p>
          </CardContent>
        </Card>

        {/* Problems Solved */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Problems Solved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">123</p>
          </CardContent>
        </Card>

        {/* Streak Tracker */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Current Streak</CardTitle>
          </CardHeader>
          <CardContent>
            <StreakTracker />
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="mt-8">
        <StatsChart />
      </div>

      {/* Problem List */}
      <div className="mt-8">
        <ProblemList />
      </div>
    </div>
  );
}
