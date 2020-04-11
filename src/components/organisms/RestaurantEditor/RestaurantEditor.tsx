/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
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
import SelectInput from '@components/atoms/SelectInput';

interface TextProps extends RawTextProps {
  fullsize?: boolean;
}

const NAME = {
  NAME: 'name' as const,
  ADDRESS: 'address' as const,
  TELEPHONE: 'telephone' as const,
  CATEGORIES: 'categories' as const,
};

const RestaurantEditor: React.FC = () => {
  const dispatch = useDispatch();
  const item = useSelector((state: RootState) => state.restaurants.currentItem);
  const {control, handleSubmit, setValue, register, reset} = useForm();

  const texts: TextProps[] = [
    {
      label: '이름',
      name: NAME.NAME,
      defaultValue: item?.name,
    },
    {
      label: '주소',
      name: NAME.ADDRESS,
      defaultValue: item?.address,
    },
    {
      label: '연락처',
      name: NAME.TELEPHONE,
      defaultValue: item?.telephone,
    },
  ];

  function onSubmit(values: any) {
    console.log(values);
  }

  function renderStatus() {
    switch (item?.status) {
      case 'ACTIVE':
        return (
          <s.Button type="primary" danger>
            등록 취소
          </s.Button>
        );
      case 'WAITING_FOR_REVIEW':
        return <s.Button type="primary">등록 승인</s.Button>;
      case 'REMOVED':
        return <s.Button type="primary">재등록</s.Button>;
      default:
        return null;
    }
  }

  useEffect(() => register({name: NAME.CATEGORIES}), [register]);
  useEffect(() => {
    const defaultValue: {[key: string]: any} = {};
    for (const key of Object.values(NAME)) {
      defaultValue[key] = item ? item[key] : undefined;
    }

    reset(defaultValue);
  }, [item?.id]);

  return item ? (
    <Fullscreen>
      <s.Header>
        <Dismiss onClick={() => dispatch(clearRestaurant())} />
        <s.Name>{item.name}</s.Name>
        <s.Status status={item.status} showLabel />
        <s.AlignRight>
          {renderStatus()}
          <s.Button onClick={handleSubmit(onSubmit)}>업데이트</s.Button>
        </s.AlignRight>
      </s.Header>

      <PhotoSlider id={item.id} photoUrls={item.photoUrls} />
      <s.Form onSubmit={handleSubmit(onSubmit)}>
        <Row gutter={[24, 16]}>
          {texts.map((text) => (
            <Controller
              key={text.name}
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
          <Col span={24}>
            <SelectInput
              label="카테고리"
              name={NAME.CATEGORIES}
              defaultValue={item?.categories}
              onChange={(value) => setValue(NAME.CATEGORIES, value)}
            />
          </Col>
        </Row>
      </s.Form>
    </Fullscreen>
  ) : null;
};

export default React.memo(RestaurantEditor);
