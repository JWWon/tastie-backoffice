import React from 'react';

import {Props} from './Status.type';
import * as s from './Status.style';

const STATUS_LABEL = {
  ACTIVE: '등록 완료',
  WAITING_FOR_REVIEW: '등록 대기',
  REMOVED: '등록 취소',
};

const Status: React.FC<Props> = ({status, showLabel, ...options}) => (
  <s.Wrapper>
    <s.Status status={status} {...options} />
    {showLabel && <s.Label status={status}>{STATUS_LABEL[status]}</s.Label>}
  </s.Wrapper>
);

export default React.memo(Status);
