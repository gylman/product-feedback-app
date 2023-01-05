import cuid from "cuid";
import React from "react";
import styled from "styled-components";
import Container from "./Container";
import RoadmapCard from "./RoadmapCard";
import Arrow from "./UI/Arrow";
import Button from "./UI/Button";
import StyledLink from "./UI/StyledLink";

const PageTitle = styled.p`
  color: #ffffff;
  ${(props) => props.theme.typography.size24}
`;

const Title = styled.p`
  color: #3a4374;
  ${(props) => props.theme.typography.size18}
`;
const Description = styled.p`
  color: #647196;
  ${(props) => props.theme.typography.size1}
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
    <Container gap="48px" fd="column" ai="center">
      <Container
        ai="center"
        jc="space-between"
        bg="#373F68"
        pddn="27px 40px 27px 32px"
        br="10px"
        w="100%"
      >
        <Container fd="column">
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
      <Container gap="30px">
        <Container fd="column" gap="24px">
          <Container fd="column" gap="8px" mb="8px">
            <Title>Planned ({grid[0].length})</Title>
            <Description>Ideas prioritized for research</Description>
          </Container>
          {grid[0]}
        </Container>
        <Container fd="column" gap="24px">
          <Container fd="column" gap="8px" mb="8px">
            <Title>In-Progress ({grid[1].length})</Title>
            <Description>Currently being developed</Description>
          </Container>
          {grid[1]}
        </Container>
        <Container fd="column" gap="24px">
          <Container fd="column" gap="8px" mb="8px">
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
