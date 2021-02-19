import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import styled from "styled-components";

import theme from "../utils/theme";

const StyledContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledAppBar = styled(AppBar)`
  background-color: #231940;
  height: ${theme.spacing(8)}px;
`;

const MenuItem = styled.div`
  display: inline-block;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  color: ${(props) => (props.active ? theme.palette.primary.main : "white")};
  font-weight: 600;
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 2;
  letter-spacing: 0.1em;
`;

const Logo = styled(Link)`
  display: flex;
  flex-grow: 1;
  color: ${theme.palette.primary.main};
  font-size: 18px;
  font-weight: 600;
`;

const Menu = ({ items }) => {
  const [active, setActive] = useState("");

  return (
    <StyledAppBar>
      <StyledContainer maxWidth="md">
        <Box
          height={theme.spacing(8)}
          width="100%"
          display="flex"
          alignItems="center"
        >
          <Logo underline="none" href={"#"}>
            enfaselabs
          </Logo>
          <Hidden xsDown>
            <MenuItems>
              {items.map((item) => {
                return (
                  <Link
                    key={item.name}
                    activeClass="active"
                    href={`#${item.name}`}
                    onClick={() => {
                      setActive(item.name);
                    }}
                  >
                    <MenuItem active={active === item.name}>
                      {item.label}
                    </MenuItem>
                  </Link>
                );
              })}
            </MenuItems>
          </Hidden>
        </Box>
      </StyledContainer>
    </StyledAppBar>
  );
};

export default Menu;
