import {OnSubmit} from 'react-hook-form';

export interface Props<T> {
  name: string;
  label: string;
  onSubmit: OnSubmit<T>;
}
