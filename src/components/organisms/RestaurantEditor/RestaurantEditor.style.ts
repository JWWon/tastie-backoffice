import styled from 'styled-components';
import {Button as RawButton} from 'antd';

import RawStatus from '@components/atoms/Status';

// div
export const Header = styled.div`
  padding: ${({theme}) => theme.space.rem.normal}rem;
  flex-direction: row;
  align-items: center;
`;

export const Body = styled.div`
  flex: 1;
  overflow-y: scroll;
`;

export const AlignRight = styled.div`
  margin-left: auto;
  flex-direction: row;
`;

export const Form = styled.form`
  padding: ${({theme}) => theme.space.rem.normal}rem;
  flex: 1;
`;

// text
export const Name = styled.h2`
  margin-left: ${({theme}) => theme.space.rem.normal}rem;
  font-weight: 600;
`;

// custom
export const Status = styled(RawStatus)`
  margin-left: ${({theme}) => theme.space.rem.narrow}rem;
`;

export const Button = styled(RawButton)`
  margin-left: ${({theme}) => theme.space.rem.narrow}rem;
`;
