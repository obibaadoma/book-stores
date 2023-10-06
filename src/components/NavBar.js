import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => (
  <nav>
    <h1>BookStore</h1>
    <ul>
      <li><Link to="/">BOOKS</Link></li>
      <li><Link to="/category">CATEGORY</Link></li>
    </ul>
    <p>profile icon</p>
  </nav>
);

export default Navigation;
