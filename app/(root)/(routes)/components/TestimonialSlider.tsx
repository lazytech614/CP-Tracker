"use client";

import { useState } from "react";
import { 
    Card, 
    CardHeader, 
    CardContent, 
    CardFooter 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Alice Johnson",
    feedback: "This app completely transformed the way I track my progress in competitive programming!",
  },
  {
    id: 2,
    name: "Bob Smith",
    feedback: "The analytics dashboard is intuitive and really helps me identify areas for improvement.",
  },
  {
    id: 3,
    name: "Charlie Brown",
    feedback: "A must-have tool for any serious competitive programmer.",
  },
];

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { name, feedback } = testimonials[current];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <Card className="shadow-lg mx-auto max-w-xl">
          <CardHeader className="text-center">
            <h3 className="text-xl font-bold">What Our Users Say</h3>
          </CardHeader>
          <CardContent className="text-center">
          <p className="text-gray-700 italic">&quot;{feedback}&quot;</p>
            <p className="mt-2 font-medium">- {name}</p>
          </CardContent>
          <CardFooter className="flex justify-center space-x-4">
            <Button variant={"default"} onClick={handlePrev} className="px-4 py-2 rounded">
              Prev
            </Button>
            <Button variant={"default"} onClick={handleNext} className="px-4 py-2 rounded">
              Next
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
