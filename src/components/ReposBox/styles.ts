import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 6.7rem;
  max-width: 270px;
  min-width: 270px;
  margin-left: 1.4rem;
  margin-top: 1.2rem;
  padding: 3px;
  border: 3px solid ${(props) => props.theme.color.fourth};
  border-radius: 6px;
  background-color: ${(props) => props.theme.color.secondary};
  transform: transition;
  transition: all 0.6s ease;
  box-shadow: -1px 7px 5px -2px rgba(0, 0, 0, 0.26);
  -webkit-box-shadow: -1px 7px 5px -2px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: -1px 7px 5px -2px rgba(0, 0, 0, 0.26);
  :hover {
    cursor: pointer;
    opacity: 0.9;
    background-color: ${(props) => props.theme.color.tertiary};
    border-radius: 11px;
  }
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.tertiary};
  border: 1px solid ${(props) => props.theme.color.fourth};
  border-radius: 2px;
  padding: 2px;
  margin-top: 5px;
  height: fit-content;
  justify-content: center;
  ${Box}:hover & {
    background-color: ${(props) => props.theme.color.secondary};
  }
`;

export const BoxTitle = styled.span`
  font-size: ${(props) => props.theme.size.md};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.tertiary};
  font-weight: 800;
  ${Box}:hover & {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const BoxDescription = styled.span`
  font-size: ${(props) => props.theme.size.sm};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 500;
  color: ${(props) => props.theme.color.primary};
  ${Box}:hover & {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const BoxInfo = styled.span`
  font-size: 14px;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 500;
  color: ${(props) => props.theme.color.secondary};
  margin-top: 5px;
  transform: transition;
  transition: all 0.6s ease;
  ${Box}:hover & {
    color: ${(props) => props.theme.color.fourth};
  }
`;

export const Divider = styled.hr`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.color.fourth};
  ${Box}:hover & {
    border-color: ${(props) => props.theme.color.secondary};
  }
`;
