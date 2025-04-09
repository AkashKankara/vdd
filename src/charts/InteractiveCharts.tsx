"use client";

import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import { Card, Box, Typography, Grid } from "@mui/material";;
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import { RiTriangleFill } from "react-icons/ri";
import { IoCaretDown } from "react-icons/io5";
import { useRouter } from "next/navigation";

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

const InteractiveCharts: React.FC = () => {
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
  const router = useRouter();

  const handleVendorClick = (type: string) => {
    router.push(`/vendors?type=${type}`);
  };
  return (

    <Grid container spacing={2}>

      {/*Vendor Status Pie Charts */}
      <Grid item sm={7}>
        <Typography variant="body1" fontWeight="bold">Vendor Summary</Typography>
        <Card sx={{ p: 1, width: "100%", maxWidth: 550, boxShadow: 3, borderRadius: 2, backgroundColor: "#FBFBFB", height: 270 }}>
          <Grid container display="flex" flexDirection="row" alignItems="center" spacing={0}>

            <Grid item xs={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="body1" fontWeight="semibold" textAlign="start">
                  {selectedDepartment ? `${selectedDepartment.department} Vendor Status` : "Vendor Status"}
                </Typography>
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
                  <span style={{ fontSize: "0.8rem", marginLeft: 5 }}><IoCaretDown size={10} color="#B40101" /></span>
                </Typography>
              ))}
            </Box>

            <Grid item xs={4}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Typography variant="body2" fontWeight="semibold">Vendor Type</Typography>
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
                      onClick={() => handleVendorClick(vendor.name.includes("Non") ? "Non Govt" : "Govt")}
                      style={{ cursor: "pointer" }}
                    >
                      {vendor.name}: {vendor.value}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </Grid>
      {/*Pending DDD Bar Chart*/}
      <Grid item sm={2}>
        <Typography variant="body1" fontWeight="bold">Pending DDD</Typography>
        <Card sx={{ p: 1, boxShadow: 3, borderRadius: 2, backgroundColor: "#F5F5F5", width: "100%", maxwidth: 200, height: 270 }}>
          <Box sx={{ width: "100%", height: "100%" }}>
            <ResponsiveContainer width="100%">
              <BarChart data={data} layout="vertical" barCategoryGap="20%" margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                <YAxis type="category" dataKey="department" hide />
                <XAxis type="number" hide />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar
                  dataKey="requests"
                  fill="#A47400"
                  barSize={10}
                  radius={[0, 10, 10, 0]}
                  onClick={(entry) => handleBarClick(entry)}
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
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={selectedDepartment === entry ? "#FF6600" : "#A47400"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Card>
      </Grid>
      {/*Trends Scheduled */}
      <Grid item sm={3}>
        <Typography variant="body1" fontWeight="bold">Trends Scheduled</Typography>
        <Card sx={{ p: 1, boxShadow: 3, borderRadius: 2, backgroundColor: "#F5F5F5", width: "100%", maxwidth: 200, height: 270, alignContent: "center" }}>
          {[
            { label: "Today", value: 33 },
            { label: "This Week", value: 128 },
            { label: "This Month", value: 271 },
          ].map((item, index) => (
            <Box key={index}>
              <Typography variant="body2" color="#515151" textAlign="center">
                {item.label}
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Typography variant="h6" fontWeight="bold" color="#515151">
                  {item.value}
                </Typography>
                <Typography variant="body2" color="#515151" sx={{ ml: 1, display: "flex", alignItems: "center" }}>
                  2.5% <RiTriangleFill size={10} color="#32A013" style={{ marginLeft: 4 }} /> MoM
                </Typography>
              </Box>
            </Box>
          ))}

          {/* Manual & Auto Schedule */}
          <Box mt={1}>
            <Box display="flex" alignItems="center" bgcolor="#D1D4EF" p={1} borderRadius={6} mb={1}>
              <PersonIcon sx={{ color: "#003CE1", mr: 1 }} />
              <Typography variant="body2">Manual Schedule:</Typography>
              <Typography variant="body2" fontWeight={600} ml={1}>
                672
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" bgcolor="#E7E7E7" p={1} borderRadius={6}>
              <SettingsIcon sx={{ color: "#003CE1", mr: 1 }} />
              <Typography variant="body2">Auto Schedule:</Typography>
              <Typography variant="body2" fontWeight={600} ml={1}>
                357
              </Typography>
            </Box>
          </Box>
        </Card>

      </Grid>
    </Grid>

  );
};

export default InteractiveCharts;


