import {
  Typography,
  Card,
  CardContent,
  CardActions,
  FormControlLabel,
  Switch,
  Divider,
  Box,
} from "@material-ui/core";
import { styled } from "@mui/material/styles";
const CardStyled = styled(Card, { label: "cardStyled" })(({ theme }) => ({
  width: "80%",
  height: "70%",
  margin: "auto",
}));
const FormControlLabelStyled = styled(FormControlLabel, {
  label: "cardStyled",
})(({ theme }) => ({
  "&.MuiFormControlLabel-root": { color: "#3f51b5" },
}));
const DividerStyled = styled(Divider, { label: "cardStyled" })(({ theme }) => ({
  margin: "15px",
}));
const Voter = (props) => {
  return (
    <CardStyled>
      <CardContent>
        <Box>
          <Typography variant="h6" color="primary">
            שם:
          </Typography>
          <Typography>{props.firstName}</Typography>
        </Box>

        <DividerStyled />
        <Box>
          <Typography variant="h6" color="primary">
            שם משפחה:
          </Typography>
          <Typography>{props.lastName}</Typography>
        </Box>

        <DividerStyled />
        <Box>
          <Typography variant="h6" color="primary">
            תז:
          </Typography>
          <Typography>{props.id}</Typography>
        </Box>

        <DividerStyled />

        <FormControlLabelStyled
          labelPlacement="top"
          control={<Switch defaultChecked checked={props.isVoted} />}
          label="הצביע"
        />
      </CardContent>
    </CardStyled>
  );
};
export default Voter;
