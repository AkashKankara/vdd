"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Surface, Symbols } from 'recharts';

const VendorType = () => {
  // Data for the chart
  const data = [
    { name: 'Non Govt Vendors', value: 956, percentage: 82, color: '#2F4C71' },
    { name: 'Govt Vendors', value: 490, percentage: 18, color: '#C59B11' }
  ];

  // Custom renderer for the pie chart labels
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
    const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

    return (
      <text 
        x={x} 
        y={y} 
        fill="#FFFFFF" 
        textAnchor="middle" 
        dominantBaseline="central"
        fontSize={14}
        fontWeight={400}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  // Custom legend that renders buttons similar to the design
  const renderCustomLegend = (props) => {
    const { payload } = props;
    
    return (
      <div className="flex flex-col items-center w-full mt-1">
        {payload.map((entry, index) => (
          <div 
            key={`legend-item-${index}`}
            className="w-full mb-2"
          >
            <div 
              className="flex items-center justify-center py-1 text-[#FFFFFF] font-normal rounded"
              style={{ backgroundColor: entry.color }}
            >
              {entry.value}: {entry.payload.value}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-[#F9F9F9] p-2 rounded-lg shadow-sm max-w-xs">
      <ResponsiveContainer width={220} height={225}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="40%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={50}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend 
            content={renderCustomLegend}
            verticalAlign="bottom"
            align="center"
            layout="vertical"
            wrapperStyle={{ width: '80%' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default VendorType;