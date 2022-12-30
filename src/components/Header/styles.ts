import styled from "styled-components";
import { float, slide } from "../../theme/animations";
import { animated } from "@react-spring/web";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem 0 3rem;
  position: sticky;
  top: 0;
  height: 5vh;
  background-color: ${(props) => props.theme.color.tertiary};
  border-bottom: 6px solid ${(props) => props.theme.color.primary};
  z-index: 12;
`;

export const UserImage = styled(animated.img)`
  width: 50px;
  border-radius: 50%;
  margin-top: 40px;
  border: 2px solid ${(props) => props.theme.color.primary};
  transform: translatey(0px);
  animation: ${float} 6s ease-in-out infinite;
  z-index: 23;
  :hover {
    cursor: pointer;
  }
`;

export const UserName = styled.span`
  font-size: ${(props) => props.theme.size.md};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 700;
  color: ${(props) => props.theme.color.primary};
`;

export const Background = styled.div`
  animation: ${slide} 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
`;

export const PathnameTitle = styled.span`
  font-size: ${(props) => props.theme.size.md};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.secondary};
`

export const PathnameContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${(props) => props.theme.color.primary};
  padding-block: 1px;
  padding-inline: 12px;
  margin-top: 2.4rem;
`
