import Box from "@material-ui/core/Box";
import React from "react";
import styled from "styled-components";

import theme from "../utils/theme";

const Circle = styled.div`
  border-radius: 100%;
  ${({ width, height, thickness }) => ({
    border: thickness,
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,
    width: theme.spacing(width),
    height: theme.spacing(height),
  })};
`;

// eslint-disable-next-line react/prop-types
export default ({
  width = 1,
  height = 1,
  thickness = 1,
  style,
  children = null,
}) => (
  <Circle style={style} width={width} height={height} thickness={thickness}>
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100%"
    >
      {children}
    </Box>
  </Circle>
);
