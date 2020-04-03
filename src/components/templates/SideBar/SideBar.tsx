import React from 'react';

import {Props} from './SideBar.type';
import * as s from './SideBar.style';

const SideBar: React.FC<Props> = ({headerComponent, bodyComponent}) => (
  <s.Container>
    <s.HeaderArea>
      <s.Header>{headerComponent}</s.Header>
    </s.HeaderArea>
    <s.Body>{bodyComponent}</s.Body>
  </s.Container>
);

export default SideBar;
