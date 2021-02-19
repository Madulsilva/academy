import styled from "styled-components";

import media from "../utils/media";
import theme from "../utils/theme";

const Title = styled.h2`
  ${theme.typography.h2};
  width: fit-content;
  padding: ${theme.spacing(3)}px ${theme.spacing(2)}px;
  border-bottom-left-radius: ${theme.spacing(4)}px;
  border-top-right-radius: ${theme.spacing(4)}px;
  margin: 0px;
  margin: auto;
  margin-top: ${theme.spacing(3)}px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${media.phone`
    letter-spacing: 0em;
  `}
  ${({ color }) => {
    if (color === "secondary") {
      return {
        backgroundColor: theme.palette.secondary.main,
        color: "#231940",
      };
    }
    return {
      backgroundColor: theme.palette.primary.main,
      color: "white",
    };
  }}
`;

export default Title;
