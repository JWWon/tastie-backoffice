import styled from 'styled-components';

export const Header = styled.div`
  flex-direction: row;
  align-items: center;
  margin-bottom: 0.5rem;
`;

// text
export const Label = styled.h4``;

export const Add = styled(Label)`
  margin-left: auto;
  color: ${({theme}) => theme.color.blue};
  &:hover {
    cursor: pointer;
  }
`;
