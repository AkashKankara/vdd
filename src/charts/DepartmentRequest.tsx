"use client";

import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from "recharts";
import { Card, Box, Typography } from "@mui/material";

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


const DepartmentRequest: React.FC = () => {
    const [selectedDepartment, setSelectedDepartment] = useState<DepartmentData | null>(null);
  
    const handleBarClick = (entry: DepartmentData) => {
      setSelectedDepartment(entry);
    };
  return (
    <Card sx={{ p: 1, boxShadow: 3, borderRadius: 2, backgroundColor: "#F5F5F5", width: "100%", maxwidth: 250, height: 300 }}>
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
    // <Card sx={{ p: 1, boxShadow: 3, borderRadius: 2, backgroundColor: "#F5F5F5", width: "100%", maxwidth: 250, height: "100%" }}>

    //   <Box sx={{ width: "100%", height: "100%" }}>
    //     <ResponsiveContainer width="100%">
    //       <BarChart
    //         data={data}
    //         layout="vertical"
    //         barCategoryGap="20%"
    //         margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
    //       >
    //         <YAxis
    //           type="category"
    //           dataKey="department"
    //           hide
    //         />
    //         <XAxis type="number" hide />
    //         <Tooltip cursor={{ fill: "transparent" }} />
    //         <Bar
    //           dataKey="requests"
    //           fill="#A47400"
    //           barSize={10}
    //           radius={[0, 10, 10, 0]}
    //           label={({ x, y, width, value, index }) => (
    //             <>
    //               {/* Department Name Above the Bar */}
    //               <text x={x} y={y - 5} fill="black" fontSize={12}>
    //                 {data[index].department}
    //               </text>
            
    //               {/* Value Label on the Right Side */}
    //               <text x={x + width + 5} y={y + 5} dy={8} fill="black" fontSize={12}>
    //                 {value}
    //               </text>
    //             </>
    //           )}
              
    //         />
    //       </BarChart>
    //     </ResponsiveContainer>
    //   </Box>
    // </Card>
  );
};

export default DepartmentRequest;

