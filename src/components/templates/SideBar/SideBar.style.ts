import styled from 'styled-components';
import {floatBox} from '@styles/mixins';

// div
export const Container = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: ${({theme}) => theme.space.rem.normal}rem;
  bottom: ${({theme}) => theme.space.rem.normal}rem;

  min-width: ${({theme}) => theme.size.sidebar.width}px;
`;

export const HeaderArea = styled.div`
  height: ${({theme}) => theme.size.header}px;
  padding: ${({theme}) => theme.space.rem.narrow}rem 0;
`;

export const Header = styled.div`
  flex: 1;
  padding: 0 ${({theme}) => theme.space.rem.normal}rem;
  ${floatBox}
`;

export const Body = styled.div`
  flex: 1;
  ${floatBox}
`;
