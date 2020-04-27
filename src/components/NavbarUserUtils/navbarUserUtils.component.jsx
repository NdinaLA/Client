import React from 'react';

import './navbarUserUtils.styles.css';

//icons
import searchIcon from '../../assets/search-icon.svg';
import cartIcon from '../../assets/cart.svg';

class NavbarUserUtils extends React.Component {
  render() {
    return (
      <div className="navbar-user-utils">
        <img
          className="navbar-user-utils-icon"
          src={searchIcon}
          alt="search icon"
        />
        <p className="navbar-user-utils-icon">Log In</p>
        <img
          className="navbar-user-utils-icon"
          src={cartIcon}
          alt="cart icon "
        />
      </div>
    );
  }
}

export default NavbarUserUtils;
