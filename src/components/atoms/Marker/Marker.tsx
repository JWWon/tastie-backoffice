/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  setCurrentId,
  clearCurrentId,
  getRestaurant,
} from '@store/actions/restaurants';
import {RootState} from '@store/reducers';
import markerCurrent from '@assets/icon-marker-current.svg';
import {Props} from './Marker.type';

const Marker: React.FC<Props> = ({id, status, name, coordinate, ...props}) => {
  const dispatch = useDispatch();
  const {hoverId} = useSelector((state: RootState) => state.restaurants);
  const markerRef = useRef<google.maps.Marker>();
  const infoRef = useRef<google.maps.InfoWindow>();

  const position: google.maps.LatLngLiteral = {
    lat: coordinate.latitude,
    lng: coordinate.longitude,
  };

  const iconOptions: Omit<google.maps.ReadonlyIcon, 'url'> = {
    scaledSize: new google.maps.Size(12, 18),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(6, 18), // 'center' 'bottom'
  };

  function selectIcon() {
    switch (status) {
      case 'ACTIVE':
        return require('@assets/icon-marker-active.svg');
      case 'WAITING_FOR_REVIEW':
        return require('@assets/icon-marker-waiting.svg');
      case 'REMOVED':
        return require('@assets/icon-marker-removed.svg');
    }
  }

  // EFFECTS
  function highlight() {
    markerRef.current?.setIcon({
      ...iconOptions,
      url: markerCurrent,
      scaledSize: new google.maps.Size(24, 30),
      anchor: new google.maps.Point(12, 30), // 'center' 'bottom'
    });
    infoRef.current?.open(props.map, markerRef.current);
  }

  function rollback() {
    markerRef.current?.setIcon({...iconOptions, url: selectIcon()});
    infoRef.current?.close();
  }

  // EVENTS
  function handleClick() {
    dispatch(getRestaurant.request(id));
  }

  function handleMouseOver() {
    dispatch(setCurrentId(id));
  }

  function handleMouseOut() {
    dispatch(clearCurrentId());
  }

  useEffect(() => {
    const marker = new google.maps.Marker({
      position,
      icon: {...iconOptions, url: selectIcon()},
      ...props,
    });
    infoRef.current = new google.maps.InfoWindow({
      content: name,
    });

    marker.addListener('click', handleClick);
    marker.addListener('mouseover', handleMouseOver);
    marker.addListener('mouseout', handleMouseOut);

    markerRef.current = marker;

    return () => marker.setMap(null);
  }, []);

  useEffect(() => {
    if (hoverId === id) highlight();
    else if (
      (markerRef.current?.getIcon() as google.maps.ReadonlyIcon).url ===
      markerCurrent
    )
      rollback();
  }, [hoverId]);

  return null;
};

export default Marker;
