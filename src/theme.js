import { createTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createTheme({
  direction: "rtl",
});
theme = responsiveFontSizes(theme);

export default theme;
