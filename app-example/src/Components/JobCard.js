import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import React from "react";
import styled from "styled-components";

import theme from "../utils/theme";

const Card = styled(Paper)`
  margin: ${theme.spacing(0.5)}px 0px;
  padding: ${theme.spacing(1)}px ${theme.spacing(2)}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border-left: 3px solid ${theme.palette.primary.main};
  max-width: 672px;
  border-radius: 0;
  background-color: #fafafa;
  width: 100%;
  &:hover {
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
      0px 1px 4px 0px rgba(0, 0, 0, 0.14), 0px 2px 4px -1px rgba(0, 0, 0, 0.12);
    background-color: #ffffff;
    border-left: 6px solid ${theme.palette.primary.main};
    transition: 0.4s border-left cubic-bezier(0.19, 1, 0.22, 1);
    padding-left: ${theme.spacing(2) - 3}px;
  }
  padding-bottom: 0px;
`;

const JobTitle = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
`;

const ChipContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledChip = styled(Chip)`
  margin-bottom: ${theme.spacing(1)}px;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  color: ${"#231940"};
  font-size: 1.5em;
  font-weight: bold;
`;

const JobDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Workplace = styled.div`
  color: #231940;
  opacity: 0.8;
  font-weight: normal;
  font-size: 0.75em;
  padding-left: ${theme.spacing(1)}px;
  margin-bottom: ${theme.spacing(1)}px;
  border-left: 1px solid #cccccc;
`;

const JobCard = ({ job }) => {
  const { name, regime, workplace, keywords } = job;

  return (
    <Card onClick={() => {}}>
      <div>
        <Content>
          <JobDescription>
            <JobTitle>
              <Box pb={0.5}>
                {name || "name"}, {regime || "regime"}
              </Box>
            </JobTitle>
            <Grid container alignItems="center">
              <Grid item>
                <ChipContainer>
                  {keywords &&
                    keywords.map((tag) => (
                      <StyledChip
                        variant="outlined"
                        key={tag}
                        size="small"
                        label={tag || "tag"}
                        color="primary"
                      />
                    ))}
                </ChipContainer>
              </Grid>
              <Grid item>
                <Workplace>{workplace || "workplace"}</Workplace>
              </Grid>
            </Grid>
          </JobDescription>
        </Content>
      </div>
      <Hidden smDown>
        <div>
          <FontAwesomeIcon icon={faChevronRight} color="#231940" size="xs" />
        </div>
      </Hidden>
    </Card>
  );
};

export default JobCard;
