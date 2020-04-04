import {createReducer} from 'typesafe-actions';
import produce from 'immer';

import {
  RestaurantsAction,
  getRestaurants,
  setCurrentId,
  clearCurrentId,
  setCurrentRange,
} from '@store/actions/restaurants';
import {RestaurantShort} from '@model';

interface RestaurantsState {
  data: RestaurantShort[];
  currentRange: [number, number];
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
  );

export default restaruantsReducer;
