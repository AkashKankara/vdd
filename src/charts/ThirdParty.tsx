"use client";
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const ThirdParty = () => {
  const data = [
    { name: 'In Progress', value: 42, percentage: 20, color: '#D67516' },
    { name: 'Completed', value: 92, percentage: 61, color: '#A6A659' },
    { name: 'To be Initiated', value: 29, percentage: 19, color: '#B40101' }
  ];

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, name, value, percentage, index }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 1.3;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fill="#393A3A"
        fontSize={12}
      >
        {`${value}(${percentage}%)`}
      </text>
    );
  };

  const renderCustomLegend = () => (
    <ul className="flex justify-center flex-wrap text-sm">
      {data.map((entry, index) => (
        <li key={`item-${index}`} className="flex items-center mx-2">
          <span
            className="inline-block w-3 h-3 mr-1"
            style={{ backgroundColor: entry.color }}
          />
          {entry.name}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="bg-[#F9F9F9] p-2 rounded-lg max-w-md">
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="40%"
            labelLine={false}
            label={(props) => renderCustomizedLabel({ ...props, ...data[props.index] })}
            outerRadius={70}
            innerRadius={50}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={1}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      {/* Custom Legend below the chart */}
      {renderCustomLegend()}
    </div>
  );
};

export default ThirdParty;
