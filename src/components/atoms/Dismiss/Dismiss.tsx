import React from 'react';

import {Props} from './Dismiss.type';
import * as s from './Dismiss.style';

const Dismiss: React.FC<Props> = ({onClick}) => (
  <s.Button onClick={onClick}>
    <s.Icon />
  </s.Button>
);

export default Dismiss;
