"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";

interface Factor {
    name: string;
    options: { green: string; yellow: string; red: string }[];
}
const factors: Factor[] = [
    { 
      name: "Business Impact (If product or service is discontinued)", 
      options: [
        { green: "Minimal impact", yellow: "Significant, but non-critical impact", red: "Critical impact" }
      ]
    },
    { 
      name: "Vendor interaction with TKM Employees or Customers", 
      options: [
        { green: "Minimal contact", yellow: "Vendor has few direct interactions with TKM Employees", red: "Vendor has multiple direct interactions and takes instructions from TKM" }
      ]
    },
    { 
      name: "Accumulated annual transaction amount", 
      options: [
        { green: "< INR 40,000,000", yellow: "INR 40,000,000 – 200,000,000", red: "> INR 200,000,000" }
      ]
    },
    { 
      name: "Contract Term", 
      options: [
        { green: "< 3 Years", yellow: "3-5 Years", red: "> 5 Years" }
      ]
    },
    { 
      name: "Potential for Significant Cost or Loss", 
      options: [
        { green: "Low", yellow: "Moderate", red: "High" }
      ]
    },
];

const DataCapture: React.FC = () => {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});

  const handleOptionChange = (factor: string, points: number) => {
    setSelectedOptions((prev) => ({ ...prev, [factor]: points }));
  };

  return (
    <div className="">

      {/* Crawls Section */}
      <div className="w-full max-w-screen-xl mt-4 px-12">
        <h2 className="text-lg font-semibold border-b border-gray-400 mb-4 ">Crawls</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {[
            "Google Search",
            "Google Maps",
            "Official Websites",
            "Government Records",
            "News Center",
            "State High Courts",
            "Director Background",
          ].map((crawl, index) => (
            <div key={index} className="flex text-sm bg-white items-center px-2 py-2 rounded-md shadow-sm">
              <span className="text-lg text-green-700 px-2"><FaCheckSquare /></span>
              <span>{crawl}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information Table */}
      <div className="w-full max-w-screen-xl mt-4 px-12">
        <h2 className="text-lg font-semibold mb-2">Additional Information</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 shadow-md rounded-lg">
            <thead className="whitespace-nowrap">
                <tr className="bg-gray-100 text-gray-700 text-sm">
                    <th className="border border-gray-300 p-2 w-1/3 text-left">Factors</th>
                    <th className="border border-gray-300 p-2 text-left bg-green-100">Green (1 point each)</th>
                    <th className="border border-gray-300 p-2 text-left bg-amber-100">Yellow (3 points each)</th>
                    <th className="border border-gray-300 p-2 text-left bg-red-100">Red (5 points each)</th>
                    <th className="border border-gray-300 p-2 text-left">Points</th>  
                </tr>
            </thead>

            <tbody className="overflow-x-auto">
                {factors.map((factor, index) => (
                    <tr key={index} className="border border-gray-300 hover:bg-gray-50 transition">
                        <td className="border border-gray-300 p-2">{factor.name}</td>

                        {/* Green Column */}
                        <td className="border border-gray-300 p-2 bg-green-50">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name={factor.name}
                                    value={1}
                                    checked={selectedOptions[factor.name] === 1}
                                    onChange={() => handleOptionChange(factor.name, 1)}
                                    className="cursor-pointer"
                                />
                                <span className="text-sm">{factor.options[0].green}</span>
                            </label>
                        </td>

                        {/* Yellow Column */}
                        <td className="border border-gray-300 p-2 bg-yellow-50">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name={factor.name}
                                    value={3}
                                    checked={selectedOptions[factor.name] === 3}
                                    onChange={() => handleOptionChange(factor.name, 3)}
                                    className="cursor-pointer"
                                />
                                <span className="text-sm">{factor.options[0].yellow}</span>
                            </label>
                        </td>

                        {/* Red Column */}
                        <td className="border border-gray-300 p-2 bg-red-50">
                            <label className="flex items-center space-x-2">
                                <input
                                    type="radio"
                                    name={factor.name}
                                    value={5}
                                    checked={selectedOptions[factor.name] === 5}
                                    onChange={() => handleOptionChange(factor.name, 5)}
                                    className="cursor-pointer"
                                />
                                <span className="text-sm">{factor.options[0].red}</span>
                            </label>
                        </td>

                        {/* Points Column */}
                        <td className="border border-gray-300 p-2 text-center font-semibold">
                            {selectedOptions[factor.name] || 0}
                        </td>
                    </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataCapture;