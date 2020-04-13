export interface Props {
  message: string;
  value: boolean;
  onChange?: (checked: boolean) => void;
}
