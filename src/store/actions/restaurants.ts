import {createAsyncAction, ActionType, createAction} from 'typesafe-actions';

import {RestaurantShort} from '@model';

// GET_RESTAURANTS
export const GET_RESTAURANTS_REQUEST = '@restaurants/GET_RESTAURANTS_REQUEST';
export const GET_RESTAURANTS_SUCCESS = '@restaurants/GET_RESTAURANTS_SUCCESS';
export const GET_RESTAURANTS_FAILURE = '@restaurants/GET_RESTAURANTS_FAILURE';

export const getRestaurants = createAsyncAction(
  GET_RESTAURANTS_REQUEST,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILURE,
)<undefined, RestaurantShort[], undefined>();
// END GET_RESTAURANTS

// SET_CURRENT_ID
export const SET_CURRENT_ID = '@restaurants/SET_CURRENT_ID';

export const setCurrentId = createAction(
  SET_CURRENT_ID,
  (payload: string) => payload,
)();
// END SET_CURRENT_ID

// CLEAR_CURRENT_ID
export const CLEAR_CURRENT_ID = '@restaurants/CLEAR_CURRENT_ID';

export const clearCurrentId = createAction(CLEAR_CURRENT_ID)();
// END CLEAR_CURRENT_ID

// SET_CURRENT_RANGE
interface SetCurrentPage {
  page: number;
  pageSize: number;
}
export const SET_CURRENT_RANGE = '@restaurants/SET_CURRENT_RANGE';

export const setCurrentRange = createAction(
  SET_CURRENT_RANGE,
  (payload: SetCurrentPage) => payload,
)();
// END SET_CURRENT_RANGE

const actions = {
  // async
  getRestaurants,
  // sync
  setCurrentId,
  clearCurrentId,
  setCurrentRange,
};

export type RestaurantsAction = ActionType<typeof actions>;
