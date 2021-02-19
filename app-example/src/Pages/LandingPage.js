import Container from "@material-ui/core/Container";
import React from "react";
import styled from "styled-components";

import theme from "../utils/theme";
import Banner from "../Components/Banner";
import Company from "../Components/Company";
import Diversity from "../Components/Diversity";
import Dream from "../Components/Dream";
import Footer from "../Components/Footer";
import ListJobs from "../Components/ListJobs";
import Office from "../Components/Office";

const Landing = styled.div`
  scroll-behavior: smooth;
`;

const Section = styled.section`
  ${({ backgroundColor = "transparent" }) =>
    `background-color: ${backgroundColor};`}
`;

const StyledContainer = styled(Container)`
  padding-top: ${theme.spacing(8)}px;
  padding-bottom: ${theme.spacing(8)}px;
`;

const SectionWithImg = styled.section`
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
`;

const LandingPage = () => {
  return (
    <Landing>
      <Section name="banner" id="banner">
        <Banner />
      </Section>
      <Section name="company" id="company">
        <StyledContainer maxWidth="md">
          <Company />
        </StyledContainer>
      </Section>
      <SectionWithImg
        img="./dream.jpg"
        style={{ backgroundColor: "#231940" }}
        name="dream"
        id="dream"
      >
        <StyledContainer maxWidth="md">
          <Dream />
        </StyledContainer>
      </SectionWithImg>
      <Section name="office" id="office">
        <StyledContainer maxWidth="md">
          <Office />
        </StyledContainer>
      </Section>
      <SectionWithImg
        img="./diversity.jpg"
        style={{ minHeight: "100vh", backgroundColor: "#231940" }}
        name="diversity"
        id="diversity"
      >
        <StyledContainer maxWidth="md">
          <Diversity />
        </StyledContainer>
      </SectionWithImg>
      <Section name="jobs" id="jobs">
        <StyledContainer maxWidth="md">
          <ListJobs />
        </StyledContainer>
      </Section>
      <Section name="footer" id="footer" backgroundColor="#231940">
        <Container maxWidth="md">
          <Footer />
        </Container>
      </Section>
    </Landing>
  );
};

export default LandingPage;
