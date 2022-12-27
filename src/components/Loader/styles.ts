import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

export const Spinner = styled.div<{ width?: any; height?: any; marginTop: any; color?: any; marginLeft?: any;}>`
  width: ${props => props.width ? props.width : '120px'};
  height: ${props => props.height ? props.height : '120px'};
  border: 8px solid ${(props) => props.theme.color.primary};
  border-top: 8px solid white;
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-top: ${props => props.marginTop ? props.marginTop : '12vh'};
  margin-left: ${props => props.marginLeft ? props.marginLeft : ''};
  align-self: center;
`;