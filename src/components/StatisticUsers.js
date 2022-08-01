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
import { Bar } from "react-chartjs-2";
import { getStatisticOfAllUsers } from "../proxy/votersProxy";

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
    y: {
      min: 0,
      max: 100,
    },
  },
  plugins: {
    legend: {
      display: false,
      position: "bottom",
      // labels: {
      //   filter: function (legendItem, data) {
      //     console.log('in filter', legendItem, data.datasets[0].data, legendItem.index)

      //     return legendItem.index != 1
      //   }
      // }
    },
    title: {
      display: true,
      text: "אחוזי הצבעה לפי אחראים",
    },
  },
};
const StatisticUsers = () => {
  const [dataStatistic, setDataStatistic] = useState([]);
  console.log("in statistic users", dataStatistic);




  let labelDataSet = [];
  let percentageDataSet = [];

  dataStatistic.forEach((data) => {
    const percentage = parseFloat(data.percentage);
    const name = data.owner_name

    labelDataSet.push(name);
    percentageDataSet.push(percentage)
  });

  const backgroundColors = percentageDataSet.map((value) => {
    return value > 50 ? "#2ECC40" : "#FF4136";
  });
  const data = {
    labels: labelDataSet,
    datasets: [
      {
        label: 'ww',
        data: percentageDataSet,
        backgroundColor: backgroundColors,
      },
    ],
  };

  useEffect(() => {
    getStatisticOfAllUsers().then((data) => {
      setDataStatistic(data);
    });
    const interval = setInterval(() => {
      console.log("This will run every second!");
      getStatisticOfAllUsers().then((data) => {
        setDataStatistic(data);
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

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
