import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const LanguageChip = styled(animated.div)`
  display: flex;
  width: fit-content;
  padding: 5px;
  background-color: ${(props) => props.theme.color.fourth};
  border-radius: 6px;
  border: 2px solid ${(props) => props.theme.color.tertiary};
  margin-top: 5px;
`;

export const LanguageText = styled.span`
  font-size: ${(props) => props.theme.size.sm};
  color: ${(props) => props.theme.color.secondary};
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 500;
`;
