import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      light: "#393070",
      main: "#7294ff",
      dark: "#393083",
      contrastText: "#FFF",
    },
    secondary: {
      light: "#2c2e35",
      main: "#202028",
      dark: "#828284",
      contrastText: "#FFF",
    },
    success: {
      light: "#afb555",
      main: "##0b8967",
      dark: "#4CB200",
      contrastText: "#FFF",
    },
    info: {
      light: "#32BAFF",
      main: "#75e3ff ",
      dark: "#139CE0",
      contrastText: "#FFF",
    },
    error: {
      light: "#FF6166",
      main: "#9a4346",
      dark: "#E04347",
      contrastText: "#FFF",
    },
    warning: {
      light: "#FFCA64",
      main: "#FFB400",
      dark: "#E09E00",
      contrastText: "#FFF",
    },
    grey: {
      50: "#FAFAFA",
      100: "#F5F5F5",
      200: "#EEEEEE",
      300: "#E0E0E0",
      400: "#BDBDBD",
      500: "#9E9E9E",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#D5D5D5",
      A200: "#AAAAAA",
      A400: "#616161",
      A700: "#303030",
    },
    text: {
      primary: "#414247",
      secondary: "#ffffff",
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "#f6f9fc",
    },
    divider: "#e5eaef",
    background: {
      default: "#eef5f9",
      paper: "#ffffff",
    },
  },
});

export default theme;
