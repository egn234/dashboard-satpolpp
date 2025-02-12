"use client";

import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";
import StatusCard from "@/app/components/chart/StatusCard";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { PieChartKategori, PieChartStatus} from "@/app/components/chart/PieChart";
import { LineChartLaporan } from "@/app/components/chart/LineChart";

export default function Dashboard() {
  return (
    <div className="bg-gray-50 transition-all duration-300 lg:hs-overlay-layout-open:ps-[260px] w-full">
      <Navbar />
      <main id="content">
        <Breadcrumbs />
        <Sidebar />
        {/* <!-- Content --> */}
        <div className="w-full lg:ps-64">
          <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
            {/* <!-- your content goes here ... --> */}
          </div>
        </div>
        {/* <!-- End Content --> */}
      </main>
    </div>
  );
}