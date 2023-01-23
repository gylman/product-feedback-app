import React, { useCallback, useState } from "react";
import classes from "./IndexScreen.module.css";
import Container from "../components/Container";
import NoFeedBackScreen from "../components/NoFeedbackScreen";
import Suggestions from "../components/Suggestions";
import TopBar from "../components/TopBar";
import LeftBar from "../components/LeftBar";

const IndexScreen = (props) => {
  const [suggestionIDs, setSuggestionsIDs] = useState(
    props.suggestions.map((suggestion) => suggestion.id)
  );
  const handleSetSuggestionsIDs = useCallback((handler) => {
    setSuggestionsIDs(handler);
  }, []);

  return (
    <Container className={classes.level_0}>
      <LeftBar
        handler={handleSetSuggestionsIDs}
        suggestions={props.suggestions}
      />
      <Container className={classes.level_1}>
        <TopBar
          suggestions={suggestionIDs.map((id) =>
            props.suggestions.find((suggestion) => suggestion.id === id)
          )}
          handler={handleSetSuggestionsIDs}
        />
        {suggestionIDs.length ? (
          <Suggestions
            suggestions={suggestionIDs.map((id) =>
              props.suggestions.find((suggestion) => suggestion.id === id)
            )}
            handler={props.handler}
          />
        ) : (
          <NoFeedBackScreen />
        )}
      </Container>
    </Container>
  );
};

export default IndexScreen;
