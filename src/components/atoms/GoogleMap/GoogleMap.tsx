/* eslint-disable react-hooks/exhaustive-deps */
import React, {createRef} from 'react';

import {Props, Item} from './GoogleMap.type';
import * as s from './GoogleMap.style';

class GoogleMap extends React.PureComponent<Props> {
  private mapId = createRef<HTMLDivElement>();
  private googleMap?: google.maps.Map<HTMLDivElement>;

  public getRef = () => this.googleMap;

  public fitBounds = (data: Item[]) => {
    const bounds = new window.google.maps.LatLngBounds();
    data.forEach((item) => {
      bounds.extend({
        lat: item.coordinate.latitude,
        lng: item.coordinate.longitude,
      });
    });
    this.googleMap?.fitBounds(bounds, {
      left: 328, // SideBar + 48
      bottom: 48,
      right: 48,
      top: 48,
    });
  };

  componentDidMount() {
    const {mapDidMount} = this.props;
    if (!this.mapId.current) return;

    this.googleMap = new window.google.maps.Map(this.mapId.current, {
      center: {lat: 37.555693, lng: 126.936632},
      zoom: 17,
      mapTypeControl: false,
      zoomControl: false,
    });
    // callback
    this.setState({loadMap: true});
    if (mapDidMount) mapDidMount(this.googleMap);
  }

  render() {
    const {children} = this.props;

    return <s.Map ref={this.mapId}>{children}</s.Map>;
  }
}

export default GoogleMap;
