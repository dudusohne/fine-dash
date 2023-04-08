import styled from 'styled-components';
import { responsivity } from '../../Layout/responsivity';
import { GithubSquare } from '@styled-icons/fa-brands/GithubSquare';
import Talk from '../../components/Svg/Talk';

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
    font-size: 17px;
  `}

  ${responsivity.ss`
    font-size: 18px;
  `}

  ${responsivity.xs`
    font-size: 22px;
  `}

  ${responsivity.sm`
    font-size: 29.5px;
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

export const HomeTitleBIG = styled.strong`
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
    font-size: 38px;
  `}
`;

export const GithubREPO = styled(GithubSquare)`
  color: black;

  ${responsivity.us`
    width: 40px;
  `}

  ${responsivity.ss`
    width: 40px;
  `}

  ${responsivity.xs`
    width: 40px;
  `}
`;

export const StyledTalk = styled(Talk)`
  width: 20px;
  height: 20px;

  ${responsivity.us`
    width: 1px;
    height: 1px;
  `}

  ${responsivity.ss`
    width: 1px;
    height: 1px;
  `}

  ${responsivity.xs`
   width: 1px;
    height: 1px;
  `}
`;
