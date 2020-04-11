import {SelectProps} from 'antd/lib/select';

export interface Props extends SelectProps<string[]> {
  name: string;
  label: string;
}
