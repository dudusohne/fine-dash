import styled from 'styled-components';
import { Github } from '@styled-icons/bootstrap/Github';
import { Home } from '@styled-icons/fluentui-system-filled/Home';
import { PersonFill } from '@styled-icons/bootstrap/PersonFill';
import { responsivity } from '../../Layout/responsivity';

export const MenuButtonContainer = styled.button<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 50px;
  margin-top: 2.1rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.color.secondary};
  border-radius: 8px;
  padding: 4px;
  border: 2px solid ${(props) => props.theme.color.primary};
  opacity: 0.9;

  :hover {
    cursor: pointer;
  }

  ${(props) =>
    props.isActive &&
    `
        background-color: #3C3C3C;
        border-color: #59d3e1;
        max-width: 60px;
        height: 60px;
        opacity: 1;
        box-shadow: 1px 4px 20px 0px rgba(0,0,0,0.61);
        -webkit-box-shadow: 1px 4px 20px 0px rgba(0,0,0,0.61);
        -moz-box-shadow: 1px 4px 20px 0px rgba(0,0,0,0.61);
    `}

  ${responsivity.us`
    height: 35px;
  `}

  ${responsivity.ss`
    height: 40px;
  `}

  ${responsivity.xs`
    height: 50px;
  `}

  ${responsivity.sm`
    height: 50px;
  `}
`;

export const GithubIcon = styled(Github)<{ isActive: boolean }>`
  color: ${(props) => props.theme.color.primary};
  transition: all 0.2s ease;

  ${(props) =>
    props.isActive &&
    `
        color: #59d3e1;
        width: 40px;
        ttransform: translateY(-2px);
    `}

  ${responsivity.us`
    width: 16px;
  `}

  ${responsivity.ss`
    width: 20px;
  `}

  ${responsivity.xs`
    width: 30px;
  `}
`;

export const HomeIcon = styled(Home)<{ isActive: boolean }>`
  color: ${(props) => props.theme.color.primary};

  ${(props) =>
    props.isActive &&
    `
        color: #59d3e1;
        width: 40px;
    `}
  ${responsivity.us`
    width: 16px;
  `}

  ${responsivity.ss`
    width: 20px;
  `}

  ${responsivity.xs`
    width: 30px;
  `}
`;

export const AboutIcon = styled(PersonFill)<{ isActive: boolean }>`
  color: ${(props) => props.theme.color.primary};

  ${(props) =>
    props.isActive &&
    `
        color: #59d3e1;
        width: 40px;
    `}
  ${responsivity.us`
    width: 16px;
  `}

  ${responsivity.ss`
    width: 20px;
  `}

  ${responsivity.xs`
    width: 30px;
  `}
`;

export const IconTitle = styled.span`
  font-size: 10px;
  font-weight: bold;
  margin-top: 5px;
  font-family: ${(props) => props.theme.fontFamily};
`;
