"use client";

import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

// Pie Chart untuk Kategori Laporan
export const PieChartKategori = () => {
  const dataKategori = {
    labels: ["Kecelakaan", "Narkoba", "Perampokan", "Kebakaran", "Lainnya"],
    datasets: [
      {
        label: "Kategori Laporan",
        data: [20, 15, 10, 5, 30], // Data dummy
        backgroundColor: ["#ef4444", "#f97316", "#eab308", "#10b981", "#3b82f6"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg w-full">
      <h2 className="text-lg font-semibold mb-3">Kategori Aduan</h2>
      <Pie data={dataKategori} />
    </div>
  );
};

// Pie Chart untuk Status Laporan
export const PieChartStatus = () => {
  const dataStatus = {
    labels: ["Diproses", "Ditangani", "Selesai"],
    datasets: [
      {
        label: "Status Laporan",
        data: [40, 30, 50], // Data dummy
        backgroundColor: ["#f97316", "#eab308", "#10b981"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 shadow rounded-lg w-full">
      <h2 className="text-lg font-semibold mb-3">Status Laporan</h2>
      <Pie data={dataStatus} />
    </div>
  );
};
