import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDataByAxios } from 'sevices/library';
import css from './Cast.module.css';
import Loader from 'components/Loader/Loader';
import defaultImg from '../../images/image.webp';

const Cast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const BASE_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/w200/';

  useEffect(() => {
    setIsLoading(true);
    getDataByAxios(`/movie/${movieId}/credits`, 0, '')
      .then(resp => {
        setMovieCast(resp.data.cast);
      })
      .finally(setIsLoading(false));
  }, [movieId]);

  return (
    <div>
      {isLoading && <Loader />}
      {movieCast.length === 0 ? (
        <h4 className={css.castTitle}>No cast available.</h4>
      ) : (
        <h4 className={css.castTitle}>Cast</h4>
      )}
      {movieCast.length > 0 && (
        <ul className={css.castThumb}>
          {movieCast.map(({ character, id, name, profile_path }) => (
            <li key={id} className={css.castActorCard}>
              {
                <img
                  src={
                    profile_path
                      ? BASE_IMAGE_ENDPOINT + profile_path
                      : defaultImg
                  }
                  alt="Cast actor "
                  width="180"
                  height="270"
                />
              }
              {name}
              <p>Caracter: {character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Cast;
