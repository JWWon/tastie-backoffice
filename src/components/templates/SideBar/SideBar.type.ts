import {ReactNode} from 'react';

interface MenuClickable {
  name: string;
  onClick: () => void;
  disabled?: boolean;
}

interface MenuDisabled {
  name: string;
  disabled: true;
}

export interface Props {
  headerComponent: ReactNode;
  bodyComponent: ReactNode;
  menuItems?: (MenuClickable | MenuDisabled)[];
}
