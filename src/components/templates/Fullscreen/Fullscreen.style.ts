import styled from 'styled-components';

import {floatBox} from '@styles/mixins';
import {ID} from '@utils/const';

const sideBarWidth = document.getElementById(ID.SIDEBAR)?.offsetWidth;

export const Container = styled.div`
  position: absolute;
  top: ${({theme}) => theme.size.header}px;
  bottom: ${({theme}) => theme.space.rem.normal}rem;
  right: ${({theme}) => theme.space.rem.normal}rem;
  left: ${({theme}) => sideBarWidth || theme.size.sidebar.width}px;
  margin-left: ${({theme}) => theme.space.rem.normal * 2}rem;

  ${floatBox}
`;
