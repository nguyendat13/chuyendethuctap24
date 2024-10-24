import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';
import MainMenu from './MainMenu';
import CartIcon from '../../pages/frontend/cart/CartIcon';
import UserIcon from '../../pages/frontend/user/UserIcon';

const Header = () => {
  return (
    <header>
      <nav
        className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Furni navigation bar"
      >
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

          <ul className="navbar-nav align-items-center ms-auto">
            <UserIcon />
            <li className="nav-item ms-3">
              <CartIcon />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
