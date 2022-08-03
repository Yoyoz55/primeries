import React, { useState, useCallback } from "react";
import { TextField, Box, Button, Snackbar, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { PERMISSION } from "../Enum";
import { setLogin } from "../redux/voters";
import { getVotersOfUsers } from "../proxy/votersProxy";

const Login = () => {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClick = () => {
    if (userName.length == 0) {
      setOpen(true);
      return;
    }
    if (userName === "kalpi4321") {
      dispatch(setLogin({ log: true, perm: PERMISSION.KALPI }));
      navigate("/kalpi", { replace: true });
    } else if (userName === "elad4321") {
      dispatch(setLogin({ log: true, perm: PERMISSION.MANAGER }));
      navigate("/kalpi", { replace: true });
    } else {
      //it's a user, check if it's user and go to table with the rows...
      getVotersOfUsers(userName)
        .then(() => {
          dispatch(
            setLogin({
              log: true,
              perm: PERMISSION.REPONSIBLE,
              phoneNumber: userName,
            })
          );
          navigate("/tableUser", { replace: true });
        })
        .catch(() => {
          setOpen(true);
          console.log("error in login");
        });
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
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          sx={{ width: "100%", fontWeight: "bold" }}
        >
          לא קיים משתמש כזה
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Login;
