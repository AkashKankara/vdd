"use client";

import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Card, Box, Typography } from "@mui/material";

const data = [
  { department: "Sales", requests: 3 },
  { department: "Finance", requests: 6 },
  { department: "QC", requests: 3 },
  { department: "Production", requests: 5 },
  { department: "Marketing", requests: 8 },
  { department: "Admin", requests: 11 },
];

const DepartmentRequest = () => {
  return (
    <Card sx={{ p: 1, boxShadow: 3, borderRadius: 2, backgroundColor: "#F5F5F5", width: "100%", maxwidth: 250, height: "100%" }}>

      <Box sx={{ width: "100%", height: "100%" }}>
        <ResponsiveContainer width="100%">
          <BarChart
            data={data}
            layout="vertical"
            barCategoryGap="20%"
            margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
          >
            <YAxis
              type="category"
              dataKey="department"
              hide
            />
            <XAxis type="number" hide />
            <Tooltip cursor={{ fill: "transparent" }} />
            <Bar
              dataKey="requests"
              fill="#A47400"
              barSize={10}
              radius={[0, 10, 10, 0]}
              label={({ x, y, width, value, index }) => (
                <>
                  {/* Department Name Above the Bar */}
                  <text x={x} y={y - 5} fill="black" fontSize={12}>
                    {data[index].department}
                  </text>
            
                  {/* Value Label on the Right Side */}
                  <text x={x + width + 5} y={y + 5} dy={8} fill="black" fontSize={12}>
                    {value}
                  </text>
                </>
              )}
              
            />
          </BarChart>
        </ResponsiveContainer>
      </Box>
    </Card>
  );
};

export default DepartmentRequest;
