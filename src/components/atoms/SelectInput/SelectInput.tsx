import React, {useEffect} from 'react';
import {Select} from 'antd';

import {Props} from './SelectInput.type';
import * as s from './SelectInput.style';

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
    <div>
      <s.Label>{label}</s.Label>
      <Select {...props} key={props.defaultValue?.join(',')} mode="tags" />
    </div>
  );
};

export default React.memo(SelectInput);
