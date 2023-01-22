import cuid from "cuid";
import React, { useState } from "react";
import styled from "styled-components";
import Container from "./Container";
import RoadmapCard from "./RoadmapCard";
import Arrow from "./UI/Arrow";
import Button from "./UI/Button";
import classes from "./Roadmap.module.css";
import { useNavigate } from "react-router-dom";

const PageTitle = styled.p`
  color: #ffffff;
  ${(props) => props.theme.typography.size24}
  @media (max-width: 600px) {
    ${(props) => props.theme.typography.size18}
  }
`;

const Title = styled.p`
  color: #3a4374;
  ${(props) => props.theme.typography.size18}
  @media (max-width: 800px) {
    ${(props) => props.theme.typography.size14}
  }
  @media (max-width: 600px) {
    color: #abb0c7;
    ${(props) => props.theme.typography.size13bold}
    width: 100%;
  }
`;
const Description = styled.p`
  color: #647196;
  ${(props) => props.theme.typography.size16}
  @media (max-width: 800px) {
    ${(props) => props.theme.typography.size14semi}
  }
`;

const ButtonTitle = styled.span`
  color: #ffffff;
`;

const Roadmap = ({ suggestions, handler }) => {
  const navigate = useNavigate();
  const grid = [[], [], []];
  const [activeTab, setActiveTab] = useState("Planned");
  const handleActiveTab = (event) => {
    setActiveTab(event.target.textContent);
  };

  suggestions.forEach((suggestion) => {
    (suggestion.status === "Planned" &&
      grid[0].push(
        <RoadmapCard
          navigate={() => {
            navigate(`/suggestions/${suggestion.id}`);
          }}
          key={cuid()}
          suggestion={suggestion}
          handler={handler}
        />
      )) ||
      (suggestion.status === "In-Progress" &&
        grid[1].push(
          <RoadmapCard
            navigate={() => {
              navigate(`/suggestions/${suggestion.id}`);
            }}
            key={cuid()}
            suggestion={suggestion}
            handler={handler}
          />
        )) ||
      (suggestion.status === "Live" &&
        grid[2].push(
          <RoadmapCard
            key={cuid()}
            navigate={() => {
              navigate(`/suggestions/${suggestion.id}`);
            }}
            suggestion={suggestion}
            handler={handler}
          />
        ));
  });
  return (
    <Container className={classes.level_0}>
      <Container className={classes.level_1}>
        <Container className={classes.level_2}>
          <Button
            onClick={() => {
              navigate("/");
            }}
            kind="back"
            paint="transparent"
            jc="flex-start"
          >
            <Arrow direction="left" paint="#4661E6" />
            <ButtonTitle>Go back</ButtonTitle>
          </Button>

          <PageTitle>Roadmap</PageTitle>
        </Container>
        <Container>
          <Button
            onClick={() => {
              navigate("/create-feedback");
            }}
            kind="default"
            paint="#AD1FEA"
          >
            + Add Feedback
          </Button>
        </Container>
      </Container>
      {window.innerWidth <= 600 ? (
        <>
          <Container className={classes.level_0_mob}>
            <Container
              onClick={handleActiveTab}
              className={
                activeTab.includes("Planned")
                  ? classes.bottom_line_planned + " " + classes.level_5
                  : classes.level_5
              }
            >
              <Title
                className={activeTab.includes("Planned") && classes.active_tab}
              >
                Planned ({grid[0].length})
              </Title>
            </Container>
            <Container
              onClick={handleActiveTab}
              className={
                activeTab.includes("In-Progress")
                  ? classes.bottom_line_in_progress + " " + classes.level_5
                  : classes.level_5
              }
            >
              <Title
                className={
                  activeTab.includes("In-Progress") && classes.active_tab
                }
              >
                In-Progress ({grid[1].length})
              </Title>
            </Container>
            <Container
              onClick={handleActiveTab}
              className={
                activeTab.includes("Live")
                  ? classes.bottom_line_live + " " + classes.level_5
                  : classes.level_5
              }
            >
              <Title
                className={activeTab.includes("Live") && classes.active_tab}
              >
                Live ({grid[2].length})
              </Title>
            </Container>
          </Container>
          <Container className={classes.level_3}>
            <Container className={classes.level_4}>
              <Container className={classes.level_6}>
                <Title className={classes.title}>
                  {(activeTab.includes("Planned") &&
                    `Planned (${grid[0].length})`) ||
                    (activeTab.includes("In-Progress") &&
                      `In-Progress (${grid[1].length})`) ||
                    (activeTab.includes("Live") && `Live (${grid[2].length})`)}
                </Title>
                <Description>
                  {(activeTab.includes("Planned") &&
                    `Ideas prioritized for research`) ||
                    (activeTab.includes("In-Progress") &&
                      `Currently being developed`) ||
                    (activeTab.includes("Live") && `Released features`)}
                </Description>
              </Container>
              {(activeTab.includes("Planned") && grid[0]) ||
                (activeTab.includes("In-Progress") && grid[1]) ||
                (activeTab.includes("Live") && grid[2])}
            </Container>
          </Container>
        </>
      ) : (
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
      )}
    </Container>
  );
};

export default Roadmap;
