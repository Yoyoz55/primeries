import {
  Typography,
  Card,
  CardContent,
  CardActions,
  FormControlLabel,
  Switch,
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
const Voter = (props) => {
  return (
    <CardStyled>
      <CardContent>
        <Typography variant="h6" color="primary">
          שם:
        </Typography>
        <Typography>{props.firstName}</Typography>
        <Typography variant="h6" color="primary">
          שם משפחה:
        </Typography>
        <Typography>{props.lastName}</Typography>
        <Typography variant="h6" color="primary">
          {" "}
          תז:
        </Typography>
        <Typography>{props.id}</Typography>
        <FormControlLabelStyled
          labelPlacement="top"
          control={<Switch defaultChecked />}
          label="הצביע"
        />
      </CardContent>
    </CardStyled>
  );
};
export default Voter;
