import styled from 'styled-components';

import {Restaurant} from '@model';
import {hover} from '@styles/mixins';

// div
export const Wrapper = styled.div`
  flex-direction: row;
  width: 100%;
  padding: ${({theme}) =>
    `${theme.space.rem.normal / 2}rem ${theme.space.rem.normal}rem`};
  ${hover}
`;

export const Content = styled.div`
  flex: 1;
`;

export const ContentRow = styled.div`
  flex-direction: row;
  align-items: center;
  margin-bottom: auto;
`;

export const Status = styled.div<Pick<Restaurant, 'status'>>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-right: 6px;
  background-color: ${({status, theme}) =>
    status === 'ACTIVE'
      ? theme.color.green
      : status === 'WAITING_FOR_REVIEW'
      ? theme.color.yellow
      : theme.color.red};
`;

// text
export const Name = styled.h5``;

export const Info = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// img
const size = 48;
export const Thumbnail = styled.img`
  width: ${size}px;
  height: ${size}px;
  object-fit: cover;
  margin-right: 0.75rem;
`;
