import Link from "next/link";
import { 
  Card, 
  CardHeader, 
  CardContent, 
  CardTitle 
} from "@/components/ui/card";
import React from "react";

interface ContestCardProps {
  platform: string;
  status: string;
  title: string;
}

export default function ContestCard({ platform, status, title }: ContestCardProps) {
  return (
    <Link href={`/contests/${platform}/${status}`}>
      <Card className="hover:shadow-xl transition-shadow cursor-pointer">
        <CardHeader className="flex justify-center p-4">
          <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white text-xl font-bold">
            {title.charAt(0)}
          </div>
        </CardHeader>
        <CardContent className="text-center">
          <CardTitle>{title}</CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
}
