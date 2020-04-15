import {ClickParam} from 'antd/lib/menu';

export interface MenuItem {
  key: string;
  name: string;
  disabled?: boolean;
}

export interface Props {
  total: number;
  items: MenuItem[];
  onClick: (param: ClickParam) => void;
  selected?: number;
}
