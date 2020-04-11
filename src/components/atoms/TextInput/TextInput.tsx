import React from 'react';
import {Input} from 'antd';

import * as s from './TextInput.style';
import {Props} from './TextInput.type';

const TextInput: React.FC<Props> = ({label, ...props}) => (
  <div>
    <s.Label>{label}</s.Label>
    <Input {...props} key={props.defaultValue} />
  </div>
);

export default React.memo(TextInput);
