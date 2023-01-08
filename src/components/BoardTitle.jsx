import styled from "styled-components";
import Container from "./Container";
import classes from "./BoardTitle.module.css";

const Title = styled.p`
  ${(props) => props.theme.typography.size20};
  color: #ffffff;
`;

const Description = styled.p`
  color: #e1d4fc;
  ${(props) => props.theme.typography.size15semi};
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
