"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Card, CardContent, Typography } from "@mui/material";
const data = [
  { points: "< 15 Points", vendors: 100 },
  { points: "< 20 Points", vendors: 150 },
  { points: "< 25 Points", vendors: 200 },
  { points: "< 30 Points", vendors: 250 },
  { points: "< 35 Points", vendors: 300 },
];

const TopVendors = () => {
  return (

    <Card sx={{ p: 1, width: "100%", maxWidth: 500, boxShadow: 3, borderRadius: 2, backgroundColor: "#F5F5F5" }}>
      <CardContent>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Top 10 Non Risk Vendors 
      </Typography>
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
