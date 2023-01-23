import React from "react";
import classes from "./SuggestionDetails.module.css";
import SuggestionCard from "./SuggestionCard";
import AddComment from "./AddComment";
import CommentsSection from "./CommentsSection";
import Container from "./Container";
import { useParams } from "react-router-dom";
import Arrow from "./UI/Arrow";
import Button from "./UI/Button";
import StyledLink from "./UI/StyledLink";
const SuggestionDetails = (props) => {
  let params = useParams();

  const suggestion = props.suggestions.find(
    (suggestion) => suggestion.id === params.id
  );

  return (
    <Container className={classes.level_0}>
      <Container className={classes.level_1}>
        <Container className={classes.level_2}>
          <Container>
            <StyledLink to={`/`}>
              <Button kind="back" paint="transparent">
                <Arrow direction="left" paint="#4661E6" />
                Go back
              </Button>
            </StyledLink>
          </Container>
          <Container>
            <StyledLink to={`/suggestions/${suggestion.id}/edit-feedback`}>
              <Button kind="default" paint="#4661E6">
                Edit Feedback
              </Button>
            </StyledLink>
          </Container>
        </Container>
        <SuggestionCard suggestion={suggestion} handler={props.handler} />
        <CommentsSection suggestion={suggestion} handler={props.handler} />
        <AddComment suggestion={suggestion} handler={props.handler} />
      </Container>
    </Container>
  );
};
export default SuggestionDetails;
