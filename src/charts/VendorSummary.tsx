import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const RiskAssessmentDashboard = () => {
  const totalCount = 1474;
  const riskData = [
    { name: 'No Risk', value: 928, color: '#18A02F', change: '4.5%', increasing: true },
    { name: 'Medium Risk', value: 414, color: '#E09B06', change: '4.5%', increasing: false },
    { name: 'High Risk', value: 112, color: '#B40101', change: '4.5%', increasing: true },
    { name: 'Blacklisted', value: 21, color: '#B7B7B7' } // no trend here
  ];

  return (
    <div className="bg-[#F9F9F9] rounded-lg shadow-sm p-2 max-w-md">
      <div className="flex">
        {/* Left side - Donut chart */}
        <div className="w-1/2 relative flex items-center justify-center">
          <ResponsiveContainer width={200}>
            <PieChart>
              <Pie
                data={riskData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={75}
                startAngle={180}
                endAngle={-180}
                paddingAngle={0}
                dataKey="value"
              >
                {riskData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute text-center text-[#000000]">
            <span className="text-xl font-bold">{totalCount}</span>
          </div>
        </div>

        {/* Right side - Risk categories */}
        <div className="w-1/2 pl-4 flex flex-col justify-center">
          {riskData.map((risk, index) => (
            <div key={`risk-${index}`} className="mb-2">
              <div className="flex items-center">
                <span style={{ color: risk.color }} className="text-sm font-medium">
                  {risk.name}
                </span>
              </div>
              <div className="flex items-center">
                <span style={{ color: risk.color }} className="text-xl font-bold mr-2">
                  {risk.value}
                </span>
                {risk.change && risk.increasing !== undefined && (
                  <span className="text-xs text-gray-500 flex items-center">
                    {risk.change}
                    {risk.increasing ? (
                      <span className="text-green-500 ml-1">▲</span>
                    ) : (
                      <span className="text-red-500 ml-1">▼</span>
                    )}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiskAssessmentDashboard;
