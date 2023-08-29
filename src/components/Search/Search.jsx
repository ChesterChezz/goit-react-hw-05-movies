import PropTypes from 'prop-types';
import css from './Search.module.css';

const Search = ({ handleSubmit, inputValue, handleSearchInputChange }) => {
  return (
    <form onSubmit={handleSubmit} className={css.searchForm}>
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
  searchText: PropTypes.string.isRequired,
};
