import React, { useContext } from "react";
import classes from "./styles/SuggestionDetails.module.css";
import SuggestionCard from "../components/SuggestionCard";
import AddComment from "../components/AddComment";
import CommentsSection from "../components/CommentsSection";
import Container from "../components/Container";
import { useParams } from "react-router-dom";
import Arrow from "../components/UI/Arrow";
import Button from "../components/UI/Button";
import StyledLink from "../components/UI/styles/StyledLink";
import GlobalContext from "../store/global-context";

const SuggestionDetails = (props) => {
  let params = useParams();

  const suggestion = props.suggestions.find(
    (suggestion) => suggestion.id === params.id
  );
  const ctx = useContext(GlobalContext);
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
        <SuggestionCard suggestion={suggestion} handler={ctx.handler} />
        <CommentsSection suggestion={suggestion} handler={ctx.handler} />
        <AddComment suggestion={suggestion} handler={ctx.handler} />
      </Container>
    </Container>
  );
};
export default SuggestionDetails;
