import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';

import {RootState} from '@store/reducers';
import {clearRestaurant} from '@store/actions/restaurants';
import Fullscreen from '@components/templates/Fullscreen';
import Dismiss from '@components/atoms/Dismiss';
import PhotoSlider from '@components/molcules/PhotoSlider';
import TextInput from '@components/atoms/TextInput';
import {Props as RawTextProps} from '@components/atoms/TextInput/TextInput.type';
import * as s from './RestaurantEditor.style';
import {Row, Col} from 'antd';

interface TextProps extends RawTextProps {
  fullsize?: boolean;
}

const RestaurantEditor: React.FC = () => {
  const dispatch = useDispatch();
  const {handleSubmit, control} = useForm();
  const item = useSelector((state: RootState) => state.restaurants.currentItem);

  const texts: TextProps[] = [
    {
      label: '이름',
      name: 'name',
      defaultValue: item?.name,
    },
    {
      label: '주소',
      name: 'address',
      defaultValue: item?.address,
    },
    {
      label: '연락처',
      name: 'telephone',
      defaultValue: item?.telephone,
    },
  ];

  function onSubmit(values: any) {
    console.log(values);
  }

  return item ? (
    <Fullscreen>
      <s.Header>
        <Dismiss onClick={() => dispatch(clearRestaurant())} />
        <s.Name>{item.name}</s.Name>
        <s.Status status={item.status} showLabel />
        <s.AlignRight>
          {item.status === 'WAITING_FOR_REVIEW' && (
            <s.Button type="primary">등록 승인</s.Button>
          )}
          {item.status === 'ACTIVE' && (
            <s.Button type="primary" danger>
              등록 취소
            </s.Button>
          )}
          {item.status === 'REMOVED' && (
            <s.Button type="primary">재등록</s.Button>
          )}
          <s.Button onClick={handleSubmit(onSubmit)}>업데이트</s.Button>
        </s.AlignRight>
      </s.Header>

      <PhotoSlider id={item.id} photoUrls={item.photoUrls} />
      <s.Form onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={[24, 16]}>
          {texts.map((text) => (
            <Controller
              as={
                <Col span={text.fullsize ? 24 : 12}>
                  <TextInput {...text} />
                </Col>
              }
              onChange={([selected]) => selected}
              control={control}
              name={text.name}
              defaultValue={{value: text.defaultValue}}
            />
          ))}
        </Row>
      </s.Form>
    </Fullscreen>
  ) : null;
};

export default React.memo(RestaurantEditor);
