"use client";

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
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const handleGoogleSignUp = async () => {
    const result = await signIn("google", { callbackUrl: "/" });
    if (result?.error) {
      console.error("Error during Google sign up:", result.error);
    }
  };

  const handleGithubSignUp = async () => {
    const result = await signIn("github", { callbackUrl: "/" });
    if (result?.error) {
      console.error("Error during Github sign in:", result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
            <CardTitle className="font-bold text-center">
                Sign up to CP Tracker
            </CardTitle>
            <CardDescription>
              Welcome! Please fill in the details to get started.
            </CardDescription>
        </CardHeader>
        <CardContent className="">
            <div className="flex sm:flex-row flex-col justify-between gap-2 my-4">
                <Button
                    variant="outline" 
                    className="dark:bg-gray-800 px-4 py-2 rounded-md"
                    onClick={handleGoogleSignUp}
                >
                    Sign up with Google
                </Button>
                <Button
                    variant="outline" 
                    className="dark:bg-gray-800 px-4 py-2 rounded-md"
                    onClick={handleGithubSignUp}
                >
                    Sign up with Github
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
                    Sign up
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
