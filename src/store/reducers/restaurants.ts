import {createReducer} from 'typesafe-actions';
import produce from 'immer';
import includes from 'lodash/includes';

import {
  RestaurantsAction,
  getRestaurants,
  setCurrentId,
  clearCurrentId,
  setCurrentRange,
  getRestaurant,
  clearRestaurant,
  openEmptyRestaurant,
  setSelectedId,
  removeSelectedId,
} from '@store/actions/restaurants';
import {RestaurantShort, Restaurant} from '@model';

interface RestaurantsState {
  data: RestaurantShort[];
  currentRange: [number, number];
  // item
  currentItem?: Restaurant;
  // id
  selectedIds: string[];
  hoverId?: string;
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
    produce(state, (draft) => {
      draft.data = action.payload;
    }),
  )
  .handleAction(getRestaurant.success, (state, action) =>
    produce(state, (draft) => {
      draft.currentItem = action.payload;
    }),
  )
  .handleAction(setCurrentId, (state, action) =>
    produce(state, (draft) => {
      draft.hoverId = action.payload;
    }),
  )
  .handleAction(clearCurrentId, (state) =>
    produce(state, (draft) => {
      delete draft.hoverId;
    }),
  )
  .handleAction(setSelectedId, (state, action) =>
    produce(state, (draft) => {
      if (!includes(state.selectedIds, action.payload)) {
        draft.selectedIds.push(action.payload);
      }
    }),
  )
  .handleAction(removeSelectedId, (state, action) =>
    produce(state, (draft) => {
      const index = state.selectedIds.findIndex((id) => id === action.payload);
      draft.selectedIds.splice(index, 1);
    }),
  )
  .handleAction(setCurrentRange, (state, action) =>
    produce(state, (draft) => {
      const {page, pageSize} = action.payload;
      draft.currentRange = [
        (page - 1) * pageSize,
        Math.min(page * pageSize, state.data.length) - 1,
      ];
    }),
  )
  .handleAction(openEmptyRestaurant, (state) =>
    produce(state, (draft) => {
      draft.currentItem = {
        id: '',
        photoUrls: [],
        status: 'WAITING_FOR_REVIEW',
        name: '',
        address: '',
        categories: [],
        keywords: {
          popular_topic: {label: '인기 토픽', tags: []},
          facility: {label: '시설', tags: []},
          purpose: {label: '방문 목적', tags: []},
          atmosphere: {label: '분위기', tags: []},
        },
        menus: [],
        telephone: '',
        openingHours: [],
        coordinate: {latitude: 0, longitude: 0},
        description: '',
      };
    }),
  )
  .handleAction(clearRestaurant, (state) =>
    produce(state, (draft) => {
      delete draft.currentItem;
      delete draft.hoverId;
    }),
  );

export default restaruantsReducer;
