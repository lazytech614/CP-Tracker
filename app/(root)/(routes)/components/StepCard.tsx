import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from "@/components/ui/card";

interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

export default function StepCard({ step, title, description }: StepCardProps) {
  return (
    <Card className="shadow-lg">
      <CardHeader className="flex flex-col items-center">
        <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center mb-4">
          {step}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white dark:text-card-foreground text-center">{description}</p>
      </CardContent>
    </Card>
  );
}
