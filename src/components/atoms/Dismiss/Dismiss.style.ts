import styled from 'styled-components';

export const Button = styled.div`
  margin: -${({theme}) => theme.space.rem.normal}rem;
  padding: ${({theme}) => theme.space.rem.normal}rem;
  &:hover {
    cursor: pointer;
  }
`;

export const Icon = styled.img.attrs({
  src: require('@assets/icon-back.svg'),
})`
  width: 12px;
  height: 10px;
  object-fit: contain;
`;
