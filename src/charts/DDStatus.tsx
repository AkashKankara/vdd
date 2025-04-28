"use client";
import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const DDStatus = () => {
  // Data for the task status chart
  const data = [
    { name: 'Completed', value: 23, color: '#A86F03' },
    { name: 'In Progress', value: 18, color: '#A86F03' },
    { name: 'Pending', value: 12, color: '#A86F03' }
  ];

  // Custom label renderer to show count above bars
  const renderCustomizedLabel = (props) => {
    const { x, y, width, value } = props;
    return (
      <text 
        x={x + width / 2} 
        y={y - 10} 
        fill="#858687" 
        textAnchor="middle"
        fontSize={14}
      >
        {value}
      </text>
    );
  };

  return (
    <div className="bg-[#F9F9F9] p-4 rounded-lg max-w-md">
      <ResponsiveContainer width="100%" height={200}>
        <BarChart 
          data={data}
          margin={{ top: 20, right: 10, left: 10, bottom: 0 }}
          barCategoryGap="30%"
        >
          <XAxis 
            dataKey="name" 
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#858687', fontSize: 12 }}
          />
          <Bar 
            dataKey="value" 
            fill="#B7791F" 
            radius={[4, 4, 0, 0]}
            label={renderCustomizedLabel}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DDStatus;