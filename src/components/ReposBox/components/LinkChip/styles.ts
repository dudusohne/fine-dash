import styled from "styled-components";
import { Box } from "../../styles";

export const LinkChip = styled.div`
  display: flex;
  padding: 4px;
  background-color: ${(props) => props.theme.color.primary};
  border-radius: 4px;
  margin-top: 5px;
`;

export const LinkText = styled.a`
  font-size: ${(props) => props.theme.size.sm};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.secondary};
  ${Box}:hover & {
    color: ${(props) => props.theme.color.fourth};
  }
`;
