/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import GoogleMap from 'google-map-react';

import {RootState} from '@store/reducers';
import {getRestaurants, setCurrentRange} from '@store/actions/restaurants';
import SideBar from '@components/templates/SideBar';
import SearchInput from '@components/atoms/SearchInput';
import RestaurantItem from '@components/atoms/RestaurantItem';
import ListHeader from '@components/atoms/ListHeader';
import {Item} from '@components/atoms/ListHeader/ListHeader.type';
import * as s from './Restaurant.style';

const key = process.env.REACT_APP_GCP_API_KEY;

const pageSize = 12;
const initCenter = {
  lat: 37.555693,
  lng: 126.936632,
};
const menuItems: Item[] = [
  {key: 'create', name: '신규 등록'},
  {key: 'selectAll', name: '전체 선택'},
  {key: 'approve', name: '등록 승인', disabled: true},
  {key: 'reject', name: '등록 취소', disabled: true},
];

const Restaurant: React.FC = () => {
  const dispatch = useDispatch();
  const {data} = useSelector((state: RootState) => state.restaurants);
  const total = data.length;

  useEffect(() => {
    dispatch(getRestaurants.request());
  }, []);

  return (
    <s.Container>
      <SideBar
        headerComponent={<SearchInput placeholder="맛집 검색하기" />}
        bodyComponent={
          <s.List
            pagination={{
              total,
              pageSize,
              onChange: page => dispatch(setCurrentRange({page, pageSize})),
            }}
            header={<ListHeader total={total} items={menuItems} />}
            dataSource={data}
            renderItem={item => <RestaurantItem {...item} />}
          />
        }
      />
      {key ? (
        <GoogleMap
          bootstrapURLKeys={{key}}
          defaultCenter={initCenter}
          defaultZoom={17}
          options={{
            fullscreenControl: false,
            zoomControl: false,
            streetViewControl: true,
          }}></GoogleMap>
      ) : null}
    </s.Container>
  );
};

export default Restaurant;
