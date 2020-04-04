import styled from 'styled-components';
import {Menu as RawMenu} from 'antd';

import {hover} from '@styles/mixins';

interface MenuProps {
  disabled?: boolean;
}

// div
const height = 20;
export const Container = styled.div`
  flex-direction: row;
  height: ${height}px;
  padding-left: 1rem;
  .ant-menu-vertical .ant-menu-submenu {
    padding: 0;
    .ant-menu-submenu-title {
      margin: 0;
      padding: 0 1rem;
      height: ${height}px;
      line-height: ${height}px;
    }
  }
`;

// text
export const MenuName = styled.h5<MenuProps>`
  color: ${({disabled, theme}) =>
    disabled ? theme.color.gray.light : theme.color.black.default};
`;

// ant design
export const Menu = styled(RawMenu).attrs({
  mode: 'vertical',
})`
  margin-left: auto;
`;

export const Item = styled(RawMenu.Item)<MenuProps>`
  ${({disabled}) => (disabled ? '' : hover)}
`;
