import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  scaleShowValues: true,
  scales: {
    x: {
      ticks: {
        autoSkip: false,
      },
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "אחוזי הצבעה לפי אחראים",
    },
  },
};
const StatisticUsers = () => {
  const labels = [
    "רוני",
    "גשניא",
    "כ",
    "ש",
    "קכגכגכ",
    "קרקרקר",
    "גכגכגכ",
    "/שז",
    "sdd",
    "sd",
    "sdf",
    "sdsdsq",
    "qwea",
    "sdwev",
    "jen",
    "edqwq",
    "dopolk",
    "dfdf",
    "poli",
    "polu",
    "poummm",
    "ר1וני",
    "ג2שניא",
    "2כ",
    "3ש",
    "קכגכ4גכ",
    "קרק5רקר",
    "גכ6גכגכ",
    "/7שז",
    "sd8d",
    "sd6",
    "sd3f",
    "s4dsdsq",
    "qwe2a",
    "sdw3ev",
    "je4n",
    "ed5qwq",
    "do3polk",
    "dfdf3",
    "po2li",
    "pol2u",
    "pou3mmm",
  ];

  const [dataStatistic, setDataStatistic] = useState({});
  const { voted, not_voted, percentage } = dataStatistic;

  const data = {
    labels,
    datasets: [
      {
        label: "אחוז הצבעה",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
        backgroundColor: "#2ECC40",
      },
    ],
  };
  console.log(dataStatistic);
  //   useEffect(() => {
  //     getStatisticVote().then((data) => {
  //       setDataStatistic(data);
  //     });
  //     const interval = setInterval(() => {
  //       console.log("This will run every second!");
  //       getStatisticVote().then((data) => {
  //         setDataStatistic(data);
  //       });
  //     }, 5000);
  //     return () => clearInterval(interval);
  //   }, []);

  return (
    <Box
      sx={{
        width: {
          xs: "90%", // theme.breakpoints.up('xs')
          sm: "90%", // theme.breakpoints.up('sm')
          md: "70%", // theme.breakpoints.up('md')
          lg: "60%", // theme.breakpoints.up('lg')
          xl: "60%", // theme.breakpoints.up('xl')
        },
        m: "auto",
      }}
    >
      <Bar options={options} data={data} />
    </Box>
  );
};

export default StatisticUsers;
