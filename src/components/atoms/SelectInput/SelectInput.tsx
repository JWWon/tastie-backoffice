import React from 'react';
import {Select} from 'antd';

import {Props} from './SelectInput.type';
import * as s from './SelectInput.style';

const SelectInput: React.FC<Props> = ({label, ...props}) => (
  <div>
    <s.Label>{label}</s.Label>
    <Select {...props} key={props.defaultValue?.join(',')} mode="tags"></Select>
  </div>
);

export default SelectInput;
