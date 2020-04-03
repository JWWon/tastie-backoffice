import React from 'react';
import {useForm, Controller} from 'react-hook-form';

import {Props} from './SearchInput.type';
import * as s from './SearchInput.style';

const SearchInput: React.FC<Props> = ({placeholder}) => {
  const {handleSubmit, control} = useForm();

  function onSubmit(data: any) {
    console.log(data);
  }

  return (
    <s.Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        as={
          <s.TextInput
            name="search"
            prefix={<s.SearchIcon />}
            placeholder={placeholder}
          />
        }
        control={control}
        name="search"
      />
    </s.Form>
  );
};

SearchInput.defaultProps = {
  placeholder: '검색하기',
};

export default SearchInput;
