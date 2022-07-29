import { Pie } from "react-chartjs-2";
import React, { useState, useEffect } from "react";
import { Chart, ArcElement, Legend, Tooltip, Title } from "chart.js";
import { Box } from "@mui/material";
import { getStatisticVote } from "../proxy/votersProxy"

Chart.register(ArcElement, Legend, Title, Tooltip);

const StatisticVotes = () => {
  const labels = ["הצביעו", "לא הצביעו"];

  const [dataStatistic, setDataStatistic] = useState({});
  const { voted, not_voted, percentage } = dataStatistic;

  const datasets = [
    {
      data: [voted, not_voted],
      backgroundColor: ["#2ECC40", "#FF4136"],
    },
  ];
  console.log(dataStatistic)
  useEffect(() => {
    getStatisticVote().then((data) => {
      setDataStatistic(data);

    });
    const interval = setInterval(() => {
      console.log('This will run every second!');
      getStatisticVote().then((data) => {
        setDataStatistic(data);
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);


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
