import {Restaurant} from '@model';

export interface Props {
  register: any;
  unregister: any;
  name: string;
  setValue: (name: string, value: string[]) => void;
  defaultValues: Restaurant['keywords'];
}
