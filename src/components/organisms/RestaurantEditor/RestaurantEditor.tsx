/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useForm, Controller} from 'react-hook-form';
import {Row, Col} from 'antd';

import {Menu, OpeningHour} from '@model';
import {RootState} from '@store/reducers';
import {clearRestaurant} from '@store/actions/restaurants';
import Fullscreen from '@components/templates/Fullscreen';
import PhotoSlider from '@components/molcules/PhotoSlider';
import Dismiss from '@components/atoms/Dismiss';
import TextInput from '@components/molcules/TextInput';
import SelectInput from '@components/molcules/SelectInput';
import KeywordsInput from '@components/molcules/KeywordsInput';
import TextAreaInput from '@components/molcules/TextAreaInput';
import ListInput from '@components/molcules/ListInput';
import MenuInputItem from '@components/atoms/MenuInputItem';
import OpeningHourInputItem from '@components/atoms/OpeningHourInputItem';
import {Props as RawTextProps} from '@components/molcules/TextInput/TextInput.type';
import * as s from './RestaurantEditor.style';

interface TextProps extends RawTextProps {
  fullsize?: boolean;
}

const NAME = {
  NAME: 'name' as const,
  ADDRESS: 'address' as const,
  TELEPHONE: 'telephone' as const,
  CATEGORIES: 'categories' as const,
  KEYWORDS: 'keywords' as const,
  MENUS: 'menus' as const,
  OPENING_HOURS: 'openingHours' as const,
  DESCRIPTION: 'description' as const,
};

const RestaurantEditor: React.FC = () => {
  const item = useSelector((state: RootState) => state.restaurants.currentItem);
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    setValue,
    register,
    reset,
    unregister,
  } = useForm();

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

  useEffect(() => {
    const defaultValue: {[key: string]: any} = {};
    for (const key of Object.values(NAME))
      defaultValue[key] = item ? item[key] : undefined;
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

      <s.Body>
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
                register={register}
                unregister={unregister}
                label="카테고리"
                name={NAME.CATEGORIES}
                defaultValue={item?.categories}
                onChange={(value) => setValue(NAME.CATEGORIES, value)}
              />
            </Col>
            <Col span={24}>
              <KeywordsInput
                register={register}
                unregister={unregister}
                name={NAME.KEYWORDS}
                defaultValues={item.keywords}
                setValue={setValue}
              />
            </Col>
            <Controller
              key={NAME.DESCRIPTION}
              as={
                <Col span={24}>
                  <TextAreaInput
                    label="맛집 설명"
                    name={NAME.DESCRIPTION}
                    defaultValue={item?.description}
                  />
                </Col>
              }
              onChange={([selected]) => selected}
              control={control}
              name={NAME.DESCRIPTION}
              defaultValue={{value: item?.description}}
            />
            <Col span={12}>
              <ListInput<Menu>
                register={register}
                unregister={unregister}
                name={NAME.MENUS}
                label="메뉴"
                setValue={setValue}
                renderItem={MenuInputItem}
                emptyItem={{
                  popular: false,
                  name: '',
                  price: 0,
                  currency: 'KRW',
                }}
                defaultValues={item?.menus}
              />
            </Col>
            <Col span={12}>
              <ListInput<OpeningHour>
                register={register}
                unregister={unregister}
                name={NAME.OPENING_HOURS}
                label="영업시간"
                setValue={setValue}
                renderItem={OpeningHourInputItem}
                emptyItem={{range: 'WEEKDAY', type: 'OPEN'}}
                defaultValues={item?.openingHours}
              />
            </Col>
          </Row>
        </s.Form>
      </s.Body>
    </Fullscreen>
  ) : null;
};

export default React.memo(RestaurantEditor);
