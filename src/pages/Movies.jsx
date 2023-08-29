import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getDataByAxios } from 'sevices/library';
import Search from 'components/Search/Search';
import MovieList from 'components/MovieList/MovieList';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/MList Buttons/Pagination';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const totalPages = useRef(0);
  const paginationPage = Number(searchParams.get('page')) ?? 0;
  const [searchText, setSearchText] = useState(
    searchParams.get('search') ?? ''
  );
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setIsLoading(true);
    getDataByAxios(`/search/movie`, paginationPage, searchText).then(resp => {
      try {
        totalPages.current = resp.data.total_pages;
        setMovieList(resp.data.results);
      } catch (error) {
        console.error(error);
        Notiflix.Notify.failure('Failed to fetch movie data.');
      } finally {
        setIsLoading(false);
      }
    });
  }, [paginationPage, searchText]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchValue = inputValue.trim();
    if (!searchValue) {
      Notiflix.Notify.info(
        'The search bar cannot be empty. Please type any criteria in the search bar.'
      );
    } else {
      setSearchParams({ search: searchValue, page: 1 });
      setSearchText(searchValue.trim());
    }
  };

  const handleSearchInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  const title = movieList.length
    ? `Search "${searchText}" (Page ${paginationPage} of ${totalPages.current})`
    : 'No matches';

  return (
    <div>
      {isLoading && <Loader />}
      <Search
        handleSubmit={handleSubmit}
        searchText={searchParams.get('search') ?? ''}
        handleSearchInputChange={handleSearchInputChange}
      />
      {searchText && <h3>{title}</h3>}
      {movieList.length !== 0 && <MovieList movieList={movieList} />}
      <Pagination
        paginationPage={paginationPage}
        totalPages={totalPages.current}
        movieList={movieList}
      />
    </div>
  );
};

export default Movies;
