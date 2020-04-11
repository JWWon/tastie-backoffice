import {InputProps} from 'antd/lib/input';

export interface Props extends Omit<InputProps, 'name' | 'defaultValue'> {
  label: string;
  name: string;
  defaultValue?: string | number;
}
