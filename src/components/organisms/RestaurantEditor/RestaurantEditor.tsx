import React from 'react';
import {useSelector} from 'react-redux';

import {RootState} from '@store/reducers';
import Fullscreen from '@components/templates/Fullscreen';
import * as s from './RestaurantEditor.style';

const RestaurantEditor: React.FC = () => {
  const {currentItem} = useSelector((state: RootState) => state.restaurants);

  return currentItem ? (
    <Fullscreen>
      <s.Container />
    </Fullscreen>
  ) : null;
};

export default RestaurantEditor;
