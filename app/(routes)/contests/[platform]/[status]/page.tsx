"use client";

import { useParams } from "next/navigation";
import ContestList from "./components/ContestList";
import React from "react";

interface Contest {
  id: string;
  title: string;
  date: string;
  description: string;
}

const dummyPastContests: Contest[] = [
  { id: "1", title: "Past Contest 1", date: "2023-08-15", description: "Description for past contest 1" },
  { id: "2", title: "Past Contest 2", date: "2023-08-20", description: "Description for past contest 2" },
  { id: "3", title: "Past Contest 3", date: "2023-08-25", description: "Description for past contest 3" },
];

const dummyLiveContests: Contest[] = [
  { id: "4", title: "Live Contest 1", date: "2023-09-01", description: "Description for live contest 1" },
  { id: "5", title: "Live Contest 2", date: "2023-09-02", description: "Description for live contest 2" },
];

const dummyUpcomingContests: Contest[] = [
  { id: "6", title: "Upcoming Contest 1", date: "2023-09-15", description: "Description for upcoming contest 1" },
  { id: "7", title: "Upcoming Contest 2", date: "2023-09-20", description: "Description for upcoming contest 2" },
  { id: "8", title: "Upcoming Contest 3", date: "2023-09-25", description: "Description for upcoming contest 3" },
];

export default function ContestListPage() {
  const params = useParams();
  const contestStatus = Array.isArray(params.status) ? params.status[0] : params.status || "";

  let contestsToShow: Contest[] = [];
  if (contestStatus === "past") {
    contestsToShow = dummyPastContests;
  } else if (contestStatus === "live") {
    contestsToShow = dummyLiveContests;
  } else if (contestStatus === "upcoming") {
    contestsToShow = dummyUpcomingContests;
  }

  return (
    <div className="container mx-auto p-4 min-h-[calc(100vh-130px)]">
      <ContestList contests={contestsToShow} status={contestStatus} />
    </div>
  );
}
