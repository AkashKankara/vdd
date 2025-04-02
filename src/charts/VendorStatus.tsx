"use client";

import React, { useCallback, useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { Box, Typography, Card, Grid } from "@mui/material";

// Define the type for the dataset
interface DepartmentData {
  department: string;
  requests: number;
  nonGovt: number;
  govt: number;
  noRisk: number;
  mediumRisk: number;
  highRisk: number;
  blacklisted: number;
}

const data: DepartmentData[] = [
  { department: "Sales", requests: 3, nonGovt: 70, govt: 30, noRisk: 100, mediumRisk: 20, highRisk: 10, blacklisted: 5 },
  { department: "Finance", requests: 6, nonGovt: 60, govt: 40, noRisk: 150, mediumRisk: 40, highRisk: 20, blacklisted: 10 },
  { department: "QC", requests: 3, nonGovt: 80, govt: 20, noRisk: 80, mediumRisk: 25, highRisk: 15, blacklisted: 2 },
  { department: "Production", requests: 5, nonGovt: 75, govt: 25, noRisk: 120, mediumRisk: 35, highRisk: 18, blacklisted: 6 },
  { department: "Marketing", requests: 8, nonGovt: 85, govt: 15, noRisk: 110, mediumRisk: 45, highRisk: 22, blacklisted: 3 },
  { department: "Admin", requests: 11, nonGovt: 90, govt: 10, noRisk: 140, mediumRisk: 50, highRisk: 30, blacklisted: 8 },
];

// Compute initial aggregated data
const initialAggregatedData = data.reduce(
  (acc, dept) => {
    acc.nonGovt += dept.nonGovt;
    acc.govt += dept.govt;
    acc.noRisk += dept.noRisk;
    acc.mediumRisk += dept.mediumRisk;
    acc.highRisk += dept.highRisk;
    acc.blacklisted += dept.blacklisted;
    return acc;
  },
  { nonGovt: 0, govt: 0, noRisk: 0, mediumRisk: 0, highRisk: 0, blacklisted: 0 }
);

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

const VendorStatus: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<DepartmentData | null>(null);

  const handleBarClick = (entry: DepartmentData) => {
    setSelectedDepartment(entry);
  };

  const vendorData = selectedDepartment
    ? [
        { name: "Non Govt Vendors", value: selectedDepartment.nonGovt, color: "#2F4C71" },
        { name: "Govt Vendors", value: selectedDepartment.govt, color: "#C59B11" },
      ]
    : [
        { name: "Non Govt Vendors", value: initialAggregatedData.nonGovt, color: "#2F4C71" },
        { name: "Govt Vendors", value: initialAggregatedData.govt, color: "#C59B11" },
      ];

  const riskData = selectedDepartment
    ? [
        { name: "No Risk", value: selectedDepartment.noRisk, color: "#18A02F" },
        { name: "Medium Risk", value: selectedDepartment.mediumRisk, color: "#E09B06" },
        { name: "High Risk", value: selectedDepartment.highRisk, color: "#B40101" },
        { name: "Blacklisted", value: selectedDepartment.blacklisted, color: "#B7B7B7" },
      ]
    : [
        { name: "No Risk", value: initialAggregatedData.noRisk, color: "#18A02F" },
        { name: "Medium Risk", value: initialAggregatedData.mediumRisk, color: "#E09B06" },
        { name: "High Risk", value: initialAggregatedData.highRisk, color: "#B40101" },
        { name: "Blacklisted", value: initialAggregatedData.blacklisted, color: "#B7B7B7" },
      ];


  return (
    // <Card sx={{ p: 1, width: "100%", maxWidth: 500, boxShadow: 3, borderRadius: 2, backgroundColor: "#FBFBFB" }}>

    //   {/* Charts Side by Side */}
    //   <Grid container spacing={0} alignItems="center">
    //     {/* Left: Risk Level Pie Chart */}
    //     <Grid item xs={4}>
    //       <Box display="flex" flexDirection="column" alignItems="center">
    //         <PieChart width={140} height={140}>
    //           <Pie
    //             data={riskLevelData}
    //             dataKey="value"
    //             cx="50%"
    //             cy="50%"
    //             innerRadius={45}
    //             outerRadius={55}
    //           >
    //             {riskLevelData.map((entry, index) => (
    //               <Cell key={`cell-${index}`} fill={entry.color} />
    //             ))}
    //           </Pie>
    //         </PieChart>

    //         <Typography variant="h6" fontWeight="bold">
    //           1474
    //         </Typography>
    //         <Typography variant="body2" color="text.secondary">
    //           3.4% <span style={{ color: "green" }}>▲</span> YoY
    //         </Typography>
    //       </Box>
    //     </Grid>

    //     {/* Risk Level Breakdown */}
    //     <Box mt={2}>
    //       {riskLevelData.map((risk, index) => (
    //         <Typography key={index} variant="body2" sx={{ mb: 0.8 }}>
    //           <span style={{ color: risk.color, fontWeight: "bold" }}>{risk.name}: </span>
    //           <span style={{ fontWeight: "bold" }}>{risk.value}</span>
    //           <span style={{ fontSize: "0.8rem", marginLeft: 5 }}>{risk.trend}</span>
    //         </Typography>
    //       ))}
    //     </Box>

    //     {/* Right: Vendor Type Pie Chart */}
    //     <Grid item xs={4}>
    //       <Box display="flex" flexDirection="column" alignItems="center">
    //         <Typography variant="body1" fontWeight="bold">
    //           Vendor Type
    //         </Typography>

    //         <PieChart width={140} height={140}>
    //           <Pie
    //             data={vendorTypeData}
    //             dataKey="value"
    //             cx="50%"
    //             cy="50%"
    //             outerRadius={55}
    //             labelLine={false}
    //             label={renderVendorLabel}
    //           >
    //             {vendorTypeData.map((entry, index) => (
    //               <Cell key={`cell-${index}`} fill={entry.color} />
    //             ))}
    //           </Pie>
    //         </PieChart>

    //         {/* Labels */}
    //         <Box mt={1}>
    //           {vendorTypeData.map((vendor, index) => (
    //             <Typography
    //               key={index}
    //               sx={{
    //                 backgroundColor: vendor.color,
    //                 color: "white",
    //                 px: 2,
    //                 py: 0.5,
    //                 borderRadius: "5px",
    //                 display: "inline-block",
    //                 fontSize: "0.85rem",
    //                 mb: 0.5,
    //               }}
    //             >
    //               {vendor.name}: {vendor.value * 10 + 136}
    //             </Typography>
    //           ))}
    //         </Box>
    //       </Box>
    //     </Grid>
    //   </Grid>
    // </Card>
        <Card sx={{ p: 1, width: "100%", maxWidth: 500, boxShadow: 3, borderRadius: 2, backgroundColor: "#FBFBFB" }}>
          <Typography variant="h6" textAlign="center">
            {selectedDepartment ? `${selectedDepartment.department} Vendor Status` : "Vendor Status"}
          </Typography>
          <Grid container justifyContent="center" spacing={0}>

            <Grid item xs={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <PieChart width={140} height={140}>
                  <Pie data={riskData} dataKey="value" cx="50%" cy="50%" outerRadius={55} innerRadius={45}>
                    {riskData.map((entry, index) => (
                      <Cell key={`risk-${index}`} fill={entry.color} />
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
              {riskData.map((risk, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 0.8 }}>
                  <span style={{ color: risk.color, fontWeight: "bold" }}>{risk.name}: </span>
                  <span style={{ fontWeight: "bold" }}>{risk.value}</span>
                  <span style={{ fontSize: "0.8rem", marginLeft: 5 }}>▲</span>
                </Typography>
              ))}
            </Box>

            <Grid item xs={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="body1" fontWeight="bold">Vendor Type</Typography>
                <PieChart width={140} height={140}>
                  <Pie data={vendorData} dataKey="value" cx="50%" cy="50%" outerRadius={55} labelLine={false} label={renderVendorLabel}>
                    {vendorData.map((entry, index) => (
                      <Cell key={`vendor-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
                {/* Labels */}
                <Box mt={1}>
                  {vendorData.map((vendor, index) => (
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
                      {vendor.name}: {vendor.value}
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


