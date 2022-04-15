import React, { useState, useEffect} from 'react';

export default function Reviews() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('api/reviews').then(res => res.json()).then(data => {
      setReviews(data.reviews);
    })
  }, []);

  return (
      <main className="ps-4" style={{ padding: "1rem 0" }}>
        <h2>Reviews</h2>
        <div>
          <ul>
            {
              reviews.map((item,index) => 
              {
                return <li key={item.id}>Restaurant: {item.restaurant}, Review: {item.review_text}</li>
              })
            }
          </ul>
        </div>
      </main>
    );
  }
  