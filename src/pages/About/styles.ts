import styled from 'styled-components';
import { animated } from '@react-spring/web';
import { float } from '../../theme/animations';
import { responsivity } from '../../hooks/useResponsivity';
import { Briefcase } from '@styled-icons/boxicons-solid/Briefcase';
import { PersonDashFill } from '@styled-icons/bootstrap';
import { ChevronDown } from '@styled-icons/entypo/ChevronDown';
import { ChevronUp } from '@styled-icons/entypo/ChevronUp';
import { PrimaryText } from '../../Layout/text';


export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.primary};
  height: 100vh;
`;

export const ReponsiveBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;

  ${responsivity.us`
    flex-direction: column;
  `}

  ${responsivity.sm`
    flex-direction: row;
  `}
`;

export const UserImage = styled(animated.img)`
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.color.primary};
  transform: translatey(0px);
  animation: ${float} 6s ease-in-out infinite;
  z-index: 23;
  :hover {
    cursor: pointer;
  }

  ${responsivity.us`
    width: 120px;
  `}

  ${responsivity.md`
    width: 180px;
  `}
`;

export const NameTitle = styled(PrimaryText)`
  color: ${(props) => props.theme.color.secondary};

  ${responsivity.us`
    font-size: 16px;
  `}

  ${responsivity.ss`
    font-size: 18px;
  `}
`

export const SectionTitle = styled.h1`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.secondary};
  letter-spacing: 1.8px;

  ${responsivity.us`
    font-size: 16px;
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
  color: ${(props) => props.theme.color.secondary};

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
    font-size: 18px;
  `}
`;

export const ItemDescription = styled.p`
  font-weight: 400;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.secondary};
  margin-left: 16px;

  ${responsivity.us`
    font-size: 14px;
    font-weight: light;
  `}

  ${responsivity.xs`
    font-size: 14px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 14px;
  `}

  ${responsivity.md`
    font-size: 16px;
  `}
`;

export const BarSkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4px;
  padding: 32px 24px;
 
  border-radius: 50px;
  background: linear-gradient(145deg, #363636, #404040);
  box-shadow:  20px 20px 60px #333333,
             -20px -20px 60px #454545;

  ${responsivity.us`
    width: 100%;
    flex-direction: row;
  `}

  ${responsivity.sm`
    max-width: 180px;
    flex-direction: column;
  `}
`

export const BarSkills = styled.span`
  font-weight: 500;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.fourth};
  letter-spacing: 1.4px;

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
  color: ${(props) => props.theme.color.fourthActive};

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

export const PersonListIcon = styled(PersonDashFill)`
  color: ${(props) => props.theme.color.fourthActive};

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
  color: ${(props) => props.theme.color.fourthActive};

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
  color: ${(props) => props.theme.color.fourthActive};

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

export const MenuContainer = styled.div`
  &:nth-child(1) {
    border-bottom: 1px solid ${(props) => props.theme.color.greyDark};
    padding-bottom: 16px;
  }
`

export const AboutMenuButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 8px;
  border: none;
  background: none;
  width: 100%;

  :hover {
    cursor: pointer;
    opacity: 0.8;
  }
`

export const ScreenCentralized = styled.div`
  display: flex;
  flex-direction: column;
  height: 93vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

