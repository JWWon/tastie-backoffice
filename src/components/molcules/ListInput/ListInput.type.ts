export interface Props {
  register: any;
  unregister: any;
  label: string;
  name: string;
  setValue: (name: string, value: string[]) => void;
}
