'use client';

import React, { useState } from 'react';
import Summary from './Summary';
import DetailedReport from './detailed_report';
import CorruptionPerception from './corruption_perception';

interface AssessProps {
  activeTab: string;
  setActiveTab: (step: string) => void;
}

// function Assess() {
  // const [activeTab, setActiveTab] = useState('summary');
const Assess: React.FC<AssessProps> = ({ activeTab, setActiveTab })=> {
console.log(activeTab);
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex">
        {['Summary', 'Corruption Perception Index', 'Detailed Report'].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 mr-3 ${activeTab === tab.toLowerCase() ? 'text-[#383838] border-t-2 border-x-2 border-[#CBCBCB] rounded-t-lg bg-white font-semibold' : 'text-[#0B6DFF] border-b border-[#0B6DFF] bg-[#F3F3F3] rounded-t-lg'}`}
            onClick={() => setActiveTab(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'detailed report' ? (
<<<<<<< Updated upstream
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
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2">Third party’s official website</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">16.5</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2">Google Maps</td>
                <td className="border border-white px-4 py-2">www.google.com/maps</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">12</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2" rowSpan={2}>Company Information</td>
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">17</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#F1F1F1]">
                <td className="border border-white px-4 py-2">Director Search</td>
                <td className="border border-white px-4 py-2">Director Search</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">17</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#0B6DFF1A]">
                <td className="border border-white px-4 py-2" rowSpan={2}>Adverse Press/Media</td>
                <td className="border border-white px-4 py-2" rowSpan={2}>News</td>
                <td className="border border-white px-4 py-2">News Center</td>
                <td className="border border-white px-4 py-2">https://economictimes.indiatimes.com/ <br /> https://www.hindustantimes.com/</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">13.7</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
              <tr className="bg-[#0B6DFF1A]">
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2">Regulatory database</td>
                <td className="border border-white px-4 py-2"></td>
                <td className="border border-white px-4 py-2">17</td>
                <td className="border border-white px-4 py-2"><input type="text" className="w-full" /></td>
              </tr>
            </tbody>
          </table>
        </div>
=======
        <>
        <DetailedReport />
        </>
>>>>>>> Stashed changes
      ) : 
      activeTab === 'corruption perception index' ? (
        <>
        <CorruptionPerception />
        </>
      ) : (
        <>
          <Summary />
        </>
      )}
    </div>
  );
};

export default Assess;
