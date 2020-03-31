import {HTMLAttributes} from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: string;
  name: string;
  route: string;
}
