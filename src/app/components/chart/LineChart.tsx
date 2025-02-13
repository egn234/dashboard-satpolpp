"use client";

import { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from "chart.js";

Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

interface Data {
  tanggal: string;
  total_aduan: number;
}

interface chartDatas {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    fill: boolean;
    borderColor: string;
    backgroundColor: string;
    tension: number;
  }[];
}

export const LineChartLaporan = () => {
  const [chartData, setChartData] = useState<chartDatas>();

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1
        }
      },  
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/weeklytrend");
        const result: Data[] = await res.json();

        const labels = result.map(row => row.tanggal);
        const data = result.map(row => row.total_aduan);

        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Laporan Masuk",
              data,
              fill: true,
              borderColor: "#3b82f6",
              backgroundColor: "rgba(59, 130, 246, 0.8)",
              tension: 0.2,
            }
          ],
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

  fetchData();
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  };

  return (
    <div className="flex flex-col p-4 md:p-5 bg-white border shadow rounded-xl">
      <h2 className="text-lg font-semibold mb-3">Tren Laporan Mingguan</h2>
      <Line data={chartData} options={options} className="max-h-[300px]" />
    </div>
  )
};

