import React, {Fragment} from 'react';
import cloneDeep from 'lodash/cloneDeep';
import dot from 'dot-object';
import {Col, Input, Select} from 'antd';

import {Menu} from '@model';
import TextSwitch from '@components/atoms/TextSwitch';
import {ItemProps} from '@components/molcules/ListInput/ListInput.type';
import * as s from './MenuInputItem.style';

const MONEY = ['KRW', 'USD'];

const MenuInputItem: React.FC<ItemProps<Menu>> = (props) => {
  function handleUpdate(key: string, value: any) {
    const nextItem: Menu = cloneDeep(props);
    dot.str(key, value, nextItem);
    if (props.onChange && props.index !== undefined)
      props.onChange(nextItem, props.index);
  }

  function handleRemove() {
    if (props.onRemove && props.index !== undefined) {
      props.onRemove(props.index);
    }
  }

  return (
    <Fragment key={props.index?.toString()}>
      <Col span={2}>
        <TextSwitch
          message="추천"
          value={props.popular}
          onChange={(value) => handleUpdate('popular', value)}
        />
      </Col>
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
            onChange={(e) => handleUpdate('price', parseInt(e.target.value))}
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
      <Col span={1}>
        <s.DeleteIcon onClick={handleRemove} />
      </Col>
    </Fragment>
  );
};

export default MenuInputItem;
