import { createTheme, Theme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";

export const theme: Theme = createTheme({
  palette: {
    primary: {
      main: "#db4c3f", //red
      light: "#f7f7f7", //light-grey
    },
    info: {
      main: "#db4c3f",
      light: "#ff6355",
      dark: "#a73c32",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Open Sans",
      "Helvetica Neue",
    ].join(","),
  },
});
