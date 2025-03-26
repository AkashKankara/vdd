"use client";

import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Box, Typography, Card, Grid } from "@mui/material";

// Data for Vendor Type Pie Chart
const vendorTypeData = [
  { name: "Non Govt Vendors", value: 82, color: "#1F3A93" }, // Dark Blue
  { name: "Govt Vendors", value: 18, color: "#B4850B" }, // Yellow-Brown
];

// Data for Risk Level Pie Chart
const riskLevelData = [
  { name: "No Risk", value: 928, color: "#28a745", trend: "▲" },
  { name: "Medium Risk", value: 414, color: "#ffc107", trend: "▼" },
  { name: "High Risk", value: 112, color: "#dc3545", trend: "▲" },
  { name: "Blacklisted", value: 21, color: "#6c757d", trend: "" },
];

// Custom Label for Vendor Type Pie Chart
const renderVendorLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={14}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const VendorStatus = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback((_, index) => setActiveIndex(index), []);

  return (
    <Card sx={{ p: 1, width: "100%", maxWidth: 500, boxShadow: 3, borderRadius: 2, backgroundColor: "#F5F5F5" }}>

      {/* Charts Side by Side */}
      <Grid container spacing={0} alignItems="center">
        {/* Left: Risk Level Pie Chart */}
        <Grid item xs={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <PieChart width={140} height={140}>
              <Pie
                data={riskLevelData}
                dataKey="value"
                cx="50%"
                cy="50%"
                innerRadius={45}
                outerRadius={55}
              >
                {riskLevelData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>

            <Typography variant="h6" fontWeight="bold">
              1474
            </Typography>
            <Typography variant="body2" color="text.secondary">
              3.4% <span style={{ color: "green" }}>▲</span> YoY
            </Typography>
          </Box>
        </Grid>

        {/* Risk Level Breakdown */}
        <Box mt={2}>
          {riskLevelData.map((risk, index) => (
            <Typography key={index} variant="body2" sx={{ mb: 0.8 }}>
              <span style={{ color: risk.color, fontWeight: "bold" }}>{risk.name}: </span>
              <span style={{ fontWeight: "bold" }}>{risk.value}</span>
              <span style={{ fontSize: "0.8rem", marginLeft: 5 }}>{risk.trend}</span>
            </Typography>
          ))}
        </Box>

        {/* Right: Vendor Type Pie Chart */}
        <Grid item xs={4}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1" fontWeight="bold">
              Vendor Type
            </Typography>

            <PieChart width={140} height={140}>
              <Pie
                data={vendorTypeData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={55}
                labelLine={false}
                label={renderVendorLabel}
              >
                {vendorTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>

            {/* Labels */}
            <Box mt={1}>
              {vendorTypeData.map((vendor, index) => (
                <Typography
                  key={index}
                  sx={{
                    backgroundColor: vendor.color,
                    color: "white",
                    px: 2,
                    py: 0.5,
                    borderRadius: "5px",
                    display: "inline-block",
                    fontSize: "0.85rem",
                    mb: 0.5,
                  }}
                >
                  {vendor.name}: {vendor.value * 10 + 136}
                </Typography>
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

export default VendorStatus;


