import styled from "styled-components";

export const Content = styled.div`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Title = styled.h3`
  margin-bottom: 4px;
  ${(props) => props.theme.typography.size18};
  color: #3a4374;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Details = styled.p`
  margin-bottom: 12px;
  margin-right: 25px;
  ${(props) => props.theme.typography.size16};
  color: #647196;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Num = styled.p`
  ${(props) => props.theme.typography.size16bold}
  color: #3A4374
  ${(props) => props.theme.typography.size13bold}
`;
