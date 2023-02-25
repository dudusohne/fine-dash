import { animated } from '@react-spring/web';
import styled from 'styled-components';

export const TimeContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;
  height: 100px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.color.greyLight};
  padding: 6px;

  margin-top: 1rem;

  @media screen and (max-width: 420px) {
    width: 200px;
    height: 100px;
    padding: 0px;
    margin-top: 0;
  }
`;
