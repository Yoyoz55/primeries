import { TextField, Box, Button } from "@mui/material";

import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { setVoterFound } from "../redux/voters";
import { getVoterByID, setVoteByID } from "../proxy/votersProxy";
import Voter from "./Voter";

const Kalpi = () => {
  const [loading, setLoading] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const dispatch = useDispatch();
  const voterFoundSelector = useSelector((state) => state.voters.voterFound);
  const { tz, first_name, last_name, voted } = voterFoundSelector;
  console.log(voterFoundSelector);
  const handleClick = () => {
    setLoading(true);
    getVoterByID(selectedId)
      .then((data) => {
        console.log("here", data);
        dispatch(setVoterFound(data));
      })
      .catch((e) => {
        console.log("an error occured");
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
      </Box>
    </Box>
  );
};

export default Kalpi;
