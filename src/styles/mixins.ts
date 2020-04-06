import {css} from 'styled-components';

export const hover = css`
  &:hover {
    cursor: pointer;
    background: ${({theme}) => theme.color.white.dark};
  }
`;

export const floatBox = css`
  background: ${({theme}) => theme.color.white.default};
  border: 1px solid ${({theme}) => theme.color.gray.light};
  border-radius: 0.25rem;
  box-shadow: 0px 2px 4px 2px ${({theme}) => theme.color.black.dim};
`;
