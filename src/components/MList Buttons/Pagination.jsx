import Button from '../Button/Button';
import css from '../MovieList/MovieList.module.css';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
const Pagination = ({ paginationPage, totalPages, movieList }) => {
  const [, setSearchParams] = useSearchParams();
  return (
    <>
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
Pagination.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
  paginationPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};
export default Pagination;
