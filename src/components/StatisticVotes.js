import { Pie } from "react-chartjs-2";
import React, { useState } from "react";
import { Chart, ArcElement, Legend, Tooltip, Title } from "chart.js";
import { Box } from "@mui/material";

Chart.register(ArcElement, Legend, Title, Tooltip);

const StatisticVotes = () => {
  const labels = ["הצביעו", "לא הצביעו"];
  const datasets = [
    {
      data: [40, 60],
      backgroundColor: ["#2ECC40", "#FF4136"],
    },
  ];

  return (
    <Box
      sx={{
        width: {
          xs: "90%", // theme.breakpoints.up('xs')
          sm: "90%", // theme.breakpoints.up('sm')
          md: "60%", // theme.breakpoints.up('md')
          lg: "40%", // theme.breakpoints.up('lg')
          xl: "35%", // theme.breakpoints.up('xl')
        },
        m: "auto",
      }}
    >
      <Pie
        // options={{
        //   width: "40%",
        //   height: "40%",
        // }}
        data={{
          labels: labels,
          datasets: datasets,
        }}
      />
    </Box>
  );
};

export default StatisticVotes;
