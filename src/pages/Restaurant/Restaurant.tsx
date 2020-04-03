import React from 'react';
import GoogleMap from 'google-map-react';

import * as s from './Restaurant.style';
import SideBar from '@components/templates/SideBar';
import SearchInput from '@components/atoms/SearchInput';

const key = process.env.REACT_APP_GCP_API_KEY;
const initCenter = {
  lat: 37.555693,
  lng: 126.936632,
};

const Restaurant: React.FC = () => (
  <s.Container>
    <SideBar
      headerComponent={<SearchInput placeholder="맛집 검색하기" />}
      bodyComponent={null}
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
