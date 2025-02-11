import Link from "next/link";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeroSection() {
    const { data: session } = useSession();
  return (
    <section className="bg-hero-pattern bg-cover bg-center py-16 text-center">
      {/* <Input placeholder="Enter your leetcode username" className="w-1/2 mx-auto" /> */}
      <h1 className="text-4xl font-bold text-black dark:text-foreground">
        Track Your CP Journey
      </h1>
      <p className="mt-4 text-lg text-black dark:text-muted-foreground">
        Seamlessly integrate your competitive programming profiles and watch your progress soar!
      </p>
      {!session && (
        <div className="mt-8 flex justify-center gap-4">
            <Link href="/sign-up">
            <Button variant="default" className="px-6 py-3">
                Get Started
            </Button>
            </Link>
            <Link href="/sign-in">
            <Button variant="outline" className="px-6 py-3">
                Login
            </Button>
            </Link>
        </div>
      )}
    </section>
  );
}
