import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {Form, Input} from 'antd';

import {Props} from './TextInput.type';

function TextInput<T>({name, label, onSubmit}: Props<T>) {
  const {handleSubmit, control} = useForm<T>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={
          <Form.Item name={name} label={label}>
            <Input name={name} />
          </Form.Item>
        }
        control={control}
        name={name}
      />
    </form>
  );
}

export default TextInput;
