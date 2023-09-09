import React, { useState } from 'react';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { optionsForNotify } from 'components/Helpers/OptionsForNotify';

export const Searchbar = props => {
  const [value, setValue] = useState('');

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setValue(value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (value.trim() === '') {
      return toast.info('☝ Enter key words for search', optionsForNotify);
    }
    props.onSubmit(value);
    setValue('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormBtn>
          <BsSearch size="24" />
        </SearchFormBtn>
        <SearchFormInput
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Enter key words for search"
          value={value}
          onChange={handleChange}
        />
      </SearchForm>
    </Header>
  );
};
