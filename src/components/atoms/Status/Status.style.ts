import styled from 'styled-components';

import {Props} from './Status.type';

function mapColor({status, theme}: any) {
  switch (status) {
    case 'ACTIVE':
      return theme.color.green;
    case 'WAITING_FOR_REVIEW':
      return theme.color.orange;
    default:
      return theme.color.red;
  }
}

export const Wrapper = styled.div`
  flex-direction: row;
  align-items: center;
`;

const size = 10;
export const Status = styled.div<Props>`
  width: ${size}px;
  height: ${size}px;
  border-radius: ${size / 2}px;
  margin-right: 6px;
  background-color: ${mapColor};
`;

export const Label = styled.h3<Pick<Props, 'status'>>`
  color: ${mapColor};
`;
