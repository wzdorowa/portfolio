import { createTheme } from "@mui/material/styles";

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
    fontFamily: "var(--font-montserrat), Arial, sans-serif",
    h1: {
      fontWeight: 400,
      lineHeight: 1,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      fontWeight: 400,
    },
    body2: {
      fontSize: "1rem",
      lineHeight: 1.5,
      fontWeight: 400,
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
