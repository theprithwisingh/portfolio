import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseUser, faUser, faSquareCheck, faBook, faMugHot } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            <span className="icon">
              <FontAwesomeIcon icon={faHouseUser} />
            </span>Home
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span> About
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            <span className="icon">
              <FontAwesomeIcon icon={faSquareCheck} />
            </span> Work
          </a>
        </li>
        <li className="navbar-item active">
          <a href="#" className="navbar-link">
            <span className="icon">
              <FontAwesomeIcon icon={faBook} />
            </span> Blog
          </a>
        </li>
        <li className="navbar-item">
          <a href="#" className="navbar-link">
            <span className="icon">
              <FontAwesomeIcon icon={faMugHot} />
            </span> meetme
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
