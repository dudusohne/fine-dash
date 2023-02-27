import styled from 'styled-components';
import { float, slide } from '../../theme/animations';
import { animated } from '@react-spring/web';
import { responsivity } from '../../Layout/responsivity';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${(props) => props.theme.color.tertiary};
  border-bottom: 6px solid ${(props) => props.theme.color.primary};
  z-index: 30;

  ${responsivity.us`
    padding: 0 10px 0 10px;
    height: 5.9vh;
  `}

  ${responsivity.ss`
    padding: 0 12px 0 12px;
    height: 5.9vh;
  `}

  ${responsivity.xs`
    padding: 0 1rem 0 1rem;
    height: 5vh;
  `}

  ${responsivity.sm`
    padding: 0 3rem 0 3rem;
    height: 5vh;
  `}

  ${responsivity.md`
    padding: 0 3.9rem 0 3.9rem;
    height: 5vh;
  `}
`;

export const UserImage = styled(animated.img)`
  width: 50px;
  border-radius: 50%;
  margin-top: 40px;
  border: 2px solid ${(props) => props.theme.color.primary};
  transform: translatey(0px);
  animation: ${float} 6s ease-in-out infinite;
  z-index: 23;
  :hover {
    cursor: pointer;
  }
`;

export const UserName = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 700;
  color: ${(props) => props.theme.color.primary};
  margin-right: 10px;

  ${responsivity.us`
    font-size: 13px;
    font-weight: light;
    margin-top: 18px;
  `}

  ${responsivity.ss`
    font-size: 13px;
    font-weight: light;
    margin-top: 18px;
  `}

  ${responsivity.xs`
    font-size: 13px;
    font-weight: light;
    margin-top: 20px;
  `}

  ${responsivity.sm`
    font-size: 16px;
  `}

  ${responsivity.md`
    font-size: 20px;
  `}
`;

export const JobTitle = styled.span`
  font-family: ${(props) => props.theme.fontFamily};
  font-weight: 700;
  color: white;

  ${responsivity.us`
    font-size: 8px;
    font-weight: light;
  `}

  ${responsivity.xs`
    font-size: 10px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 12px;
  `}

  ${responsivity.md`
    font-size: 14px;
  `}
`;

export const Background = styled.div`
  animation: ${slide} 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, #6c3 50%, #09f 50%);
`;

export const PathnameTitle = styled.span`
  font-size: ${(props) => props.theme.size.md};
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.secondary};

  ${responsivity.us`
    font-size: 14px;
    font-weight: light;
  `}

  ${responsivity.ss`
    font-size: 14px;
    font-weight: light;
  `}

  ${responsivity.xs`
    font-size: 16px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 20px;
  `}

  ${responsivity.md`
    font-size: 22px;
  `}
`;

export const PathnameContainer = styled(animated.div)`
  display: flex;
  flex-direction: row;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 16px;
  background-color: ${(props) => props.theme.color.primary};
  padding-block: 1px;
  padding-inline: 12px;
  margin-top: 2.4rem;
  width: fit-content;

  ${responsivity.us`
    display: flex;
    margin-top: 2.7rem;
  `}

  ${responsivity.ss`
    display: flex;
    margin-top: 3rem;
  `}
`;
