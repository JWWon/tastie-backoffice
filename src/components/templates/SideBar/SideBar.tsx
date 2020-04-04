import React from 'react';

import {Props} from './SideBar.type';
import * as s from './SideBar.style';

const SideBar: React.FC<Props> = ({
  headerComponent,
  bodyComponent,
  menuItems,
}) => (
  <s.Container>
    <s.HeaderArea>
      <s.Header>{headerComponent}</s.Header>
    </s.HeaderArea>

    <s.Body>{bodyComponent}</s.Body>

    {menuItems && (
      <s.BodyMenu>
        {menuItems.map(item => (
          <s.MenuItem
            key={item.name}
            disabled={item.disabled}
            onClick={item.disabled ? undefined : item.onClick}>
            <s.MenuName disabled={item.disabled}>{item.name}</s.MenuName>
          </s.MenuItem>
        ))}
      </s.BodyMenu>
    )}
  </s.Container>
);

export default SideBar;
