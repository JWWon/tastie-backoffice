import React, {useEffect, useState} from 'react';
import {Row} from 'antd';

import {Props} from './ListInput.type';
import * as s from './ListInput.style';

function ListInput<T>({
  register,
  unregister,
  label,
  name,
  setValue,
  renderItem,
  defaultValues,
}: Props<T>) {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    register({name});
    return () => unregister(name);
  }, [name, register, unregister]);

  useEffect(() => setData(defaultValues || []), [defaultValues]);

  return (
    <s.Wrapper>
      <s.Header>
        <s.Label>{label}</s.Label>
        <s.Add>추가</s.Add>
      </s.Header>
      <Row gutter={[8, 8]}>{data.map(renderItem)}</Row>
    </s.Wrapper>
  );
}

export default ListInput;
