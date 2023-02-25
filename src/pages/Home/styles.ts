import styled from 'styled-components';
import { responsivity } from '../../Layout/responsivity';

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 95%;
  padding: 30px 12px 12px 12px;

  ${responsivity.us`
    flex-direction: row;
    justify-content: space-between;
  `}

  ${responsivity.ss`
    flex-direction: row;
  `}

  ${responsivity.xs`
  `}

  ${responsivity.sm`
  `}
`;

export const HomeTitleText = styled.span`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.primary};

  ${responsivity.us`
    font-size: 16px;
    font-weight: light;
  `}

  ${responsivity.xs`
    font-size: 16px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 16px;
  `}

  ${responsivity.md`
    font-size: 20px;
  `}
`;
