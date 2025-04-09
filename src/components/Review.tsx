'use client';

import React, { useState } from 'react';

export default function CorruptionPerceptionIndex() {
  const [activeTab, setActiveTab] = useState('summary');
  const [selections, setSelections] = useState({
    govt_connection: '',
    background_review: '',
    industry_experience: ''
  });

  const handleSelectionChange = (event) => {
    setSelections({ ...selections, [event.target.name]: event.target.value });
  };

  const categories = [
    {
      name: "Business Impact (If product or service is discontinued)",
      weight: 30,
      score: 8,
      weightedScore: 2.4
    },
    {
      name: "Vendor interaction with TKM Employees or Customers[1]",
      weight: 20,
      score: 7,
      weightedScore: 1.4
    },
    {
      name: "Accumulated annual transaction amount",
      weight: 15,
      score: 9,
      weightedScore: 1.35
    },
    {
      name: "Contract Term",
      weight: 15,
      score: 6,
      weightedScore: 0.9
    },
    {
      name: "Potential for Significant Cost or Loss",
      weight: 10,
      score: 7,
      weightedScore: 0.7
    },
    {
      name: "Access to TKM's Sensitive Information (product",
      weight: 10,
      score: 8,
      weightedScore: 0.8
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex">
        {['Summary', 'Detailed Report'].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 mr-3 ${activeTab === tab.toLowerCase() ? 'text-[#383838] border-t-2 border-x-2 border-[#CBCBCB] rounded-t-lg bg-white font-semibold' : 'text-[#0B6DFF] border-b border-[#0B6DFF] bg-[#F3F3F3] rounded-t-lg'}`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Total Points */}
      <div className="mt-4">
        <div className="bg-[#32A013] text-white px-4 py-2 inline-block rounded-md font-medium">
          Total Points: 22
        </div>
      </div>

      {activeTab === 'detailed report' ? (
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#E2E2E2]">
                <th className="border border-white px-4 py-2">Risk Area</th>
                <th className="border border-white px-4 py-2">Search Type</th>
                <th className="border border-white px-4 py-2">Search Engine / Database</th>
                <th className="border border-white px-4 py-2">Search Site or Location</th>
                <th className="border border-white px-4 py-2">Findings & Data Searched</th>
                <th className="border border-white px-4 py-2">Score</th>
                <th className="border border-white px-4 py-2">Comments</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2" rowSpan={5}>Background/ Shareholders</td>
                <td className="border border-white px-4 py-2" rowSpan={3}>General Information</td>
                <td className="border border-white px-4 py-2">Source Google</td>
                <td className="border border-white px-4 py-2">www.google.com</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">13.7</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full bg-white" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2">Third party’s official website</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">16.5</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full bg-white" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2">Google Maps</td>
                <td className="border border-white px-4 py-2">www.google.com/maps</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">12</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full bg-white" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2" rowSpan={2}>Company Information</td>
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">17</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full bg-white" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2">Director Search</td>
                <td className="border border-white px-4 py-2">Director Search</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">17</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full bg-white" /></td>
              </tr>
              <tr className="bg-[#0B6DFF1A]">
                <td className="border border-white px-4 py-2" rowSpan={2}>Adverse Press/Media</td>
                <td className="border border-white px-4 py-2" rowSpan={2}>News</td>
                <td className="border border-white px-4 py-2">News Center</td>
                <td className="border border-white px-4 py-2">https://economictimes.indiatimes.com/ <br /> https://www.hindustantimes.com/</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">13.7</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full bg-white" /></td>
              </tr>
              <tr className="bg-[#0B6DFF1A]">
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">17</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full bg-white" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <>
          {/* Ranking Title */}
          <h2 className="mt-6 text-lg font-medium">Ranking</h2>

          {/* Table */}
          <div className="overflow-x-auto mt-2">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#E2E2E2]">
                  <th className="border-2 border-[#E2E2E2] border-r-white px-4 py-2 text-center font-medium">Category</th>
                  <th className="border-2 border-[#E2E2E2] border-r-white px-4 py-2 text-center font-medium">Weight (%)</th>
                  <th className="border-2 border-[#E2E2E2] border-r-white px-4 py-2 text-center font-medium">Score</th>
                  <th className="border-2 border-[#E2E2E2] px-4 py-2 text-center font-medium">Weighted Score</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category, index) => (
                  <tr key={index} className="hover:bg-gray-100">
                    <td className="border border-[#D8D8D8] px-4 py-2 font-medium">{category.name}</td>
                    <td className="border border-[#D8D8D8] px-4 py-2 text-center font-medium">{category.weight}</td>
                    <td className="border border-[#D8D8D8] px-4 py-2 text-center font-medium">{category.score}</td>
                    <td className="border border-[#D8D8D8] px-4 py-2 text-center font-medium">{category.weightedScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
