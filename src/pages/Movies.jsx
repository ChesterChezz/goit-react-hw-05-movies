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

  const paginationPage = searchParams.get('page') ?? 1;
  const searchText = searchParams.get('search');

  useEffect(() => {
    if (!searchText) return;

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

  const handleSubmit = searchValue => {
    setSearchParams({ search: searchValue, page: 1 });
  };

  const title = movieList.length
    ? `Search "${searchText}" (Page ${paginationPage} of ${totalPages.current})`
    : 'No matches';

  return (
    <div>
      {isLoading && <Loader />}
      <Search handleSubmit={handleSubmit} />
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
