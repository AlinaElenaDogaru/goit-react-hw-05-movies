// src/components/Cast/Cast.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=493c6d740f024fcc02750f44c1518471`)
      .then(response => response.json())
      .then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Cast</h2>
      <ul className={styles.castList}>
        {cast.map(actor => (
          <li key={actor.cast_id} className={styles.castItem}>
            <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} className={styles.castImage} />
            <p>{actor.name} as {actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  cast: PropTypes.array,
};

export default Cast;

