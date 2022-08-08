import React, { useEffect, useState } from "react";
import { Box, Tooltip } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import { getAllDataVoters } from "../proxy/votersProxy";
import { GridExportCsvOptions } from "@mui/x-data-grid";
const DataGridStyled = styled(DataGrid, { label: "cardStyled" })(
  ({ theme }) => ({
    padding: "10px",
    margin: "10px",

    "&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },

    "&.MuiDataGrid-root .MuiDataGrid-columnHeaders": {
      [theme.breakpoints.down("md")]: {
        direction: "rtl",
      },
    },
    "&.MuiDataGrid-root .MuiDataGrid-virtualScroller": {
      [theme.breakpoints.down("md")]: {
        direction: "rtl",
      },
    },
    "&.MuiDataGrid-root .MuiDataGrid-footerContainer": {
      direction: "rtl ",
    },
  })
);

const columns = [
  { field: "tz", headerName: 'ת"ז', width: 120 },
  {
    field: "first_name",
    headerName: "שם פרטי",
    width: 150,
    editable: false,
  },
  {
    field: "last_name",
    headerName: "שם משפחה",
    width: 150,
    editable: false,
  },
  {
    field: "phone",
    headerName: "טלפון",
    width: 150,
    editable: false,

    renderCell: (params) => (
      <Tooltip title={params.row.phone} enterTouchDelay={0}>
        <span className="table-cell-trucate">{params.row.phone} </span>
      </Tooltip>
    ),
  },
  {
    field: "voted",
    headerName: "הצביע",
    width: 150,
    editable: false,
    renderCell: (params) =>
      params.row.voted ? (
        <CheckCircleIcon sx={{ color: "#2ECC40" }} />
      ) : (
        <UnpublishedIcon sx={{ color: "#FF4136" }} />
      ),
    //valueGetter: (params) => `${params.row.isVoted ? "כן" : "לא"}`,
  },
  {
    field: "owner_name",
    headerName: "אחראי",
    width: 150,
    editable: false,
  },
  //   {
  //     field: "fullName",
  //     headerName: "Full name",
  //     description: "This column has a value getter and is not sortable.",
  //     sortable: false,
  //     width: 160,
  //     valueGetter: (params) =>
  //       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  //   },
];

export default function TableVoted() {
  const [rows, setRows] = useState([]);

  // useEffect(() => {
  //   let mounted = true;
  //   getAllDataVoters().then((data) => {
  //     if (mounted) {
  //       setRows(data);
  //     }
  //   });
  //   return () => (mounted = false);
  // }, []);
  useEffect(() => {
    getAllDataVoters().then((data) => {
      setRows(data);
    });
    const interval = setInterval(() => {
      console.log("This will run every second!");
      getAllDataVoters().then((data) => {
        setRows(data);
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        height: 620,
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
        sx={{
          "& .MuiDataGrid-root .MuiDataGrid-columnsContainer": {
            direction: "ltr",
          },
        }}
        components={{ Toolbar: GridToolbar }}
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection={false}
        disableSelectionOnClick={true}
        onCellClick={(params, event) => {
          if (params.field == "phone") {
            event.defaultMuiPrevented = true;
            console.log("on cell click", params.row.phone);
            try {
              window.open(`tel:${params.row.phone}`);
            } catch {}
          }
        }}
      />
    </Box>
  );
}
