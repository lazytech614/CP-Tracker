import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const data = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Problems Solved",
      data: [5, 12, 18, 30],
      borderColor: "#0a66c2",
      backgroundColor: "rgba(10, 102, 194, 0.2)",
      fill: true,
      tension: 0.3,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Weekly Problems Solved",
    },
  },
};

export default function StatsChart() {
  return (
    <div className="bg-white p-4 rounded shadow-md">
      <Line data={data} options={options} />
    </div>
  );
}
