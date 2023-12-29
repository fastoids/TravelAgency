import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  // Define initial reviews data (you can replace this with actual data from your database)
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: 'John Doe',
      rating: 5,
      comment: 'Great experience! Highly recommended.',
    },
    {
      id: 2,
      author: 'Jane Smith',
      rating: 4,
      comment: 'Good service and friendly staff.',
    },
    {
      id: 3,
      author: 'Bob Johnson',
      rating: 5,
      comment: 'Fantastic trip. Will definitely book again!',
    },
  ]);

  // State for capturing user input
  const [newReview, setNewReview] = useState({
    author: '',
    rating: 5,
    comment: '',
  });

  // Function to handle form submission and add a new review
  const addReview = () => {
    if (newReview.author.trim() !== '' && newReview.comment.trim() !== '') {
      const updatedReviews = [...reviews];
      updatedReviews.push({
        id: reviews.length + 1,
        ...newReview,
      });
      setReviews(updatedReviews);
      // Reset the form fields
      setNewReview({ author: '', rating: 5, comment: '' });
    }
  };

  return (
    <div className="reviews-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-list">
        {reviews.map((review) => (
          <div className="review" key={review.id}>
            <div className="review-author">{review.author}</div>
            <div className="review-rating">
              {/* Display stars based on rating */}
              {'★'.repeat(review.rating)} {/* Add as many stars as the rating */}
            </div>
            <div className="review-comment">{review.comment}</div>
          </div>
        ))}
      </div>
      <div className="add-review">
        <h3>Add Your Review</h3>
        <input
          type="text"
          placeholder="Your Name"
          value={newReview.author}
          onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
        />
        <select
          value={newReview.rating}
          onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
        >
          <option value={5}>5 Stars</option>
          <option value={4}>4 Stars</option>
          <option value={3}>3 Stars</option>
          <option value={2}>2 Stars</option>
          <option value={1}>1 Star</option>
        </select>
        <textarea
          placeholder="Your Review"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        />
        <button onClick={addReview}>Submit Review</button>
      </div>
    </div>
  );
};

export default Reviews;
