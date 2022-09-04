import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;

  height: 3rem;

  background-color: ${(props) => props.theme.tertiaryColor};
`;
