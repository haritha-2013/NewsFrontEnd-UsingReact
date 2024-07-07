import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>News App Home</h1>
      <ul>
        <li>
          <Link to="articles/1">Article 1</Link>
        </li>
        <li>
          <Link to="articles/2">Article 2</Link>
        </li>
        <li>
          <Link to="authors/1">Author 1</Link>
        </li>
        <li>
          <Link to="authors/2">Author 2</Link>
        </li>
        <li>
          <Link to="news">News</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
