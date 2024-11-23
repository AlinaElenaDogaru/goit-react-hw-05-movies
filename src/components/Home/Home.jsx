// src/components/Home/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=493c6d740f024fcc02750f44c1518471')
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    setIsSearching(true);
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=493c6d740f024fcc02750f44c1518471&query=${query}`)
      .then(response => response.json())
      .then(data => setSearchResults(data.results));
  };

  const handleBackToTrending = () => {
    setIsSearching(false);
    setQuery('');
    setSearchResults([]);
  };

  return (
    <div className={styles.container}>
      <h1>{isSearching ? 'Search Results' : 'Trending Movies'}</h1>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a movie..."
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
        {isSearching && (
          <button type="button" onClick={handleBackToTrending} className={styles.backButton}>
            Back to Trending
          </button>
        )}
      </form>
      <ul className={styles.movieList}>
        {(isSearching ? searchResults : movies).map(movie => (
          <li key={movie.id} className={styles.movieItem}>
            <Link to={`/movies/${movie.id}`}>
              <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} className={styles.movieImage} />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Home.propTypes = {
  movies: PropTypes.array,
};

export default Home;
