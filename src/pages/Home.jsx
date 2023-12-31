import { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getDataByAxios } from 'sevices/library';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import Pagination from 'components/MList Buttons/Pagination';

const Home = () => {
  const [searchParams] = useSearchParams();
  const [movieList, setMovieList] = useState([]);
  const totalPages = useRef(0);
  const [isLoading, setIsLoading] = useState(false);

  let paginationPage = Number(searchParams.get('page'));
  if (paginationPage === 0) {
    paginationPage = 1;
  }

  useEffect(() => {
    setIsLoading(true);
    getDataByAxios(`/trending/movie/week`, paginationPage)
      .then(resp => {
        totalPages.current = resp.data.total_pages;
        setMovieList(resp.data.results);
      })
      .finally(setIsLoading(false));
  }, [paginationPage]);

  const title = `Trending today (Page ${paginationPage} of ${totalPages.current})`;

  return (
    <div>
      {isLoading && <Loader />}
      <h3>{title}</h3>
      {movieList.length !== 0 && <MovieList movieList={movieList} />}
      <Pagination
        paginationPage={paginationPage}
        totalPages={totalPages.current}
        movieList={movieList}
      ></Pagination>
    </div>
  );
};

export default Home;
