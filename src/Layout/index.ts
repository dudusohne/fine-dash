import styled from 'styled-components';
import { rotate } from '../theme/animations';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Divider = styled.hr<{ color?: string }>`
  width: 100%;
  border-top: 1px solid
    ${(props) => (props.color ? `${props.color}` : props.theme.color.primary)};
`;

export const Spinner = styled.div`
  width: 90px;
  height: 90px;
  border: 8px solid ${(props) => props.theme.color.primary};
  border-top: 8px solid white;
  border-radius: 50%;
  transition-property: transform;
  animation-name: ${rotate};
  animation-duration: 1.2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-top: 30vh;
`;
