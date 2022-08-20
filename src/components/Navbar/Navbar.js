import React from 'react';
import './Navbar.css';
const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className="container">
        <div className="logo">
          <i class="ri-shopping-bag-fill"></i>
          <h1><span className='primary-color'>E</span>-shop</h1>
        </div>
        <ul className='navbar'>
          <li><a href="/">Men</a></li>
          <li><a href="/">Woman</a></li>
          <li><a href="/">Kids</a></li>
        </ul>
        <div className='navbar-icons'>
          <i class="ri-search-line"></i>
          <i class="ri-shopping-cart-fill"></i>
          <i class="ri-user-line"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;