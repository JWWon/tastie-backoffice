import React from 'react';
import {Input} from 'antd';

import FormItem from '@components/atoms/FormItem';
import {Props} from './TextInput.type';

const TextInput: React.FC<Props> = ({label, ...props}) => (
  <FormItem label={label}>
    <Input {...props} key={props.defaultValue} />
  </FormItem>
);

export default React.memo(TextInput);
