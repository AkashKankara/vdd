"use client";
import React from "react";
import Image from "next/image";
import { FaBell, FaUser } from "react-icons/fa";
import logo from "../app/toyota_logo.png";
const Header: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-[#DEDEDE] p-4 shadow-md text-[#000000] flex items-center justify-between z-50">
      {/* Left - Logo and Title */}
      <div className="flex items-center space-x-3">
        <Image src={logo} alt="Logo" width={32} height={32} />
        <h1 className="text-2xl font-semibold">Vendor Due Diligence</h1>
      </div>

      {/* Right - Icons */}
      <div className="flex items-center space-x-6">
        <div className="relative cursor-pointer">
          <FaBell className="text-lg" />
          <span className="absolute -top-2 -right-2 bg-[#EB0A1E] text-white text-xs font-bold px-2 py-0.5 rounded-full">
            9
          </span>
        </div>
        <FaUser className="text-lg cursor-pointer" />
      </div>
    </div>
  );
};

export default Header;
