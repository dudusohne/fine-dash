import { animated } from '@react-spring/web';
import styled from 'styled-components';
import { responsivity } from '../../hooks/useResponsivity';

export const TimeContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 300px;
  height: 100px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.color.greyLight};
  padding: 6px;

  ${responsivity.us`
    width: 200px;
    height: 100px;
    padding: 0px;
    margin-top: 0;
  `}

  ${responsivity.ss`
    width: 120px;
    height: 100px;
    padding: 0px;
    margin-top: 0;
  `}

  ${responsivity.xs`
    width: 200px;
    height: 100px;
    padding: 0px;
    margin-top: 0;
  `}
`;
