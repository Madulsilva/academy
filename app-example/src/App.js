import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import StylesProvider from "@material-ui/styles/StylesProvider";

import Layout from "./Components/Layout";
import LandingPage from "./Pages/LandingPage";

const App = () => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <Layout>
      <LandingPage />
    </Layout>
  </StylesProvider>
);

export default App;
