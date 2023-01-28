import React from "react";
import classes from "./styles/SuggestionDetails.module.css";
import SuggestionCard from "../components/SuggestionCard";
import AddComment from "../components/AddComment";
import CommentsSection from "../components/CommentsSection";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import Arrow from "../components/UI/Arrow";
import Button from "../components/UI/Button";
import StyledLink from "../components/UI/StyledLink";
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