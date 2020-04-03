import React from 'react';
import _ from 'lodash';
import GoogleMap from 'google-map-react';

import SideBar from '@components/templates/SideBar';
import SearchInput from '@components/atoms/SearchInput';
import RestaurantItem from '@components/atoms/RestaurantItem';
import * as s from './Restaurant.style';
import {Restaurant as RestaurantProps} from '@model';

const key = process.env.REACT_APP_GCP_API_KEY;
const initCenter = {
  lat: 37.555693,
  lng: 126.936632,
};

const dummyData: RestaurantProps[] = _.range(100).map(idx => ({
  id: idx.toString(),
  name: `맛집_${idx}`,
  status: Math.random() < 0.5 ? 'ACTIVE' : 'PENDING',
  photoUrl: 'https://picsum.photos/200',
  address: '서울특별시 이태원로 22 국방부 4274부대',
  tags: ['코로나19', '자가격리', '방콕중'],
}));

const Restaurant: React.FC = () => (
  <s.Container>
    <SideBar
      headerComponent={<SearchInput placeholder="맛집 검색하기" />}
      bodyComponent={
        <s.List
          pagination={{
            total: dummyData.length,
            onChange: page => {},
          }}
          dataSource={dummyData}
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

export default Restaurant;
