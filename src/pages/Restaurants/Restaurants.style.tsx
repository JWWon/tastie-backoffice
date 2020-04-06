import React from 'react';
import styled from 'styled-components';
import RawList, {ListProps} from 'antd/lib/list';

import {RestaurantShort} from '@model';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const GoogleMap = styled.div`
  flex: 1;
`;

// custom
export const List = styled(
  ({pagination, ...props}: ListProps<RestaurantShort>) => (
    <RawList
      {...props}
      itemLayout="vertical"
      pagination={{
        ...pagination,
        size: 'small',
        simple: true,
      }}
    />
  ),
)`
  flex: 1;
`;
