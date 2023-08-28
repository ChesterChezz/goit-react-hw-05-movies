import { useEffect, useState, useRef } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { getDataByAxios } from 'sevices/library';
import Search from 'components/Search/Search';
import MovieList from 'components/MovieList/MovieList';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';

const Movies = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [movieList, setMovieList] = useState([]);
  const totalPages = useRef(0);
  const paginationPage = Number(searchParams.get('page')) ?? 0;
  const initialSearchText = searchParams.get('search') || '';

  useEffect(() => {
    setIsLoading(true);
    getDataByAxios(`/search/movie`, paginationPage, initialSearchText).then(
      resp => {
        try {
          if (resp.status !== 200) {
            throw new Error(resp.statusText);
          } else {
            totalPages.current = resp.data.total_pages;
            setMovieList(resp.data.results);
          }
        } catch (error) {
          console.error(error);
          Notiflix.Notify.failure('Failed to fetch movie data.');
        } finally {
          setIsLoading(false);
        }
      }
    );
  }, [paginationPage, initialSearchText]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.target[0].value.trim();
    if (!searchValue) {
      Notiflix.Notify.info(
        'The search bar cannot be empty. Please type any criteria in the search bar.'
      );
    } else {
      setSearchParams({ search: searchValue, page: 1 });
    }
  };

  const title = movieList.length
    ? `Search "${initialSearchText}" (Page ${paginationPage} of ${totalPages.current})`
    : 'No matches';

  return (
    <div>
      {isLoading && <Loader />}
      <Search handleSubmit={handleSubmit} searchText={initialSearchText} />
      {initialSearchText && <h3>{title}</h3>}
      {movieList.length !== 0 && (
        <MovieList
          location={location}
          movieList={movieList}
          paginationPage={paginationPage}
          totalPages={totalPages.current}
        />
      )}
    </div>
  );
};

export default Movies;
