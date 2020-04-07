import {Restaurant} from '@model';

export type Props = Pick<Restaurant, 'status'> &
  React.HTMLAttributes<HTMLDivElement> & {
    showLabel?: boolean;
  };
