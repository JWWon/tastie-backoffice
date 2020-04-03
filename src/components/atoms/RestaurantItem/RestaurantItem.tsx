import React from 'react';

import {Restaurant} from '@model';
import * as s from './RestaurantItem.style';

const RestaurantItem: React.FC<Restaurant> = data => (
  <s.Wrapper>
    <s.Thumbnail src={data.photoUrl} />
    <s.Content>
      <s.ContentRow>
        <s.Status status={data.status} />
        <s.Name>{data.name}</s.Name>
      </s.ContentRow>
      <s.Info>{data.address}</s.Info>
      <s.Info>{data.tags.join(', ')}</s.Info>
    </s.Content>
  </s.Wrapper>
);

RestaurantItem.defaultProps = {
  status: 'PENDING',
};

export default RestaurantItem;
