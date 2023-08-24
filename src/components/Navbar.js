import { Link } from 'react-router-dom';
import '../stylesheets/Navbar.css';

const img = require('../images/user.png');

const Navbar = () => (
  <nav className="navbar">
    <h1>Bookstore CMS</h1>
    <ul>
      <Link to="/">BOOKS</Link>
      <Link to="/categories">CATEGORIES</Link>
    </ul>
    <img src={img} alt="user" />
  </nav>
);

export default Navbar;
