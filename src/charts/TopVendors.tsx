"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "@mui/material";
const data = [
  { points: "< 15 Points", vendors: 100 },
  { points: "< 20 Points", vendors: 150 },
  { points: "< 25 Points", vendors: 200 },
  { points: "< 30 Points", vendors: 250 },
  { points: "< 35 Points", vendors: 300 },
];

const TopVendors = () => {
  return (
    // <div className="p-2 flex shadow-md rounded-lg bg-gray-100 border border-gray-400 w-full max-w-md">
      
    //   <BarChart width={500} height={250} data={data} layout="vertical">
    //     <YAxis type="category" dataKey="points" />
    //     <XAxis type="number" />
    //     <Tooltip />
    //     <Legend />
    //     <Bar dataKey="vendors" fill="#28a745" />
    //   </BarChart>
    // </div>
    <Card sx={{ p: 1, width: "100%", maxWidth: 500, boxShadow: 3, borderRadius: 2, backgroundColor: "#F5F5F5" }}>
      <CardContent>
        <ResponsiveContainer width={400} height={220}>
          <BarChart data={data} layout="vertical">
            <YAxis 
              type="category" 
              dataKey="points" 
              tick={{ fill: "#555", fontSize: 12 }} 
              width={80} 
            />
            <XAxis type="number" tick={{ fill: "#555", fontSize: 12 }} />
            <Tooltip cursor={{ fill: "rgba(0, 0, 0, 0.1)" }} />
            <Bar 
              dataKey="vendors" 
              fill="#28a745" 
              barSize={15}
              label={{ position: "right", fill: "#000", fontSize: 12 }} 
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default TopVendors;
