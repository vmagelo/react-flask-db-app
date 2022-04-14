import React, { useState, useEffect} from 'react';

export default function Restaurants() {

  const [currentTime, setCurrentTime] = useState(0);
  const [restaurants, setRestaurants] = useState(0);

  useEffect(() => {
    fetch('api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    })
  }, []);

  useEffect(() => {
    fetch('api/restaurants').then(res => res.json()).then(data => {
      setRestaurants(data.restaurants);
    })
  }, [restaurants]);

    return (
      <main className="ps-4" style={{ padding: "1rem 0" }}>
        <h2>Restaurants</h2>
        <div>Time from Flask backend is {currentTime}.</div>
        <div>Restaurant list from Flask backend:
          <ul>
            {
               restaurants.map((rest) =>
                    <li key={rest.id}>{rest.name}, {rest.description} </li>
               )            
            }
          </ul>
        </div>
      </main>
    );
  }
  