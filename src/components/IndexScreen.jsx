import React, { useCallback, useEffect, useState } from "react";
import classes from "./IndexScreen.module.css";
import Container from "./Container";
import NoFeedBackScreen from "./NoFeedbackScreen";
import Suggestions from "./Suggestions";
import TopBar from "./TopBar";
import LeftBar from "./LeftBar";

const IndexScreen = ({ suggestions, handler }) => {
  const [suggestionIDs, setSuggestionsIDs] = useState(
    suggestions.map((suggestion) => suggestion.id)
  );
  const [sortSuggestions, setSortSuggestions] = useState(suggestions);

  const handleSetSuggestionsIDs = useCallback((handler) => {
    setSuggestionsIDs(handler);
  }, []);

  useEffect(() => {
    setSortSuggestions(
      suggestionIDs.map((id) =>
        suggestions.find((suggestion) => suggestion.id === id)
      )
    );
  }, [suggestionIDs, suggestions]);

  return (
    <Container className={classes.level_0}>
      <LeftBar handler={handleSetSuggestionsIDs} suggestions={suggestions} />
      <Container className={classes.level_1}>
        <TopBar
          suggestions={sortSuggestions}
          handler={handleSetSuggestionsIDs}
        />
        {suggestionIDs.length ? (
          <Suggestions suggestions={sortSuggestions} handler={handler} />
        ) : (
          <NoFeedBackScreen />
        )}
      </Container>
    </Container>
  );
};

export default IndexScreen;
