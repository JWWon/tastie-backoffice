import styled from 'styled-components';
import {Input, Select} from 'antd';
import {DeleteOutlined} from '@ant-design/icons';

export const Divider = styled.div`
  border: 1px solid ${({theme}) => theme.color.gray.light};
  width: 3.9%;
  height: 100%;

  align-items: center;
  justify-content: center;
`;

// custom
export const SelectRange = styled(Select)`
  width: 100%;
`;

export const InputText = styled(Input).attrs({
  style: {width: '45%', textAlign: 'center'},
})`
  &:first-child {
    border-right: 0;
  }
  &:last-child {
    border-left: 0;
  }
`;

export const InputDivider = styled(Input).attrs({
  placeholder: '~',
  disabled: true,
  style: {
    width: '9.96%',
    borderLeft: 0,
    borderRight: 0,
    pointerEvents: 'none',
    background: 'white',
  },
})``;

export const DeleteIcon = styled(DeleteOutlined)`
  &:hover {
    cursor: pointer;
    color: ${({theme}) => theme.color.red};
  }
`;
