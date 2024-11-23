// src/components/Reviews/Reviews.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=493c6d740f024fcc02750f44c1518471`)
      .then(response => response.json())
      .then(data => setReviews(data.results))
      .catch(error => console.error('Error fetching reviews:', error));
  }, [movieId]);

  return (
    <div className={styles.container}>
      <h2>Reviews</h2>
      {reviews.length > 0 ? (
        <ul className={styles.reviewList}>
          {reviews.map(review => (
            <li key={review.id} className={styles.reviewItem}>
              <p><strong>{review.author}</strong>: {review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.array,
};

export default Reviews;

