import React, {useEffect} from 'react';
import {Row, Col, Select} from 'antd';

import FormItem from '@components/atoms/FormItem';
import {Props} from './KeywordsInput.type';
import * as s from './KeywordsInput.style';

const KeywordsInput: React.FC<Props> = ({
  register,
  unregister,
  name,
  setValue,
  defaultValues,
}) => {
  useEffect(() => {
    register({name: `${name}.popular_topic.tags`});
    register({name: `${name}.facility.tags`});
    register({name: `${name}.purpose.tags`});
    register({name: `${name}.atmosphere.tags`});
    return () => unregister(name);
  }, [name, register, unregister]);

  return (
    <FormItem label="키워드">
      <Row gutter={[0, 8]}>
        {(Object.keys(defaultValues) as Array<keyof typeof defaultValues>).map(
          (key) => {
            const {label, tags} = defaultValues[key];
            return (
              <>
                <Col span={2}>
                  <s.ValueLabel>{label}</s.ValueLabel>
                </Col>
                <Col span={22}>
                  <Select
                    style={{width: '100%'}}
                    defaultValue={tags}
                    key={tags.join(',')}
                    onChange={(tags) => setValue(`${name}.${key}.tags`, tags)}
                    mode="tags"
                  />
                </Col>
              </>
            );
          },
        )}
      </Row>
    </FormItem>
  );
};

KeywordsInput.defaultProps = {
  defaultValues: {
    popular_topic: {
      label: '인기 토픽',
      tags: [],
    },
    facility: {
      label: '시설',
      tags: [],
    },
    purpose: {
      label: '방문 목적',
      tags: [],
    },
    atmosphere: {
      label: '분위기',
      tags: [],
    },
  },
};

export default React.memo(KeywordsInput);
