import React from "react";
import StyledArrow from "./StyledArrow";

const Arrow = (props) => (
  <StyledArrow
    viewbox="0 0 11 7"
    direction={props.direction}
    className={props.className}
    paint={props.paint}
  >
    <path stroke="currentColor" d="M1.33398 6L5.33398 2L9.33398 6" />
  </StyledArrow>
);

export default Arrow;
/* 

.icon {
  width: 48px;
  height: 48px;
  display: inline-block;
  
  -webkit-mask: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/18515/heart.svg) no-repeat 50% 50%;
  mask: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/18515/heart.svg) no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
}

.icon-red { background-color: red; }
.icon-orange { background-color: orange; }
.icon-yellow { background-color: yellow; }
 */
