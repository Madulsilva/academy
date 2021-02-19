import Box from '@material-ui/core/Box';
import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import JobCard from './JobCard';
import jobs from '../jobs';
import theme from '../utils/theme';

const JobCardsContainer = styled.div`
  border-left: 3px solid ${theme.palette.primary.main};
  border-right: 3px solid ${theme.palette.primary.main};
  padding-top: ${theme.spacing(2)}px;
  padding-bottom: ${theme.spacing(10)}px;
  border-top-left-radius: ${theme.spacing(10)}px;
  border-bottom-right-radius: ${theme.spacing(10)}px;
  margin-bottom: ${theme.spacing(5)}px;
  min-height: ${theme.spacing(87.5)}px;
`;

const ListJobs = () => {
  return (
    <>
      <JobCardsContainer>
        <Box>
          <Title color="primary">Lista de vagas</Title>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="center" mt={3}>
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </Box>
      </JobCardsContainer>
    </>
  );
};

export default ListJobs;
