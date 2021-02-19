/* eslint-disable jsx-a11y/iframe-has-title */
import {
  faCalendarAlt,
  faUsers,
  faEdit,
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

const DiversityText = styled.div`
  color: white;
  ${theme.typography.h6};
  font-size: 1.5em;
  padding: ${theme.spacing(3)}px;
  text-align: center;
  ${media.phone`
    font-size: 1.25em;
    padding: ${theme.spacing(3)}px ${theme.spacing(0)}px;
  `};
  margin-bottom: ${theme.spacing(4)}px;
`;

const B = styled.b`
  color: ${theme.palette.secondary.main};
`;

const FeaturedTitle = styled.div`
  ${theme.typography.h5};
  padding: ${theme.spacing(1)}px ${theme.spacing(0)}px;
  text-align: center;
  font-weight: 700;
  color: ${theme.palette.secondary.main};
`;
const FeaturedText = styled.div`
  padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
  text-align: center;
  color: ${theme.palette.common.white};
  font-size: 1.1em;
`;

const Button = styled.a`
  background-color: transparent;
  color: ${theme.palette.secondary.main};
  border: solid 2px ${theme.palette.secondary.main};
  border-radius: ${theme.spacing(2)}px;
  padding: ${theme.spacing(1)}px ${theme.spacing(3)}px;
  font-size: 1.6rem;
  text-decoration: none;
  &:hover {
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.common.white};
    border: solid 2px ${theme.palette.common.white};
  }
`;

const Diversity = () => {
  return (
    <>
      <Box>
        <Title color="secondary">Diversidade</Title>
        <DiversityText>
          A <B>falta de diversidade</B> nas carreiras de tecnologia é uma
          questão que enfrentamos há anos. Pensando em jeitos de diminuir esse
          problema, o Ênfaselabs criou uma <B>mentoria voltada para minorias</B>
          , nomeada{" "}
          <div>
            <B>Ênfaselabs Academy</B>.
          </div>
        </DiversityText>
        <Grid container>
          <Grid item sm={4}>
            <Box
              display="flex"
              height="100%"
              flexDirection="column"
              alignItems="center"
            >
              <Circle
                thickness={2}
                height={theme.spacing(2.9)}
                width={theme.spacing(2.9)}
              >
                <Circle
                  color={theme.palette.secondary.main}
                  thickness={4}
                  height={theme.spacing(2.6)}
                  width={theme.spacing(2.6)}
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    color={theme.palette.primary.main}
                    size="5x"
                  />
                </Circle>
              </Circle>
              <FeaturedTitle>3 grupos</FeaturedTitle>
              <FeaturedText>
                São 3 grupos de mentoria diferentes: full stack, produto e
                dados, e nelas vamos tratar tanto de assuntos técnicos quanto do
                mercado de trabalho.
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
                thickness={2}
                height={theme.spacing(2.9)}
                width={theme.spacing(2.9)}
              >
                <Circle
                  color={theme.palette.secondary.main}
                  thickness={4}
                  height={theme.spacing(2.6)}
                  width={theme.spacing(2.6)}
                >
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    color={theme.palette.primary.main}
                    size="5x"
                  />
                </Circle>
              </Circle>
              <FeaturedTitle>6 semanas</FeaturedTitle>
              <FeaturedText>
                O Ênfaselabs Academy é um projeto que tem duração de 6 semanas
                (19 de fevereiro a 2 de abril) e tem como objetivo ajudar na
                capacitação dessas pessoas, que atualmente encontram mais
                barreiras para entrar no mercado.
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
                thickness={2}
                height={theme.spacing(2.9)}
                width={theme.spacing(2.9)}
              >
                <Circle
                  color={theme.palette.secondary.main}
                  thickness={4}
                  height={theme.spacing(2.6)}
                  width={theme.spacing(2.6)}
                >
                  <FontAwesomeIcon
                    icon={faEdit}
                    color={theme.palette.primary.main}
                    size="5x"
                  />
                </Circle>
              </Circle>
              <FeaturedTitle>...só vem!</FeaturedTitle>
              <FeaturedText>
                Queremos te ajudar a estar pronta para qualquer entrevista de
                emprego no futuro e te aproximar do ambiente de uma empresa,
                tudo isso de graça. As vagas são limitadas e as inscrições estão
                abertas até começo de fevereiro.
              </FeaturedText>
            </Box>
          </Grid>
        </Grid>
        <DiversityText>
          <Button href="https://academy.enfaselabs.com.br/" target="_blank">
            Inscreva-se
          </Button>
        </DiversityText>
      </Box>
    </>
  );
};

export default Diversity;
