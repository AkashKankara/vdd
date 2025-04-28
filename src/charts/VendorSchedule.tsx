"use client";
import React from 'react';

const VendorSchedule = () => {
  // Data for the schedule statistics
  const topStats = [
    { number: '17', label: 'Manual Schedule' },
    { number: '29', label: 'Auto Schedule' }
  ];
  
  const bottomStats = [
    { number: '13', label: 'Today', subtext: '2.5% ▲ DoD' },
    { number: '12', label: 'Tomorrow', subtext: '2.5% ▲ DoD' },
    { number: '57', label: 'This Week', subtext: '2.5% ▲ DoD' }
  ];

  return (
    <div className="bg-[#F9F9F9] p-4 rounded-lg shadow-sm max-w-xl">
      {/* Top row with two cards */}
      <div className="flex justify-between mb-4 gap-2">
        {topStats.map((stat, index) => (
          <div key={`top-stat-${index}`} className="bg-[#FFFFFF] rounded-lg shadow-sm flex-1 p-4 flex flex-col items-center">
            <span className="text-[#36AA74] text-4xl font-bold">{stat.number}</span>
            <span className="text-[#515151] mt-1 text-sm">{stat.label}</span>
          </div>
        ))}
      </div>
      
      {/* Bottom row with three cards */}
      <div className="flex justify-between gap-2">
        {bottomStats.map((stat, index) => (
          <div 
            key={`bottom-stat-${index}`} 
            className={`bg-[#F9F9F9] flex-1 p-1 flex flex-col items-center
              ${index !== bottomStats.length - 1 ? 'border-r border-gray-200' : ''}`}
          >
            <span className="text-gray-700 text-2xl font-medium">{stat.number}</span>
            <span className="text-gray-600 text-xs">{stat.label}</span>
            <span className="text-xs mt-1">
                2.5% <span className="text-[#32A013]">▲</span> DoD
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorSchedule;