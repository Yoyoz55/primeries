import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import UnpublishedIcon from "@mui/icons-material/Unpublished";

const DataGridStyled = styled(DataGrid, { label: "cardStyled" })(
  ({ theme }) => ({
    padding: "10px",
    margin: "10px",
    "&.MuiDataGrid-root .MuiDataGrid-footerContainer": {
      direction: "rtl ",
    },
    "& .MuiDataGrid-columnHeaders": {
      direction: "ltr !important",
    },
    "& .MuiDataGrid-virtualScroller": {
      direction: "ltr !important",
    },
    "&.MuiDataGrid-root .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },
  })
);
const columns = [
  { field: "id", headerName: 'ת"ז', width: 120 },
  {
    field: "firstName",
    headerName: "שם פרטי",
    width: 150,
    editable: false,
  },
  {
    field: "lastName",
    headerName: "שם משפחה",
    width: 150,
    editable: false,
  },
  {
    field: "responsible",
    headerName: "אחראי",
    width: 150,
    editable: false,
  },
  {
    field: "isVoted",
    headerName: "הצביע",
    width: 150,
    editable: false,
    renderCell: (params) =>
      params.row.isVoted ? (
        <CheckCircleIcon sx={{ color: "green" }} />
      ) : (
        <UnpublishedIcon sx={{ color: "red" }} />
      ),
    //valueGetter: (params) => `${params.row.isVoted ? "כן" : "לא"}`,
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

const rows = [
  {
    id: 342456879,
    lastName: "זיתון",
    firstName: "יואל",
    isVoted: false,
    responsible: "מוטי",
  },
  {
    id: 452456879,
    lastName: "ויצמן",
    firstName: "אבי",
    isVoted: true,
    responsible: "מוטי",
  },
  {
    id: 152456834,
    lastName: "עזריאל",
    firstName: "אלעד",
    isVoted: false,
    responsible: "מוטי",
  },
  {
    id: 654789147,
    lastName: "מלכה",
    firstName: "נאור",
    isVoted: true,
    responsible: "מוטי",
  },
  {
    id: 852147563,
    lastName: "חנונה",
    firstName: "דרור",
    isVoted: false,
    responsible: "מוטי",
  },
  {
    id: 147852369,
    lastName: "גגכגכ",
    firstName: "גכג",
    isVoted: false,
    responsible: "מוטי",
  },
  {
    id: 951753852,
    lastName: "גכגכ",
    firstName: "כעכ",
    isVoted: true,
    responsible: "מוטי",
  },
  {
    id: 159852365,
    lastName: "עכיכ",
    firstName: "דגד",
    isVoted: false,
    responsible: "מוטי",
  },
  {
    id: 456654125,
    lastName: "דגד",
    firstName: "דגככ",
    isVoted: false,
    responsible: "מוטי",
  },
  {
    id: 456234125,
    lastName: "דגד",
    firstName: "דגככ",
    isVoted: false,
    responsible: "מוטי",
  },
  {
    id: 443654125,
    lastName: "דגד",
    firstName: "דגככ",
    isVoted: false,
    responsible: "מוטי",
  },
];

export default function TableVoted() {
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
        rows={rows}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection={false}
        disableSelectionOnClick={true}
      />
    </Box>
  );
}
