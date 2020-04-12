import React, {useEffect, useState} from 'react';
import omit from 'lodash/omit';
import {Row} from 'antd';

import {Props, ItemProps} from './ListInput.type';
import * as s from './ListInput.style';

function convertIntoJSON<T>(obj: {[x: string]: any}) {
  let newObj: {[x: string]: any} = {};
  for (const k in obj) {
    const keys = k.split('.');
    let startOfObj = newObj;
    for (let idx = 0; idx < keys.length; idx += 1) {
      if (idx === keys.length - 1) {
        // last index
        startOfObj[keys[idx]] = obj[k];
      } else {
        startOfObj[keys[idx]] = startOfObj[keys[idx]] || {};
        startOfObj = startOfObj[keys[idx]];
      }
    }
  }
  return newObj as ItemProps<T>;
}

function ListInput<T>({
  register,
  unregister,
  label,
  name,
  setValue: rawSetValue,
  renderItem: rawRenderItem,
  emptyItem,
  defaultValues,
}: Props<T>) {
  const [data, setData] = useState<T[]>([]);

  function setValue(name: string, value: ItemProps<T>[]) {
    rawSetValue(
      name,
      value.map((item) => omit(item, 'onChange', 'onRemove', 'index') as T),
    );
  }

  function handleAdd() {
    const nextData = [...data, emptyItem];
    setValue(name, nextData);
    setData(nextData);
  }

  function handleChange(rawItem: T, index: number) {
    let nextData = [...data];
    const item = convertIntoJSON<T>(rawItem);
    nextData[index] = item;
    setValue(name, nextData);
    setData(nextData);
  }

  const renderItem = (item: T, index: number) =>
    rawRenderItem({...item, index, onChange: handleChange});

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
      <Row gutter={[8, 8]}>{data.map(renderItem)}</Row>
    </s.Wrapper>
  );
}

export default ListInput;
