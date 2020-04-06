import {createReducer} from 'typesafe-actions';
import produce from 'immer';

import {
  RestaurantsAction,
  getRestaurants,
  setCurrentId,
  clearCurrentId,
  setCurrentRange,
  getRestaurant,
  clearRestaurant,
} from '@store/actions/restaurants';
import {RestaurantShort, Restaurant} from '@model';

interface RestaurantsState {
  data: RestaurantShort[];
  currentRange: [number, number];
  // item
  currentItem?: Restaurant;
  // id
  selectedIds: string[];
  currentId?: string;
  // others
  error?: any;
}

const initState: RestaurantsState = {
  data: [],
  currentRange: [0, 11],
  selectedIds: [],
};

const restaruantsReducer = createReducer<RestaurantsState, RestaurantsAction>(
  initState,
)
  .handleAction(getRestaurants.success, (state, action) =>
    produce(state, draft => {
      draft.data = action.payload;
    }),
  )
  .handleAction(getRestaurant.success, (state, action) =>
    produce(state, draft => {
      draft.currentItem = action.payload;
    }),
  )
  .handleAction(setCurrentId, (state, action) =>
    produce(state, draft => {
      draft.currentId = action.payload;
    }),
  )
  .handleAction(clearCurrentId, state =>
    produce(state, draft => {
      delete draft.currentId;
    }),
  )
  .handleAction(setCurrentRange, (state, action) =>
    produce(state, draft => {
      const {page, pageSize} = action.payload;
      draft.currentRange = [
        (page - 1) * pageSize,
        Math.min(page * pageSize, state.data.length) - 1,
      ];
    }),
  )
  .handleAction(clearRestaurant, state =>
    produce(state, draft => {
      delete draft.currentItem;
      delete draft.currentId;
    }),
  );

export default restaruantsReducer;
