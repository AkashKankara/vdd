import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const RiskRatingChart = () => {
  // Data for the risk rating
  const data = [
    { name: 'Low', value: 92, percentage: 61, color: '#28a745' },
    { name: 'Medium', value: 42, percentage: 28, color: '#ffc107' },
    { name: 'High', value: 10, percentage: 7, color: '#dc3545' },
    { name: 'Black', value: 6, percentage: 4, color: '#343a40' }
  ];

  // Custom label renderer for outside labels without lines
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
    const RADIAN = Math.PI / 180;
    // Position the label further outside the pie
    const radius = outerRadius * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    
    const item = data[index];
    
    // Only show labels for segments with visible area
    if (item.value === 0) return null;
    
    return (
      <text 
        x={x} 
        y={y} 
        fill="#333333" 
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
      >
        {`${item.value}(${item.percentage}%)`}
      </text>
    );
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg max-w-md">
      <h2 className="text-lg font-medium text-gray-800 mb-2">Risk Rating</h2>
      <div className="flex">
        <div className="w-3/4">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={70}
                innerRadius={35}
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
        </div>
        <div className="w-1/4 flex flex-col justify-center">
          <ul className="list-none">
            {data.map((item, index) => (
              <li key={`legend-${index}`} className="flex items-center mb-2">
                <div 
                  className="w-3 h-3 mr-2" 
                  style={{ backgroundColor: item.color }}
                ></div>
                <span className="text-xs">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RiskRatingChart;