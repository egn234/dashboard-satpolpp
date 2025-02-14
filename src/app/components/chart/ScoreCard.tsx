"use client";

import { useRef } from "react";
import { Chart, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement, Tooltip);

const ScoreCard = () => {
  const chartRef = useRef(null);

  // Data untuk skor penanganan laporan
  const score = 75; // Misal skor 75%
  const maxScore = 100;

  const data = {
    datasets: [
      {
        data: [score, maxScore - score],
        backgroundColor: ["#4F46E5", "#E5E7EB"],
        borderWidth: 0,
        cutout: "80%",
        circumference: 180,
        rotation: 270,
      },
    ],
  };

  // Data skor tambahan
  const additionalScores = [
    { name: "Response Time Score", percentage: 85 },
    { name: "Pending Rate Score", percentage: 60 },
    { name: "Efficiency Score", percentage: 75 },
    { name: "Verification Score", percentage: 90 },
  ];

  return (
    <div className="bg-white shadow-lg rounded-lg p-5 w-full mb-4">
      <h3 className="text-lg font-semibold text-gray-800">
        Skor Penanganan Laporan
      </h3>
      <div className="relative flex items-center justify-center my-4">
        <div className="w-45 h-45" style={{ margin: -61 }}>
          <Doughnut ref={chartRef} data={data} />
        </div>
        <div className="absolute top-2/3 transform -translate-y-1/2 text-center">
          <p className="text-4xl font-bold text-gray-800">{score}%</p>
          <p className="text-xs text-gray-500">Total Skor</p>
        </div>
      </div>

      <div className="mt-4">
        {additionalScores.map((item, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between text-sm text-gray-700">
              <span>{item.name}</span>
              <span className="font-medium">{item.percentage}%</span>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-1">
              <div
                className="h-2 rounded-full bg-blue-600"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreCard;
