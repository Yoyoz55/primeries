import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { getStatisticOfAllUsers } from "../proxy/votersProxy";
import { useSelector, useDispatch } from "react-redux";
import { getLocalStorage } from "../proxy/storageProxy";

const DataGridStyled = styled(DataGrid, { label: "cardStyled" })(
  ({ theme, numOfRows }) => ({
    padding: "10px",
    margin: "10px",

    "&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },

    // "&.MuiDataGrid-root .MuiDataGrid-columnHeaders": {
    //   [theme.breakpoints.down("md")]: {
    //     direction: "rtl",
    //   },
    // },
    // "&.MuiDataGrid-root .MuiDataGrid-virtualScroller": {
    //   [theme.breakpoints.down("md")]: {
    //     direction: "rtl",
    //   },
    // },
    "&.MuiDataGrid-root .MuiDataGrid-footerContainer": {
      direction: "rtl ",
      display: numOfRows < 100 ? "none" : "initial",
    },
  })
);
const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#2ECC40" : "#2ECC40",
  },
}));
const columns = [
  {
    disableColumnMenu: true,
    field: "owner_name",
    headerName: " שם אחראי",
    flex: 2,
    editable: false,
  },
  {
    disableColumnMenu: true,
    field: "voted",
    headerName: "הצביעו",
    flex: 1,
    editable: false,
  },
  {
    disableColumnMenu: true,
    field: "not_voted",
    headerName: "לא הצביעו",
    flex: 1,
    editable: false,
  },
];

export default function TableStatistic() {
  const [rows, setRows] = useState([]);
  console.log(rows);
  useEffect(() => {
    getStatisticOfAllUsers().then((data) => {
      setRows(data);
    });
    const interval = setInterval(() => {
      console.log("This will run every second!");
      getStatisticOfAllUsers().then((data) => {
        setRows(data);
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          height: {
            xs: "75vh", // theme.breakpoints.up('xs')
            sm: "75vh", // theme.breakpoints.up('sm')
            md: "60vh", // theme.breakpoints.up('md')
            lg: "60vh", // theme.breakpoints.up('lg')
            xl: "60vh", // theme.breakpoints.up('xl')
          },

          width: {
            xs: "100%", // theme.breakpoints.up('xs')
            sm: "100%", // theme.breakpoints.up('sm')
            md: "80%", // theme.breakpoints.up('md')
            lg: "65%", // theme.breakpoints.up('lg')
            xl: "65%", // theme.breakpoints.up('xl')
          },
          m: "auto",
        }}
      >
        <DataGridStyled
          numOfRows={rows.length}
          sx={{
            "& .MuiDataGrid-root .MuiDataGrid-columnsContainer": {
              direction: "ltr",
            },
          }}
          rows={rows}
          columns={columns}
          pageSize={100}
          rowsPerPageOptions={[100]}
          checkboxSelection={false}
          disableSelectionOnClick={true}
          getRowId={(row) => row.owner_name}
        />
      </Box>
    </Box>
  );
}
