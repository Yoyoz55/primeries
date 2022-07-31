import React, { useState, useCallback } from "react";
import { TextField, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PERMISSION } from "../Enum";
import { setLogin } from "../redux/voters";

const Login = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleClick = () => {
    if (userName === "kalpi4321") {
      dispatch(setLogin({ log: true, perm: PERMISSION.KALPI }));
      navigate("/kalpi", { replace: true });
    } else if (userName === "elad4321") {
      dispatch(setLogin({ log: true, perm: PERMISSION.MANAGER }));
      navigate("/kalpi", { replace: true });
    } else {
      //it's a user, check if it's user and go to table with the rows...
      dispatch(
        setLogin({
          log: true,
          perm: PERMISSION.REPONSIBLE,
          phoneNumber: userName,
        })
      );
      navigate("/tableUser", { replace: true });
    }
  };

  const handleUserNameChanged = (e) => {
    const userName = e.target.value;
    setUserName(userName);
  };
  return (
    <Box sx={{}}>
      <TextField
        size="small"
        id="outlined-basic"
        label="שם משתמש"
        variant="outlined"
        value={userName}
        onChange={handleUserNameChanged}
        style={{ marginLeft: "10px", marginBottom: "5px" }}
      />
      <Button onClick={handleClick} variant="contained" color="primary">
        התחברות
      </Button>
    </Box>
  );
};

export default Login;
