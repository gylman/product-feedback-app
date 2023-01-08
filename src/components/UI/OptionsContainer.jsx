import cuid from "cuid";
import styled from "styled-components";
import Divider from "./Divider";
import Option from "./Option";

const StyledContainer = styled.ul`
  background: #ffffff;
  width: ${(props) => (props.w ? props.w : "100%")};
  border-radius: ${(props) => props.theme["border-radius"]};
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.350492);
  margin-top: 16px;
  list-style: none;
  z-index: 9;
  position: absolute;
  top: ${(props) => (props.top && props.top) || "45px"};
  left: 0;
`;

const OptionsContainer = (props) => (
  <StyledContainer top={props.top} w={props.w}>
    {props.options.map((option, index) => (
      <div key={cuid()}>
        <Option
          option={props.option}
          handleOptionClick={props.handleOptionClick}
          setIsShown={props.setIsShown}
          setOption={props.setOption}
        >
          {option}
        </Option>
        {index !== props.options.length - 1 && <Divider />}
      </div>
    ))}
  </StyledContainer>
);
export default OptionsContainer;
