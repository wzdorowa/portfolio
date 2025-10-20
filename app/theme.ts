import { createTheme } from "@mui/material/styles";
import { Montserrat } from "@/app/assets/fonts/Montserrat";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
    },
    background: {
      default: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: `${Montserrat.style.fontFamily}, Arial, sans-serif`,
    h1: {
      fontWeight: 400,
      lineHeight: 1,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      fontWeight: 400,
      "@media (max-width: 540px)": {
        fontSize: "0.88rem",
      },
      "@media (max-width: 480px)": {
        fontSize: "0.8rem",
      },
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 400,
      "@media (max-width: 540px)": {
        fontSize: "0.88rem",
      },
      "@media (max-width: 480px)": {
        fontSize: "0.8rem",
      },
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          paddingLeft: "0px",

          "@media (min-width: 600px)": {
            paddingLeft: "0px",
          },
        },
      },
    },
  },
});

export default theme;
