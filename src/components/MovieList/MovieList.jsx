import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import css from './MovieList.module.css';
import { useLocation } from 'react-router-dom';

const MovieList = ({ movieList }) => {
  const location = useLocation();
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
