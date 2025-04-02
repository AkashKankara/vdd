"use client";

import React, { useState } from "react";
import { FaInfoCircle, FaBug, FaShieldAlt, FaClipboardCheck, FaUserCheck } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import Initiate from "./Initiate";
import DataCapture from "./DataCapture";
import Assess from "./Assess";
import Review from "./Review";
interface StatusBarProps {
    activeStep: string;
    setActiveStep: (step: string) => void;
}

interface Step {
  name: string;
  icon: React.ReactElement;
  component: React.ReactElement;
}

const steps: Step[] = [
  { name: "Initiate", icon: <FaInfoCircle size={14} />, component: <Initiate/> },
  { name: "Data Capture", icon: <FaBug size={14} />, component: <DataCapture/> },
  { name: "Assess", icon: <FaShieldAlt size={14} />, component: <Assess/> },
  { name: "Review", icon: <FaClipboardCheck size={14} />, component: <Review/> },
  { name: "Finalize", icon: <FaUserCheck size={14} />, component: <Review/> },
];

const StatusBar: React.FC<StatusBarProps> = ({ activeStep, setActiveStep }) => {
  const currentIndex = steps.findIndex((s) => s.name === activeStep);

  return (
    <div>
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="text-xl font-bold">New Due Diligence</h1>
        {activeStep === "Initiate" ? (
          <button className="text-[#0B6DFF] font-medium hover:underline">+ New Vendor</button>
        ) : (
          <div className="text-base">
            <span className="mr-1">Algonomy</span>| 
            <span className="ml-1 mr-1">Due Diligence ID: <strong>54647G</strong></span>| 
            <span className="ml-1">Non Govt</span>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center py-2 space-x-2">
        {steps.map((step, index) => {
          const isActive = index === currentIndex;
          const isCompleted = index < currentIndex;
          return (
            <div key={index} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className={`p-1 rounded-full ${isActive ? "text-[#0B6DFF]" : "text-[#8F8F8F]"}`}>
                  {step.icon}
                </div>
                <button
                  className={`relative flex items-center px-5 py-1.5 text-md rounded-xl transition-all
                    ${isActive ? "bg-[#0B6DFF] text-white shadow-md" :
                      isCompleted ? "border border-[#1FA815] text-[#1FA815]" :
                      "border border-gray-300 text-[#3D3D3D]"}`}
                  onClick={() => setActiveStep(step.name)}
                >
                  {isCompleted && <span className="text-[#1FA815] mr-1"><IoCheckmark /></span>}
                  {step.name}
                </button>
              </div>
              {index < steps.length - 1 && (
                <div className="flex items-center justify-center w-16 relative">
                  <span className="border-dotted border-gray-400 border-t-2 w-full absolute top-2"></span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="p-5">{steps[currentIndex].component}</div>
    </div>
  );
};

export default StatusBar;
