import styled from "styled-components";

const StyledLine = styled.div`
  height: 1px;
  width: 100%;
  border-top: 1px solid #3a4374;
  opacity: 0.15;
  mix-blend-mode: normal;
`;

const Divider = () => <StyledLine />;

export default Divider;
