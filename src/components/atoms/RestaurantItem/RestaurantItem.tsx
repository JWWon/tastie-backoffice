import React from 'react';
import {useDispatch} from 'react-redux';

import {RestaurantShort} from '@model';
import {setCurrentId, clearCurrentId} from '@store/actions/restaurants';
import * as s from './RestaurantItem.style';

const RestaurantItem: React.FC<RestaurantShort> = data => {
  const dispatch = useDispatch();

  function handleMouseEnter() {
    dispatch(setCurrentId(data.id));
  }

  function handleMouseLeave() {
    dispatch(clearCurrentId());
  }

  return (
    <s.Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <s.Thumbnail src={data.photoUrl} />
      <s.Content>
        <s.ContentRow>
          <s.Status status={data.status} />
          <s.Name>{data.name}</s.Name>
        </s.ContentRow>
        <s.Info>{data.address}</s.Info>
        <s.Info>{data.categories.join(', ')}</s.Info>
      </s.Content>
    </s.Wrapper>
  );
};

export default RestaurantItem;
