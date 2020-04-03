/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Link, withRouter, RouteComponentProps} from 'react-router-dom';
import {Layout, Menu} from 'antd';

import DrawerItem from '@components/atoms/DrawerItem';
import {ROUTE} from '@utils/const';
import * as s from './BaseView.style';

const {SubMenu} = Menu;

const menus = [
  {
    title: '위치',
    items: [
      {
        icon: require('@assets/icon-map.svg'),
        name: '맛집',
        route: ROUTE.RESTAURANT,
      },
      {
        icon: require('@assets/icon-profile.svg'),
        name: '사용자',
        route: ROUTE.USER,
      },
    ],
  },
  {title: '사용자 이벤트', items: []},
  {title: '알림', items: []},
];
const items = menus.map(menu => menu.items).flat();

const BaseView: React.FC<RouteComponentProps> = ({children, history}) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);

  function handleSelectKey(pathname: string) {
    for (const item of items) {
      if (item.route === pathname) {
        setSelectedKeys([item.name]);
        break;
      }
    }
  }

  useEffect(() => {
    handleSelectKey(window.location.pathname);

    const unlisten = history.listen(location =>
      handleSelectKey(location.pathname),
    );
    return unlisten;
  }, []);

  return (
    <s.Container>
      <s.DrawerBar trigger={null}>
        <s.LogoWrapper>
          <Link to={menus[0].items[0].route}>
            <s.Logo />
          </Link>
        </s.LogoWrapper>
        <s.DrawerMenu
          selectedKeys={selectedKeys}
          defaultOpenKeys={[menus[0].title]}>
          {menus.map(menu => (
            <SubMenu key={menu.title} title={<h2>{menu.title}</h2>}>
              {menu.items.map(item => (
                <Menu.Item key={item.name}>
                  <DrawerItem {...item} />
                </Menu.Item>
              ))}
            </SubMenu>
          ))}
        </s.DrawerMenu>
        {/* <s.FooterWrapper>
          <s.CollapseButton>
            <s.CollapseIcon />
          </s.CollapseButton>
        </s.FooterWrapper> */}
      </s.DrawerBar>

      <Layout>{children}</Layout>
    </s.Container>
  );
};

export default withRouter(BaseView);
