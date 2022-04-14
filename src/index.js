import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route } from "react-router-dom";
import Restaurants from "./routes/restaurants";
import Reviews from "./routes/reviews";
import AddReview from "./routes/addreview";
import './index.css';
import App from './App';

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}>
        <Route path="restaurants" element={<Restaurants />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="addreview" element={<AddReview />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

