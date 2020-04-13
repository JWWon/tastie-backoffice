import React from 'react';

import {Props} from './TextSwitch.type';
import * as s from './TextSwitch.style';

const TextButton: React.FC<Props> = ({message, value, onChange}) => {
  function handleClick() {
    if (onChange) onChange(!value);
  }

  return (
    <s.Switch checked={value} onClick={handleClick}>
      {message}
    </s.Switch>
  );
};

export default TextButton;
