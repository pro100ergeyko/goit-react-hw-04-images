import React, { Component } from 'react';
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-toastify';
import { optionsForNotify } from 'components/Helpers/OptionsForNotify';

export class Searchbar extends Component {
  state = {
    value: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ value: value.toLowerCase() });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (this.state.value.trim() === '') {
      return toast.info('☝ Enter key words for search', optionsForNotify);
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;

    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn>
            <BsSearch size="24" />
          </SearchFormBtn>
          <SearchFormInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Enter key words for search"
            value={value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </Header>
    );
  }
}
