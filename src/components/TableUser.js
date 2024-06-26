import React, { useEffect, useState } from "react";
import { Box, Typography, Tooltip } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { getVotersOfUsers, getVotersStats } from "../proxy/votersProxy";
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
    field: "name",
    headerName: "שם ",
    flex: 0.7,
    editable: false,
    valueGetter: (params) =>
      `${params.row.first_name || ""} ${params.row.last_name || ""}`,
  },
  {
    disableColumnMenu: true,
    field: "phone",
    headerName: "טלפון",
    flex: 1,
    editable: false,
  },
  {
    disableColumnMenu: true,
    field: "voted",
    headerName: "הצביע",
    flex: 0.4,
    editable: false,
    renderCell: (params) =>
      params.row.voted ? (
        <CheckCircleIcon sx={{ color: "#2ECC40" }} />
      ) : (
        <UnpublishedIcon sx={{ color: "#FF4136" }} />
      ),
  },
  {
    disableColumnMenu: true,
    field: "address",
    headerName: "יחידה",
    flex: 1,
    editable: false,
  },
];

export default function TableUser() {
  const [rows, setRows] = useState([]);
  const [stats, setStats] = useState({});
  console.log("stats", stats);
  let phoneUser = useSelector((state) => state.voters.phoneNumber);
  const loggedStorage = getLocalStorage();
  phoneUser = phoneUser || loggedStorage.phoneNumber;
  useEffect(() => {
    getVotersOfUsers(phoneUser).then((data) => {
      setRows(data);
    });
    const interval = setInterval(() => {
      console.log("This will run every second!");
      getVotersOfUsers(phoneUser).then((data) => {
        setRows(data);
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getVotersStats(phoneUser).then((data) => {
      setStats(data);
    });
    const interval = setInterval(() => {
      console.log("This will run every second!");
      getVotersStats(phoneUser).then((data) => {
        setStats(data);
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Box
        sx={{
          width: {
            xs: "90%", // theme.breakpoints.up('xs')
            sm: "90%", // theme.breakpoints.up('sm')
            md: "80%", // theme.breakpoints.up('md')
            lg: "65%", // theme.breakpoints.up('lg')
            xl: "65%", // theme.breakpoints.up('xl')
          },
          m: "auto",
          marginBottom: 3,
        }}
      >
        <BorderLinearProgress
          variant="determinate"
          value={parseFloat(stats.percentage)}
        />
        <Typography>
          {`הציביעו סה"כ ${stats.voted} מתוך ${parseInt(stats.not_voted) + parseInt(stats.voted)
            }`}
        </Typography>
      </Box>

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
          onCellClick={(params, event) => {
            if (params.field == "phone") {
              event.defaultMuiPrevented = true;
              console.log("on cell click", params.row.phone);
              try {
                window.open(`tel:${params.row.phone}`);
              } catch { }
            }
          }}
        />
      </Box>
    </Box>
  );
}
