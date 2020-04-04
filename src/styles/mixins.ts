import {css} from 'styled-components';

export const hover = css`
  &:hover {
    cursor: pointer;
    background: ${({theme}) => theme.color.white.dark};
  }
`;
