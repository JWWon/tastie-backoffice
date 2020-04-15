import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import includes from 'lodash/includes';

import {RestaurantShort} from '@model';
import {RootState} from '@store/reducers';
import {
  setCurrentId,
  clearCurrentId,
  getRestaurant,
  removeSelectedId,
  setSelectedId,
} from '@store/actions/restaurants';
import Status from '@components/atoms/Status';
import * as s from './RestaurantItem.style';

const RestaurantItem: React.FC<RestaurantShort> = (data) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState<boolean>(false);
  const [selected, setSelected] = useState<boolean>(false);
  const {hoverId, selectedIds} = useSelector(
    (state: RootState) => state.restaurants,
  );

  function handleMouseEnter() {
    dispatch(setCurrentId(data.id));
  }

  function handleMouseLeave() {
    dispatch(clearCurrentId());
  }

  function handleClick() {
    dispatch(getRestaurant.request(data.id));
  }

  function handleSelect(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.stopPropagation();
    if (selected) dispatch(removeSelectedId(data.id));
    else dispatch(setSelectedId(data.id));
  }

  useEffect(() => setHover(data.id === hoverId), [data.id, hoverId]);
  useEffect(() => setSelected(includes(selectedIds, data.id)), [
    data.id,
    selectedIds,
  ]);

  return (
    <s.Wrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      selected={selected || hover}>
      <s.Thumbnail src={data.photoUrl} onClick={handleSelect}>
        {selected && (
          <s.Selected>
            <s.CheckIcon />
          </s.Selected>
        )}
      </s.Thumbnail>
      <s.Content>
        <s.ContentRow>
          <Status status={data.status} />
          <s.Name>{data.name}</s.Name>
        </s.ContentRow>
        <s.Info>{data.address}</s.Info>
        <s.Info>{data.categories.join(', ')}</s.Info>
      </s.Content>
    </s.Wrapper>
  );
};

export default RestaurantItem;
