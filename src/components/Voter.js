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
            ת"ז
          </Typography>
          <Typography>{props.tz}</Typography>
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
