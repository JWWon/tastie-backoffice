import React from 'react';
import {Input} from 'antd';

import {Props} from './TextAreaInput.type';
import * as s from './TextAreaInput.style';

const TextAreaInput: React.FC<Props> = ({label, ...props}) => (
  <div>
    <s.Label>{label}</s.Label>
    <Input.TextArea rows={2} {...props} key={props.defaultValue} />
  </div>
);

export default TextAreaInput;
