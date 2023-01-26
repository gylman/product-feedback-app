import { useNavigate } from "react-router-dom";
import classes from "./styles/NoFeedbackScreen.module.css";
import styled from "styled-components";
import Container from "../components/Container";
import Button from "../components/UI/Button";
import ImageNoFeedback from "../components/UI/ImageNoFeedback";

const Title = styled.h1`
  color: #3a4374;
  ${(props) => props.theme.typography.size24}
  margin-top: 53.26px;
  @media (max-width: 600px) {
    ${(props) => props.theme.typography.size18}
  }
`;
const Details = styled.div`
  color: #647196;
  ${(props) => props.theme.typography.size16};
  margin-top: 16px;
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    ${(props) => props.theme.typography.size13regular}
  }
`;

const NoFeedBackScreen = (props) => {
  const navigate = useNavigate();
  return (
    <Container className={classes.level_0}>
      <ImageNoFeedback />
      <Title>There is no feedback yet.</Title>
      <Details>
        <p>Got a suggestion? Found a bug that needs to be squashed?</p>
        <p>We love hearing about new ideas to improve our app.</p>
      </Details>
      <Button
        kind="default"
        onClick={() => {
          navigate("/create-feedback");
        }}
        paint="#AD1FEA"
      >
        + Add Feedback
      </Button>
    </Container>
  );
};
export default NoFeedBackScreen;
