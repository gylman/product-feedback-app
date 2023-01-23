import cuid from "cuid";
import React from "react";
import classes from "./Suggestions.module.css";
import Container from "./Container";
import SuggestionCard from "./SuggestionCard";
import StyledLink from "./UI/StyledLink";

const Suggestions = ({ suggestions, handler }) => {
  return (
    <Container className={classes.level_0}>
      {suggestions.map((suggestion) => (
        <StyledLink key={cuid()} to={`/suggestions/${suggestion.id}`}>
          <SuggestionCard suggestion={suggestion} handler={handler} />
        </StyledLink>
      ))}
    </Container>
  );
};

export default Suggestions;
