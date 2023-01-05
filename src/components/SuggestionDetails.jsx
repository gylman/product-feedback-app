import React from "react";
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
    <Container w="100%" jc="center">
      <Container fd="column" gap="24px" maxW="730px" w="100%">
        <Container jc="space-between" ai="center" w="100%">
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
