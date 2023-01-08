import React from "react";
import BoardTitle from "./BoardTitle";
import Container from "./Container";
import RoadmapMini from "./RoadmapMini";
import TagsSection from "./TagsSection";
import classes from "./LeftBar.module.css";

const LeftBar = ({ suggestions, handler }) => {
  return (
    <Container className={classes.level_0}>
      <BoardTitle />
      <TagsSection suggestions={suggestions} handler={handler} />
      <RoadmapMini suggestions={suggestions} />
    </Container>
  );
};

export default LeftBar;
