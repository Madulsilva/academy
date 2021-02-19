import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@material-ui/core/Box";
import React from "react";
import styled from "styled-components";

import theme from "../utils/theme";

const CompanyFooter = styled.div`
  font-weight: 700;
  color: ${theme.palette.secondary.main};
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin: ${theme.spacing(0.5)}px;
  color: ${theme.palette.secondary.main};
  &:hover {
    color: ${theme.palette.common.white};
  }
`;

const Footer = () => (
  <Box
    pt={3}
    pb={3}
    display="flex"
    flexDirection="row"
    alignItems="center"
    justifyContent="space-between"
  >
    <CompanyFooter>
      Copyright © Curso Ênfase {new Date().getFullYear()}
    </CompanyFooter>
    <div>
      <a
        href="https://www.facebook.com/cursoenfase/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledFontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a
        href="https://instagram.com/enfaselabs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledFontAwesomeIcon
          icon={faInstagram}
          color={theme.palette.primary.main}
          size="2x"
        />
      </a>
      <a
        href="https://www.linkedin.com/company/curso-nfase/about/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledFontAwesomeIcon
          icon={faLinkedin}
          color={theme.palette.primary.main}
          size="2x"
        />
      </a>
    </div>
  </Box>
);

export default Footer;
