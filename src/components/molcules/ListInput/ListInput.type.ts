export type ItemProps<T> = T & {
  onChange?: (item: T, index: number) => void;
  onRemove?: (index: number) => void;
  index?: number;
};

export interface Props<T> {
  register: any;
  unregister: any;
  label: string;
  name: string;
  setValue: (name: string, value: T[]) => void;
  renderItem: React.FC<ItemProps<T>>;
  emptyItem: T;
  defaultValues?: T[];
}
