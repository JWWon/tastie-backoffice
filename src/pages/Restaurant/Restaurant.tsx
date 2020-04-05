/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from 'lodash';

import {RestaurantShort} from '@model';
import {RootState} from '@store/reducers';
import {getRestaurants, setCurrentRange} from '@store/actions/restaurants';
import SideBar from '@components/templates/SideBar';
import SearchInput from '@components/atoms/SearchInput';
import RestaurantItem from '@components/atoms/RestaurantItem';
import ListHeader from '@components/atoms/ListHeader';
import {Item} from '@components/atoms/ListHeader/ListHeader.type';
import * as s from './Restaurant.style';
import Marker from '@components/atoms/Marker';
import GoogleMap from '@components/atoms/GoogleMap';

const pageSize = 12;
const menuItems: Item[] = [
  {key: 'create', name: '신규 등록'},
  {key: 'selectAll', name: '전체 선택'},
  {key: 'approve', name: '등록 승인', disabled: true},
  {key: 'reject', name: '등록 취소', disabled: true},
];

const Restaurant: React.FC = () => {
  // useRef
  const mapComponentRef = useRef() as React.RefObject<GoogleMap>;
  const mapRef = useRef<google.maps.Map<HTMLDivElement>>();
  // useState
  const [currentData, setCurrentData] = useState<RestaurantShort[]>([]);
  // useDispatch
  const dispatch = useDispatch();
  // useSelector
  const {data, currentRange} = useSelector(
    (state: RootState) => state.restaurants,
  );

  const total = data.length;

  useEffect(() => {
    dispatch(getRestaurants.request());
  }, []);

  useEffect(() => {
    const nextData = _.slice(data, currentRange[0], currentRange[1] + 1);
    setCurrentData(nextData);
    mapComponentRef.current?.fitBounds(nextData);
  }, [data.length, currentRange[0]]);

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
      <GoogleMap
        ref={mapComponentRef}
        mapDidMount={map => (mapRef.current = map)}>
        {currentData.map(
          item =>
            mapRef.current && (
              <Marker
                key={item.id}
                map={mapRef.current}
                {..._.pick(item, ['id', 'status', 'name', 'coordinate'])}
              />
            ),
        )}
      </GoogleMap>
    </s.Container>
  );
};

export default Restaurant;
