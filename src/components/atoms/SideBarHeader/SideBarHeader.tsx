import React from 'react';
import {Menu} from 'antd';
import {SettingOutlined} from '@ant-design/icons';

import * as s from './SideBarHeader.style';
import {Props} from './SideBarHeader.type';

const ListHeader: React.FC<Props> = ({total, items, selected, onClick}) => (
  <s.Container>
    <h3>
      전체 ({total}개){selected ? ` / 선택 (${selected}개)` : ''}
    </h3>
    <s.Menu onClick={onClick}>
      <Menu.SubMenu key="option" title={<SettingOutlined />}>
        {items.map((item) => (
          <s.Item key={item.key} disabled={item.disabled}>
            <s.MenuName disabled={item.disabled}>{item.name}</s.MenuName>
          </s.Item>
        ))}
      </Menu.SubMenu>
    </s.Menu>
  </s.Container>
);

export default ListHeader;
