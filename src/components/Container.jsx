import React from "react";
import styled from "styled-components";

const FlexibleContainer = styled.div`
  display: ${(props) => (props.display ? props.display : "flex")};
  justify-content: ${(props) => props.jc && props.jc};
  align-items: ${(props) => props.ai && props.ai};
  flex-direction: ${(props) => props.fd && props.fd};
  flex-wrap: ${(props) => props.wrap && props.wrap};
  gap: ${(props) => props.gap && props.gap};
  row-gap: ${(props) => props.rg && props.rg};
  column-gap: ${(props) => props.cg && props.cg};
  position: ${(props) => props.pos && props.pos};
  border-radius: ${(props) => props.br && props.br};
  padding: ${(props) => props.pddn && props.pddn};
  padding-top: ${(props) => props.pt && props.pt};
  padding-right: ${(props) => props.pr && props.pr};
  padding-bottom: ${(props) => props.pb && props.pb};
  padding-left: ${(props) => props.pl && props.pl};
  margin: ${(props) => props.mrgn && props.mrgn};
  margin-top: ${(props) => props.mt && props.mt};
  margin-right: ${(props) => props.mr && props.mr};
  margin-bottom: ${(props) => props.mb && props.mb};
  margin-left: ${(props) => props.ml && props.ml};
  background-color: ${(props) => props.bg && props.bg};
  height: ${(props) => props.h && props.h};
  width: ${(props) => props.w && props.w};
  max-width: ${(props) => props.maxW && props.maxW};
  max-height: ${(props) => props.maxH && props.maxH};
  min-width: ${(props) => props.minW && props.minW};
  min-height: ${(props) => props.minH && props.minH};
`;
const Container = (props) => {
  return <FlexibleContainer {...props}>{props.children}</FlexibleContainer>;
};
export default Container;
