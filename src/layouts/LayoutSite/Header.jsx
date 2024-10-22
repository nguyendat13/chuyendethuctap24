import React from 'react';
import User from '../../assets/images/user.svg';
import { Link } from 'react-router-dom';
import Search from './Search';
import MainMenu from './MainMenu';
import CartIcon from '../../pages/frontend/cart/CartIcon';

const Header = () => {
  return (
    <header>
      <nav className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark" aria-label="Furni navigation bar">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            Furni<span>.</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsFurni"
            aria-controls="navbarsFurni"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <Search />

          <div className="collapse navbar-collapse" id="navbarsFurni">
            <MainMenu />
          </div>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
            <li>
              <Link className="nav-link" to="/home/profile">
                <img className="user" src={User} alt="User Profile" />
              </Link>
            </li>
            <CartIcon />
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
