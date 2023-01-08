import React, { useRef, useState } from "react";
import styled from "styled-components";
import StyledInput from "./UI/StyledInput";
import Button from "./UI/Button";
import Container from "./Container";
import { currentBrowser } from "../model";
import classes from "./AddComment.module.css";

const TopMostContainer = styled.div`
  padding: 24px 32px 32px 34px;
  background-color: #ffffff;
  border-radius: ${(props) => props.theme["border-radius"]};
`;

const Header = styled.h3`
  color: #3a4374;
  margin-bottom: 24px;
`;

const CharLeft = styled.span`
  color: #647196;
  ${(props) => props.theme.typography.size15}
`;

const AddComment = ({ suggestion, handler }) => {
  const [quantity, setQuantity] = useState(250);
  const [comment, setComment] = useState("");
  const inputData = useRef();

  const handleCommentReply = (comment, replyTo) => {
    const tempData = { ...suggestion.comments };
    if (replyTo === undefined)
      tempData.commentList.push({ ...currentBrowser, content: comment });
    else
      tempData.commentList
        .find(
          (comment) =>
            comment.commentId === replyTo.commentId ||
            comment.commentId === replyTo.parentId
        )
        .children.push({
          ...currentBrowser,
          parentId: replyTo.parentId ?? replyTo.commentId,
        });
    tempData.quantity++;
    return { ...suggestion, comments: tempData };
  };

  const handleComment = () => {
    setQuantity(() => 250 - inputData.current.value.length);
    setComment(inputData.current.value);
  };

  const handlePostComment = () => {
    comment &&
      handler((prevState) => [
        ...prevState.map((prevSuggestion) =>
          prevSuggestion.id !== suggestion.id
            ? prevSuggestion
            : handleCommentReply(comment)
        ),
      ]);
    inputData.current.value = "";
    setComment(() => "");
    setQuantity(() => 250);
  };

  const handleEnterPress = (event) => {
    if (event.code === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handlePostComment();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handlePostComment();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TopMostContainer>
        <Header>Add Comment</Header>
        <Container className={classes.level_0}>
          <StyledInput
            maxLength={250}
            ref={inputData}
            onChange={handleComment}
            as="textarea"
            placeholder="Type your comment here"
            onKeyDown={handleEnterPress}
          />
        </Container>
        <Container className={classes.level_1}>
          <CharLeft>{quantity} characters left</CharLeft>
          <Button type="submit" kind="default" paint="#AD1FEA">
            <p>Post Comment</p>
          </Button>
        </Container>
      </TopMostContainer>
    </form>
  );
};
export default AddComment;
