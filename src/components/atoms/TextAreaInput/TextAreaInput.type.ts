import {TextAreaProps} from 'antd/lib/input';

export interface Props extends Omit<TextAreaProps, 'name' | 'defaultValue'> {
  label: string;
  name: string;
  defaultValue?: string;
}
