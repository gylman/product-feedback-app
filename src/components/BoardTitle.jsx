import styled from "styled-components";
import Container from "./Container";
import classes from "./BoardTitle.module.css";

const Title = styled.p`
  ${(props) => props.theme.typography.size20};
  color: #ffffff;
  @media (max-width: 600px) {
    ${(props) => props.theme.typography.size15bold};
  }
`;

const Description = styled.p`
  color: #e1d4fc;
  ${(props) => props.theme.typography.size15semi};
  @media (max-width: 600px) {
    ${(props) => props.theme.typography.size13_500};
  }
`;

const BoardTitle = () => (
  <Container className={classes.level_0}>
    <Container className={classes.level_1}>
      <Title>Frontend Mentor</Title>
      <Description>Feedback Board</Description>
    </Container>
  </Container>
);
export default BoardTitle;
