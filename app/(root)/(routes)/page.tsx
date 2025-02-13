"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

import AddPlatformForm from "./components/AddPlatformForm";
import ConnectedPlatformsTable from "./components/ConnectedPlatformsTable";
import Container from "@/components/ui/container";
import { syncData } from "@/lib/syncData";
import { getPlatforms } from "@/lib/getPlatforms";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import TestimonialSlider from "./components/TestimonialSlider";

interface PlatformData {
  platform: string;
  handle: string;
  email: string;
  contestRating?: number;
  currentStreak?: number;
  totalProblemsSolved?: number;
}

export default function HomePage() {
  const { data: session } = useSession();

  const [connectedPlatforms, setConnectedPlatforms] = useState<PlatformData[]>([]);

  const addPlatform = (platform: string, handle: string, email: string) => {
    if(!session?.user.id) {
      toast.error("User not logged in");
      return;
    }

    if (!platform || !handle || !email) {
      toast.error("Please fill out all fields");
      return;
    }

    const userId = session.user.id;

    if(session?.user.id) {
      syncData({userId, handle, platform});
    }
  };

  useEffect(() => {
    if (session?.user.id) {
      getPlatforms(session.user.id, setConnectedPlatforms);
    }
  }, [session]);

  return (
    <div className="min-h-[calc(100vh-130px)]">
      {session?.user.id ? (
        <Container>
          <div className="mb-8 pt-8 px-4 sm:px-6 lg:px-8">
            <AddPlatformForm onAddPlatform={addPlatform} />
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4">Connected Platforms</h2>
            <ConnectedPlatformsTable platforms={connectedPlatforms} />
          </div>
        </Container>
      ) : (
        <Container>
          <HeroSection />
          <FeaturesSection />
          <HowItWorks />
          <TestimonialSlider />
        </Container>
      )}
    </div>
  );
}
