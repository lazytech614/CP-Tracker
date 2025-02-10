import Link from "next/link";
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle 
} from "@/components/ui/card";
import React from "react";

interface PlatformCardProps {
  name: string;
  slug: string;
  icon?: string;
}

export default function PlatformCard({ name, slug }: PlatformCardProps) {
  const initial = name.charAt(0);

  return (
    <Link href={`/contests/${slug}`}>
      <Card className="hover:shadow-xl transition-shadow cursor-pointer">
        <CardHeader className="flex justify-center p-4">
          <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white text-2xl font-bold">
            {initial}
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <CardTitle>{name}</CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
}
