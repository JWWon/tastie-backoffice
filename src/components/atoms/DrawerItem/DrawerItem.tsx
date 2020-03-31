import React from 'react';
import {Link} from 'react-router-dom';

import {Props} from './DrawerItem.type';
import * as s from './DrawerItem.style';

const DrawerItem: React.FC<Props> = ({icon, name, route, ...option}) => (
  <Link to={route}>
    <s.Wrapper {...option}>
      <s.Icon src={icon} />
      <s.Name>{name}</s.Name>
    </s.Wrapper>
  </Link>
);

export default DrawerItem;
