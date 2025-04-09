"use client";

import React from "react";
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Divider, Link } from "@mui/material";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import ErrorIcon from "@mui/icons-material/Error";

const alerts = [
  {
    type: "warning",
    message: "Upcoming Due Diligence: Due diligence for xyz vendor is scheduled for 28 Jan 25. 10:10:10",
    timestamp: "28 Jan 25. 10:10:10",
  },
  {
    type: "error",
    message: "Scheduling Failed: Unable to schedule due diligence for ABC Corporation. Please try again later.",
    timestamp: "28 Jan 25. 10:10:10",
  },
  {
    type: "error",
    message: "Scheduling Failed: Unable to schedule due diligence for ABC Corporation. Please try again later.",
    timestamp: "28 Jan 25. 10:10:10",
  },
];

const AlertBox = () => {
  return (
    <Paper elevation={2} sx={{ p: 2, borderRadius: 2, backgroundColor: "#F5F5F5" }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
        Alerts <Typography component="span">({alerts.length})</Typography>
      </Typography>

      <List>
        {alerts.map((alert, index) => (
          <React.Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                {alert.type === "warning" ? (
                  <WarningAmberIcon sx={{ color: "#FFA000" }} />
                ) : (
                  <ErrorIcon sx={{ color: "#D32F2F" }} />
                )}
              </ListItemIcon>
              <ListItemText
                primary={alert.message}
                secondary={alert.timestamp}
                primaryTypographyProps={{ fontSize: "14px" }}
                secondaryTypographyProps={{ textAlign: "right", fontSize: "12px", color: "gray" }}
              />
            </ListItem>
            {index < alerts.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </List>

      <Box sx={{ textAlign: "right", mt: 1 }}>
        <Link href="#" sx={{ fontSize: "14px", color: "blue", textDecoration: "none", fontWeight: "bold" }}>
          More
        </Link>
      </Box>
    </Paper>
  );
};

export default AlertBox;
