import Box from '@material-ui/core/Box';
import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const OutlinedSquare = styled.div`
  ${({ width, height, color }) => ({
    border: `8px solid ${theme.palette[color].main}`,
    width: theme.spacing(width),
    height: theme.spacing(height),
  })}
`;

// eslint-disable-next-line react/prop-types
export default ({ width = 1, height = 1, color = 'primary', style, children = null, className }) => (
  <OutlinedSquare style={style} width={width} height={height} color={color} className={className}>
    <Box display="flex" alignItems="center" justifyContent="center" height="100%">
      {children}
    </Box>
  </OutlinedSquare>
);
