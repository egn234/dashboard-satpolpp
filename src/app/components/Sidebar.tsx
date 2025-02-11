"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { HomeIcon, ChartBarIcon, DocumentTextIcon, PowerIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const [active, setActive] = useState("dashboard");
  const router = useRouter();

  const menus = [
    { name: "Dashboard", icon: <HomeIcon className="h-6 w-6" />, path: "/dashboard" },
    { name: "Data Statistik", icon: <ChartBarIcon className="h-6 w-6" />, path: "/data" },
    { name: "Laporan", icon: <DocumentTextIcon className="h-6 w-6" />, path: "/reports" },
  ];

  return (
    <div className="w-64 bg-white shadow-md h-full p-4">
      <h2 className="text-xl font-bold mb-6">📊 BigData Dashboard</h2>
      <ul>
        {menus.map((menu) => (
          <li
            key={menu.name}
            className={`flex items-center p-3 cursor-pointer rounded-lg hover:bg-blue-100 ${
              active === menu.name.toLowerCase() ? "bg-blue-500 text-white" : ""
            }`}
            onClick={() => {
              setActive(menu.name.toLowerCase());
              router.push(menu.path);
            }}
          >
            {menu.icon}
            <span className="ml-3">{menu.name}</span>
          </li>
        ))}
      </ul>

      {/* Logout */}
      <button className="mt-6 flex items-center p-3 text-red-500 hover:bg-red-100 rounded-lg w-full">
        <PowerIcon className="h-6 w-6" />
        <span className="ml-3">Logout</span>
      </button>
    </div>
  );
}
