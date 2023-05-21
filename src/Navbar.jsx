import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/unesi" className="nav-link">Unesi</Link>
        </li>
        <li className="nav-item">
          <Link to="/" className="nav-link">Prikazi</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
