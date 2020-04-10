import React from 'react';

import * as s from './TextInput.style';
import {Props} from './TextInput.type';

const TextInput: React.FC<Props> = ({
  name,
  label,
  placeholer,
  defaultValue,
}) => (
  <s.Item name={name} label={label}>
    <s.Input
      name={name}
      key={defaultValue}
      placeholder={placeholer}
      defaultValue={defaultValue}
    />
  </s.Item>
);

export default TextInput;
