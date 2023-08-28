import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import { useSearchParams } from 'react-router-dom';

const MovieList = ({ location, movieList, paginationPage, totalPages }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <>
      <ul className={css.list}>
        {movieList.map(({ id, title }) => (
          <li key={id}>
            <Link
              className={css.li}
              to={`/movies/${id}`}
              state={{ from: location }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div className={css.buttonWrap}>
        {movieList.length !== 0 && paginationPage > 1 && (
          <>
            <Button
              btnName={'Start page'}
              onClick={() => {
                paginationPage = 1;
                setSearchParams({ page: paginationPage });
              }}
            />
            <Button
              btnName={'Previous page'}
              onClick={() => {
                paginationPage = paginationPage - 1;
                setSearchParams({ page: paginationPage });
              }}
            />
          </>
        )}
        {movieList.length !== 0 && paginationPage < totalPages && (
          <Button
            btnName={'Next page'}
            onClick={() => {
              paginationPage = paginationPage + 1;
              setSearchParams({ page: paginationPage });
            }}
          />
        )}
      </div>
    </>
  );
};

MovieList.propTypes = {
  location: PropTypes.object.isRequired,
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  paginationPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onLoadNextPage: PropTypes.func.isRequired,
  onLoadPreviousPage: PropTypes.func.isRequired,
  onToStartPage: PropTypes.func.isRequired,
};

export default MovieList;
