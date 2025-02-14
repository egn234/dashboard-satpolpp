"use client";

import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { StatusCard } from "@/app/components/chart/StatusCard";
import { LineChartLaporan } from "@/app/components/chart/LineChart";
import { KpiScore } from "@/app/components/chart/KpiScore";
import ScoreCard from "@/app/components/chart/ScoreCard";
import BarChart from "@/app/components/chart/BarChart";
import { PieChartKategori } from "@/app/components/chart/PieChart";
import dynamic from "next/dynamic";

const HeatMap = dynamic(() => import("@/app/components/chart/Heatmap"), { ssr: false });

export default function Dashboard() {
  return (
    <div className="bg-gray-50 transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px] w-full">
      <Navbar />
      <main id="content">
        <Breadcrumbs />
        <Sidebar />
        {/* <!-- Content --> */}
        <div className="w-full">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* <!-- your content goes here ... --> */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="w-full md:col-span-2">
                <StatusCard />
                <KpiScore />
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="w-full col-span-1">
                    <PieChartKategori />
                  </div>
                  <div className="w-full col-span-2">
                    <BarChart />
                  </div>
                </div>
              </div>
              <div className="w-full md:col-span-1">
                <ScoreCard />
                <LineChartLaporan />
              </div>
              <div className="w-full md:col-span-3">
                <HeatMap />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Content --> */}
      </main>
    </div>
  );
}