import styled from 'styled-components';
import { responsivity } from '../hooks/useResponsivity';

export const PrimaryText = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.primary};

  ${responsivity.us`
    font-size: 12px;
    font-weight: light;
  `}

  ${responsivity.xs`
    font-size: 14px;
    font-weight: light;
  `}

  ${responsivity.sm`
    font-size: 16px;
  `}

  ${responsivity.md`
    font-size: 20px;
  `}
`;

export const SecundaryText = styled.span`
  font-size: 18px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.greyDark};

  ${responsivity.us`
    font-size: 12px;
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
    font-size: 18px;
  `}
`;

export const PText = styled.span`
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.greyDark};

  ${responsivity.us`
    font-size: 10px;
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
