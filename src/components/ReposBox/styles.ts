import styled from "styled-components";

export const BoxTitle = styled.span`
  font-size: 16px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  background-color: #888888;

  height: 2rem;
  max-width: 300px;

  ${BoxTitle}:hover & {
    fill: rebeccapurple;
  }
`;

export const BoxDescription = styled.span`
  font-size: 12px;
`;
