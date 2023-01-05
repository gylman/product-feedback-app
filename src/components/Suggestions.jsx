import cuid from "cuid";
import React from "react";
import Container from "./Container";
import SuggestionCard from "./SuggestionCard";
import StyledLink from "./UI/StyledLink";

const Suggestions = ({ suggestions, handler }) => {
  return (
    <Container ai="center" fd="column" gap="20px" w="100%">
      {suggestions.map((suggestion) => (
        <StyledLink key={cuid()} to={`/suggestions/${suggestion.id}`}>
          <SuggestionCard suggestion={suggestion} handler={handler} />
        </StyledLink>
      ))}
    </Container>
  );
};

export default Suggestions;
