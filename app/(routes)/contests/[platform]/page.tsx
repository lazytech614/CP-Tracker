"use client";

import { useParams } from "next/navigation";
import ContestCard from "./components/ContestCard";

export default function PlatformContestsPage() {
  const params = useParams();
  const { platform } = params;

  const platformName = Array.isArray(platform) ? platform[0] : platform || "";

  return (
    <div className="container mx-auto p-4 min-h-[calc(100vh-130px)]">
      <h1 className="text-3xl font-bold text-center mb-8">
        {platformName?.toUpperCase()} Contests
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ContestCard platform={platformName} status="past" title="Past Contests" />
        <ContestCard platform={platformName} status="live" title="Live Contests" />
        <ContestCard platform={platformName} status="upcoming" title="Upcoming Contests" />
      </div>
    </div>
  );
}
