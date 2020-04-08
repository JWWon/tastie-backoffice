import styled from 'styled-components';

// div
export const Wrapper = styled.div`
  width: 100%;
  padding: ${({theme}) => theme.space.rem.narrow}rem;
  background: ${({theme}) => theme.color.white.dark};

  .ant-upload-picture-card-wrapper {
    overflow-x: scroll;
    white-space: nowrap;

    div.ant-upload-list {
      display: block;
    }
  }
`;

const addSize = 36;
export const AddButton = styled.div`
  width: ${addSize}px;
  height: ${addSize}px;
`;

// text
export const UploadText = styled.h4`
  color: ${({theme}) => theme.color.gray.dark};
`;
