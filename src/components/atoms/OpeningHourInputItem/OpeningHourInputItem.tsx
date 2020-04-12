import React from 'react';
import {Col, Select, Input} from 'antd';

import {OpeningHour} from '@model';
import {ItemProps} from '@components/molcules/ListInput/ListInput.type';
import * as s from './OpeningHourInput.style';

const RANGE = [
  {value: 'WEEKDAY', label: '평일'},
  {value: 'WEEKEND', label: '주말'},
  {value: 'HOLIDAY', label: '휴일'},
  {value: 'MON', label: '월요일'},
  {value: 'TUE', label: '화요일'},
  {value: 'WED', label: '수요일'},
  {value: 'THUR', label: '목요일'},
  {value: 'FRI', label: '금요일'},
  {value: 'SAT', label: '토요일'},
  {value: 'SUN', label: '일요일'},
];

const OpeningHourInputItem: React.FC<ItemProps<OpeningHour>> = (props) => {
  function handleUpdate(key: string, value: any) {
    const nextItem: OpeningHour = {...props, [key]: value};
    if (props.onChange && typeof props.index === 'number')
      props.onChange(nextItem, props.index);
  }

  return (
    <>
      <Col span={1}>
        <s.DeleteIcon />
      </Col>
      <Col span={5}>
        <s.SelectRange
          showSearch
          placeholder="시간대 선택"
          value={props.range}
          onChange={(value) => handleUpdate('range', value)}>
          {RANGE.map((item) => (
            <Select.Option key={item.value} value={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </s.SelectRange>
      </Col>
      <Col span={18}>
        <Input.Group compact>
          <s.InputText
            value={props.time?.start}
            onChange={(e) => handleUpdate('time.start', e.target.value)}
          />
          <s.InputDivider />
          <s.InputText
            value={props.time?.end}
            onChange={(e) => handleUpdate('time.end', e.target.value)}
          />
        </Input.Group>
      </Col>
    </>
  );
};

export default OpeningHourInputItem;
