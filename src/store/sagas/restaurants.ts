import {put, takeEvery} from 'redux-saga/effects';
import {getRestaurants} from '@store/actions/restaurants';
import _ from 'lodash';

import {RestaurantShort} from '@model';

function* getRestaurantsSaga() {
  try {
    const dummyData: RestaurantShort[] = _.range(1000).map(idx => ({
      id: idx.toString(),
      photoUrl: 'https://picsum.photos/200',
      status: Math.random() < 0.5 ? 'ACTIVE' : 'WAITING_FOR_REVIEW',
      name: `맛집_${idx}`,
      address: '서울특별시 이태원로 22 국방부 4274부대',
      categories: ['코로나19', '자가격리', '방콕중'],
      coordinate: {
        latitude: 37.555693 + Math.random() * 0.02 - 0.01,
        longitude: 126.936632 + Math.random() * 0.02 - 0.01,
      },
    }));

    yield put(getRestaurants.success(dummyData));
  } catch (e) {
    yield put(getRestaurants.failure());
  }
}

export default function*() {
  yield takeEvery(getRestaurants.request, getRestaurantsSaga);
}
