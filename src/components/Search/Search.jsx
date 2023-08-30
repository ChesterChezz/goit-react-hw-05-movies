import PropTypes from 'prop-types';
import css from './Search.module.css';
import Notiflix from 'notiflix';
import { useState } from 'react';

const Search = ({ handleSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const handleSearchInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const onSubmit = evt => {
    evt.preventDefault();

    if (!inputValue) {
      Notiflix.Notify.info(
        'The search bar cannot be empty. Please type any criteria in the search bar.'
      );
      return;
    }
    handleSubmit(inputValue.trim());
    setInputValue('');
  };
  return (
    <form onSubmit={onSubmit} className={css.searchForm}>
      <label>
        <input
          className={css.input}
          value={inputValue}
          name="search"
          type="text"
          autoComplete="off"
          onChange={handleSearchInputChange}
        />
      </label>
      <button className={css.searchBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;

Search.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};
