import styled from 'styled-components';
import {Layout, Menu} from 'antd';

const INDENT = 16;

export const Container = styled(Layout)`
  flex: 1;
`;

export const DrawerBar = styled(Layout.Sider).attrs({
  trigger: null,
  collapsedWidth: 80,
})`
  flex: 1;
  background: ${({theme}) => theme.color.white};
`;

export const LogoWrapper = styled.div`
  height: ${({theme}) => theme.size.header}px;
  padding: 0 ${INDENT}px;
  justify-content: center;
  border: 0px solid ${({theme}) => theme.color.gray.light};
  border-bottom-width: 1px;
`;

export const Logo = styled.img.attrs({
  src: require('@assets/tastie-logo.svg'),
})`
  max-width: 4.375rem; /* 70px */
  height: 2.25rem; /* 36px */
  object-fit: contain;
`;

export const DrawerMenu = styled(Menu).attrs({
  inlineIndent: INDENT,
  mode: 'inline',
})`
  .ant-menu-item-selected {
    h3 {
      color: ${({theme}) => theme.color.blue};
    }
    img {
      fill: ${({theme}) => theme.color.blue};
    }
  }
`;

export const SubMenu = styled(Menu.SubMenu)`
  padding: 0 ${INDENT}px;
`;

// handle collapse action

export const FooterWrapper = styled.div`
  margin-top: auto;
  height: ${({theme}) => theme.size.footer}px;
  justify-content: center;
  align-items: flex-end;
  padding: 0 ${INDENT}px;
  border: 0px solid ${({theme}) => theme.color.gray.light};
  border-top-width: 1px;
`;

export const CollapseButton = styled.div`
  height: 100%;
  justify-content: center;
  margin: 0 -1rem;
  padding: 0 1rem;
`;

export const CollapseIcon = styled.img.attrs({
  src: require('@assets/icon-arrow.svg'),
})`
  width: 0.75rem;
  object-fit: contain;
  transition: all ease 0.4s;
`;
