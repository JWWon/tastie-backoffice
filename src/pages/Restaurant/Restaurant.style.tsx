import React from 'react';
import styled from 'styled-components';
import RawList, {ListProps} from 'antd/lib/list';

import {Restaurant} from '@model';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

// custom
export const List = styled(({pagination, ...props}: ListProps<Restaurant>) => (
  <RawList
    {...props}
    itemLayout="vertical"
    pagination={{
      ...pagination,
      size: 'small',
      pageSize: 12,
      simple: true,
    }}
  />
))`
  flex: 1;
`;
