import Arrow from "./UI/Arrow";
import BubbleIcon from "./UI/BubbleIcon";
import Button from "./UI/Button";
import { Content, Title, Details, Num } from "./SuggestionCardStyles";
import Container from "./Container";

const SuggestionCard = ({ suggestion, handler }) => {
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
    <Container
      bg="#ffffff"
      jc="space-between"
      pddn="28px 32px"
      br="10px"
      w="100%"
    >
      <Container gap="40px" ai="start" minW="0px">
        <Button
          onClick={handleUpvote}
          upvoted={suggestion.upvotedByMe}
          kind="upvote"
        >
          <Arrow paint="#4661E6" />
          {suggestion.upvotes}
        </Button>
        <Content>
          <Title>{suggestion.title}</Title>
          <Details>{suggestion.details}</Details>
          <Button kind="tag">{suggestion.tag}</Button>
        </Content>
      </Container>
      <Container ai="center" w="auto" gap="8px">
        <BubbleIcon />
        <Num>{suggestion.comments.quantity}</Num>
      </Container>
    </Container>
  );
};
export default SuggestionCard;
