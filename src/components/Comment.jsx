import React, { useState } from "react";
import {
  AuthorImage,
  FullName,
  Id,
  ReplyBtn,
  CommentContent,
} from "./CommentStyles.js";
import Container from "./Container.jsx";
import Button from "./UI/Button";
import StyledInput from "./UI/StyledInput";

const Comment = ({ comment, handler }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [rawReply, setReply] = useState("");

  const handleIsReplying = () => {
    setIsReplying((isReplying) => !isReplying);
  };

  const handleReply = (event) => {
    setReply(event.target.value);
  };

  const submitReply = () => {
    const reply = (
      <>
        <span style={{ color: "#AD1FEA", fontWeight: "700" }}>
          {comment.userId + " "}
        </span>
        {rawReply}
      </>
    );
    handler(reply, comment);
  };

  const handleEnterPress = (event) => {
    if (event.code === "Enter" && !event.shiftKey) {
      submitReply();
      event.preventDefault();
    }
  };

  return (
    <Container gap="32px">
      <AuthorImage>
        <img src={comment.img} alt="profile_pic" />
      </AuthorImage>
      <Container fd="column" gap="17px" w="100%">
        <Container ai="center" jc="space-between">
          <Container fd="column">
            <FullName>{comment.userName}</FullName>
            <Id>{comment.userId}</Id>
          </Container>
          <ReplyBtn onClick={handleIsReplying}>Reply</ReplyBtn>
        </Container>
        <CommentContent>{comment.content}</CommentContent>
        {isReplying && (
          <form onSubmit={rawReply ? submitReply : handleIsReplying}>
            <Container
              mt="8px"
              gap="16px"
              minH="80px"
              ai="start"
              jc="space-between"
            >
              <StyledInput
                onChange={handleReply}
                as="textarea"
                active
                autoFocus
                onKeyDown={handleEnterPress}
                placeholder="Type your reply here"
              />
              <Button type="submit" kind="default" paint="#AD1FEA">
                <p>Post Reply</p>
              </Button>
            </Container>
          </form>
        )}
      </Container>
    </Container>
  );
};

export default Comment;
