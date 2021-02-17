import React from "react";
import styled from "styled-components";

import WelcomeText from "../Components/WelcomeText";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: inherit;
  background-color: #231940;
`;

const LandingPage = () => (
  <Wrapper>
    <WelcomeText />
  </Wrapper>
);

export default LandingPage;
