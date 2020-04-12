import React from 'react';
import {Col, Input, Select} from 'antd';

import {Menu} from '@model';
import {ItemProps} from '@components/molcules/ListInput/ListInput.type';
import * as s from './MenuInputItem.style';

const MONEY = ['KRW', 'USD'];

const MenuInputItem: React.FC<ItemProps<Menu>> = (props) => {
  function handleUpdate(key: string, value: any) {
    const nextItem: Menu = {...props, [key]: value};
    if (props.onChange && typeof props.index === 'number') {
      props.onChange(nextItem, props.index);
    }
  }

  return (
    <>
      <Col span={1}>
        <s.DeleteIcon />
      </Col>
      <Col span={2}>추천</Col>
      <Col span={10}>
        <Input
          value={props.name}
          onChange={(e) => handleUpdate('name', e.target.value)}
        />
      </Col>
      <Col span={11}>
        <Input.Group compact>
          <Input
            value={props.price}
            onChange={(e) => handleUpdate('price', e.target.value)}
            style={{width: '60%'}}
          />
          <Select
            value={props.currency}
            onChange={(value) => handleUpdate('currency', value)}
            style={{width: '40%'}}>
            {MONEY.map((item) => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Input.Group>
      </Col>
    </>
  );
};

export default MenuInputItem;
