import React from 'react';

import {Props} from './FormItem.type';
import * as s from './FormItem.style';

const FormItem: React.FC<Props> = ({label, children}) => (
  <s.Wrapper>
    <s.Label>{label}</s.Label>
    {children}
  </s.Wrapper>
);

export default FormItem;
