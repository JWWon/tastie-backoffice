import styled from 'styled-components';
import {Input} from 'antd';

export const Form = styled.form`
  flex: 1;
`;

export const SearchIcon = styled.img.attrs({
  src: require('@assets/icon-search.svg'),
})`
  width: 18px;
  height: 18px;
`;

export const TextInput = styled(Input).attrs({
  type: 'text',
})`
  height: 100%;
  border: none;
`;
