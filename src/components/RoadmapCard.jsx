import React from "react";
import styled from "styled-components";
import BubbleIcon from "./UI/BubbleIcon";
import { Dot, Status } from "./RoadmapMiniStyles";
import { Num } from "./SuggestionCardStyles";
import Button from "./UI/Button";
import Arrow from "./UI/Arrow";
import Container from "./Container";

const TopMostContainer = styled.div`
  padding: 25px 32px 32px 32px;
  border-top: 6px solid
    ${(props) =>
      (props.status === "Planned" && "#f49f85") ||
      (props.status === "In-Progress" && "#ad1fea") ||
      (props.status === "Live" && "#62bcfa")};
  border-radius: 5px;
  max-width: 350px;
  max-height: 272px;
  background-color: #ffffff;
`;

const Title = styled.p`
  ${(props) => props.theme.typography.size18};
  margin-top: 8px;
  margin-bottom: 4px;
  color: #3a4374;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Details = styled.p`
  ${(props) => props.theme.typography.size16};
  margin-bottom: 16px;
  color: #647196;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const RoadmapCard = ({ suggestion, handler }) => {
  const handleQuantity = () => {
    const quantity = suggestion.upvotedByMe
      ? suggestion.upvotes - 1
      : suggestion.upvotes + 1;
    return {
      ...suggestion,
      upvotes: quantity,
      upvotedByMe: !suggestion.upvotedByMe,
    };
  };

  const handleUpvote = (event) => {
    handler((prevState) => [
      ...prevState.map((prevSuggestion) =>
        prevSuggestion.id !== suggestion.id ? prevSuggestion : handleQuantity()
      ),
    ]);
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <TopMostContainer status={suggestion.status}>
      <Container ai="center" jc="start" gap="16px">
        <Dot
          color={
            (suggestion.status === "Planned" && "#f49f85") ||
            (suggestion.status === "In-Progress" && "#ad1fea") ||
            (suggestion.status === "Live" && "#62bcfa")
          }
        />
        <Status>{suggestion.status}</Status>
      </Container>
      <Title>{suggestion.title}</Title>
      <Details>{suggestion.details}</Details>
      <Button kind="tag">{suggestion.tag}</Button>
      <Container jc="space-between" mt="16px">
        <Button
          onClick={handleUpvote}
          upvoted={suggestion.upvotedByMe}
          kind="upvote"
          direction="horizontal"
        >
          {suggestion.upvotes}
          <Arrow direction="up" paint="#4661E6" />
        </Button>
        <Container w="auto" gap="8px" ai="center">
          <BubbleIcon />
          <Num>{suggestion.comments.quantity}</Num>
        </Container>
      </Container>
    </TopMostContainer>
  );
};

export default RoadmapCard;
