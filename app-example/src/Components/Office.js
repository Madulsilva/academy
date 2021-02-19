import Box from '@material-ui/core/Box';
import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import media from '../utils/media';
import theme from '../utils/theme';

const YoutubeBox = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;

  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const OfficeText = styled.div`
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

const Office = () => {
  return (
    <>
      <Box>
        <Title>Ambiente de Excelência</Title>
        <OfficeText>
          Aqui tudo é <B>compartilhado</B>, nossos resultados, ideias, dúvidas, gostamos de ouvir a opinião de nosso
          time e trocar <B>feedback regularmente</B>, independente da posição que ocupe. Nosso foco é em{' '}
          <B>resultado de excelência</B> e confiamos na <B>colaboração dos times</B> para atingi-lo.
        </OfficeText>
        <Box pt={3}>
          <YoutubeBox>
            <iframe
              src="https://www.youtube.com/embed/v7etHiIFNW4"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </YoutubeBox>
        </Box>
      </Box>
    </>
  );
};

export default Office;
