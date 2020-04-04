import {combineReducers} from 'redux';
import {StateType} from 'typesafe-actions';

import restaurants from './restaurants';

const rootReducer = combineReducers({restaurants});

export default rootReducer;

export type RootState = StateType<typeof rootReducer>;
