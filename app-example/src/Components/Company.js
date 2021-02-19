import {
  faChartLine,
  faGavel,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import styled from "styled-components";

import Circle from "./Circle";
import Title from "./Title";
import media from "../utils/media";
import theme from "../utils/theme";

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CompanyText = styled.div`
  color: #231940;
  ${theme.typography.h6};
  font-size: 1.5em;
  padding: ${theme.spacing(3)}px;
  padding-bottom: ${theme.spacing(5)}px;
  text-align: center;
  ${media.phone`
    font-size: 1.25em;
    padding: ${theme.spacing(3)}px ${theme.spacing(0)}px;
  `};
`;
const B = styled.b`
  color: ${theme.palette.primary.main};
`;

const FeaturedTitle = styled.div`
  ${theme.typography.h5};
  padding: ${theme.spacing(1)}px ${theme.spacing(0)}px;
  text-align: center;
  font-weight: 700;
  color: ${theme.palette.primary.main};
`;
const FeaturedText = styled.div`
  padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
  text-align: center;
  color: #231940;
  font-size: 1.1em;
`;

const Img = styled.img`
  max-width: ${theme.spacing(20)}px;
  max-height: ${({ maxHeight = 5 }) => theme.spacing(maxHeight)}px;
`;

const Image = (props) => (
  <Box pb={3} pl={3}>
    <Img {...props} />
  </Box>
);

const Company = () => {
  return (
    <CompanyContainer>
      <Title>Tecnologia em educação</Title>
      <CompanyText>
        Somos o <B>Grupo Ênfase</B>, um time apaixonado por educação e
        tecnologia que inova para revolucionar o Direito no país. Há 3 anos
        criamos o <B>Ênfase Labs</B>, filial situada em São Carlos, onde atua o{" "}
        <B>time de inovação tecnológica</B> com foco no desenvolvimento de
        plataformas e serviços que otimizem a aprendizagem dos alunos.
      </CompanyText>
      <Grid container>
        <Grid item sm={4}>
          <Box
            display="flex"
            height="100%"
            flexDirection="column"
            alignItems="center"
          >
            <Circle
              color="#231940"
              thickness={2}
              height={theme.spacing(2.9)}
              width={theme.spacing(2.9)}
            >
              <Circle
                thickness={4}
                height={theme.spacing(2.6)}
                width={theme.spacing(2.6)}
              >
                <FontAwesomeIcon icon={faGavel} color="#231940" size="5x" />
              </Circle>
            </Circle>
            <FeaturedTitle>+ 80% de aprovação</FeaturedTitle>
            <FeaturedText>
              Somos líder na área de concursos jurídicos federais, sendo que
              mais de 80% dos novos juízes federais e procuradores da república
              foram nossos alunos.
            </FeaturedText>
          </Box>
        </Grid>
        <Grid item sm={4}>
          <Box
            display="flex"
            height="100%"
            flexDirection="column"
            alignItems="center"
          >
            <Circle
              color="#231940"
              thickness={2}
              height={theme.spacing(2.9)}
              width={theme.spacing(2.9)}
            >
              <Circle
                thickness={4}
                height={theme.spacing(2.6)}
                width={theme.spacing(2.6)}
              >
                <FontAwesomeIcon
                  icon={faUserGraduate}
                  color="#231940"
                  size="5x"
                />
              </Circle>
            </Circle>
            <FeaturedTitle>+ 25 mil alunos</FeaturedTitle>
            <FeaturedText>
              Temos, atualmente, mais de 25 mil alunos de um total de 250 mil
              que já fizeram parte dessa história ao longo de 26 anos.
            </FeaturedText>
          </Box>
        </Grid>
        <Grid item sm={4}>
          <Box
            display="flex"
            height="100%"
            flexDirection="column"
            alignItems="center"
          >
            <Circle
              color="#231940"
              thickness={2}
              height={theme.spacing(2.9)}
              width={theme.spacing(2.9)}
            >
              <Circle
                thickness={4}
                height={theme.spacing(2.6)}
                width={theme.spacing(2.6)}
              >
                <FontAwesomeIcon icon={faChartLine} color="#231940" size="5x" />
              </Circle>
            </Circle>
            <FeaturedTitle>... e crescendo</FeaturedTitle>
            <FeaturedText>
              Atualmente estamos expadindo nosso time de inovação e construindo
              do zero plataformas web e mobile que serão a base do novo modelo
              educacional
            </FeaturedText>
          </Box>
        </Grid>
      </Grid>
      <Box mt={2}>
        <CompanyText>
          Nosso time está em <B>constante evolução</B> buscando sempre trabalhar
          com <B>bleeding edge</B>. Todos são encorajados a participar nas{" "}
          <B>decisões de tecnologias</B>, para que tenhamos uma Stack atualizada
          e eficiente.
        </CompanyText>
      </Box>
      <Box mt={2}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Image src="./logos/dev_1.png" />
          <Image src="./logos/dev_2.png" />
          <Image src="./logos/dev_3.png" maxHeight={4} />
          <Image src="./logos/dev_4.png" />
          <Image src="./logos/dados_7.png" maxHeight={4} />
        </Box>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexWrap="wrap"
        >
          <Image src="./logos/dados_1.png" />
          <Image src="./logos/dados_2.png" maxHeight={7} />
          <Image src="./logos/dados_4.png" />
          <Image src="./logos/dados_5.png" />
          <Image src="./logos/dados_6.png" />
        </Box>
      </Box>
    </CompanyContainer>
  );
};

export default Company;
