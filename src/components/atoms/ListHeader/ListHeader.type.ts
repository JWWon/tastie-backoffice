export interface Item {
  key: string;
  name: string;
  disabled?: boolean;
}

export interface Props {
  total: number;
  items: Item[];
}
