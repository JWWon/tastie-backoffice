import React from 'react';
import {Col, Input, Select} from 'antd';

import {Menu} from '@model';
import * as s from './MenuInputItem.style';

const MONEY = ['KRW', 'USD'];

const MenuInputItem: React.FC<Menu> = ({popular, name, price, currency}) => (
  <>
    <Col span={1}>
      <s.DeleteIcon />
    </Col>
    <Col span={2}>추천</Col>
    <Col span={10}>
      <Input defaultValue={name} />
    </Col>
    <Col span={11}>
      <Input.Group compact>
        <Input defaultValue={price} style={{width: '60%'}} />
        <Select defaultValue={currency} style={{width: '40%'}}>
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

export default MenuInputItem;
