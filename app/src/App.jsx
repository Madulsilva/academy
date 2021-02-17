import React from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  box-sizing: inherit;
  background-color: #231940;
`;

const Header = styled.div`
  background-color: #e03b5d;
  color: #ffffff;
  border-radius: 8px;
  font-size: 32px;
  font-family: "Montserrat", sans-serif;
  padding: 16px;
`;

const App = () => (
  <Page>
    <Header>Seja bem vindo ao EnfaseLabs Academy!</Header>
  </Page>
);

export default App;
