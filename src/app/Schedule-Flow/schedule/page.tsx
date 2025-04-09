"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useSearchParams } from "next/navigation";

//num to words
const numberToWords = (num: number) => {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"];
    return words[num] || num.toString(); // Fallback to number if out of range
  };
  

export default function SchedulePage() {
  const searchParams = useSearchParams();
  const vendorCount = parseInt(searchParams.get("s") || "0", 10);
  const router = useRouter();
  const [selectedSection, setSelectedSection] = useState<"manual" | "now" | "one-time" | "auto-option">("manual");


  
  return (
    <div className="pt-16 pl-16 text-sm"> {/* Reduced padding and font size */}
      {/* Back Button with Heading */}
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.back()}>
        <FaArrowLeft className="text-sm text-gray-600" /> {/* Smaller arrow */}
        <h1 className="text-xl font-semibold">Schedule</h1> {/* Smaller heading */}
      </div>

      {/* Breadcrumb */}
      <p className="text-xs text-gray-500 mt-1">
        Schedule Due Diligence &gt; <span className="font-medium text-gray-700">Schedule</span>
      </p>

      {/* Alert Banner */}
      <div className="mt-3 p-4 text-center bg-yellow-100 text-yellow-800 rounded-md">
      You have chosen {numberToWords(vendorCount)} {vendorCount === 1 ? "vendor" : "vendors"} to proceed with due diligence scheduling.
      </div>
      {/* Scheduling Options */}
      <div className="mt-4 border-t pt-3">
        {/* Manual Schedule (Section 1) */}
        <div className={`${selectedSection === "auto-option" ? "opacity-50" : ""} pb-3`}>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              checked={selectedSection === "manual"}
              onChange={() => setSelectedSection("manual")}
            />
            <span className="font-medium">Manual Schedule</span>
          </label>
        </div>

        {/* Line after Section 1 */}
        <hr className="border-t border-gray-300 w-1/3 ml-0" />

        {/* Schedule Now & One-time Schedule (Section 2) */}
        <div className={`${selectedSection === "auto-option" ? "opacity-50" : ""} pt-3 pb-3`}>
          {/* Schedule Now */}
          <label className="flex items-center space-x-2 cursor-pointer pl-4">
            <input type="radio" checked={selectedSection === "now"} onChange={() => setSelectedSection("now")} />
            <span>Schedule Now</span>
          </label>

          {/* One-time Schedule */}
          <div className="pl-4 mt-2 flex items-center space-x-2">
            <input type="radio" checked={selectedSection === "one-time"} onChange={() => setSelectedSection("one-time")} />
            <span>One-time Schedule</span>
            <input type="date" className="border p-1 rounded text-xs" />
            <select className="border p-1 rounded text-xs">
              <option>12:00 AM</option>
            </select>
          </div>
        </div>

        {/* No line after Section 2 */}

        {/* Auto Schedule (Section 3) */}
        <div className={`${selectedSection === "manual" || selectedSection === "now" || selectedSection === "one-time" ? "opacity-50" : ""} pt-3 pb-3`}>
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              checked={selectedSection === "auto-option"}
              onChange={() => setSelectedSection("auto-option")}
            />
            <span className="font-medium">Auto Schedule</span>
          </label>
        </div>

        {/* Line after Section 3 */}
        <hr className="border-t border-gray-300 w-1/3 ml-0" />

         {/* Auto Scheduling Fields (4th Section) */}
         <div className={`${selectedSection === "auto-option" ? "opacity-100" : "opacity-50"} pl-5`}>
          <div className="mt-2 flex items-center space-x-2">
            <input
              type="radio"
              checked={selectedSection === "auto-option"}
              onChange={() => setSelectedSection("auto-option")}
            />
            <span>Every</span>
            <select className="border p-1 rounded">
              <option>week</option>
              <option>month</option>
            </select>
            <span>at</span>
            <select className="border p-1 rounded">
              <option>12:00 AM</option>
            </select>
          </div>
        </div>
      </div>

      {/* Buttons Section with Line Above */}
        <div className="mt-auto pt-24">
        <hr className="border-t border-gray-300 mb-4" />
        <div className="flex justify-end space-x-3 pb-4">
            <button onClick={() => router.back()} className="text-blue-600 text-sm">
            Cancel
            </button>
            <button onClick={() => router.back()} className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
            Schedule
            </button>
        </div>
        </div>

    </div>
  );
}
