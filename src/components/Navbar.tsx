"use client";

import React, { JSX }  from "react";
import { useRouter } from "next/navigation";
import { FaHome, FaUsers, FaCalendarCheck, FaFolderPlus } from "react-icons/fa";


interface MenuItem {
  icon: JSX.Element;
  name: string;
  route: string;
}

const menuItems: MenuItem[] = [
  { icon: <FaHome />, name: "Dashboard", route: "/dashboard" },
  { icon: <FaUsers />, name: "Vendors", route: "/vendors" },
  { icon: <FaCalendarCheck />, name: "Schedule Due Diligence", route: "/schedule-dd" },
  { icon: <FaFolderPlus />, name: "New Due Diligence", route: "/new-due-diligence" },
];

const Navbar: React.FC = () => {
  const router = useRouter();

  return (
    <div className="fixed top-16 left-0 h-[calc(100vh-64px)] w-15 bg-gray-200 text-gray-700 flex flex-col items-center py-6 space-y-6 shadow-lg">
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
