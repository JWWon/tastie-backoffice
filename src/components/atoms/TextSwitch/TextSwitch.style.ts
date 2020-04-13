import styled from 'styled-components';

interface SwitchProps {
  checked: boolean;
}

export const Switch = styled.h4<SwitchProps>`
  color: ${({checked, theme}) =>
    checked ? theme.color.blue : theme.color.gray.light};
  &:hover {
    cursor: pointer;
  }
`;
