import styled from 'styled-components';

const size = 36;
export const Button = styled.div`
  width: ${size}px;
  height: ${size}px;
  border-radius: ${size / 2}px;

  border: 1px solid ${({theme}) => theme.color.gray.dark};
`;
