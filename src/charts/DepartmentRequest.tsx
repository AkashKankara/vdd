"use client";

import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList
} from 'recharts';
import { Card, CardContent } from '@mui/material';

const DepartmentRequestChart = () => {
  const data = [
    { department: 'Sales', value: 3 },
    { department: 'PCLD', value: 6 },
    { department: 'Quality', value: 3 },
    { department: 'DX', value: 5 },
    { department: 'Marketing', value: 8 },
    { department: 'Finance', value: 11 },
    { department: 'HR', value: 4 }
  ];

  return (
    <Card sx={{ maxWidth: 600, width: "100%", backgroundColor: "#F9F9F9" }}>
      <CardContent>
        <ResponsiveContainer width={300} height={200}>
          <BarChart
            layout="vertical"
            data={data}
            margin={{
              top: 2,
              right: 5,
              left: 5,
              bottom: 2
            }}
          >
            <CartesianGrid horizontal={false} vertical={false} />
            <XAxis type="number" hide />
            <YAxis
              dataKey="department"
              type="category"
              tick={{ fontSize: 14 }}
              width={70}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip />
            <Bar
              dataKey="value"
              fill="#A86F03"
              barSize={10}
              radius={[0, 10, 10, 0]}
            >
              <LabelList dataKey="value" position="right" fill="#1B1B1B" fontSize={12} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DepartmentRequestChart;

