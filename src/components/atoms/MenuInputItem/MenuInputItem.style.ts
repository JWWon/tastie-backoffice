import styled from 'styled-components';
import {DeleteOutlined} from '@ant-design/icons';

export const DeleteIcon = styled(DeleteOutlined)`
  &:hover {
    cursor: pointer;
    color: ${({theme}) => theme.color.red};
  }
`;
