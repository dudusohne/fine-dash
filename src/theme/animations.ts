import { useSpring } from "@react-spring/web";
import { keyframes } from "styled-components";

export const float = keyframes`
  0% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
    transform: translatey(-10px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
    transform: translatey(0px);
  }
`;

export const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export const slide = keyframes`
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
`;
