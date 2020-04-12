import React, {useEffect} from 'react';
import {Select} from 'antd';

import FormItem from '@components/atoms/FormItem';
import {Props} from './SelectInput.type';

const SelectInput: React.FC<Props> = ({
  register,
  unregister,
  label,
  name,
  ...props
}) => {
  useEffect(() => {
    register({name});
    return () => unregister(name);
  }, [name, register, unregister]);

  return (
    <FormItem label={label}>
      <Select {...props} key={props.defaultValue?.join(',')} mode="tags" />
    </FormItem>
  );
};

export default React.memo(SelectInput);
