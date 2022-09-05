import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem 0 2rem;
  position: sticky;
  top: 0;
  height: 4vh;
  background-color: ${(props) => props.theme.color.tertiary};
  border-bottom: 6px solid ${(props) => props.theme.color.primary};
  z-index: 10;
`;
