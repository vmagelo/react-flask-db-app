import React, { useState, useEffect} from 'react';

export default function Restaurants() {

  const [currentTime, setCurrentTime] = useState(0);
  const [restaurants, setRestaurants] = useState([]);
  var listRestaurants = " not fetched!";

  useEffect(() => {
    fetch('api/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    }) 
  }, []);

  useEffect(() => {
    fetch('api/restaurants').then(res => res.json()).then(data => {
      setRestaurants(data.restaurants);
    })
  }, []);

    return (
      <main className="ps-4" style={{ padding: "1rem 0" }}>
        <h2>Restaurants</h2>
        <div>
          <ul>
            {
              restaurants.map((item,index) => 
              {
                return <li key={item.id}>{item.name}, {item.description}</li>
              })
            }
          </ul>
        </div>
      </main>
    );
  }
  