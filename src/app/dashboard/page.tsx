"use client";

import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { StatusCard } from "@/app/components/chart/StatusCard";
import { LineChartLaporan } from "@/app/components/chart/LineChart";
import { KpiScore } from "@/app/components/chart/KpiScore";
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
            <StatusCard />
            <KpiScore />
            <LineChartLaporan />
            <div className="w-full">
              <HeatMap />
            </div>
          </div>
        </div>
        {/* <!-- End Content --> */}
      </main>
    </div>
  );
}