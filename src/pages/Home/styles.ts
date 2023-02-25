import styled from 'styled-components';
import { responsivity } from '../../Layout/responsivity';

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 95%;
  padding: 30px 12px 12px 12px;

  ${responsivity.us`
    padding: 15px 12px 12px 12px;
  `}

  ${responsivity.ss`
    padding: 20px 12px 12px 12px;
  `}

  ${responsivity.xs`
    padding: 20px 12px 12px 12px;
  `}

  ${responsivity.sm`
    padding: 30px 12px 12px 12px;
  `}
`;
