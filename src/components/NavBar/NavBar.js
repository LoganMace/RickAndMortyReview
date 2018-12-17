import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <Link to='/'><li className='nav-link'>Characters</li></Link>
      <Link to='/favorites'><li className='nav-link'>Favorites</li></Link>
    </nav>
  )
}

export default NavBar;