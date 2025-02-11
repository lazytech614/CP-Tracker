"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { syncLeetCodeData } from "@/lib/syncLeetCodeData";

interface DashboardHeroProps {
  username: string | null | undefined;
}

export default function DashboardHero({ username }: DashboardHeroProps) {
  const [leetCodeUsername, setLeetCodeUsername] = useState("");
  const { data: session } = useSession();

  const onClick = () => {
    if (!session?.user.id) {
      alert("Please log in first.");
      return;
    }
    if (!leetCodeUsername.trim()) {
      alert("Please enter your LeetCode username.");
      return;
    }
    syncLeetCodeData(session.user.id, leetCodeUsername);
  }
  return (
    <section className="py-8 text-center">
      <Input
        onChange={(e) => setLeetCodeUsername(e.target.value)}
        placeholder="Enter your LeetCode username"
        className="w-1/2 mx-auto"
      />
      <Button
        onClick={onClick}
      >
        Get data
      </Button>
      <h1 className="text-3xl font-bold">Welcome back, {username}!</h1>
      <p className="mt-2 text-gray-600">
        Here's your competitive programming progress overview.
      </p>
    </section>
  );
}
