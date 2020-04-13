import React, {useEffect, useState} from 'react';
import omit from 'lodash/omit';
import {Row} from 'antd';

import {Props, ItemProps} from './ListInput.type';
import * as s from './ListInput.style';

function ListInput<T>({
  register,
  unregister,
  label,
  name,
  setValue,
  renderItem,
  emptyItem,
  defaultValues,
}: Props<T>) {
  const [data, setData] = useState<T[]>([]);

  function handleAdd() {
    const nextData = [...data, emptyItem];
    setPureValue(name, nextData);
    setData(nextData);
  }

  function handleChange(item: T, index: number) {
    let nextData = [...data];
    nextData[index] = item;
    setPureValue(name, nextData);
    setData(nextData);
  }

  function handleRemove(index: number) {
    let nextData = [...data];
    nextData.splice(index, 1);
    setPureValue(name, nextData);
    setData(nextData);
  }

  const setPureValue = (name: string, value: ItemProps<T>[]) =>
    setValue(
      name,
      value.map((item) => omit(item, 'onChange', 'onRemove', 'index') as T),
    );

  const renderItemWithProps = (item: T, index: number) =>
    renderItem({
      ...item,
      index,
      onChange: handleChange,
      onRemove: handleRemove,
    });

  useEffect(() => {
    register({name});
    return () => unregister(name);
  }, [name, register, unregister]);

  useEffect(() => setData(defaultValues || []), [defaultValues]);

  return (
    <s.Wrapper>
      <s.Header>
        <s.Label>{label}</s.Label>
        <s.Add onClick={handleAdd}>추가</s.Add>
      </s.Header>
      <Row gutter={[8, 8]}>{data.map(renderItemWithProps)}</Row>
    </s.Wrapper>
  );
}

export default ListInput;
