import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';
import UserIcon from './userIcons';

const Navigation = () => (
  <nav className="navigation">
    <ul className="nav-list">
      <span className="Bookstore-CMS Text-Style-3">
        Bookstore CMS
      </span>
      <li>
        <Link
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/"
        >
          BOOKS
        </Link>
      </li>
      <li>
        <Link
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/categories"
        >
          CATEGORIES
        </Link>
      </li>
    </ul>
    <button className="icon-button" type="button">
      <UserIcon />
    </button>
  </nav>
);

export default Navigation;
