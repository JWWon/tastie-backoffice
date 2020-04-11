import {put, takeEvery, select} from 'redux-saga/effects';
import {getRestaurants, getRestaurant} from '@store/actions/restaurants';
import _ from 'lodash';

import {RestaurantShort, Restaurant} from '@model';
import {RootState} from '@store/reducers';

function* getRestaurantsSaga() {
  try {
    const dummyData: RestaurantShort[] = _.range(1000).map((idx) => ({
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

function* getRestaurantSaga(action: ReturnType<typeof getRestaurant.request>) {
  try {
    const id = action.payload;

    // TODO: Get real restaurant data from backend
    const {data}: RootState['restaurants'] = yield select(
      (state: RootState) => state.restaurants,
    );
    const item = data[_.findIndex(data, (item) => item.id === id)];

    const dummyData: Restaurant = {
      ..._.omit(item, ['photoUrl']),
      photoUrls: _.range(Math.floor(Math.random() * 5) + 5).map(
        () => 'https://picsum.photos/200',
      ),
      keywords: {
        popular_topic: {
          label: '인기 토픽',
          tags: _.range(Math.floor(Math.random() * 6)).map(
            (idx) => `topic_${idx + 1}`,
          ),
        },
        facility: {
          label: '시설',
          tags: _.range(Math.floor(Math.random() * 6)).map(
            (idx) => `facility_${idx + 1}`,
          ),
        },
        purpose: {
          label: '방문 목적',
          tags: [],
        },
        atmosphere: {
          label: '분위기',
          tags: _.range(Math.floor(Math.random() * 6)).map(
            (idx) => `atmosphere_${idx + 1}`,
          ),
        },
      },
      menus: [
        {
          popular: false,
          name: 'Menu 1',
          price: 15000,
          currency: 'KRW',
        },
      ],
      telephone: '010-1111-2222',
      openingHours: [
        {
          range: 'WEEKDAY',
          type: 'OPEN',
          time: {
            start: '08:00',
            end: '21:00',
          },
        },
        {
          range: 'WEEKEND',
          type: 'OPEN',
          time: {
            start: '09:00',
            end: '23:00',
          },
          breakTime: {
            start: '13:00',
            end: '14:00',
          },
        },
      ],
      description: 'this is restaurant',
    };

    yield put(getRestaurant.success(dummyData));
  } catch (e) {
    yield put(getRestaurant.failure());
  }
}

export default function* () {
  yield takeEvery(getRestaurants.request, getRestaurantsSaga);
  yield takeEvery(getRestaurant.request, getRestaurantSaga);
}
