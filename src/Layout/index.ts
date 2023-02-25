import styled from 'styled-components';
import { rotate } from '../theme/animations';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23087e8b' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%230bb3c6' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23087985' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%230aa9bb' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23077480' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%230a9fb0' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23076f7a' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%230995a5' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23066a74' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23098c9b' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%2306656f' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23088290' points='943 900 1210 900 971 687'/%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

export const Container = styled.div`
  flex: 0 0 auto;
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
