import Box from '@material-ui/core/Box';
import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Square = styled.div`
  ${({ width, height, color }) => ({
    backgroundColor: theme.palette[color].main,
    width: theme.spacing(width),
    height: theme.spacing(height),
  })}
`;

// eslint-disable-next-line react/prop-types
export default ({ width = 1, height = 1, color = 'primary', style, children = null }) => (
  <Square style={style} width={width} height={height} color={color}>
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      {children}
    </Box>
  </Square>
);
