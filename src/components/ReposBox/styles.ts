import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 6.7rem;
  max-width: 300px;
  min-width: 270px;
  margin-left: 1.4rem;
  margin-top: 1.2rem;
  padding: 3px;
  border: 3px solid ${(props) => props.theme.color.fourth};
  border-radius: 6px;

  background-color: ${(props) => props.theme.color.secondary};

  transform: transition;
  transition: all 0.6s ease;
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
  border-radius: 6px;

  padding: 2px;

  margin-top: 5px;
  ${Box}:hover & {
    background-color: ${(props) => props.theme.color.secondary};
  }
`;

export const BoxTitle = styled.span`
  font-size: ${(props) => props.theme.md};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.tertiary};
  font-weight: 700;
  ${Box}:hover & {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const BoxDescription = styled.span`
  font-size: ${(props) => props.theme.sm};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 400;
  color: #333;

  margin-top: 5px;
  ${Box}:hover & {
    color: ${(props) => props.theme.color.secondary};
  }
`;

export const BoxInfo = styled.span`
  font-size: 14px;
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 500;
  color: #333;

  margin-top: 5px;
  ${Box}:hover & {
    color: ${(props) => props.theme.color.tertiary};
  }
`;
