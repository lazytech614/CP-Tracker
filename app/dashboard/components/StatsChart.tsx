"use client";

import { Chart as ChartJS, LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

// ✅ Register required components
ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const data = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Problems Solved",
      data: [5, 12, 18, 30],
      borderColor: "#0a66c2",
      backgroundColor: "rgba(10, 102, 194, 0.2)",
      fill: true,
    },
  ],
};

export default function StatsChart() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <Line data={data} />
    </div>
  );
}
