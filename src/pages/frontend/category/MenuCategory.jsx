import React from 'react'
import { Link } from 'react-router-dom'

const MenuCategory = () => {
  return (
    <div className=''>
       <ul className="list-group  list-group-horizontal border-bottom fs-6 fw-normal pt-3 pb-3 position-relative">
          
          <li
            className=" list-group-item me-1 rounded-pill"
            data-tab="tab-2"
          >
            <Link to="/home/shop" className="category text-decoration-none text-dark">
              All
            </Link>
          </li>
        <li
          className="list-group-item me-1 rounded-pill"
          data-tab="tab-2"
        >
          <Link to="/home/category/modern" className="text-decoration-none text-dark">
          Modern
          </Link>
        </li>
        <li
          className="list-group-item me-1 rounded-pill"
          data-tab="tab-3"s
        >
          <Link to="/home/category/classical" className="text-decoration-none text-dark">
            Classical
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuCategory
