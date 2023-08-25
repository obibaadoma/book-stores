import { Link } from 'react-router-dom';
import React from 'react';
import { IoMdPerson } from 'react-icons/io';

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
      <button className="icon" type="button">
        <IoMdPerson />
      </button>

    </nav>
  </header>
);

export default Navigation;
