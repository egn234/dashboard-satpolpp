"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";

Chart.register(ArcElement, Tooltip, Legend);

export const PieChartKategori = () => {
  const [categoryData, setCategoryData] = useState<{ kategori: string; jumlah: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/top-categories");
        const data = await res.json();
        setCategoryData(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchData();
  }, []);

  const total = categoryData.reduce((sum, item) => sum + item.jumlah, 0);

  const chartData = {
    labels: categoryData.map((item) => item.kategori),
    datasets: [
      {
        data: categoryData.map((item) => item.jumlah),
        backgroundColor: ["#A78BFA", "#FB923C", "#FACC15", "#34D399"],
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          generateLabels: () => [],
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full relative">
      <h3 className="text-lg font-semibold text-gray-800 text-center">Top 5 Kategori Laporan</h3>
      <div className="relative w-60 mx-auto">
        <Doughnut data={chartData} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-xl font-bold text-gray-800">{total} Laporan</p>
        </div>
      </div>
    </div>
  );
};