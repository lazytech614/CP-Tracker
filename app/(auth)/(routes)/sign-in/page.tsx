"use client";

import { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

export default function SignInPage() {
  const router = useRouter();
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }


  const handleGoogleSignIn = async () => {
    const result = await signIn("google", { callbackUrl: "/" });
    if (result?.error) {
      console.error("Error during Google sign in:", result.error);
    }
  };

  const handleGithubSignIn = async () => {
    const result = await signIn("github", { callbackUrl: "/" });
    if (result?.error) {
      console.error("Error during Github sign in:", result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
            <CardTitle>
                Sign in to CP Tracker
            </CardTitle>
            <CardDescription>
                Welcome back! Please sign in to continue
            </CardDescription>
        </CardHeader>
        <CardContent className="">
            <div className="flex sm:flex-row flex-col justify-between gap-2 my-4">
                <Button
                    variant="outline" 
                    className="dark:bg-gray-800 px-4 py-2 rounded-md"
                    onClick={handleGoogleSignIn}
                >
                    Sign in with Google
                </Button>
                <Button
                    variant="outline" 
                    className="dark:bg-gray-800 px-4 py-2 rounded-md"
                    onClick={handleGithubSignIn}
                >
                    Sign in with Github
                </Button>
            </div>
            <Separator className="my-6" />
            <div className="flex flex-col gap-4">
                <div className="space-y-1 flex flex-col">
                    <span className="text-sm">Email address</span>
                    <Input type="email" placeholder="example@example.com" />
                </div>
                <Button
                    variant="outline" 
                    className="bg-foreground text-white dark:bg-gray-800 px-4 py-2 rounded-md mt-4"
                    onClick={() => router.push("/")}
                >
                  Sign in
                </Button>
            </div>
        </CardContent>
        <CardFooter className="flex justify-center text-center text-xs opacity-50">
            Made with ❤️ by Rupanjan
        </CardFooter>
      </Card>
    </div>
  );
}
