import styled from "styled-components";

const StyledTick = styled.svg.attrs({
  viewBox: "0 0 13 11",
  fill: "none",
})`
  width: 13px;
  height: 11px;
`;

const Tick = () => (
  <StyledTick>
    <path d="M1 5.23287L4.52154 9L12 1" stroke="#AD1FEA" strokeWidth="2" />
  </StyledTick>
);

export default Tick;
