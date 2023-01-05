import React from "react";
import styled from "styled-components";

const CustomInputRow = styled.div`
  position: relative;
`;

const InputTitle = styled.h4`
  color: #3a4374;
  margin-bottom: 2px;
  ${(props) => props.theme.typography.size14}
`;
const Description = styled.p`
  color: #647196;
  margin-bottom: 16px;
  ${(props) => props.theme.typography.size14semi}
`;

const InputRow = (props) => (
  <CustomInputRow>
    <InputTitle>{props.title}</InputTitle>
    <Description>{props.description}</Description>
    {props.children}
  </CustomInputRow>
);

export default InputRow;
