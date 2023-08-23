import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <header className="header">
    <h1>Bookstore App</h1>
    <ul className="nav-bar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'kk' : undefined)}>BOOKS</NavLink>
      <NavLink to="/Categories" className={({ isActive }) => (isActive ? 'kk' : undefined)}>CATEGORIES</NavLink>
    </ul>

  </header>
);

export default NavBar;
