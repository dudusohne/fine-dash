import styled from 'styled-components';
import { responsivity } from '../../Layout/responsivity';

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
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
  color: ${(props) => props.theme.color.secondary};

  ${responsivity.us`
    font-size: 18px;
  `}

  ${responsivity.xs`
    font-size: 20px;
  `}

  ${responsivity.sm`
    font-size: 24px;
  `}

  ${responsivity.md`
    font-size: 30px;
  `}
`;

export const HomeWelcomeText = styled.h1`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.tertiary};

  ${responsivity.us`
    font-size: 26px;
  `}

  ${responsivity.xs`
    font-size: 24px;
  `}

  ${responsivity.sm`
    font-size: 26px;
  `}

  ${responsivity.md`
    font-size: 30px;
  `}
`;
