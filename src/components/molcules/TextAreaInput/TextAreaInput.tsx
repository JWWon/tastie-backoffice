import React from 'react';
import {Input} from 'antd';

import FormItem from '@components/atoms/FormItem';
import {Props} from './TextAreaInput.type';

const TextAreaInput: React.FC<Props> = ({label, ...props}) => (
  <FormItem label={label}>
    <Input.TextArea rows={2} {...props} key={props.defaultValue} />
  </FormItem>
);

export default React.memo(TextAreaInput);
