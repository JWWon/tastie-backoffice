import {RestaurantShort} from '@model';

export type Props = Pick<
  RestaurantShort,
  'id' | 'status' | 'name' | 'coordinate'
> &
  google.maps.ReadonlyMarkerOptions;
