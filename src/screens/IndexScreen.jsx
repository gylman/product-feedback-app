import React, { useState } from "react";
import Container from "../components/Container";
import NoFeedBackScreen from "../components/NoFeedbackScreen";
import Suggestions from "../components/Suggestions";
import TopBar from "../components/TopBar";
import LeftBar from "../LeftBar";

const IndexScreen = (props) => {
  const [suggestionIDs, setSuggestionsIDs] = useState(
    props.suggestions.map((suggestion) => suggestion.id)
  );
  const handleSetSuggestionsIDs = (handler) => {
    setSuggestionsIDs(handler);
  };

  return (
    <Container gap="30px" ai="start">
      <LeftBar
        handler={handleSetSuggestionsIDs}
        suggestions={props.suggestions}
      />
      <Container gap="24px" fd="column" w="100%" minW="0px">
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
