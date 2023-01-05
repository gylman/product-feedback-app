import styled, { css } from "styled-components";
import { useState } from "react";
import StyledInput from "./StyledInput";
import StyledArrow from "./StyledArrow";
import OptionsContainer from "./OptionsContainer";
import { useEffect } from "react";

const SelectBoxContainer = styled.div`
  position: relative;
  width: ${(props) => props.w && props.w};
`;

const StyledSelectBox = styled(StyledInput)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${(props) =>
    props.sortButton &&
    css`
      width: auto;
      display: inline-flex;
      justify-content: start;
      gap: 5px;
      background-color: transparent;
      color: ${props.isShown ? "#c2c7d9" : "#f2f4fe"};
    `};

  ${StyledArrow} {
    transform: ${(props) =>
      props.isShown ? "rotate(0deg)" : "rotate(180deg)"};
  } ;
`;

const SelectBox = (props) => {
  const [option, setOption] = useState(props.options[0].label);
  const [isShown, setIsShown] = useState(false);

  const handleSelectBoxClick = () => {
    // Ask about usage of the previous state and returning state using a callback function
    setIsShown(isShown ? false : true);
  };
  useEffect(() => {
    props.handleOption && props.handleOption(option);
  }, [option]);

  return (
    <SelectBoxContainer w={props.w}>
      <StyledSelectBox
        as="div"
        onClick={handleSelectBoxClick}
        active={props.active || (!props.sortButton && isShown && true)}
        isShown={isShown}
        kind={props.kind}
        sortButton={props.sortButton}
      >
        {props.sortButton ? "Sort by: " + option : option}
        {props.children}
      </StyledSelectBox>
      {isShown && (
        <OptionsContainer
          option={option}
          options={props.options}
          setIsShown={setIsShown}
          setOption={setOption}
          top={props.top}
        />
      )}
    </SelectBoxContainer>
  );
};

export default SelectBox;
