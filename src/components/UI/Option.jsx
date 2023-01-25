import styled from "styled-components";
import Tick from "./Tick";

const StyledOption = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 12px 24px;
  ${(props) => props.theme.typography.size16};
  color: #647196;
  &:hover {
    color: #ad1fea;
  }
  &:first-child {
    border-radius: 10px 10px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 10px 10px;
  }
  @media (max-width: 600px) {
    ${(props) => props.theme.typography.size13regular};
  }
`;

const Option = (props) => {
  const { setIsShown, setOption, handler } = props;

  // Can this logic be implemented if we declare the function outside of the component's scope?
  const handleOptionClick = (event) => {
    event.preventDefault();
    setOption(event.target.textContent);
    setIsShown(false);
    handler(event.target.textContent);
  };

  return (
    <StyledOption onClick={handleOptionClick}>
      {props.children.label}
      {props.option === props.children.label && <Tick />}
    </StyledOption>
  );
};
export default Option;
