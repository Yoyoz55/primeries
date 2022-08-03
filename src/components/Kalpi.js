import { TextField, Box, Button, Alert, Snackbar } from "@mui/material";

import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { setVoterFound } from "../redux/voters";
import { getVoterByID, setVoteByID } from "../proxy/votersProxy";
import Voter from "./Voter";

const Kalpi = () => {
  const [loading, setLoading] = useState(false);
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
    if (selectedId.length == 0) {
      setOpen(true);
      return;
    }
    dispatch(setVoterFound({}));
    setLoading(true);
    getVoterByID(selectedId)
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
  const handleIdChange = (e) => {
    const id = e.target.value;
    setSelectedId(id);
  };
  return (
    <Box>
      <Box>
        <TextField
          size="small"
          id="outlined-basic"
          label='ת"ז'
          variant="outlined"
          value={selectedId}
          onChange={handleIdChange}
          style={{ marginLeft: "10px", marginBottom: "5px" }}
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
            לא קיים מצביע בעל אותה ת"ז שהוכנס
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Kalpi;
