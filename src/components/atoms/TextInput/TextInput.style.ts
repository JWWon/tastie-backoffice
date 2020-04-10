import styled from 'styled-components';
import {Form, Input as RawInput} from 'antd';

import {inputBorder} from '@styles/mixins';

export const Item = styled(Form.Item).attrs({
  colon: false,
  labelCol: {
    span: 3,
    offset: 0,
  },
})`
  margin: 0;
`;

export const Input = styled(RawInput)`
  ${inputBorder}
`;
