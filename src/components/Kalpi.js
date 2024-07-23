import { TextField, Box, Button, Alert, Snackbar } from "@mui/material";

import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { setVoterFound } from "../redux/voters";
import { getVoterByID, setVoteByID } from "../proxy/votersProxy";
import Voter from "./Voter";

const Kalpi = () => {
  const [loading, setLoading] = useState(false);
  const [selectedKalpi, setSelectedKalpi] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const dispatch = useDispatch();
  const voterFoundSelector = useSelector((state) => state.voters.voterFound);
  const { tz, first_name, last_name, voted } = voterFoundSelector;
  console.log(voterFoundSelector);
  const handleClick = () => {
    dispatch(setVoterFound({}));
    setLoading(true);
    const id = selectedId || selectedKalpi
    getVoterByID(id)
      .then((data) => {
        console.log("here", data);
        dispatch(setVoterFound(data));
      })
      .catch((e) => {
        console.log("an error occured in catch");
        setOpen(true);
      })
      .finally((e) => {
        setLoading(false);
      });
  };
  const handleToggleVote = (e, voted) => {
    console.log(e, voted);
    setVoteByID(tz, voted).then((data) => {
      if (data) {
        console.log("here in setVoteById");
        dispatch(setVoterFound({ ...voterFoundSelector, voted: voted }));
      }
    });
  };
  const handleKalpiChange = (e) => {
    const kalpi = e.target.value;
    setSelectedKalpi(kalpi);
  };
  const handleIdChange = (e) => {
    const id = e.target.value;
    setSelectedId(id);
  };

  return (
    <Box>
      <Box style={{ display: 'flex', flexDirection: 'column', margin: 'auto' }} sx={{
        width: {
          xs: "90%", // theme.breakpoints.up('xs')
          sm: "60%", // theme.breakpoints.up('sm')
          md: "50%", // theme.breakpoints.up('md')
          lg: "30%", // theme.breakpoints.up('lg')
          xl: "25%", // theme.breakpoints.up('xl')
        },
      }}>

        <TextField
          size="small"
          id="outlined-basic"
          label='מספר בוחר'
          variant="outlined"
          value={selectedId}
          onChange={handleIdChange}
          style={{ marginLeft: "10px", marginBottom: "15px" }}
        />

        <Button onClick={handleClick} variant="contained" color="primary">
          חיפוש
        </Button>
      </Box>
      <Box style={{ marginTop: 120 }}>
        {loading && <CircularProgress size={100} />}
        {!loading && tz && (
          <Voter
            tz={tz}
            first_name={first_name}
            last_name={last_name}
            voted={voted}
            onToggleVote={handleToggleVote}
          />
        )}
        <Snackbar open={open} autoHideDuration={3500} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            sx={{ width: "100%", fontWeight: "bold" }}
          >
            לא קיים מצביע כזה
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Kalpi;
