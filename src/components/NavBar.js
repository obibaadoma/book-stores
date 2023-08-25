import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => (
  <header>
    <nav>
      <div className="cms-links">
        <div>
          <h1 className="logo">BookStore CMS</h1>
        </div>
        <ul className="ul-books">
          <li><Link to="/">BOOKS</Link></li>
          <li><Link to="/category">CATEGORIES</Link></li>
        </ul>
      </div>

    </nav>
  </header>
);

export default Navigation;
