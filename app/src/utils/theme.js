import { createMuiTheme } from "@material-ui/core/styles";

export default createMuiTheme({
  shadow: {
    inset: "inset 6px 28px 85px -40px rgba(0,0,0,0.4)",
    box: "0 2px 40px 0 rgba(0, 0, 0, 0.2)",
  },
  palette: {
    background: {
      default: "#180F2C",
    },
    action: {
      hover: "#A3C31A",
    },
    primary: {
      light: "#201335",
      main: "#E03B5D",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#34B4DB",
      contrastText: "#6C2877",
    },
  },
  typography: {
    useNextVariants: true,
    fontFamily: "Montserrat, sans-serif",
    fontFamilyBold: "Montserrat, sans-serif; font-weight: 700 !important",
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "2.5em",
      textAlign: "left",
      fontWeight: "700",
      lineHeight: "normal",
      color: "#FFFFFF",
    },
    h3: {
      fontSize: "26px",
      fontFamily: "Montserrat, sans-serif",
      fontWeight: "800",
    },
    p: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "18px",
      fontWeight: "500",
      lineHeight: "normal",
      color: "#FFFFFF",
    },
  },
});
