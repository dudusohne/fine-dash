//@ts-nocheck
import { css } from 'styled-components';

const breakpoints: any = {
  us: '0px',
  ss: '390px',
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1200px',
};

export const responsivity: any = Object.keys(breakpoints).reduce(
  (accumulator: any, label: any) => {
    accumulator[label] = (...args: any) => css`
      @media (min-width: ${breakpoints[label]}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  },
  {}
);
