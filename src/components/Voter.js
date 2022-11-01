import {
  Typography,
  Card,
  CardContent,
  CardActions,
  FormControlLabel,
  Switch,
  Divider,
  Box,
} from "@mui/material";

import { styled } from "@mui/material/styles";
const CardStyled = styled(Card, { label: "cardStyled" })(({ theme }) => ({
  margin: "auto",
}));
const FormControlLabelStyled = styled(FormControlLabel, {
  label: "cardStyled",
})(({ theme }) => ({
  "&.MuiFormControlLabel-root": { color: "#1976d2" },
  "&.MuiFormControlLabel-root .MuiFormControlLabel-label ": {
    fontSize: 22,
  },
  ".MuiSwitch-switchBase": {
    color: "#FF4136",
    "&.Mui-checked": {
      // Controls checked color for the thumb
      color: "#2ECC40",
    },
  },
  ".MuiSwitch-track": {
    opacity: 0.2,
    backgroundColor: "#FF4136",
    ".Mui-checked.Mui-checked": {
      opacity: 0.5,
      backgroundColor: "#2ECC40",
    },
  },
  ".MuiSwitch-root": {
    ".MuiSwitch-track": {
      opacity: 0.2,
      backgroundColor: "#FF4136",
    },
    ".Mui-checked + .MuiSwitch-track": {
      backgroundColor: "#2ECC40",
      opacity: 0.2,
    },
  },
  // .MuiSwitch-colorPrimary .Mui-checked"
}));

const DividerStyled = styled(Divider, { label: "cardStyled" })(({ theme }) => ({
  margin: "15px",
}));
const Voter = (props) => {
  const handleChange = (e, voted) => {
    props.onToggleVote(e, voted);
  };

  return (
    <CardStyled
      sx={{
        width: {
          xs: "90%", // theme.breakpoints.up('xs')
          sm: "60%", // theme.breakpoints.up('sm')
          md: "60%", // theme.breakpoints.up('md')
          lg: "40%", // theme.breakpoints.up('lg')
          xl: "35%", // theme.breakpoints.up('xl')
        },
      }}
    >
      <CardContent>
        <Box>
          <Typography variant="h6" color="primary">
            שם
          </Typography>
          <Typography>{props.first_name}</Typography>
        </Box>

        <DividerStyled />
        <Box>
          <Typography variant="h6" color="primary">
            שם משפחה
          </Typography>
          <Typography>{props.last_name}</Typography>
        </Box>

        <DividerStyled />
        <Box>
          <Typography variant="h6" color="primary">
            מספר בוחר
          </Typography>
          <Typography>{props.tz.split("_").reverse().join("_")}</Typography>
        </Box>

        <DividerStyled />

        <FormControlLabelStyled
          labelPlacement="top"
          control={
            <Switch
              size="large"
              defaultChecked
              checked={props.voted}
              onChange={handleChange}
            />
          }
          label="הצביע"
        />
      </CardContent>
    </CardStyled>
  );
};
export default Voter;
