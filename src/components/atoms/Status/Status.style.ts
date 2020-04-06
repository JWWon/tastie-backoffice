import styled from 'styled-components';

import {Props} from './Status.type';

const size = 10;
export const Status = styled.div<Props>`
  width: ${size}px;
  height: ${size}px;
  border-radius: ${size / 2}px;
  margin-right: 6px;
  background-color: ${({status, theme}) =>
    status === 'ACTIVE'
      ? theme.color.green
      : status === 'WAITING_FOR_REVIEW'
      ? theme.color.yellow
      : theme.color.red};
`;
