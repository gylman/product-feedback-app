import cuid from "cuid";
import React from "react";
import styled from "styled-components";
import Container from "./Container";
import RoadmapCard from "./RoadmapCard";
import Arrow from "./UI/Arrow";
import Button from "./UI/Button";
import StyledLink from "./UI/StyledLink";
import classes from "./Roadmap.module.css";

const PageTitle = styled.p`
  color: #ffffff;
  ${(props) => props.theme.typography.size24}
`;

const Title = styled.p`
  color: #3a4374;
  ${(props) => props.theme.typography.size18}
  @media (max-width: 1260px) {
    ${(props) => props.theme.typography.size14}
  }
`;
const Description = styled.p`
  color: #647196;
  ${(props) => props.theme.typography.size16}
  @media (max-width: 1260px) {
    ${(props) => props.theme.typography.size14semi}
  }
`;

const ButtonTitle = styled.span`
  color: #ffffff;
`;

const Roadmap = ({ suggestions, handler }) => {
  const grid = [[], [], []];
  suggestions.forEach((suggestion) => {
    (suggestion.status === "Planned" &&
      grid[0].push(
        <StyledLink key={cuid()} to={`/suggestions/${suggestion.id}`}>
          <RoadmapCard key={cuid()} suggestion={suggestion} handler={handler} />
        </StyledLink>
      )) ||
      (suggestion.status === "In-Progress" &&
        grid[1].push(
          <StyledLink key={cuid()} to={`/suggestions/${suggestion.id}`}>
            <RoadmapCard
              key={cuid()}
              suggestion={suggestion}
              handler={handler}
            />
          </StyledLink>
        )) ||
      (suggestion.status === "Live" &&
        grid[2].push(
          <StyledLink key={cuid()} to={`/suggestions/${suggestion.id}`}>
            <RoadmapCard suggestion={suggestion} handler={handler} />
          </StyledLink>
        ));
  });
  return (
    <Container className={classes.level_0}>
      <Container className={classes.level_1}>
        <Container className={classes.level_2}>
          <StyledLink to="/">
            <Button kind="back" paint="transparent">
              <Arrow direction="left" paint="#4661E6" />
              <ButtonTitle>Go back</ButtonTitle>
            </Button>
          </StyledLink>
          <PageTitle>Roadmap</PageTitle>
        </Container>
        <Container>
          <StyledLink to="/create-feedback">
            <Button kind="default" paint="#AD1FEA">
              + Add Feedback
            </Button>
          </StyledLink>
        </Container>
      </Container>
      <Container className={classes.level_3}>
        <Container className={classes.level_4}>
          <Container className={classes.level_5}>
            <Title>Planned ({grid[0].length})</Title>
            <Description>Ideas prioritized for research</Description>
          </Container>
          {grid[0]}
        </Container>
        <Container className={classes.level_4}>
          <Container className={classes.level_5}>
            <Title>In-Progress ({grid[1].length})</Title>
            <Description>Currently being developed</Description>
          </Container>
          {grid[1]}
        </Container>
        <Container className={classes.level_4}>
          <Container className={classes.level_5}>
            <Title>Live ({grid[2].length})</Title>
            <Description>Released features</Description>
          </Container>
          {grid[2]}
        </Container>
      </Container>
    </Container>
  );
};

export default Roadmap;
