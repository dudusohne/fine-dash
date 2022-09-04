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
  border: 3px solid ${(props) => props.theme.fourthColor};
  border-radius: 3px;

  background-color: ${(props) => props.theme.secondaryColor};

  transform: transition;
  transition: all 0.6s ease;
  :hover {
    cursor: pointer;
    opacity: 0.9;
    background-color: ${(props) => props.theme.tertiaryColor};
    border-radius: 11px;
  }
`;

export const BoxTitle = styled.span`
  font-size: ${(props) => props.theme.md};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.tertiaryColor};
  font-weight: 700;
  ${Box}:hover & {
    color: ${(props) => props.theme.secondaryColor};
  }
`;

export const BoxDescription = styled.span`
  font-size: ${(props) => props.theme.sm};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 400;
`;
