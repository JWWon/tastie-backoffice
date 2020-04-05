import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {RestaurantShort} from '@model';
import {RootState} from '@store/reducers';
import {setCurrentId, clearCurrentId} from '@store/actions/restaurants';
import * as s from './RestaurantItem.style';

const RestaurantItem: React.FC<RestaurantShort> = data => {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState<boolean>(false);
  const {currentId} = useSelector((state: RootState) => state.restaurants);

  function handleMouseEnter() {
    dispatch(setCurrentId(data.id));
  }

  function handleMouseLeave() {
    dispatch(clearCurrentId());
  }

  useEffect(() => {
    setSelected(data.id === currentId);
  }, [data.id, currentId]);

  return (
    <s.Wrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      selected={selected}>
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
