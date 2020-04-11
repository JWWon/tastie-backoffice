export interface MenuItem {
  key: string;
  name: string;
  disabled?: boolean;
}

export interface Props {
  total: number;
  items: MenuItem[];
}
