export interface Props<T> {
  register: any;
  unregister: any;
  label: string;
  name: string;
  setValue: (name: string, value: string | boolean) => void;
  renderItem: React.FC<T>;
  defaultValues?: T[];
}
