import { css } from 'styled-components';

interface Breakpoint {
  label: string;
  min: string;
}

const breakpoints: Breakpoint[] = [
  { label: 'us', min: '0px' },
  { label: 'ss', min: '390px' },
  { label: 'xs', min: '480px' },
  { label: 'sm', min: '600px' },
  { label: 'md', min: '820px' },
  { label: 'lg', min: '992px' },
];

export const responsivity: Record<Breakpoint['label'], typeof css> =
  breakpoints.reduce((accumulator, { label, min }) => {
    //@ts-ignore
    accumulator[ label ] = (...args: Parameters<typeof css>) => css`
      @media (min-width: ${min}) {
        ${css(...args)};
      }
    `;
    return accumulator;
  }, {} as Record<Breakpoint['label'], typeof css>);
