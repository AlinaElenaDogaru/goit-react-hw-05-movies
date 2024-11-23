// src/components/MovieDetails/MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=493c6d740f024fcc02750f44c1518471`)
      .then(response => response.json())
      .then(data => setMovie(data));
  }, [movieId]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{movie.title}</h1>
      <img 
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} 
        alt={movie.title} 
        className={styles.movieImage} 
      />
      <p className={styles.overview}>{movie.overview}</p>
      <div className={styles.links}>
        <Link to="cast" className={styles.link}>Cast</Link>
        <Link to="reviews" className={styles.link}>Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};

MovieDetails.propTypes = {
  movie: PropTypes.object,
};

export default MovieDetails;


