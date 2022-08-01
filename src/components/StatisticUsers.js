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
      position: "top",
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

  // const labels = [
  //   "רוני",
  //   "גשניא",
  //   "כ",
  //   "ש",
  //   "קכגכגכ",
  //   "קרקרקר",
  //   "גכגכגכ",
  //   "/שז",
  //   "sdd",
  //   "sd",
  //   "sdf",
  //   "sdsdsq",
  //   "qwea",
  //   "sdwev",
  //   "jen",
  //   "edqwq",
  //   "dopolk",
  //   "dfdf",
  //   "poli",
  //   "polu",
  //   "poummm",
  //   "ר1וני",
  //   "ג2שניא",
  //   "2כ",
  //   "3ש",
  //   "קכגכ4גכ",
  //   "קרק5רקר",
  //   "גכ6גכגכ",
  //   "/7שז",
  //   "sd8d",
  //   "sd6",
  //   "sd3f",
  //   "s4dsdsq",
  //   "qwe2a",
  //   "sdw3ev",
  //   "je4n",
  //   "ed5qwq",
  //   "do3polk",
  //   "dfdf3",
  //   "po2li",
  //   "pol2u",
  //   "pou3mmm",
  // ];

  // const dataToShowGood = labels.map(() =>
  //   faker.datatype.number({ min: 51, max: 100 })
  // );
  // const dataToShowNotGood = labels.map(() =>
  //   faker.datatype.number({ min: 0, max: 50 })
  // );
  // const data = {
  //   labels,
  //   datasets: [
  //     {
  //       label: "אחוז גבוה",
  //       data: dataToShowGood,
  //       backgroundColor: "#2ECC40",
  //     },
  //     {
  //       label: "אחוז נמוך",
  //       data: dataToShowNotGood,
  //       backgroundColor: "#FF4136",
  //     },
  //   ],
  // };

  let dataGoodPercentage = [];
  let dataBadPercentage = [];

  dataStatistic.forEach((data) => {
    const percentage = parseFloat(data.percentage);
    if (percentage > 50) {
      dataGoodPercentage.push(data);
    } else {
      dataBadPercentage.push(data);
    }
  });

  let labelGoodDataSet = [];
  let percentageGoodDataSet = [];

  dataGoodPercentage.forEach((data) => {
    labelGoodDataSet.push(data.owner_name);
    percentageGoodDataSet.push(parseFloat(data.percentage));
  });
  let labelBadDataSet = [];
  let percentageBadDataSet = [];

  dataBadPercentage.forEach((data) => {
    labelBadDataSet.push(data.owner_name);
    percentageBadDataSet.push(parseFloat(data.percentage));
  });
  console.log(percentageGoodDataSet, labelGoodDataSet);

  const backgroundColors = [
    ...percentageGoodDataSet,
    ...percentageBadDataSet,
  ].map((value) => {
    return value > 50 ? "#2ECC40" : "#FF4136";
  });
  const data = {
    labels: [...labelGoodDataSet, ...labelBadDataSet],
    datasets: [
      {
        label: "אחוז גבוה",
        data: [...percentageGoodDataSet, ...percentageBadDataSet],
        backgroundColor: backgroundColors,
        //labels: labelGoodDataSet,
      },
      // {
      //   label: "אחוז נמוך",
      //   data: percentageBadDataSet,
      //   backgroundColor: "#FF4136",
      //   //labels: labelBadDataSet,
      // },
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
