import {SelectProps} from 'antd/lib/select';

export interface Props extends SelectProps<string[]> {
  register: any;
  unregister: any;
  name: string;
  label: string;
}
