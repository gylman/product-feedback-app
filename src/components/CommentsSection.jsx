import cuid from "cuid";
import React from "react";
import {
  CommentQuantity,
  CommentsWrapper,
  VerticalLine,
} from "./SuggestionDetailsStyles";
import horizontal_line from "../assets/images/horizontal_line.svg";
import Comment from "./Comment.jsx";
import Container from "./Container";
import classes from "./CommentsSection.module.css";
import { currentBrowser } from "../model";

const CommentsSection = ({ suggestion, handler }) => {
  const handleCommentReply = (comment, replyTo) => {
    const tempData = { ...suggestion.comments };
    if (replyTo === undefined)
      tempData.commentList.push({
        ...currentBrowser,
        content: comment,
      });
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
          content: comment,
        });
    ++tempData.quantity;

    return { ...suggestion, comments: { ...tempData } };
  };

  const handleComments = (comment, replyTo) => {
    handler((prevState) => [
      ...prevState.map((prevSuggestion) =>
        prevSuggestion.id !== suggestion.id
          ? prevSuggestion
          : handleCommentReply(comment, replyTo)
      ),
    ]);
  };

  return (
    <CommentsWrapper>
      <CommentQuantity>{suggestion.comments.quantity} Comments</CommentQuantity>
      <Container className={classes.level_0}>
        {suggestion.comments.commentList.map((comment, i) => {
          return comment.children.length ? (
            <Container className={classes.level_1} key={cuid()}>
              <Comment comment={comment} handler={handleComments} />
              <Container className={classes.level_2}>
                {comment.children.map((child) => (
                  <Comment
                    key={cuid()}
                    comment={child}
                    handler={handleComments}
                  />
                ))}
              </Container>
              <VerticalLine />
              {i < suggestion.comments.commentList.length - 1 && (
                <img src={horizontal_line} alt="horizontal_line" />
              )}
            </Container>
          ) : (
            <Container className={classes.level_3} key={cuid()}>
              <Comment comment={comment} handler={handleComments} />
              {i < suggestion.comments.commentList.length - 1 && (
                <img src={horizontal_line} alt="horizontal_line" />
              )}
            </Container>
          );
        })}
      </Container>
    </CommentsWrapper>
  );
};

export default CommentsSection;
