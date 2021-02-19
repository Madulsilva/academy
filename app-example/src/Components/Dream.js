/* eslint-disable jsx-a11y/iframe-has-title */
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import React from "react";
import styled from "styled-components";

import OutlinedSquare from "./OutlinedSquare";
import Square from "./Square";
import Title from "./Title";
import media from "../utils/media";
import theme from "../utils/theme";

const DreamText = styled.div`
  color: white;
  ${theme.typography.h6};
  font-size: 1.5em;
  padding: ${theme.spacing(3)}px;
  text-align: center;
  ${media.phone`
    font-size: 1.25em;
    padding: ${theme.spacing(3)}px ${theme.spacing(0)}px;
  `};
`;

const SquareText = styled.div`
  color: ${({ color = "#231940" }) => color};
  ${theme.typography.h4};
  font-weight: ${theme.typography.fontWeightBold};
  text-align: center;
  letter-spacing: 0.1em;
  ${media.phone`
    letter-spacing: 0em;
  `}
`;

const B = styled.b`
  color: ${theme.palette.secondary.main};
`;

const PeopleSquare = styled(OutlinedSquare)`
  ${media.desktop`
    margin-top: ${theme.spacing(-3)}px;
  `}
`;

const Dream = () => {
  return (
    <>
      <Box>
        <Title color="secondary">Sonho</Title>
        <DreamText>
          Nosso <B>sonho</B> é ser a maior escola online de{" "}
          <B>educação jurídica do Brasil</B> e <B>referência em tecnologia</B>,
          com a missão de <B>transformar vidas</B> através da <B>educação</B>,
          utilizando um <B>modelo educacional revolucionário</B> e atuando em
          diversas frentes do mercado.
        </DreamText>
        <Box pt={3}>
          <Grid container spacing={2} justify="center" direction="row-reverse">
            <Grid item xs={12} sm={6}>
              <Box display="flex" ml={3}>
                <PeopleSquare
                  color="primary"
                  width={38}
                  height={25}
                  style={{ borderTopRightRadius: theme.spacing(8) }}
                >
                  <SquareText color={theme.palette.primary.main}>
                    Inovação & Tecnologia
                  </SquareText>
                </PeopleSquare>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" flexDirection="row-reverse">
                <Square
                  color="secondary"
                  width={38}
                  height={25}
                  style={{ borderTopLeftRadius: theme.spacing(8) }}
                >
                  <SquareText>Ambiente de Excelência</SquareText>
                </Square>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex">
                <Square
                  color="secondary"
                  width={38}
                  height={25}
                  style={{ borderBottomRightRadius: theme.spacing(8) }}
                >
                  <SquareText>Diversidade</SquareText>
                </Square>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box display="flex" flexDirection="row-reverse">
                <Square
                  color="secondary"
                  width={38}
                  height={25}
                  style={{ borderBottomLeftRadius: theme.spacing(8) }}
                >
                  <SquareText>Educação de Qualidade</SquareText>
                </Square>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Dream;
