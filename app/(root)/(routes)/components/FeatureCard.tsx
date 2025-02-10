import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-col items-center">
        {icon}
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white dark:text-card-foreground text-center">{description}</p>
      </CardContent>
    </Card>
  );
}
