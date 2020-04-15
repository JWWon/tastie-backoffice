import styled from 'styled-components';
import {CheckOutlined} from '@ant-design/icons';

import {Restaurant} from '@model';
import {hover} from '@styles/mixins';

// div
interface WrapperProps {
  selected: boolean;
}
export const Wrapper = styled.div<WrapperProps>`
  flex-direction: row;
  width: 100%;
  padding: ${({theme}) =>
    `${theme.space.rem.normal / 2}rem ${theme.space.rem.normal}rem`};
  ${({selected, theme}) =>
    selected ? `background: ${theme.color.white.dark};` : ''}
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
      ? theme.color.orange
      : theme.color.red};
`;

interface ThumbnailProps {
  src: string;
}
const size = 48;
export const Thumbnail = styled.div<ThumbnailProps>`
  width: ${size}px;
  height: ${size}px;
  margin-right: 0.75rem;
  background: ${({theme, src}) =>
    `${theme.color.gray.light} url("${src}") no-repeat center center`};
`;

export const Selected = styled.div`
  flex: 1;
  background: ${({theme}) => theme.color.gray.dim};
  align-items: center;
  justify-content: center;
`;

// text
export const Name = styled.h5``;

export const Info = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

// custom
export const CheckIcon = styled(CheckOutlined)`
  font-size: 20px;
  object-fit: contain;
  color: white;
`;
