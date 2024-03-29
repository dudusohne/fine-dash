import styled from 'styled-components';
import { GithubSquare } from '@styled-icons/fa-brands/GithubSquare';
import { responsivity } from '../../hooks/useResponsivity';

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
    width: 45px;
  `}
`;

export const BottomButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  padding: 30px 10px 10px 10px;
  background-color: ${(props) => props.theme.color.white};
  margin-top: -1rem;
  transition: all 0.2s ease-in-out;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.color.primary};
  opacity: 0.9;

  :hover {
    background-color: ${(props) => props.theme.color.tertiary};
    cursor: pointer;
  }
`;
