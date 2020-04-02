import React from 'react';

import * as s from './SideBar.style';

const SideBar: React.FC = ({children}) => (
  <s.Container>
    <s.HeaderArea>
      <s.Header />
    </s.HeaderArea>
    <s.ContentWrapper>{children}</s.ContentWrapper>
  </s.Container>
);

export default SideBar;
