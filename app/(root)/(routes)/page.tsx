"use client";

import { useSession } from "next-auth/react";

import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorks from "./components/HowItWorks";
import TestimonialSlider from "./components/TestimonialSlider";
import Container from "@/components/ui/container";
import DashboardHero from "./components/DashboardHero";
import QuickStats from "./components/QuickStats";
import StatsChart from "./components/StatsChart";
import ProblemList from "./components/ProblemList";

export default function HomePage() {

  const { data: session } = useSession();

  const user = session?.user

  return (
    <div className="min-h-[calc(100vh-130px)]">
      {!session && (
        <Container>
          <HeroSection />
          <FeaturesSection />
          <HowItWorks />
          <TestimonialSlider />
        </Container>
      )}
      {session && (
        <main className="container mx-auto p-4">
          <Container>
            <DashboardHero username={user?.name} />
            <QuickStats rating={1002} solved={100} streak={10} />

            <div className="mt-8">
            <StatsChart />
            </div>

            <div className="mt-8">
            <ProblemList />
            </div>
          </Container>
        </main>
      )}
    </div>
  );
}