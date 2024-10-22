import React from 'react'
import { Link } from 'react-router-dom'

const MenuBrand = () => {
  return (
    <div className='menu-brand'>
      <ul className="list-group  list-group-horizontal border-bottom fs-5 fw-normal pt-3 pb-2  position-relative">
          
          <li
            className="list-group-item me-1 rounded-pill"
            data-tab="tab-2"
          >
            <Link to="/home/shop" className="brand text-decoration-none text-dark">
              All
            </Link>
          </li>
        <li
          className=" list-group-item me-1 rounded-pill"
          data-tab="tab-2"
        >
          <Link to="/home/brand/korean" className="text-decoration-none text-dark">
          Korean
          </Link>
        </li>
        <li
          className="d list-group-item me-1 rounded-pill"
          data-tab="tab-3"s
        >
          <Link to="/home/brand/thailand" className="text-decoration-none text-dark">
            ThaiLand
          </Link>
        </li>
        <li
          className="list-group-item me-1 rounded-pill"
          data-tab="tab-3"s
        >
          <Link to="/home/brand/france" className="text-decoration-none text-dark">
            France
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuBrand
