import React from "react";
import styled from "styled-components";

const Title = styled.div`
  background-color: #e03b5d;
  color: #ffffff;
  border-radius: 8px;
  font-size: 32px;
  font-family: "Montserrat", sans-serif;
  padding: 16px;
`;

const WelcomeText = () => <Title>Seja bem-vindo(a) ao EnfaseLabs Academy!</Title>;

export default WelcomeText;
