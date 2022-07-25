import { TextField, Box, Button } from "@material-ui/core";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { setVoterFound } from "../redux/voters";
import { getVoterByID } from "../proxy/votersProxy";

const Kalpi = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const voterFoundSelector = useSelector((state) => state.voters.voterFound);
  console.log(voterFoundSelector);
  const handleClick = () => {
    setLoading(true);
    getVoterByID(314)
      .then((data) => {
        console.log(data);
        dispatch(setVoterFound(data));
      })
      .catch((e) => {
        console.log("an error occured");
      })
      .finally((e) => {
        setLoading(false);
      });
  };

  return (
    <Box>
      <Box>
        <TextField
          size="small"
          id="outlined-basic"
          label='ת"ז'
          variant="outlined"
          style={{ marginLeft: "10px", marginBottom: "5px" }}
        />
        <Button onClick={handleClick} variant="contained" color="primary">
          חיפוש
        </Button>
      </Box>
      <Box style={{ marginTop: 120 }}>
        {loading && <CircularProgress size={100} />}
        {/* {!loading && <VoterEntry />} */}
      </Box>
    </Box>
  );
};

export default Kalpi;
