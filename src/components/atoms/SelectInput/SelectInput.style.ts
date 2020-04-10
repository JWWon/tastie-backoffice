import styled from 'styled-components';
import {Form, Select as RawSelect} from 'antd';

export const Item = styled(Form.Item).attrs({
  colon: false,
  labelCol: {
    span: 3,
    offset: 0,
  },
})`
  margin: 0;
`;

export const Select = styled(RawSelect).attrs({
  mode: 'tags',
})``;
