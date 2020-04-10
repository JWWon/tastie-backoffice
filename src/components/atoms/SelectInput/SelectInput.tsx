import React from 'react';

import {Props} from './SelectInput.type';
import * as s from './SelectInput.style';

const SelectInput: React.FC<Props> = ({
  name,
  label,
  placeholder,
  defaultValue,
}) => (
  <s.Item name={name} label={label}>
    <s.Select placeholder={placeholder} defaultValue={defaultValue}></s.Select>
  </s.Item>
);

export default SelectInput;
