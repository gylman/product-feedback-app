import React, { useState } from "react";
import classes from "./styles/LeftBar.module.css";
import BoardTitle from "./BoardTitle";
import Container from "./Container";
import RoadmapMini from "./RoadmapMini";
import TagsSection from "./TagsSection";

const LeftBar = ({ suggestions, handler }) => {
  const [displayRightPanel, setDisplayRightPanel] = useState(false);
  const handleHamburger = () => {
    setDisplayRightPanel((prevState) => !prevState);
  };

  return (
    <Container className={classes.level_0}>
      <BoardTitle
        displayRightPanel={displayRightPanel}
        handler={handleHamburger}
      />
      {window.innerWidth > 600 ? (
        <>
          <TagsSection suggestions={suggestions} handler={handler} />
          <RoadmapMini suggestions={suggestions} />
        </>
      ) : (
        displayRightPanel && (
          <>
            <Container onClick={handleHamburger} className={classes.level_1} />
            <Container className={classes.level_2}>
              <TagsSection suggestions={suggestions} handler={handler} />
              <RoadmapMini suggestions={suggestions} />
            </Container>
          </>
        )
      )}
    </Container>
  );
};

export default LeftBar;
