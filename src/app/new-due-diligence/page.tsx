"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import StatusBar from "@/components/StatusBar";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";



const NewDueDiligence: React.FC = () => {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState("Initiate");
  const [activeTab, setActiveTab] = useState('summary');
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
  const handleNext = () => {
    if (activeStep === "Initiate") setActiveStep("Data Capture");
    if (activeStep === "Data Capture") setActiveStep("Assess");
    if (activeStep === "Assess") setActiveTab("corruption perception index");
    if (activeStep === "Assess" && activeTab === "corruption perception index") setActiveTab("detailed report");
    if (activeStep === "Assess" && activeTab === "detailed report") setActiveStep("Review");
    if (activeStep === "Review") setActiveStep("Finalize");
  };
  
  const handleBack = () => {
    if (activeStep === "Data Capture") setActiveStep("Initiate");
    if (activeStep === "Assess") setActiveStep("Data Capture");
    if (activeStep === "Review") {setActiveStep("Assess"); setActiveTab('summary')}; 
    if (activeStep === "Finalize") setActiveStep("Review");
  };
  
console.log(activeStep);
  return (
    <div className="bg-white min-h-screen flex flex-col pl-14 pt-14">
      <StatusBar activeStep={activeStep} setActiveStep={setActiveStep} activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="w-full max-w-screen-xl px-12 mt-8 flex justify-end p-4 border-t border-[#D8D8D8]">
          <button className="px-4 rounded-md m-2 text-[#026FE9] hover:bg-gray-200">
            Cancel
          </button>
          <button className="px-4 py-2 m-2 border border-[#026FE9] rounded-md text-[#026FE9] hover:bg-blue-200">
              Save
          </button>
          {activeStep !== "Initiate" && (
            <button
              className="flex items-center bg-[#026FE9] text-white px-4 py-2 m-2 rounded-lg"
              onClick={handleBack}
            >
              <FaAngleLeft className="mr-1" />
              <span>Back</span>
            </button>
          )}
          {activeStep !== "Finalize" && (
            <button
              className="flex items-center bg-[#026FE9] text-white px-4 py-2 m-2 rounded-lg"
              onClick={() => {handleNext(); scrollToTop(); }}
            >
              <span>Next</span>
              <FaAngleRight className="ml-1" />
            </button>
          )}
          {activeStep == "Finalize" && (
            <button
              className="flex items-center bg-[#026FE9] text-white px-4 py-2 m-2 rounded-lg"
              onClick={handleNext}
            >
              <span>Approve</span>
            </button>
          )}

        </div>
    </div>
  );
};

export default NewDueDiligence;
