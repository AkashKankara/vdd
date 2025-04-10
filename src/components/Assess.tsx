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
        <>
        <DetailedReport />
        </>
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
