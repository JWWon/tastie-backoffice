import React, {Fragment} from 'react';
import cloneDeep from 'lodash/cloneDeep';
import dot from 'dot-object';
import {Col, Select, Input} from 'antd';

import {OpeningHour} from '@model';
import TextSwitch from '@components/atoms/TextSwitch';
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

const TYPE = [
  {value: 'OPEN', label: '영업'},
  {value: 'DAY_OFF', label: '휴무'},
];

const OpeningHourInputItem: React.FC<ItemProps<OpeningHour>> = (props) => {
  function handleUpdate(key: string, value: any) {
    const nextItem: OpeningHour = cloneDeep(props);
    dot.str(key, value, nextItem);
    if (props.onChange && props.index !== undefined)
      props.onChange(nextItem, props.index);
  }

  function handleRemove() {
    if (props.onRemove && props.index !== undefined) {
      props.onRemove(props.index);
    }
  }

  function handleBreakTime(activate: boolean) {
    let nextItem: OpeningHour = cloneDeep(props);
    if (activate) nextItem.breakTime = {start: '', end: ''};
    else delete nextItem.breakTime;

    if (props.onChange && props.index !== undefined)
      props.onChange(nextItem, props.index);
  }

  const isBreakTimeExist = props.breakTime !== undefined;

  return (
    <Fragment key={props.index?.toString()}>
      <Col span={5}>
        <s.SelectRange
          showSearch
          value={props.range}
          onChange={(value) => handleUpdate('range', value)}>
          {RANGE.map((item) => (
            <Select.Option key={item.value} value={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </s.SelectRange>
      </Col>
      <Col span={6}>
        <s.SelectRange
          showSearch
          value={props.type}
          onChange={(value) => handleUpdate('type', value)}>
          {TYPE.map((item) => (
            <Select.Option key={item.value} value={item.value}>
              {item.label}
            </Select.Option>
          ))}
        </s.SelectRange>
      </Col>
      <Col span={12}>
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
      <Col span={1}>
        <s.DeleteIcon onClick={handleRemove} />
      </Col>
      {props.type === 'OPEN' && (
        <>
          <Col offset={5} span={6}>
            <TextSwitch
              value={isBreakTimeExist}
              onChange={handleBreakTime}
              message="브레이크 타임"
            />
          </Col>
          <Col span={12}>
            <Input.Group compact>
              <s.InputText
                disabled={!isBreakTimeExist}
                value={props.breakTime?.start}
                onChange={(e) =>
                  handleUpdate('breakTime.start', e.target.value)
                }
              />
              <s.InputDivider />
              <s.InputText
                disabled={!isBreakTimeExist}
                value={props.breakTime?.end}
                onChange={(e) => handleUpdate('breakTime.end', e.target.value)}
              />
            </Input.Group>
          </Col>
          <Col span={1} />
        </>
      )}
    </Fragment>
  );
};

export default OpeningHourInputItem;
