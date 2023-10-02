import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { float } from '../../theme/animations';
import { responsivity } from '../../hooks/useResponsivity';
import { Briefcase } from '@styled-icons/boxicons-solid/Briefcase';
import { ChevronDown } from '@styled-icons/entypo/ChevronDown';
import { ChevronUp } from '@styled-icons/entypo/ChevronUp';


export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ReponsiveBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;

  ${responsivity.ss`
    flex-direction: column;
  `}

  ${responsivity.md`
    flex-direction: row;
  `}
`;

export const UserImage = styled(animated.img)`
  width: 180px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.color.primary};
  transform: translatey(0px);
  /* animation: ${float} 6s ease-in-out infinite; */
  z-index: 23;
  :hover {
    cursor: pointer;
  }
`;

export const ScreenCentralized = styled.div`
  display: flex;
  flex-direction: column;
  height: 93vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const SectionTitle = styled.h1`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.fourth};
  letter-spacing: 1.8px;

  ${responsivity.us`
    font-size: 12px;
    font-weight: light;
  `}

  ${responsivity.xs`
    font-size: 18px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 20px;
  `}

  ${responsivity.md`
    font-size: 22px;
  `}
`;

export const ItemTitle = styled.span`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.primary};

  ${responsivity.us`
    font-size: 8px;
    font-weight: light;
  `}

  ${responsivity.xs`
    font-size: 12px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 16px;
  `}

  ${responsivity.md`
    font-size: 18px;
  `}
`;

export const ItemDescription = styled.p`
  font-weight: 400;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.primary};
  margin-left: 16px;

  ${responsivity.us`
    font-size: 8px;
    font-weight: light;
  `}

  ${responsivity.xs`
    font-size: 12px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 14px;
  `}

  ${responsivity.md`
    font-size: 16px;
  `}
`;

export const BarSkills = styled.span`
  font-weight: 500;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.fourth};

  ${responsivity.us`
    font-size: 8px;
    font-weight: light;
  `}

  ${responsivity.xs`
    font-size: 12px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 14px;
  `}

  ${responsivity.md`
    font-size: 16px;
  `}
`;

export const BriefcaseIcon = styled(Briefcase)`
  color: ${(props) => props.theme.color.fourth};

  ${responsivity.us`
    width: 20px;
  `}

  ${responsivity.ss`
    width: 25px;
  `}

  ${responsivity.xs`
    width: 30px;
  `}
`;

export const ChevronDownIcon = styled(ChevronDown)`
  color: ${(props) => props.theme.color.fourth};

  ${responsivity.us`
    width: 20px;
  `}

  ${responsivity.ss`
    width: 25px;
  `}

  ${responsivity.xs`
    width: 30px;
  `}
`;

export const ChevronUpIcon = styled(ChevronUp)`
  color: ${(props) => props.theme.color.fourth};

  ${responsivity.us`
    width: 20px;
  `}

  ${responsivity.ss`
    width: 25px;
  `}

  ${responsivity.xs`
    width: 30px;
  `}
`;

export const AboutMenuButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 8px;
  border: none;
  background: none;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`
