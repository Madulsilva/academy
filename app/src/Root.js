import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import ThemeProvider from '@material-ui/styles/ThemeProvider'

import App from "./App";
import theme from './utils/theme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

export default Root;
