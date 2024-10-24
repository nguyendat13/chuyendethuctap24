import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import User from '../../../assets/images/user.svg';

const UserIcon = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };

  // Thêm sự kiện click để đóng menu khi nhấp ra ngoài
  useEffect(() => {
    document.addEventListener('click', closeDropdown);
    return () => {
      document.removeEventListener('click', closeDropdown);
    };
  }, []);

  return (
    <li className="nav-item position-relative" ref={dropdownRef}>
      {/* Avatar/User Icon */}
      <div className="user-wrapper" onClick={toggleDropdown}>
        <img className="user" src={User} alt="User Profile" />
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className='icon-user'>
        <div className="dropdown-menu">
          <Link to="/home/profile" className="dropdown-item">
            My Account
          </Link>
          <Link to="/home/orders" className="dropdown-item">
            Orders
          </Link>
          <Link to="/" className="dropdown-item">
            Logout
          </Link>
        </div>
        </div>
      )}
    </li>
  );
};

export default UserIcon;
