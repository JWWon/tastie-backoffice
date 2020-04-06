import React from 'react';

import {ID} from '@utils/const';
import {Props} from './SideBar.type';
import * as s from './SideBar.style';

const SideBar: React.FC<Props> = ({headerComponent, bodyComponent}) => (
  <s.Container id={ID.SIDEBAR}>
    <s.HeaderArea>
      <s.Header>{headerComponent}</s.Header>
    </s.HeaderArea>

    <s.Body>{bodyComponent}</s.Body>
  </s.Container>
);

export default SideBar;
