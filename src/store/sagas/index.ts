import {all, fork} from 'redux-saga/effects';

import restaurantsRoot from './restaurants';

function* rootSaga() {
  yield all([fork(restaurantsRoot)]);
}

export default rootSaga;
