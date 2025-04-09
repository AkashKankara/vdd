"use client";

import React, { useState } from "react";
import { FaInfoCircle, FaBug, FaShieldAlt, FaClipboardCheck, FaUserCheck } from "react-icons/fa";
import { IoCheckmark } from "react-icons/io5";
import Initiate from "./Initiate";
import DataCapture from "./DataCapture";

interface StatusBarProps {
    activeStep: string;
    setActiveStep: (step: string) => void;
}

interface Step {
  name: string;
  icon: React.ReactElement;
  component: React.ReactElement;
}

<<<<<<< Updated upstream
const steps: Step[] = [
  { name: "Initiate", icon: <FaInfoCircle size={14} />, component: <Initiate/> },
  { name: "Data Capture", icon: <FaBug size={14} />, component: <DataCapture/> },
  { name: "Assess", icon: <FaShieldAlt size={14} />, component: <div>Assess Content</div> },
  { name: "Review", icon: <FaClipboardCheck size={14} />, component: <div>Review Content</div> },
  { name: "Finalize", icon: <FaUserCheck size={14} />, component: <div>Finalize Content</div> },
];
=======
interface AssessProps {
  activeTab: string;
  setActiveTab: (step: string) => void;
}
>>>>>>> Stashed changes

type Props = StatusBarProps & AssessProps;
const StatusBar: React.FC<Props> = ({ activeStep, setActiveStep, activeTab, setActiveTab }) => {
  // const [activeTab, setActiveTab] = useState('summary');
  const steps: Step[] = [
    { name: "Initiate", icon: <FaInfoCircle size={14} />, component: <Initiate/> },
    { name: "Data Capture", icon: <FaBug size={14} />, component: <DataCapture/> },
    { name: "Assess", icon: <FaShieldAlt size={14} />, component: <Assess activeTab={activeTab} setActiveTab={setActiveTab}/> },
    { name: "Review", icon: <FaClipboardCheck size={14} />, component: <Review/> },
    { name: "Finalize", icon: <FaUserCheck size={14} />, component: <Review/> },
  ];
  const currentIndex = steps.findIndex((s) => s.name === activeStep);

  return (
    <div>
      <div className="flex justify-between items-center px-5 py-3">
        <h1 className="text-xl font-semibold">New Due Diligence</h1>
        {activeStep === "Initiate" ? (
          <button className="text-blue-600 font-medium hover:underline">+ New Vendor</button>
        ) : (
          <div className="text-base">
            <span className="mr-2">Algonomy</span> | 
            <span className="ml-2 mr-2">Due Diligence ID: <strong>54647G</strong></span> | 
            <span className="ml-2">Non Govt</span>
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
                <div className={`p-1 rounded-full ${isActive ? "text-blue-600" : "text-gray-400"}`}>
                  {step.icon}
                </div>
                <button
                  className={`relative flex items-center px-5 py-1.5 text-sm font-medium rounded-full transition-all
                    ${isActive ? "bg-blue-600 text-white shadow-md" :
                      isCompleted ? "border border-green-600 text-green-600 bg-white" :
                      "border border-gray-300 text-gray-700 bg-white"}`}
                  onClick={() => setActiveStep(step.name)}
                >
                  {isCompleted && <span className="text-green-600 mr-1"><IoCheckmark /></span>}
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
