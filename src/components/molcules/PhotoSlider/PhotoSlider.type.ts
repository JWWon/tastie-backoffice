import {Restaurant} from '@model';

export interface Props extends Pick<Restaurant, 'id' | 'photoUrls'> {}
