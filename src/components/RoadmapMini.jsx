import Container from "./Container";
import {
  Header,
  Link as Span,
  Status,
  Dot,
  Quantity,
} from "./RoadmapMiniStyles";
import StyledLink from "./UI/StyledLink";

const RoadmapMini = ({ suggestions }) => {
  const statusesAmount = [
    suggestions.filter((suggestion) => suggestion.status === "Planned").length,
    suggestions.filter((suggestion) => suggestion.status === "In-Progress")
      .length,
    suggestions.filter((suggestion) => suggestion.status === "Live").length,
  ];
  return (
    <Container fd="column" gap="24px" bg="#ffffff" pddn="19px 24px" br="10px">
      <Container ai="center" jc="space-between">
        <Header>Roadmap</Header>
        <Span number={suggestions.length}>
          <StyledLink to="/roadmap">View</StyledLink>
        </Span>
      </Container>
      <Container fd="column" gap="8px">
        <Container jc="start" ai="center" gap="16px">
          <Dot color="#f49f85" />
          <Status>Planned</Status>
          <Quantity>{statusesAmount[0]}</Quantity>
        </Container>
        <Container jc="start" ai="center" gap="16px">
          <Dot color="#ad1fea" />
          <Status>In-Progress</Status>
          <Quantity>{statusesAmount[1]}</Quantity>
        </Container>
        <Container jc="start" ai="center" gap="16px">
          <Dot color="#62bcfa" />
          <Status>Live</Status>
          <Quantity>{statusesAmount[2]}</Quantity>
        </Container>
      </Container>
    </Container>
  );
};

export default RoadmapMini;
