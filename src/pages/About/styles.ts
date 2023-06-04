import styled, { keyframes } from 'styled-components';
import { responsivity } from '../../Layout/responsivity';
import { animated } from '@react-spring/web';
import { float } from '../../theme/animations';

export const AboutProfileText = styled.span`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.greyDark};

  ${responsivity.us`
    font-size: 12px;
    font-weight: light;
  `}

  ${responsivity.xs`
    font-size: 16px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 22px;
  `}

  ${responsivity.md`
    font-size: 24px;
  `}
`;

export const AboutProfileTextTwo = styled.span`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.secondary};

  ${responsivity.us`
    font-size: 14px;
    font-weight: light;
  `}

  ${responsivity.xs`
    font-size: 18px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 22px;
  `}

  ${responsivity.md`
    font-size: 24px;
  `}
`;

export const AboutProfileTitle = styled.span`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.greyDark};

  ${responsivity.us`
    font-size: 25px;
  `}

  ${responsivity.ss`
    font-size: 29px;
  `}

  ${responsivity.xs`
    font-size: 34px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 40px;
  `}

  ${responsivity.md`
    font-size: 48px;
  `}
`;

export const AboutBox = styled.div<{ color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: fit-content;

  border-radius: 50px;
  background: ${(props) =>
    props.color ? props.color : 'linear-gradient(145deg, #363636, #404040)'};
  box-shadow: 10px 10px 50px #181818;
  margin: 0px 50px 0 50px;
  padding: 20px;

  z-index: 20;

  ${responsivity.us`
    width: 100%;
    marginInline: 10px;
  `}

  ${responsivity.ss`
    width: 100%;
  `}

  ${responsivity.xs`
    width: 100%;
  `}

  ${responsivity.sm`
    width: 100%;
  `}

  ${responsivity.md`
    width: 600px;
  `}
`;

export const InnerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #363636, #404040);
  border-radius: 50px;
  margin-bottom: -15px;
  color: white;
  font-family: 'Ubuntu';

  ${responsivity.us`
    width: 100%;
  `}

  ${responsivity.ss`
    width: 100%;
  `}

  ${responsivity.xs`
    width: 100%;
  `}

  ${responsivity.sm`
    width: 100%;
  `}

  ${responsivity.md`
    width: 100%;
  `}
`;

export const ReponsiveBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ReponsiveButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  row-gap: 10px;

  ${responsivity.us`
    margin-right: -40px;
  `}

  ${responsivity.md`
    margin-right: 0px;
  `}
`;

export const UserImage = styled(animated.img)`
  width: 180px;
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.color.primary};
  transform: translatey(0px);
  animation: ${float} 6s ease-in-out infinite;
  z-index: 23;
  :hover {
    cursor: pointer;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  .area {
    background: #3c3c3c;
    background: -webkit-linear-gradient(to left, #59d3e1, #087e8b);
    width: 100%;
    height: 96.2vh;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-line-clamp: none;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  @media (max-width: 480px) {
    .circles {
      display: none;
    }

    .circles li {
      display: none;
    }
  }

  .circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }

  .circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
  }

  .circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
  }

  .circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
  }

  .circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
  }

  .circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
  }

  .circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
  }

  .circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
  }

  .circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
  }

  .circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`;

export const BoxButton = styled.div<{ isActive: boolean; color?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Ubuntu';
  font-weight: 700;

  width: 60px;
  height: 60px;
  background-color: ${(props) => (props.color ? props.color : '#ffc55a')};
  border-radius: 50px;
  border: 1px solid white;
  z-index: 10;
  color: ${(props) => props.theme.color.primary};

  transition: all 0.4s ease-in-out;

  ${(props) =>
    props.isActive &&
    `
        background-color: #3C3C3C;
        transform: scale(1.1);
        color: ${props.color || '#fff'};
        border-color: ${props.color || '#ffc55a'};
    `}

  :hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.color.primary};
    border-color: ${(props) => (props.color ? props.color : '#ffc55a')};
    color: white;
    transform: scale(1.1);
  }

  ${responsivity.us`
    width: 40px;
    height: 40px;
  `}

  ${responsivity.ss`
    width: 45px;
    height: 45px;
  `}

  ${responsivity.xs`
    width: 50px;
    height: 50px;
  `}

  ${responsivity.sm`
    width: 60px;
    height: 60px;
  `}
`;
