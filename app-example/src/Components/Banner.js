import Hidden from "@material-ui/core/Hidden";
import React from "react";
import styled from "styled-components";

import theme from "../utils/theme";

const Img = styled.img`
  margin-top: ${theme.spacing(8)}px;
  width: 100vw;
`;

const Banner = () => (
  <>
    <Hidden smUp>
      <Img
        style={{ width: "calc(100vw + 72%)" }}
        src="./banner-land-mobile.jpg"
      />
    </Hidden>
    <Hidden xsDown>
      <Img src="./banner-land.jpg" />
    </Hidden>
  </>
);

export default Banner;
