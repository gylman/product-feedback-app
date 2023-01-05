import React from "react";
import BoardTitle from "./components/BoardTitle";
import Container from "./components/Container";
import RoadmapMini from "./components/RoadmapMini";
import TagsSection from "./components/TagsSection";

const LeftBar = ({ suggestions, handler }) => {
  return (
    <Container fd="column" gap="24px" maxW="255px">
      <BoardTitle />
      <TagsSection suggestions={suggestions} handler={handler} />
      <RoadmapMini suggestions={suggestions} />
    </Container>
  );
};

export default LeftBar;
