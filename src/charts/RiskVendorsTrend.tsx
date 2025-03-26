"use client";

import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";

const data = [
  { date: "Jan 25", vendors: 50 },
  { date: "Feb 25", vendors: 80 },
  { date: "Mar 25", vendors: 40 },
  { date: "Apr 25", vendors: 60 },
  { date: "May 25", vendors: 50 },
  { date: "Jun 25", vendors: 45 },
];

const RiskVendorsTrend = ()=> {
  return (
    <Card sx={{ p: 1, width: "100%", maxWidth: 800, height:272, boxShadow: 3, borderRadius: 2, backgroundColor: "#F5F5F5" }}>
      <CardContent>
        <ResponsiveContainer width={400} height={220}>
          <LineChart data={data}>
            {/* X-Axis with "Time" label */}
            <XAxis 
              dataKey="date" 
              tick={{ fill: "#555", fontSize: 12 }} 
              label={{ value: "Time", position: "bottom", offset: -10 }} 
            />

            {/* Y-Axis with "No. of Vendors" label */}
            <YAxis 
              tick={{ fill: "#555", fontSize: 12 }} 
              label={{ value: "No. Of Vendors", angle: -90, position: "insidecenter" }} 
            />

            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Line 
              type="monotone" 
              dataKey="vendors" 
              stroke="#dc3545" 
              strokeWidth={2.5} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default RiskVendorsTrend;

