"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";
import { GoAlertFill } from "react-icons/go";
import StatusBar from "./StatusBar";

interface HistoryEntry {
  year: string;
  score: number;
  initiatedBy: string;
  initiatedOn: string;
  comments: string;
  status: string;
}

interface UpdateEntry {
  text: string;
  isCritical: boolean;
}

interface Vendor {
  id: string;
  name: string;
  type: string;
  history: HistoryEntry[];
  latestUpdates: UpdateEntry[];
}

const vendors: Vendor[] = [
  {
    id: "893457G",
    name: "Algonomy",
    type: "Non Govt Vendor",
    history: [
      { year: "2023-24", score: 18, initiatedBy: "User Name 1", initiatedOn: "20 Jan 2025 10:10:10", comments: "Sample comments go here", status: "Approved" },
      { year: "2022-23", score: 45, initiatedBy: "User Name 2", initiatedOn: "21 Jan 2025 10:10:10", comments: "Sample comments go here", status: "Rejected" },
      { year: "2021-22", score: 60.7, initiatedBy: "User Name 3", initiatedOn: "22 Jan 2025 10:10:10", comments: "Sample comments go here", status: "Rejected" }
    ],
    latestUpdates: [
      { text: "Regulatory Breaches: Violations of industry standards and legal norms.", isCritical: false },
      { text: "Regulatory Breaches: Violations of industry standards and legal norms.", isCritical: false },
      { text: "Regulatory Breaches: Violations of industry standards and legal norms.", isCritical: false },
      { text: "Regulatory Breaches: Violations of industry standards and legal norms.", isCritical: false },
      { text: "Regulatory Breaches: Violations of industry standards and legal norms.", isCritical: true }
    ]
  }
];

const getScoreClass = (score: number) => {
  if (score <= 25) return "bg-[#66DB5D] text-black";
  if (score > 25 && score <= 50) return "bg-[#FFCA65] text-black";
  return "bg-[#DB4734] text-black";
};

const Initiate: React.FC = () => {
    const router = useRouter();
    const [activeStep, setActiveStep] = useState("Initiate");
    const [selectedVendor, setSelectedVendor] = useState<Vendor>(vendors[0]);
  
    return (
      <div className="">
        <div className="p-5 flex-grow overflow-auto">
          <div className="flex space-x-5">
            <div className="w-2/3">
              <div className="bg-[#FFFFFF] p-5 mb-5">
                <div className="flex items-center justify-between">
                  <div>
                    <label className="font-medium text-base text-[#666666]">Vendor</label>
                    <select
                      className="border border-[#CCCCCC] p-2 ml-2 w-xs rounded-lg shadow-sm focus:ring focus:ring-blue-300 text-[#777777]"
                      onChange={(e) => {
                        const selected = vendors.find((v) => v.name === e.target.value);
                        if (selected) setSelectedVendor(selected);
                      }}
                      value={selectedVendor.name}
                    >
                      {vendors.map((vendor) => (
                        <option key={vendor.id} value={vendor.name}>{vendor.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="font-medium bg-[#F0F0F0] p-2 rounded shadow">Vendor ID: {selectedVendor.id}</span>
                    <span className="px-3 py-1 ">{selectedVendor.type}</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-2">
                <h2 className="text-lg font-semibold mb-3">Due Diligence History</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border border-gray-400 shadow-md rounded-lg">
                    <thead>
                      <tr className="bg-[#EAEAEA] border">
                        <th className="border border-[#EAEAEA] border-b-[#D8D8D8] border-r-white p-2 text-[#232323]">Year</th>
                        <th className="border border-[#EAEAEA] border-b-[#D8D8D8] border-r-white p-2 text-[#232323]">Score</th>
                        <th className="border border-[#EAEAEA] border-b-[#D8D8D8] border-r-white p-2 text-[#232323]">Initiated By</th>
                        <th className="border border-[#EAEAEA] border-b-[#D8D8D8] border-r-white p-2 text-[#232323]">Initiated On</th>
                        <th className="border border-[#EAEAEA] border-b-[#D8D8D8] border-r-white p-2 text-[#232323]">Comments</th>
                        <th className="border border-[#EAEAEA] border-b-[#D8D8D8] p-2 text-[#232323]">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedVendor.history.map((entry, index) => (
                        <tr key={index} className="text-center bg-white hover:bg-gray-100 transition">
                          <td className="border border-gray-400 p-2 text-[#232323]">{entry.year}</td>
                          <td className={`border border-gray-400 p-2 text-[#232323] ${getScoreClass(entry.score)}`}>{entry.score}</td>
                          <td className="border border-gray-400 p-2 text-[#232323]">{entry.initiatedBy}</td>
                          <td className="border border-gray-400 p-2 text-[#232323]">{entry.initiatedOn}</td>
                          <td className="border border-gray-400 p-2 text-[#232323]">{entry.comments}</td>
                          <td className="border border-gray-400 p-2 text-[#232323]">{entry.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="flex justify-end space-x-3 mt-2">
                <span className="bg-[#66DB5D] text-black p-2 rounded-lg shadow-md">&lt; 25 points</span>
                <span className="bg-[#FFCA65] text-black p-2 rounded-lg shadow-md">26 - 50 points</span>
                <span className="bg-[#DB4734] text-black p-2 rounded-lg shadow-md">&gt; 50 points</span>
              </div>
            </div>
            <div className="w-1/3 bg-[#F9F9F9] p-5 shadow-md rounded-lg">
              <h3 className="font-semibold text-base mb-2 text-[#777777]">Latest About the Vendor</h3>
              {selectedVendor.latestUpdates.map((update, index) => (
                <div key={index} className="flex items-center space-x-2 mt-3">
                  <span className={update.isCritical ? "text-red-600 text-lg" : "text-[#AF531A] text-lg"}><GoAlertFill /></span>
                  <span className={update.isCritical ? "text-[#AF531A] font-semibold" : "text-[#6C6565]"}>{update.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Initiate;