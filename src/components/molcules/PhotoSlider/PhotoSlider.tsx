import React, {useState, useEffect} from 'react';
import {Upload, Modal} from 'antd';
import {UploadFile, UploadChangeParam} from 'antd/lib/upload/interface';
import {PlusOutlined} from '@ant-design/icons';

import {Props} from './PhotoSlider.type';
import * as s from './PhotoSlider.style';

function getBase64(file: File | Blob | undefined): Promise<string> | undefined {
  if (!file) return;
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      if (typeof reader.result === 'string') resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
}

const imageType: string = 'image/png+jpeg';

const mapUrlsToFileList = (urls: string[]): UploadFile[] =>
  urls.map((url, idx) => {
    const number = idx + 1;
    return {
      url,
      uid: `-${number.toString()}`,
      name: `photo_${number}`,
      type: imageType,
      status: 'done',
      size: 0,
    };
  });

const PhotoSlider: React.FC<Props> = ({photoUrls, id}) => {
  const [previewImage, setPreviewImage] = useState<string>();
  const [previewVisible, setPreviewVisible] = useState<boolean>(false);

  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [removedFileList, setRemovedFileList] = useState<UploadFile[]>([]);

  function handleChange({fileList: list}: UploadChangeParam<UploadFile>) {
    setFileList(list);
  }

  function handleRemove(file: UploadFile) {
    setRemovedFileList([...removedFileList, file]);
  }

  async function handlePreview(file: UploadFile) {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
  }

  useEffect(() => {
    setFileList(mapUrlsToFileList(photoUrls));
  }, [photoUrls]);

  return (
    <s.Wrapper>
      <Upload
        listType="picture-card"
        fileList={fileList}
        beforeUpload={() => false}
        onPreview={handlePreview}
        onChange={handleChange}
        onRemove={handleRemove}>
        <div>
          <PlusOutlined />
          <s.UploadText>Upload</s.UploadText>
        </div>
      </Upload>
      <Modal
        visible={previewVisible}
        footer={null}
        onCancel={() => setPreviewVisible(false)}>
        <img alt="example" style={{width: '100%'}} src={previewImage} />
      </Modal>
    </s.Wrapper>
  );
};

export default PhotoSlider;
