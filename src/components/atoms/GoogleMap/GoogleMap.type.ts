export interface Item {
  coordinate: {
    latitude: number;
    longitude: number;
  };
  [x: string]: any;
}

export interface Props {
  mapDidMount?: (map: google.maps.Map<HTMLDivElement>) => void;
}
