"use client";

import React, { JSX }  from "react";
import { useRouter } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { LuCalendarClock } from "react-icons/lu";
import { FaUsers, FaFolderPlus } from "react-icons/fa";


interface MenuItem {
  icon: JSX.Element;
  name: string;
  route: string;
}

const menuItems: MenuItem[] = [
  { icon: <GoHomeFill />, name: "Dashboard", route: "/dashboard" },
  { icon: <FaUsers />, name: "Vendors", route: "/vendors" },
  { icon: <LuCalendarClock />, name: "Schedule Due Diligence", route: "/schedule-dd" },
  { icon: <FaFolderPlus />, name: "New Due Diligence", route: "/new-due-diligence" },
];

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="fixed w-16 z-50 top-16 left-0 h-[calc(100vh-64px)] bg-[#DEDEDE] text-[#766F6F] flex flex-col items-center py-6 space-y-8 shadow-lg">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className="relative group flex flex-col items-center cursor-pointer hover:text-gray-300 transition-all"
          onClick={() => router.push(item.route)}
        >
          <div className="text-2xl">{item.icon}</div>
          <div className="absolute left-16 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap">
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
