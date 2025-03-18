"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/StatusBar";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";



const NewDueDiligence: React.FC = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState("Initiate");
  const handleNext = () => {
    if (activeStep === "Initiate") setActiveStep("Data Capture");
    else if (activeStep === "Data Capture") setActiveStep("Assess");
    else if (activeStep === "Assess") setActiveStep("Review");
    else if (activeStep === "Review") setActiveStep("Finalize");
  };
  
  const handleBack = () => {
    if (activeStep === "Data Capture") setActiveStep("Initiate");
    else if (activeStep === "Assess") setActiveStep("Data Capture");
    else if (activeStep === "Review") setActiveStep("Assess");
    else if (activeStep === "Finalize") setActiveStep("Review");
  };
  

  return (
    <div className="bg-white min-h-screen flex flex-col pl-14 pt-14">
      <StatusBar activeStep={activeStep} setActiveStep={setActiveStep} />
        <div className="w-full max-w-screen-xl px-12 mt-8 flex justify-between">
          <button className="px-4 py-2 border border-gray-400 rounded-md text-gray-600 hover:bg-gray-200">
            Cancel
          </button>
          <div className="flex space-x-4">
            <button className="px-4 py-2 border border-blue-600 rounded-md text-blue-600 hover:bg-blue-200">
              Save
            </button>
            {activeStep !== "Initiate" && (
              <button
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={handleBack}
              >
                <FaAngleLeft className="mr-1" />
                <span>Back</span>
              </button>
            )}
            {activeStep !== "Finalize" && (
              <button
                className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg"
                onClick={handleNext}
              >
                <span>Next</span>
                <FaAngleRight className="ml-1" />
              </button>
            )}
          </div>
        </div>
    </div>
  );
};

export default NewDueDiligence;
