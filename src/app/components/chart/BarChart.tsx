"use client";

import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip } from "chart.js";
import { useEffect, useState } from "react";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const BarChart = () => {
  const [reportData, setReportData] = useState<number[]>(Array(12).fill(0));

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/year-trend");
        const data = await res.json();

        // Ubah data dari query ke array [jan, feb, ..., dec]
        const monthlyReports = Array(12).fill(0);
        data.forEach((item: { bulan: number; jumlah_laporan: number }) => {
          monthlyReports[item.bulan - 1] = item.jumlah_laporan;
        });

        setReportData(monthlyReports);
      } catch (error) {
        console.error("Error fetching report data:", error);
      }
    };

    fetchData();
  }, []);

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
    datasets: [
      {
        label: "Jumlah Laporan",
        data: reportData,
        backgroundColor: "rgba(75, 102, 255, 0.8)",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 w-full mb-4">
      <h3 className="text-lg font-semibold text-gray-800">Trending Laporan Tahunan</h3>
      <p className="text-sm text-gray-500 mb-4">Jumlah laporan yang masuk tiap bulan</p>
      <Bar data={chartData} options={options} className="max-h-[400px]" />
    </div>
  );
};

export default BarChart;
