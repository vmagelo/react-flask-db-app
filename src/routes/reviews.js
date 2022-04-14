import React, { useState, useEffect} from 'react';

export default function Reviews() {

  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    fetch('api/reviews').then(res => res.json()).then(data => {
      setReviews(data.reviews);
    })
  }, [reviews]);

  return (
      <main className="ps-4" style={{ padding: "1rem 0" }}>
        <h2>Reviews</h2>
        <div>Review list from Flask backend:
          <ul>
            {
               reviews.map((review) =>
                    <li key={review.id}>Rating = {review.rating}, Restaurant = {review.restaurant}, Text = {review.review_text} </li>
               )            
            }
          </ul>
        </div>
      </main>
    );
  }
  