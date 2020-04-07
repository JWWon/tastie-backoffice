import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {RootState} from '@store/reducers';
import {clearRestaurant} from '@store/actions/restaurants';
import Fullscreen from '@components/templates/Fullscreen';
import Dismiss from '@components/atoms/Dismiss';
import * as s from './RestaurantEditor.style';

const RestaurantEditor: React.FC = () => {
  const dispatch = useDispatch();
  const {currentItem} = useSelector((state: RootState) => state.restaurants);

  return currentItem ? (
    <Fullscreen>
      <s.Header>
        <Dismiss onClick={() => dispatch(clearRestaurant())} />
        <s.Name>{currentItem.name}</s.Name>
        <s.Status status={currentItem.status} showLabel />
        <s.AlignRight>
          <s.Button danger>등록 취소</s.Button>
          <s.Button>저장</s.Button>
        </s.AlignRight>
      </s.Header>
    </Fullscreen>
  ) : null;
};

export default RestaurantEditor;
