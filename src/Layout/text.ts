import styled from 'styled-components';
import { responsivity } from './responsivity';

export const PrimaryText = styled.span`
  font-size: 20px;
  font-weight: bold;
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.color.primary};

  ${responsivity.us`
    font-size: 8px;
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

  ${responsivity.xs`
    font-size: 12px;
  `}

  ${responsivity.sm`
    font-size: 14px;
  `}

  ${responsivity.md`
    font-size: 16px;
  `}
`;
