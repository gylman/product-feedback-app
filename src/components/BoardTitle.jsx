import styled from "styled-components";
import Container from "./Container";

const StyledBoardTitle = styled.div`
  border-radius: 10px;
  display: flex;
  align-items: end;
  padding: 24px;
  min-width: 255px;
  min-height: 137px;
  background: radial-gradient(
      128.88% 128.88% at 103.9% -10.39%,
      #e84d70 0%,
      #a337f6 53.09%,
      #28a7ed 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
`;

const Title = styled.p`
  ${(props) => props.theme.typography.size20};
  color: #ffffff;
`;

const Description = styled.p`
  color: #e1d4fc;
  ${(props) => props.theme.typography.size15semi};
`;

const BoardTitle = () => (
  <StyledBoardTitle>
    <Container ai="start" jc="end" fd="column">
      <Title>Frontend Mentor</Title>
      <Description>Feedback Board</Description>
    </Container>
  </StyledBoardTitle>
);
export default BoardTitle;
