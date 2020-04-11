import React, {useEffect} from 'react';

import {Props} from './ListInput.type';
import * as s from './ListInput.style';

function ListInput({register, unregister, name, label}: Props) {
  useEffect(() => {
    register({name});
    return () => unregister(name);
  }, [name, register, unregister]);

  return (
    <div>
      <s.Header>
        <s.Label>{label}</s.Label>
        <s.Add>추가</s.Add>
      </s.Header>
    </div>
  );
}

export default React.memo(ListInput);
