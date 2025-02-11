"use client";

import { useState } from "react";
import { BellIcon, UserCircleIcon } from "@heroicons/react/24/outline";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Dashboard</h1>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <BellIcon className="size-6 cursor-pointer text-gray-600" />
        <div className="relative">
          <UserCircleIcon
            className="cursor-pointer text-gray-600"
            onClick={() => setIsOpen(!isOpen)}
          />
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2">
              <p className="px-4 py-2">👤 Profil</p>
              <p className="px-4 py-2 text-red-500 cursor-pointer">🚪 Logout</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
